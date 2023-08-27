// import { Button, Card, CardGroup, Carousel, Container, Figure } from "react-bootstrap";
import SearchBar from "../components/searchbar/searchbar";
import "../components/common.scss";
import { Box, Container, Typography } from "@mui/material";
import DefaultPage from "./defaultpage";

export default function Home() {
  return (
    <>
      <main>
        <DefaultPage>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pb: 6,
            }}
          >
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.secondary"
              >
                Find your next Job
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Simple. Easy.
              </Typography>
              <SearchBar />
            </Container>
          </Box>
        </DefaultPage>
      </main>
    </>
  );
}
