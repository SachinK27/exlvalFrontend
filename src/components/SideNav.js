import React, { useState, useEffect } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "./Image";
import resources from "../assets/images/resources.svg";
import services from "../assets/images/services.svg";
import loadingImg from "../assets/images/loading.gif";
import axios from "axios";

const SideNav = () => {
  const [loading, setLoading] = useState(true);
  const [sideBarData, setSideBarData] = useState([]);
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://admin.exlval.com/api/categories")
      .then((res) => {
        setLoading(false);
        let { data } = res;
        setSideBarData(data);
        // console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        alert("Some err occured | Please try again");
      });
  }, []);

  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Stack sx={{ position: "sticky" }}>
      <Stack direction={"row"} spacing={1}>
        <Image src={resources} />
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Resources
        </Typography>
      </Stack>
      <Box sx={{ my: 1 }} />
      <Stack spacing={1}>
        <Typography
          variant="body1"
          component={Link}
          href={"/case-studies"}
          sx={{ color: path === "/case-studies" ? "#F45050" : "#2B2B2B" }}
        >
          Case Studies
        </Typography>
        <Typography
          variant="body1"
          component={Link}
          href={"/ebook"}
          sx={{ color: path === "/ebook" ? "#F45050" : "#2B2B2B" }}
        >
          Ebook
        </Typography>
        <Typography
          variant="body1"
          component={Link}
          href={"/infographics"}
          sx={{ color: path === "/infographics" ? "#F45050" : "#2B2B2B" }}
        >
          Infographics
        </Typography>
      </Stack>
      <Box sx={{ my: 2 }} />
      <Stack direction={"row"} spacing={1}>
        <Image src={services} />
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Services
        </Typography>
      </Stack>
      <Box sx={{ my: 1 }} />
      <Stack spacing={1}>
        {loading ? (
          <img
            src={loadingImg}
            alt="loading"
            style={{ height: "30px", width: "30px" }}
          />
        ) : (
          <>
            {sideBarData.map((item, index) => {
              let linkUrl = "/";
              return (
                <Typography
                  variant="body1"
                  component={Link}
                  href={linkUrl}
                  sx={{
                    color: "#2B2B2B",
                    "&:hover": {
                      color: "#F45050",
                    },
                  }}
                  key={index}
                >
                  {item.name}
                </Typography>
              );
            })}

            {/* <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{ color: "#F45050" }}
            >
              All
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color: path === "/influencer-marketing" ? "#F45050" : "#2B2B2B",
              }}
            >
              Influencer Marketing
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color:
                  path === "/search-engine-optimization"
                    ? "#F45050"
                    : "#2B2B2B",
              }}
            >
              Search Engine Optimization
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color:
                  path === "/social-media-marketing" ? "#F45050" : "#2B2B2B",
              }}
            >
              Social Media Marketing
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color:
                  path === "/performance-marketing" ? "#F45050" : "#2B2B2B",
              }}
            >
              Performance Marketing
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color:
                  path === "/online-reputation-management"
                    ? "#F45050"
                    : "#2B2B2B",
              }}
            >
              Online Reputation Management
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color: path === "/content-marketing" ? "#F45050" : "#2B2B2B",
              }}
            >
              Content Marketing
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{ color: path === "/branding" ? "#F45050" : "#2B2B2B" }}
            >
              Branding
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{ color: path === "/graphic-design" ? "#F45050" : "#2B2B2B" }}
            >
              Graphic design
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{ color: path === "/web-esign" ? "#F45050" : "#2B2B2B" }}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              component={Link}
              href={"/"}
              sx={{
                color: path === "/web-development" ? "#F45050" : "#2B2B2B",
              }}
            >
              Web Development
            </Typography> */}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default SideNav;