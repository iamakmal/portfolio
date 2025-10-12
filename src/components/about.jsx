import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import profilePic from "../assets/profile.jpg";
import DownloadIcon from "@mui/icons-material/CloudDownload";
import CV from "../assets/cv.pdf";

function About() {
  return (
    <section id="about">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "40px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={profilePic}
              alt="profile-pic"
              style={{
                width: "50vw",
                maxWidth: "400px",
                height: "50vw",
                maxHeight: "400px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <a href={CV} download>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  padding: "16px",
                  fontSize: "16px",
                  borderRadius: 10,
                }}
              >
                Download CV &nbsp;
                <DownloadIcon />
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" sx={{ fontSize: "36px" }} paragraph>
              Hey there, I'm Akmal 👋
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }} paragraph>
              I'm a Software Engineer based in Colombo, Sri Lanka, passionate
              about building intuitive, user-centric, and accessible web
              applications.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }} paragraph>
              I recently completed a year-long internship at Rootcode, where I
              contributed to Skapp, an open-source business platform serving
              production users. During this time, I delivered 5+ major features
              using Next.js and React, built the complete frontend for the admin
              portal from scratch, and ensured the platform met WCAG
              accessibility standards for EU compliance.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }} paragraph>
              My experience spans modern web development with Next.js, React,
              and TypeScript on the frontend, and I have strong foundations in
              backend development with Node.js, Spring Boot, Nest.js, and
              databases like MySQL and MongoDB. I focus on creating seamless
              user experiences while understanding the full stack, from API
              design to pixel-perfect UI implementation.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }} paragraph>
              Currently, I'm expanding my knowledge in DevOps and cloud
              technologies to better understand the complete software delivery
              lifecycle, while also exploring how AI is transforming the way we
              build and interact with software.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }} paragraph>
              I love connecting with people who are building thoughtful products
              and solving interesting technical challenges. Feel free to reach
              out if you're working on an interesting project, want to discuss
              technology, or just want to connect. I'm always happy to chat!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
    </section>
  );
}

export default About;
