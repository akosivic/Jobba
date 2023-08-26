// import { Button, Card, CardGroup, Carousel, Container, Figure } from "react-bootstrap";
import "/src/components/common.scss";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../components/navbar/navbar";

export default function DefaultPage(props: any) {
  return (
    <>
      <main>
        <Navbar options={{LoginType:"Default"}}></Navbar>
        <Box sx={{ pt: 8 }}>{props.children}</Box>
      </main>
    </>
  );
}
