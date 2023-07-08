// import { Button, Card, CardGroup, Carousel, Container, Figure } from "react-bootstrap";
import SearchBar from "./searchbar/searchbar";
import "./common.scss";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
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
      </main>
    </>
  );
}
