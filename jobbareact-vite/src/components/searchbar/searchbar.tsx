import {
  Paper,
  IconButton,
  InputBase,
  Divider,
  Box,
  Typography,
  Chip,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import axios, { AxiosResponse } from "axios";

interface jobs{
  id : string,
  keyWord : string
}

export default function SearchBar() {
  const [popularjobs, setPopularJobs] = useState<jobs[]>([]);
  useEffect(() => {
    axios.get("https://localhost:7015/api/searchjob/topresults").then((value :AxiosResponse<jobs[]>) => {
      setPopularJobs(value.data);
    }).catch((e)=>{
      console.error(e);
    });
  }, []);

  return (
    <Stack>
      <Container maxWidth="md">
        <Paper
          component="form"
          sx={{
            p: "2px 4px 0px 0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Find Jobs"
            inputProps={{ "aria-label": "Find Jobs" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Box
          sx={{
            p: "4px 4px 0px 10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" display="block" color="text.secondary">
            Popular Searches:
          </Typography>
          <Box
            sx={{
              p: "4px 4px 0px 10px",
              display: "inline-block",
              alignItems: "start",
            }}
          >
            {popularjobs.map((jobs) => (
              <Chip
                id={jobs.id}
                variant="outlined"
                color="info"
                size="small"
                label={jobs.keyWord}
                sx={{
                  m: "0px 0px 0px 5px",
                }}
                component="a"
                href="#basic-chip"
                clickable
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
