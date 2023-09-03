import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import mascot from "../assets/images/pose_03a.svg";
import CardTest from "../components/CardTest";
import NewsLetterForm from "../components/NewsLetterForm";
import axios from "axios";
import "./pagination.css";
import { useLocation } from "react-router-dom";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import bgImage from "../assets/images/Hero bg image.png";
import ReactPaginate from "react-paginate";
import { Helmet } from "react-helmet";

// const CustomContainer = styled(Container)(({ theme }) => ({
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

const Blogs = () => {
  const location = useLocation();
  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLoading(true);

    let category = queryParams.get("category")
      ? `/category/${queryParams.get("category")}`
      : "";

    axios
      .get(`https://admin.exlval.com/api/posts${category}`)
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
  }, [pageCount, queryParams]);

  const fetchBlogs = async (currentPage) => {
    let category = queryParams.get("category")
      ? `/category/${queryParams.get("category")}`
      : "";

    axios
      .get(`https://admin.exlval.com/api/posts${category}?page=${currentPage}`)
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
    <Container
      sx={{
        p: 0,
        m: "auto",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exlval Digital Marketing Blog</title>
        <meta
          name="description"
          content="Discover insightful blogs on our page at Exlval Digital Marketing. Gain expert insights, tips, and trends to boost your online presence. Stay ahead with our valuable resources."
        />
        <meta
          name="keywords"
          content="Digital Marketing Company in Ahmedabad, India , Social Media Marketing in Ahmedabad, India, SEO Services in Ahmedabad, India"
        />
      </Helmet>

      <Container
        // spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: 500,
          minHeight: "40vh",
          p: "2ch 2ch",
          height: { xs: "auto", md: "60vh" },
          backgroundImage: { xs: "none", md: `url("${bgImage}")` },
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
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NewsLetterForm />
      </Container>

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

      <Grid container px={"1rem"} spacing={2} mb={10} align={"center"} mt={5}>
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

      <Grid container px={"1rem"} spacing={2} mb={10} align={"center"} mt={5}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12} align={"center"}></Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12} align={"center"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              // "@media (max-width: 959.95px)": {
              //   flexDirection: "column",
              // },
            }}
          >
            <Typography
              component={Link}
              to={location.pathname}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == null ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              All
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=2`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "2" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              SEO
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=3`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "3" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              Social Media
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=1`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "1" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              Influencer Marketing
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=5`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "5" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              ORM
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=7`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "7" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              Branding
            </Typography>
            <Typography
              component={Link}
              to={`${location.pathname}?category=9`}
              variant="h6"
              sx={{
                color:
                  queryParams.get("category") == "9" ? "#F45050" : "#2B2B2B",
                "&:hover": {
                  color: "#F45050",
                },
              }}
            >
              Website
            </Typography>
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

      <Grid container sx={{ pt: 7 }}>
        <Grid
          item
          xl={5.5}
          lg={5.5}
          md={5.5}
          sm={12}
          xs={12}
          align="center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Image
            src={mascot}
            style={{ height: "70vh", maxWidth: "80vw", objectFit: "contain" }}
          />
        </Grid>
        <Grid item xl={6.5} lg={6.5} md={6.5} sm={12} xs={12}>
          <Container sx={{ width: "100%" }}>
            <ContactForm />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blogs;
