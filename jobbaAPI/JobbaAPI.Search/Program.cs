using Jobba.API.Search.Infrastructure.Data;
using Jobba.API.Search.Infrastructure.Repository;
using Jobba.API.Search.Infrastructure.SeedWork;
using JobbaAPI.Search.Domain.Entities;
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
var conenctionstring = builder.Configuration["connectionStrings:DataAccessMySqlProvider"];

builder.Services.AddDbContext<SearchDBContext>(o =>
{
    o.UseMySql(conenctionstring, ServerVersion.AutoDetect(conenctionstring));
});
builder.Services.AddScoped<SearchDBContext>();
builder.Services.AddScoped<IRepository<SearchString>, SearchRepository>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
        // Global settings: use the defaults, but serialize enums as strings
        // (because it really should be the default)
        options.JsonSerializerOptions.Converters.Add(
        new JsonStringEnumConverter(JsonNamingPolicy.CamelCase, false));
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
