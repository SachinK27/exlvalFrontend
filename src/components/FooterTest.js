import * as React from "react";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import Logo from "./Logo";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "./Image";
import logo9 from "../assets/images/B1.png";
import logo10 from "../assets/images/B2.png";
import logo11 from "../assets/images/B3.png";
import logo12 from "../assets/images/B4.png";
import logo13 from "../assets/images/B5.png";

function Footer(props) {
  return (
    <>
      <Grid
        container
        sx={{
          background:
            "linear-gradient(151.32deg, #F45050 6.18%, #3C486B 128.88%)",
          position: "relative",
          maxWidth: "100vw !important",
          color: "#fff",
        }}
      >
        <Grid
          container
          sx={{
            p: "5ch 8ch 0ch 8ch",
          }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} align={"left"}>
            <Link href="/">
              <Logo />
            </Link>
          </Grid>
          <Grid container spacing={2} mt={5}>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12} align={"left"}>
              <Typography>
                We build audience, trust and sales for you with our expertise in
                digital marketing.
              </Typography>
              <Stack gap={0.5} direction="row" sx={{ mt: 5 }}>
                <IconButton>
                  <FacebookOutlinedIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid item xl={1.5} lg={1.5} md={3} sm={12} xs={12} align={"left"}>
              <Stack gap={1.5}>
                <Link href="/">
                  <Typography
                    component={Link}
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    Company
                  </Typography>
                </Link>
                <Link href="/about-us">
                  <Typography component={Link} variant="body1">
                    About us
                  </Typography>
                </Link>
                <Link href="/our-journey">
                  <Typography component={Link} variant="body1">
                    Our Jounrney
                  </Typography>
                </Link>
                <Link href="/whyus">
                  <Typography component={Link} variant="body1">
                    Why us
                  </Typography>
                </Link>
                <Link href="/career">
                  <Typography component={Link} variant="body1">
                    Career
                  </Typography>
                </Link>
                <Link href="/internships">
                  <Typography component={Link} variant="body1">
                    Internship
                  </Typography>
                </Link>
                <Link href="/contact-us">
                  <Typography component={Link} variant="body1">
                    Contact us
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12} align={"left"}>
              <Stack gap={1.5}>
                <Typography
                  component={Link}
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                >
                  Services
                </Typography>
                <Link href="/case-studies">
                  <Typography variant="body1">
                    Search Enginer Optimization
                  </Typography>
                </Link>
                <Typography variant="body1">social Media Marketing</Typography>
                <Typography variant="body1">Perfomance Marketing</Typography>
                <Typography variant="body1">Influencer Marketing</Typography>
                <Typography variant="body1">
                  Online reputation management
                </Typography>
                <Typography variant="body1">Content Marketing</Typography>
                <Typography variant="body1">Branding Services</Typography>
                <Typography variant="body1">Graphic Design</Typography>
                <Typography variant="body1">Website Design</Typography>
                <Typography variant="body1">Website Development</Typography>
              </Stack>
            </Grid>
            <Grid item xl={1.5} lg={1.5} md={3} sm={12} xs={12} align={"left"}>
              <Stack gap={1.5}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Resources
                </Typography>
                <Link href="/blogs">
                  <Typography variant="body1">Blogs</Typography>
                </Link>
                <Link href="/ebook">
                  <Typography variant="body1">Ebooks</Typography>
                </Link>
                <Link href="/infographics">
                  <Typography variant="body1">Infographics</Typography>
                </Link>
                <Link href="/case-studies">
                  <Typography variant="body1">Case studies</Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={12} xs={12} align={"left"}>
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1.5 }}>
                Location
              </Typography>
              <Typography variant="body1" sx={{ textDecoration: "underline" }}>
                204 (VM-014), SF, Corporate House Anubhuti Commercial Complex
                Opp: Torrent Pharma, Off Ashram Road, Ahmedabad, Gujarat -
                380009, India
              </Typography>
              <Stack sx={{ mt: 4 }} gap={1.5}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Connent with us
                </Typography>
                <Stack direction="row" gap={1}>
                  <EmailIcon sx={{ color: "#F9D949" }} />
                  <Typography component={Link} variant="body1">
                    hi@exlval.com
                  </Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                  <PhoneIcon sx={{ color: "#F9D949" }} />
                  <Typography component={Link} variant="body1">
                    +91 9166553388
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Divider sx={{ color: "#3C486B" }} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItem: "center",
                padding: "2ch 9ch",
              }}
            >
              <Typography component={Link}>
                2023 | Exlval - Digital Marketing Company. All Rights Reserved
              </Typography>
              <Typography component={Link}>
                <span style={{ textDecoration: "underline" }}>
                  Terms and conditions
                </span>
                <span>&nbsp;&nbsp;.&nbsp;&nbsp;</span>
                <span style={{ textDecoration: "underline" }}>
                  Privacy Policy
                </span>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
