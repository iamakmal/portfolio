import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import All from "@mui/icons-material/RefreshOutlined";
import Web from "@mui/icons-material/DesktopWindowsOutlined";
import Phone from "@mui/icons-material/PhoneIphoneOutlined";
import Chip from "./chip";
import Pagination from "@mui/material/Pagination";
import { projects } from "../data/projects";

function Projects() {
  const theme = useTheme();
  const [selectedType, setSelectedType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projectsPerPage = isMobile ? 3 : 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType]);

  const filteredProjects = projects.filter((project) => {
    if (selectedType === "all") {
      return true;
    }
    return project.type === selectedType;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const renderProjects = currentProjects.map((project, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} lg={4} sx={{ display: "flex" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: "3%",
            margin: "20px",
            padding: "10px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "3%",
              objectFit: "contain",
            }}
            component="img"
            image={project.imgSrc}
            title={project.imgTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {project.body}
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {(
                  project.tools
                    ?.match(/#([^#]+)/g)
                    ?.map((t) => t.replace(/^#/, "").trim()) ||
                  (project.tools || "")
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean)
                ).map((tool, i) => (
                  <Chip key={i} index={i} name={tool} />
                ))}
              </Box>
            </Typography>
          </CardContent>
          <CardActions sx={{ marginTop: "auto", px: 2, pb: 2 }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "20px" }}
            >
              <GitHubIcon style={{ fontSize: 40, color: "black" }} />
            </a>
            {project.linkedin !== "" ? (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="large">Demo</Button>
              </a>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <section id="projects">
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            startIcon={<All />}
            color="secondary"
            sx={{ borderRadius: 10 }}
            onClick={() => setSelectedType("all")}
          >
            All
          </Button>
          <Button
            variant="contained"
            startIcon={<Web />}
            sx={{ borderRadius: 10 }}
            onClick={() => setSelectedType("web")}
          >
            Web
          </Button>
          <Button
            variant="contained"
            startIcon={<Phone />}
            color="error"
            sx={{ borderRadius: 10 }}
            onClick={() => setSelectedType("mobile")}
          >
            Mobile
          </Button>
        </Box>
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ marginBottom: 5 }}
        >
          {renderProjects}
        </Grid>
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1.1rem",
                },
              }}
            />
          </Box>
        )}
      </section>
    </>
  );
}

export default Projects;
