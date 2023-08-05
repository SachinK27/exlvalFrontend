import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./assets/theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CaseStudies from "./pages/CaseStudies";
import Ebook from "./pages/Ebook";
import Infographics from "./pages/Infographics";
import SEO from "./pages/SEO";
import OurJourney from "./pages/OurJourney";
import WhyUs from "./pages/WhyUs";
import Internships from "./pages/Internships";
import Career from "./pages/Career";
import TestCaseStudies from "./test-page/TestCaseStudies";
import TestEbooks from "./test-page/TestEbooks";
import TestInfographics from "./test-page/TestInfographics";
import Blogs from "./pages/Blog";
import BusinessConsultancy from "./pages/BusinessConsultancy";
import NavbarTest2 from "./components/NavbarTest2";
import Homenew from "./pages/Homenew";
import Sticky from "./pages/Sticky";
import Homefixed from "./pages/Homefixed";
import BrandingService from "./pages/BrandingService";
import GraphicDesignService from "./pages/GraphicDesignService";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import PerformanceMarketingService from "./pages/PerformanceMarketingService";
import InfluencerMarketing from "./pages/InfluencerMarketing";
import ContentMarketing from "./pages/ContentMarketing";
import WebDevelopment from "./pages/WebDevelopment";
import WebDesign from "./pages/WebDesign";
import Post from "./pages/Post";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarTest2 />
      <BrowserRouter>
        <Routes>
          <Route path="/homefixed" element={<Homefixed />} />
          <Route path="/" element={<Homenew/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/infographics" element={<Infographics />} />
          <Route path="/services-seo" element={<SEO />} />
          <Route path="/services-branding" element={<BrandingService />} />
          <Route path="/services-graphicDesign" element={<GraphicDesignService />} />
          <Route path="/services-socialMediaMarketing" element={<SocialMediaMarketing/>} />
          <Route path="/services-performanceMarketing" element={<PerformanceMarketingService/>} />
          <Route path="/services-influencerMarketing" element={<InfluencerMarketing/>} />
          <Route path="/services-contentMarketing" element={<ContentMarketing/>} />
          <Route path="/services-webDevelopment" element={<WebDevelopment/>} />
          <Route path="/services-webDesign" element={<WebDesign/>} />
          <Route path="/test-case" element={<TestCaseStudies />} />
          <Route path="/test-ebook" element={<TestEbooks />} />
          <Route path="/test-infographics" element={<TestInfographics />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/:type/:slug" Component={Post} />
          <Route path="/our-journey" element={<OurJourney/>} />
          <Route path="/whyus" element={<WhyUs/>} />
          <Route path="/internships" element={<Internships/>} />
          <Route path="/business-consultancy" element={<BusinessConsultancy />} />
          <Route path="/career" element={<Career/>} />
          <Route path="/sticky" element={<Sticky/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
