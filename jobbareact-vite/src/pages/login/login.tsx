// import "/src/components/common.scss";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import DefaultPage from "/src/pages/defaultpage";

export default function Home() {
  return (
    <>
      <DefaultPage>
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
            }}
          >
            <Container maxWidth="md">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.secondary"
              >
                Login
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Simple. Easy.
              </Typography>
              <Stack spacing={2} direction="row" sx={{ margin: 0, display: "flex", alignItems: "center", justifyContent:"center"}}>
                <Button variant="contained">Applicant</Button>
                <Button variant="outlined">Employer</Button>
              </Stack>
            </Container>
          </Box>
        </main>
      </DefaultPage>
    </>
  );
}
