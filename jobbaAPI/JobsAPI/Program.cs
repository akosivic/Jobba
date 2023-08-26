using Jobba.Job.Infrastructure.SeedWork;
using JobbaAPI.Job.Domain.Entities;
using JobbaAPI.Job.Infrastructure.Data;
using JobbaAPI.Job.Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin();
    });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionstring = builder.Configuration["connectionStrings:DataAccessMySqlProvider"];

builder.Services.AddScoped<JobDBContext>();
builder.Services.AddScoped<IRepository<JobInfo>, JobRepository>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    // Global settings: use the defaults, but serialize enums as strings
    // (because it really should be the default)
    options.JsonSerializerOptions.Converters.Add(
    new JsonStringEnumConverter(JsonNamingPolicy.CamelCase, false));
});
builder.Services.AddDbContext<JobDBContext>(o =>
{
    o.UseMySql(connectionstring, ServerVersion.AutoDetect(connectionstring));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
