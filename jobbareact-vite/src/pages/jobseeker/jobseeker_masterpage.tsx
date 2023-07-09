// import { Button, Card, CardGroup, Carousel, Container, Figure } from "react-bootstrap";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "/src/components/navbar/navbar";

export default function JobseekerMasterPage(props: any) {
  return (
    <>
      <main>
        <Navbar options={{ LoginType: "Jobseeker" }}></Navbar>
        <Box sx={{ pt: 8 }}>{props.children}</Box>
      </main>
    </>
  );
}
