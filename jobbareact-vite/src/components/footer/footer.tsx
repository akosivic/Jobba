import {
  Copyright,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

import JobbaLogo from "../logo/logo";

export default function Footer() {
  return (
    <Paper
      component="footer"
      elevation={2}
      sx={{
        marginTop: "calc(60% + 20px)",
        p: "0px 0px 0px 14px",
        position: "sticky",
        bottom: 0,
        width: "100%",
        bgcolor: "whitesmoke",
      }}
    >
      <Box
        sx={{
          display: "inline",
        }}
      >
        <Typography>Get connected with us on social networks:</Typography>
        <Facebook />
        <Twitter />
        <GitHub />
        <LinkedIn />
      </Box>
      <Grid container>
        <Grid item md={4} sm={12}></Grid>
        <Grid item md={4} sm={12}>
          <section>
            <JobbaLogo />
          </section>
        </Grid>
        <Grid item md={4} sm={12}>
          <section>
            <JobbaLogo />
          </section>
        </Grid>
      </Grid>
    </Paper>
    // <footer className="text-center text-lg-start bg-white text-muted">
    //     <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    //         <div className="me-5 d-none d-lg-block">
    //             <span>Get connected with us on social networks:</span>
    //         </div>
    //         <div>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-facebook-f"></i>
    //             </a>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-twitter"></i>
    //             </a>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-google"></i>
    //             </a>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-instagram"></i>
    //             </a>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-linkedin"></i>
    //             </a>
    //             <a href="" className="me-4 link-secondary">
    //                 <i className="fab fa-github"></i>
    //             </a>
    //         </div>
    //     </section>
    //     <section className="">
    //         <div className="container text-center text-md-start mt-5">
    //             <div className="row mt-3">
    //                 <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    //                     <h6 className="text-uppercase fw-bold mb-4">
    //                         <JobbaLogo />
    //                     </h6>
    //                     <p>
    //                         Here you can use rows and columns to organize your footer content. Lorem ipsum
    //                         dolor sit amet, consectetur adipisicing elit.
    //                     </p>
    //                 </div>
    //                 <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    //                     <h6 className="text-uppercase fw-bold mb-4">
    //                         Products
    //                     </h6>
    //                     <p>
    //                         <a href="#!" className="text-reset">Angular</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">React</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">Vue</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">Laravel</a>
    //                     </p>
    //                 </div>

    //                 <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    //                     <h6 className="text-uppercase fw-bold mb-4">
    //                         Useful links
    //                     </h6>
    //                     <p>
    //                         <a href="#!" className="text-reset">Pricing</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">Settings</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">Orders</a>
    //                     </p>
    //                     <p>
    //                         <a href="#!" className="text-reset">Help</a>
    //                     </p>
    //                 </div>

    //                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    //                     <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    //                     <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
    //                     <p>
    //                         <i className="fas fa-envelope me-3 text-secondary"></i>
    //                         info@example.com
    //                     </p>
    //                     <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
    //                     <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    //     <div className="text-center p-4">
    //         © 2021 Copyright:
    //         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    //     </div>
    // </footer>
  );
}
