import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "rgb(244,244,244)",
          //color: 'white',
          p: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Crafting web and mobile solutions with clarity and impact,
                explore my projects or drop me a message
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Me
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Email:{" "}
                <a href="mailto:m.akmalalavi@gmail.com">
                  m.akmalalavi@gmail.com
                </a>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Phone: <a href="tel:+94761136787">+94 76 113 6787</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Me
              </Typography>
              <a
                href="https://wa.me/94761136787"
                style={{ marginRight: "20px" }}
              >
                <WhatsAppIcon style={{ fontSize: 30, color: "inherit" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/akmal-alavi/"
                style={{ marginRight: "20px" }}
              >
                <LinkedInIcon style={{ fontSize: 30, color: "inherit" }} />
              </a>
              <a
                href="https://github.com/iamakmal"
                style={{ marginRight: "20px" }}
              >
                <GitHubIcon style={{ fontSize: 30, color: "inherit" }} />
              </a>
              <a
                href="https://twitter.com/_iamakmal_"
                style={{ marginRight: "20px" }}
              >
                <TwitterIcon style={{ fontSize: 30, color: "inherit" }} />
              </a>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body1" color="text.secondary" align="center">
              {"Copyright © "}
              Akmal Alavi {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
