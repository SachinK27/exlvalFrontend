import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import mascot from "../assets/images/pose_03a.svg";
import CardTest from "../components/CardTest";
import NewsLetterForm from "../components/NewsLetterForm";
import axios from "axios";
import "./pagination.css";
import { Link } from "react-router-dom";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import bgImage from "../assets/images/Hero bg image.png";
import ReactPaginate from "react-paginate";

// const CustomContainer = styled(Container)(({ theme }) => ({
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://admin.exlval.com/api/posts`)
      .then((res) => {
        let data = res.data.posts.data;
        setBlogData(data);
        const total = res.data.posts.total;
        const lim = res.data.posts.per_page;
        setLimit(lim);
        setPageCount(Math.ceil(total / lim));
        console.log(`pageCount ${pageCount}`);

        setLoading(false);
        //console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [pageCount]);

  const fetchBlogs = async (currentPage) => {
    axios
      .get(`https://admin.exlval.com/api/posts?page=${currentPage}`)
      .then((res) => {
        let data = res.data.posts.data;
        setBlogData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handlePageClick = async (data) => {
    //console.log(data.selected);

    let currentPage = data.selected + 1;
    fetchBlogs(currentPage);
  };

  return (
    <Grid container padding={5}>
      <Grid container spacing={2}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontWeight: 500,
            height: "60vh",
            backgroundImage: `url("${bgImage}")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Typography variant="h1" align="center" maxWidth={"30ch"}>
            Crack the code to growth
          </Typography>
          <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
          <Typography variant="body2" align="center" fontSize={"18px"}>
            Find Insights, Inspiration, and Innovation tight here!
          </Typography>
        </Grid>
      </Grid>
      <Grid container align={"center"} mb={5}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12}></Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <NewsLetterForm />
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12}></Grid>
      </Grid>
      <Grid container mt={5}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          align={"left"}
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 8,
          }}
        >
          <Typography>Home</Typography>
          <ChevronRightIcon />
          <Typography sx={{ color: "#F45050" }}>
            <strong>Blog</strong>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={10} align={"center"} mt={5}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} align={"center"}></Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} align={"center"}>
          <Container
            sx={{
              width: "70%",
              height: "60px",
              display: "flex",
              alignItems: "center",
              border: "2px solid black",
              borderRadius: "30px",
              padding: "4px",
              "@media (max-width: 959.95px)": {
                width: "100%",
              },
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                marginLeft: "8px",
                flex: 1,
              }}
            />
            <IconButton aria-label="search">
              <SearchIcon
                sx={{
                  color: "#F45050",
                }}
              />
            </IconButton>
          </Container>
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} align={"center"}></Grid>
      </Grid>
      <Grid container spacing={2} mb={10} align={"center"} mt={5}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} align={"center"}></Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} align={"center"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              "@media (max-width: 959.95px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography variant="h6">All</Typography>
            <Typography variant="h6">SEO</Typography>
            <Typography variant="h6">Social Media</Typography>
            <Typography variant="h6">Influencer Marketing</Typography>
            <Typography variant="h6">ORM</Typography>
            <Typography variant="h6">Branding</Typography>
            <Typography variant="h6">Website</Typography>
          </Box>
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} align={"center"}></Grid>
      </Grid>
      <Grid container spacing={2} mt={5}>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            align={"center"}
            sx={{
              padding: 2,
              p: "0 !important",
              maxWidth: "100vw !important",
              fontSize: "18px",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={
                {
                  // overflowY: "scroll",
                  // maxHeight: "90vh",
                  // scrollbarWidth: "none",
                  // "::-webkit-scrollbar": { display: "none" },
                  // justifyContent: "space-between",
                  // width: "100%",
                  // flexWrap: "wrap",
                }
              }
            >
              {blogData.map((ele, idx) => {
                let imageUrl = `https://admin.exlval.com/images/post_cover/${ele.cover_img}`;
                return (
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    mb={4}
                    key={idx}
                  >
                    <Link to={`/article/${ele.slug}`}>
                      <CardTest
                        title={ele.title}
                        short_desc={ele.short_desc}
                        image={imageUrl}
                      />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        align={"center"}
        justifyContent={"center"}
        sx={{
          width: "100%",
        }}
      >
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination-container"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active-page"}
        />
      </Grid>
      <Grid container sx={{ my: "80px" }}>
        <Grid
          item
          sm={12}
          xs={12}
          md={6}
          lg={6}
          align="center"
          justifyContent="center"
          // sx={{width:"100%"}}
        >
          <Image
            src={mascot}
            objectFit="contain"
            sx={{ mt: "8vh", width: "100%", transform: "scale(1)" }}
          />
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          md={6}
          lg={6}
          align="center"
          // sx={{width:"100%"}}
        >
          <Container
            align="center"
            sx={{ width: "100%", justifyContent: "center" }}
          >
            <ContactForm />
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blogs;
