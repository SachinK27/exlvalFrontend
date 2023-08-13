import React, { useEffect, useState } from "react";
import "./Sticky.css";

const Sticky = () => {
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const headerOffset = document.getElementById("myHeader").offsetTop;
      const stop = document.getElementById("xyz").offsetTop;
      if (scrollPosition >= headerOffset && scrollPosition < stop) {
        setIsSticky(true);
      } else if(scrollPosition < headerOffset){
        setIsSticky(false);
      }
      else{ setIsSticky(false);

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  
  const sticky = 102; // Adjust this value to match your header's height

  return (
    <div className="">
      <div className="top-container">
        <h1>Scroll Down</h1>
        <p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p><p>Scroll down to see the sticky effect.</p>
      </div>

      <div className={`header ${isSticky ? "sticky" : ""}`} id="myHeader">
        <h2>My Header</h2>
      </div>

      <div className="content">
        <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p>
        <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p> <h3>On Scroll Sticky Header</h3>
        <p>The header will stick to the top when you reach its scroll position.</p>
        <p>Scroll back up to remove the sticky effect.</p>
      </div>

      <div id="xyz">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit optio, minima accusamus dolor numquam sint ad, at quaerat accusantium asperiores tenetur veniam, praesentium aspernatur obcaecati aperiam beatae eos cupiditate!
        </p>

      </div>
    </div>
  );
};

export default Sticky;
// import React, { useEffect } from "react";
// import "./Sticky.css";

// const StickyHeader = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.getElementById("myHeader");
//       const sticky = header.offsetTop;

//       if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>

//       </div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>

//       </div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>

//       </div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>

//       </div>
//       <div className="top-container">
//         <h1>Scroll Down</h1>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>
//         <p>Scroll down to see the sticky effect.</p>

//       </div>

//       <div id="myHeader" className="header">
//         <h2>My Header</h2>
//       </div>

//       <div className="content">
//         <h3>On Scroll Sticky Header</h3>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//       </div>

//       <div id="xyz">
//         {/* Content after sticky effect */}
//         <h3>On Scroll Sticky Header</h3>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//         <p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p><p>The header will stick to the top when you reach its scroll position.</p>
//         <p>Scroll back up to remove the sticky effect.</p>
//       </div>
//     </div>
//   );
// };

// export default StickyHeader;




// <Container>
// <Typography variant="body1" sx={{ mb: 2 }}>
//   Ignite your digital marketing passion and fuel your career
//   ambitions in a dynamic, fast-paced environment.
// </Typography>
// <Typography variant="body1" sx={{ my: 2 }}>
//   Our extraordinary internship program is your gateway to immerse
//   yourself in the captivating world of digital marketing, where
//   you'll unleash your creativity and gain priceless hands-on
//   experience that sets you apart from the crowd.
// </Typography>
// <Typography variant="body1" sx={{ my: 2 }}>
//   Here's what you can expect:
// </Typography>
// <Stack direction="row" spacing={1} sx={{ my: 2 }}>
//   <IconButton
//     sx={{ background: "#F45050", width: "24px", height: "24px" }}
//   >
//     <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
//   </IconButton>
//   <Typography>
//     <strong>Hands-On Experience:</strong> At Exival, we believe in learning by
//     doing. Here, you'll be an integral part of our team, working
//     on real client projects and contributing to actual marketing
//     campaigns. Get ready to roll up your sleeves and make a
//     tangible impact From day one.
//   </Typography>
// </Stack>

// <Stack direction="row" spacing={1} sx={{ my: 2 }}>
//   <IconButton
//     sx={{ background: "#F45050", width: "24px", height: "24px" }}
//   >
//     <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
//   </IconButton>
//   <Typography>
//     <strong>Mentorship and Learning Opportunities:</strong> Unleash your potential
//     with dedicated mentorship and guidance throughout your
//     internship journey. Our experienced professionals will provide
//     invaluable insights, answer your questions, and help you
//     sharpen your digital marketing skills, ensuring your personal
//     and professional growth.
//   </Typography>
// </Stack>

// <Stack direction="row" spacing={1} sx={{ my: 2 }}>
//   <IconButton
//     sx={{ background: "#F45050", width: "24px", height: "24px" }}
//   >
//     <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
//   </IconButton>
//   <Typography>
//     <strong>Exposure to Diverse Igital Marketing Strategies:</strong> Digital
//     marketing is a multifaceted discipline with various strategies
//     and tools During your internship, you'll have the opportunity
//     to explore different aspects of digital marketing.
//   </Typography>
// </Stack>

// <Stack direction="row" spacing={1} sx={{ my: 2 }}>
//   <IconButton
//     sx={{ background: "#F45050", width: "24px", height: "24px" }}
//   >
//     <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
//   </IconButton>
//   <Typography>
//     <strong>Collaboration and Networking:</strong> A collaborative team of
//     passionate professionals where you'll work closely with
//     experienced mentors, collaborate on exciting projects, and
//     expand your professional network, Forge valuable connections,
//     learn from industry experts, and unlock endless opportunities
//     for your future career.
//   </Typography>
// </Stack>

// <Stack direction="row" spacing={1} sx={{ my: 2 }}>
//   <IconButton
//     sx={{ background: "#F45050", width: "24px", height: "24px" }}
//   >
//     <EastTwoToneIcon sx={{ color: "#fff", fontSize: "18px" }} />
//   </IconButton>
//   <Typography>
//     <strong>Career Development Opportunities:</strong> Our internship program is
//     designed to be a launching pad for your digital marketing
//     career. Alongside the hands-on experience and mentorship,
//     you'll have sessions aimed at enhancing your skills and
//     knowledge. We are invested in your growth and will provide the
//     support and resources you need to thrive.
//   </Typography>
// </Stack>
// </Container>

// <Grid container spacing={2} sx={{my:5}}>
// {iconsData.map((item, index) => (
// <Grid item xs={4} key={index} align="center" sx={{my:2}}>
// <Image src={item.icon}  sx={{ width: "50%"}} />
// <Typography variant="body2" align="center">
// {item.text}
// </Typography>
// </Grid>
// ))}
// </Grid>

// <Container sx={{ width: "90%", mb: 5 }}>
// <ContactForm />
// </Container>



{/* <Container
ref={parentRef}
sx={{
  pt: 7,
  maxWidth: "100vw !important",
  fontSize: "18px",
}}
>
<Grid container sx={{ px: 5 }}>
  <Grid item sm={12} md={5} lg={5}>
    <div className="sticky-image-wrapper">
      <Image
        src={mascot5}
        sx={{ width: "400px" }}
        className="mascot-image"
        ref={mascotRef}
      />
    </div>
  </Grid>
  <Grid item sm={12} md={7} lg={7}>


  </Grid>
</Grid>
</Container> */}


{/* <Box
ref={parentRef}
>
 <Grid container sx={{ px: 5 }}>
  <Grid item sm={12} md={6} lg={5}>
    <div className="sticky-image-wrapper">
      <Image
        src={mascot}
        sx={{ width: "400px" }}
        className="mascot-image"
        ref={mascotRef}
      />
    </div>
  </Grid>
  <Grid item sm={12} md={6} lg={7}> */}