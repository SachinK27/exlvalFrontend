import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import ReactPaginate from "react-paginate";
import { styled } from "@mui/system";
import Image from "../components/Image";
import ContactForm from "../components/ContactForm";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import bgImage from "../assets/images/Hero bg image.png";
import Card3 from "../components/Card3";
import SideNav from "../components/SideNav";
import mascot from "../assets/images/pose_03a.svg";
import loadingImg from "../assets/images/loading.gif";
import axios from "axios";
import "./pagination.css";
import { Link, useLocation } from "react-router-dom";

// const CustomContainer = styled(Container)(({ theme }) => ({
//   padding: 0,
//   margin: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// }));

const Infographics = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);

  const [infographicsData, setInfographicsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLoading(true);
    let category = queryParams.get("category")
      ? `/category/${queryParams.get("category")}`
      : "";

    axios
      .get(`https://admin.exlval.com/api/infographics${category}`)
      .then((res) => {
        let data = res.data.infographics.data;
        setInfographicsData(data);
        setCategories(res.data.categories);
        const total = res.data.infographics.total;
        const lim = res.data.infographics.per_page;
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

  const fetchInfographics = (currentPage) => {
    setLoading(true);
    let category = queryParams.get("category")
      ? `/category/${queryParams.get("category")}`
      : "";

    axios
      .get(
        `https://admin.exlval.com/api/infographics${category}?page=${currentPage}`
      )
      .then((res) => {
        let data = res.data.infographics.data;
        setInfographicsData(data);
        setCategories(res.data.categories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    fetchInfographics(currentPage);
  };

  return (
    <>
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
              Visualizing Success with the best form of Information
            </Typography>
            <Box sx={{ my: 2, lineHeight: 1.7, fontSize: "18px" }} />
            <Typography variant="body2" align="center" fontSize="18px">
              The easy-to-digest info that will inspire you!
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            align={"left"}
            mb={10}
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 8,
            }}
          >
            <Typography>Home</Typography>
            <ChevronRightIcon />
            <Typography sx={{ color: "#F45050" }}>
              <strong>Infographics</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid container justifyContent="space-between">
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={12}
              xs={12}
              align={"left"}
              sx={{
                paddingLeft: 10,
              }}
            >
              <SideNav />
            </Grid>
            <Grid
              item
              xl={9}
              lg={9}
              md={9}
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
                {loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      src={loadingImg}
                      alt="loading"
                      style={{ height: "80px", width: "80px" }}
                    />
                  </div>
                ) : (
                  <>
                    {infographicsData.map((ele, idx) => {
                      let imgUrl = `https://admin.exlval.com/images/infographic_cover/${ele.cover_img}`;
                      // console.log(imgUrl);
                      // const metaKeywords = ele.meta_keywords.split(",");
                      // console.log(metaKeywords)
                      const tag = categories.filter(
                        (category) => category.id == ele.category
                      )[0].name;

                      return (
                        <Grid
                          item
                          xl={4}
                          lg={4}
                          md={4}
                          sm={12}
                          xs={12}
                          key={idx}
                        >
                          <Link to={`/infographics/${ele.slug}`}>
                            <Card3
                              img={imgUrl}
                              tags={["infographics", tag]}
                              color={"#F9D949"}
                              contained
                              title={ele.title}
                              key={idx}
                            />
                          </Link>
                        </Grid>
                      );
                    })}
                  </>
                )}
              </Grid>
              <Grid item xl={9} lg={9} md={9} sm={12} xs={12} align={"center"}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            height: 3,
          }}
        ></Grid>
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
              sx={{ width: "95%", justifyContent: "center" }}
            >
              <ContactForm />
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Infographics;
