import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Education() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section id="education">
        <Typography variant="h3" align="center" gutterBottom>
          Education
        </Typography>

        <div data-aos="fade-up">
          <Card
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 400, md: 500 },
              margin: "0 auto",
              marginBottom: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                BSc in Information Technology (Specializing in Software
                Engineering) | SLIIT
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px" }}
              >
                2021 – 2025 | WGPA: 3.52/4.0
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div data-aos="fade-up">
          <Card
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 400, md: 500 },
              margin: "0 auto",
              marginBottom: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                G.C.E. A/L | Zahira College Colombo
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px" }}
              >
                2020 <br /> 1A 2S (Z-SCORE=O.9456)
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "16px" }}>
                <ul>
                  <li>ICT-A</li>
                  <li>Combined Math- S</li>
                  <li>Physics- S</li>
                  <li>General English- A</li>
                  <li>Common General Test- 64</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div data-aos="fade-up">
          <Card
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 400, md: 500 },
              margin: "0 auto",
              marginBottom: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Diploma in Information Technology (DiTec) | Esoft (Pearson)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px" }}
              >
                2018
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div data-aos="fade-up">
          <Card
            sx={{
              width: "100%",
              maxWidth: { xs: 300, sm: 400, md: 500 },
              margin: "0 auto",
              marginBottom: "16px",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                G.C.E. O/L | Zahira College Colombo
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px" }}
              >
                2017 <br /> 8A 1B
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "16px" }}>
                <ul>
                  <li>First Language (Sinhala) - A</li>
                  <li>Religion (Islam) - A</li>
                  <li>Math - A</li>
                  <li>Science - A</li>
                  <li>English - A</li>
                  <li>ICT- A</li>
                  <li>History - A</li>
                  <li>Business Studies - A</li>
                  <li>English Literature - B</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <br />
        <br />
      </section>
    </>
  );
}

export default Education;
