import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Parser } from "html-to-react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
// import blogImage from "../assets/images/blogImage.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import NewsLetterForm from "../components/NewsLetterForm";
import axios from "axios";
import loadingImg from "../assets/images/loading.gif";

const Post = () => {
  const { type, slug } = useParams();
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(true);
  const [coverImageUrl, setCoverImageUrl] = useState("")

  useEffect(() => {
    setLoading(true);

    const getData = async()=> {
      let res = await axios.get(`https://admin.exlval.com/api/${type}/${slug}`)
      setPostData(res.data)
      console.log(res.data)
      if(type === "infographics"){
        setCoverImageUrl(`https://admin.exlval.com/images/infographic_cover/${res.data.cover_img}`)
      }else if(type === "article"){
        setCoverImageUrl(`https://admin.exlval.com/images/post_cover/${res.data.cover_img}`)
      }else if(type === 'case-studies'){
        setCoverImageUrl(`https://admin.exlval.com/images/infographic_cover/${res.data.cover_img}`) 
      }
      setLoading(false)
    }
    if(slug){
      getData()
    }else{
      setLoading(true)
    }
  }, [slug, type]);

  console.log(postData);
  console.log(slug)

  return (
    <>
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
          <Grid container mt={7} padding={5}>
            <Grid
              item
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "bottom",
                gap: "80px",
                padding: "20px",
              }}
            >
              <Typography sx={{ color: "#F45050" }}>05 May 2023</Typography>
              <Typography variant="h2">{postData.title}</Typography>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img
                src={coverImageUrl}
                alt="post_image"
                style={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "50px",
                }}
              />
            </Grid>
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
                padding: "20px",
              }}
            >
              <Typography>Home</Typography>
              <ChevronRightIcon />
              <Typography>{type}</Typography>
              <ChevronRightIcon />
              <Typography sx={{ color: "#F45050" }}>
                {" "}
                {postData.title}
              </Typography>
            </Grid>
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
                flexDirection: "column",
                paddingLeft: "20%",
                paddingRight: "20%",
              }}
            >
              {Parser().parse(postData.content)}
              <Typography>
                To learn more{" "}
                <u style={{ color: "dark-blue", cursor: "pointer" }}>
                  Contact me!
                </u>
              </Typography>
              <Typography>
                <FacebookOutlinedIcon sx={{ color: "#F45050" }} />

                <LinkedInIcon sx={{ color: "#F45050" }} />

                <InstagramIcon sx={{ color: "#F45050" }} />

                <TwitterIcon sx={{ color: "#F45050" }} />
              </Typography>
            </Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              align={"center"}
              mb={10}
              sx={{
                // display: "flex",
                // flexDirection: "row",
                // alignItems: "center",
              }}
            >
              <NewsLetterForm />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Post;