import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import rect from "../assets/images/Rectangle 184.svg";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const CCard = styled(Card)({
  border: "1px solid #F45050",
  borderRadius: "40px",
  padding: "3ch 1.5ch 0 1.5ch",
  maxWidth: "360px",
  height: "520px",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Imagecarousel = () => {

    function CustomLeftArrow(){
        return <button>left</button>
    }
 // const CustomLeftArrow = <button>left</button>;

 function CustomRightArrow(){
    return <button>Right</button>
}

 // const CustomRightArrow = <button>Right</button>;

  return (
    <Box>
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <IconButton
          sx={{
            background: "#eee",
            "&:hover": {
              backgroundColor: "#3C487E",
              "& svg": {
                color: "#eee",
              },
            },
          }}
          
        >
          <WestIcon
            sx={{
              color: "#3C486B",
            }}
          />
        </IconButton>
        <IconButton
          elevation={3}
          sx={{
            background: "#3C486B",
            "&:hover": {
              backgroundColor: "#3C487E",
            },
          }}
         
        >
          <EastIcon />
        </IconButton>
      </Box>
      <Box padding={1} sx={{
        "@media (max-width: 959.95px)": {
          padding:2
        }}}>
        <Carousel
          additionalTransfrom={0}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          swipeable
        >
           <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent sx={{ position: "relative", mt: "150px" }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                    zIndex: 22,
                    top: "-130px",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                  }}
                  alt="img"
                  src={rect}
                />
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-20px",
                  }}>
                  Daisy Lee
                </Typography>
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-3px",
                  }}>
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent sx={{ position: "relative", mt: "150px" }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                    zIndex: 22,
                    top: "-130px",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                  }}
                  alt="img"
                  src={rect}
                />
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-20px",
                  }}>
                  Daisy Lee
                </Typography>
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-3px",
                  }}>
                  Managinf Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent sx={{ position: "relative", mt: "150px" }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                    zIndex: 22,
                    top: "-130px",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                  }}
                  alt="img"
                  src={rect}
                />
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-20px",
                  }}>
                  Daisy Lee
                </Typography>
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "49%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-1px",
                  }}>
                  Managing Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
          <Box>
            <CCard>
              <CardContent>
                <Typography
                  sx={{
                    color: "#3C486B",
                    lineHeight: "20px",
                    fontSize: "14px",
                  }}
                >
                  Exlval has a friendly team — they do what is required and
                  deliver quality work on time.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval developed and designed my website, and they’re working
                  on creating content for it. In addition, most of the online
                  tasks are handled by them, including social media management,
                  SEO, and paid ads.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography variant="body2">
                  Exlval has assigned us different team members for all the
                  services they’re providing, including for content, SEO,
                  design, and social media. Their project management is good;
                  Exlval is always available when I need them.
                </Typography>
              </CardContent>
              <CardContent sx={{ position: "relative", mt: "150px" }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    border: "3px solid #F9D949",
                    zIndex: 22,
                    top: "-130px",
                  }}
                  src={
                    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  }
                />
                <img
                  style={{
                    position: "absolute",
                    left: "-1.5ch",
                    bottom: "-20px",
                    width: "calc(100% + 3ch)",
                  }}
                  alt="img"
                  src={rect}
                />
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-20px",
                  }}>
                  Daisy Lee
                </Typography>
                <Typography variant="body2" sx={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-60%)",
                    zIndex: 23,
                    top: "-3px",
                  }}>
                  Managinf Director, Exlaval
                </Typography>
              </CardContent>
            </CCard>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Imagecarousel;