// import React, { useState } from "react";
// import "./navbartest.css";
// import logo from "../assets/images/Exlval Logo.png";
// import image from "../assets/images/Career - Opportunity to upskill.png"


// export default function NavbarTest2() {
//   const [isActive, setIsActive] = useState(false);
//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };
//   //   let nav_toggle = document.querySelector(".nav_toggle");
//   //   let nav_toggle_icon = document.querySelector(".nav_toggle ion-icon");
//   //   let nav_menu = document.querySelector(".nav_menu");

//   //   console.log({nav_toggle,nav_toggle_icon, nav_menu})

//   //   nav_toggle.addEventListener("click", () => {
//   //     nav_menu.classList.toggle("active");
//   //     nav_toggle_icon.setAttribute(
//   //       "name",
//   //       nav_menu.classList.contains("active") ? "close-outline" : "menu-outline"
//   //     );
//   //   });
//   return (
//     <header>
//       <div class="container">
//         <nav class="navigation">
//           <a href="#!" class="logo">
//             <img src={logo} alt="Logo" class="logo-img" />
//           </a>

//           <ul className={`nav_menu ${isActive ? "active" : ""}`}>
//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <span>Company</span>
//               </a>
//             </li>
//             <li class="nav_list nav_list_menu">
//               <a href="#!" class="nav_link">
//                 <span>Services</span>
//                 <ion-icon name="chevron-down-outline"></ion-icon>
//               </a>
//               <div class="dropdown">
//                 <div class="dropdown-inner">
//                   <div class="dropdown-item">
//                     <h3 class="item-heading">Marketing</h3>
//                     <div class="item-list">
//                       <div class="item-img">
//                         <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>SEO</h4>
//                         <p>Search Engine Optimization</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                       <h4>Social Media Marketing</h4>
//                       <p>Search Engine Optimization</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Performance Marketing</h4>
//                         <p>Search Engine Optimization</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                     <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Influencer Marketing</h4>
//                         <p>Search Engine Optimization</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                     <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Content Marketing</h4>
//                         <p>Search Engine Optimization</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="dropdown-item">
//                     <h3 class="item-heading">Branding</h3>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Convert</h4>
//                         <p>Analyze conversion rates.</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Engage</h4>
//                         <p>Measure active usage.</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Retain</h4>
//                         <p>Find retention drivers.</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="dropdown-item">
//                     <h3 class="item-heading">Website</h3>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Blog</h4>
//                         <p>The latest industry news.</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Customer stories</h4>
//                         <p>Learn how our customers.</p>
//                       </div>
//                     </div>
//                     <div class="item-list">
//                       <div class="item-img">
//                       <img src={image} alt="Icon" style={{
//                             width: "40px"
//                         }}/>
//                       </div>
//                       <div class="item-list-info">
//                         <h4>Video tutorials</h4>
//                         <p>New features and techniques.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <span>Business Consultancy</span>
//               </a>
//             </li>
//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <span>Blogs</span>
//               </a>
//             </li>
//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <span>Resources</span>
//               </a>
//             </li>
//           </ul>
//           <div class="nav_action">
//             <a href="#!" class="btn">
//               Contact Us
//             </a>
//             <div class="nav_toggle">
//               <button onClick={toggleMenu}>Toggle Menu</button>
//               {/* <ion-icon name="menu-outline"></ion-icon> */}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }




// import React, { useState } from "react";
// import "./navbar.css";
// import logo from "../assets/images/Exlval Logo.png";
// import image from "../assets/images/Career - Opportunity to upskill.png";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button, Link } from "@mui/material";

// export default function NavbarTest2() {
//   const [isActive, setIsActive] = useState(false);
//   const [isDropdownActive, setDropdownActive] = useState(false);
//   const [isCompanyActive, setCompanyActive] = useState(false);
//   const [isResourceActive, setResourceActive] = useState(false);

//   const handleMouseEnter = () => {
//     setDropdownActive(true);
//   };
//   const handleMouseLeave = () => {
//     setDropdownActive(false);
//   };

//   const handleMouseEnterCompany = () => {
//     setCompanyActive(true);
//   };
//   const handleMouseLeaveCompany = () => {
//     setCompanyActive(false);
//   };

//   const handleMouseEnterResource = () => {
//     setResourceActive(true);
//   };
//   const handleMouseLeaveResource = () => {
//     setResourceActive(false);
//   };
//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <header>
//       <div class="container">
//         <nav class="navigation">
//           <Link href="/">
//             <img src={logo} alt="Logo" class="logo-img" />
//           </Link>

//           {/* onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave} */}
//           <ul className={`nav_menu ${isActive ? "active" : ""}`}>
//             <li class="nav_list nav_list_menu">
//               <div
//                 onMouseEnter={handleMouseEnterCompany}
//                 onMouseLeave={handleMouseLeaveCompany}
//               >
//                 <a href="#!" class="nav_link">
//                   <span>Company</span>
//                   {isCompanyActive ? (
//                     <ArrowDropUpIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   ) : (
//                     <ArrowDropDownIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   )}
//                 </a>
//                 <div class="dropdown-company">
//                   <div class="dropdown-inner-company">
//                     <div class="dropdown-item-company">
//                       <div className="company-option-active">
//                         <div class="item-list-company">
//                           <div class="item-list-info-company">
//                             <Link href="/about-us">
//                               <h4>About Us</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="company-option">
//                         <div class="item-list-company">
//                           <div class="item-list-info-company">
//                             <Link href="/our-journey">
//                               <h4>Our Journey</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="company-option">
//                         <div class="item-list-company">
//                           <div class="item-list-info-company">
//                             <Link href="/whyus">
//                               <h4>Why Us</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="company-option">
//                         <div class="item-list-company">
//                           <div class="item-list-info-company">
//                             <Link href="/career">
//                               <h4>Career</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="company-option">
//                         <div class="item-list-company">
//                           <div class="item-list-info-company">
//                             <Link href="/internships">
//                               <h4>Internship</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li class="nav_list nav_list_menu">
//               <div
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a href="#!" class="nav_link">
//                   <span>Services</span>
//                   {isDropdownActive ? (
//                     <ArrowDropUpIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   ) : (
//                     <ArrowDropDownIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   )}
//                 </a>
//                 <div class="dropdown">
//                   <div class="dropdown-inner">
//                     <div class="dropdown-item">
//                       <div
//                         className="dropdown-header"
//                         style={{
//                           display: "flex",
//                           flexDirection: "row",
//                           gap: "20px",
//                         }}
//                       >
//                         <img
//                           src={image}
//                           alt="Icon"
//                           style={{
//                             width: "40px",
//                           }}
//                         />
//                         <h3
//                           class="item-heading"
//                           style={{
//                             marginTop: "7px",
//                           }}
//                         >
//                           Marketing
//                         </h3>
//                       </div>
//                       <hr
//                         style={{
//                           height: "5px",
//                           marginTop: "10px",
//                           width: "70%",
//                           color: "black",
//                           backgroundColor: "black",
//                         }}
//                       />
//                       <div class="item-list">
//                         <div
//                           class="item-list-info"
//                           style={{
//                             background: "red",
//                             padding: "10px",
//                             width: "80%",
//                           }}
//                         >
//                           <Link href="/services-seo">
//                             <h4>Search Engine Optimization</h4>
//                           </Link>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Social Media Marketing</h4>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Performance Marketing</h4>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Influencer Marketing</h4>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Content Marketing</h4>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="dropdown-item">
//                       <div
//                         className="dropdown-header"
//                         style={{
//                           display: "flex",
//                           flexDirection: "row",
//                           gap: "20px",
//                         }}
//                       >
//                         <img
//                           src={image}
//                           alt="Icon"
//                           style={{
//                             width: "40px",
//                           }}
//                         />
//                         <h3
//                           class="item-heading"
//                           style={{
//                             marginTop: "7px",
//                           }}
//                         >
//                           Branding
//                         </h3>
//                       </div>
//                       <hr
//                         style={{
//                           height: "5px",
//                           marginTop: "10px",
//                           width: "70%",
//                           color: "black",
//                           backgroundColor: "black",
//                         }}
//                       />
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Branding Services</h4>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Graphic Design</h4>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="dropdown-item">
//                       <div
//                         className="dropdown-header"
//                         style={{
//                           display: "flex",
//                           flexDirection: "row",
//                           gap: "20px",
//                         }}
//                       >
//                         <img
//                           src={image}
//                           alt="Icon"
//                           style={{
//                             width: "40px",
//                           }}
//                         />
//                         <h3
//                           class="item-heading"
//                           style={{
//                             marginTop: "7px",
//                           }}
//                         >
//                           Website
//                         </h3>
//                       </div>
//                       <hr
//                         style={{
//                           height: "5px",
//                           marginTop: "10px",
//                           width: "70%",
//                           color: "black",
//                           backgroundColor: "black",
//                         }}
//                       />
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>UI/UX</h4>
//                         </div>
//                       </div>
//                       <div class="item-list">
//                         <div class="item-list-info">
//                           <h4>Web Development</h4>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <Link href="/business-consultancy">
//                   <span>Business Consultancy</span>
//                 </Link>
//               </a>
//             </li>
//             <li class="nav_list">
//               <a href="#!" class="nav_link">
//                 <Link href="/blogs">
//                   <span>Blogs</span>
//                 </Link>
//               </a>
//             </li>
//             <li class="nav_list nav_list_menu">
//               <div
//                 onMouseEnter={handleMouseEnterResource}
//                 onMouseLeave={handleMouseLeaveResource}
//               >
//                 <a href="#!" class="nav_link">
//                   <span>Resources</span>
//                   {isResourceActive ? (
//                     <ArrowDropUpIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   ) : (
//                     <ArrowDropDownIcon
//                       sx={{
//                         marginTop: "5px",
//                       }}
//                     />
//                   )}
//                 </a>
//                 <div class="dropdown-resource">
//                   <div class="dropdown-inner-resource">
//                     <div class="dropdown-item-resource">
//                       <div className="resource-option-active">
//                         <div class="item-list-resource">
//                           <div class="item-list-info-resource">
//                             <Link href="/case-studies">
//                               <h4>Case Studies</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="resource-option">
//                         <div class="item-list-resource">
//                           <div class="item-list-info-resource">
//                             <Link href="/ebook">
//                               <h4>Ebooks</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="resource-option">
//                         <div class="item-list-resource">
//                           <div class="item-list-info-resource">
//                             <Link href="/infographics">
//                               <h4>Infographics</h4>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           </ul>
//           <div class="nav_action">
//             <Button
//               sx={{
//                 backgroundColor: "#3C486B",
//                 borderRadius: 4,
//                 padding: "1ch 2ch",
//                 "&:hover": {
//                   backgroundColor: "#3C487E",
//                 },
//               }}
//             >
//               <Link href="/contact-us">Contact us</Link>
//             </Button>
//             <div class="nav_toggle">
//               {isActive ? (
//                 <CloseIcon onClick={toggleMenu} />
//               ) : (
//                 <MenuIcon onClick={toggleMenu} />
//               )}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/images/Exlval Logo.png";
import image from "../assets/images/Career - Opportunity to upskill.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Link, Grid, Container,Typography } from "@mui/material";

export default function NavbarTest2() {
  const [isActive, setIsActive] = useState(false);
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isCompanyActive, setCompanyActive] = useState(false);
  const [isResourceActive, setResourceActive] = useState(false);

  const handleMouseEnter = () => {
    setDropdownActive(true);
  };
  const handleMouseLeave = () => {
    setDropdownActive(false);
  };

  const handleMouseEnterCompany = () => {
    setCompanyActive(true);
  };
  const handleMouseLeaveCompany = () => {
    setCompanyActive(false);
  };

  const handleMouseEnterResource = () => {
    setResourceActive(true);
  };
  const handleMouseLeaveResource = () => {
    setResourceActive(false);
  };
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <header>
          <div class="container-navbar">
            <nav class="navigation">
              <Link href="/">
                <img src={logo} alt="Logo" class="logo-img" />
              </Link>

              {/* onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} */}
          <div className="rightMainContainer">
              <ul className={`nav_menu ${isActive ? "active" : ""}`}>
                <li class="nav_list nav_list_menu">
                  <div
                    onMouseEnter={handleMouseEnterCompany}
                    onMouseLeave={handleMouseLeaveCompany}
                    // onClick={!isActive}
                  >
                    <a href="#!" class="nav_link">
                      <span>Company</span>
                      {isCompanyActive ? (
                        <ArrowDropUpIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      )}
                    </a>
                    <div class="dropdown-company">
                      <div class="dropdown-inner-company">
                        <div class="dropdown-item-company">
                          <div className="company-option">
                            <div class="item-list-company">
                              <div class="item-list-info-company" >
                                <Link href="/about-us">
                                  <Typography variant="body1" sx={{fontWeight:"medium"}}>About Us</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="company-option">
                            <div class="item-list-company">
                              <div class="item-list-info-company">
                                <Link href="/our-journey">
                                  <Typography variant="body1" sx={{fontWeight:"medium"}}>Our Journey</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="company-option">
                            <div class="item-list-company">
                              <div class="item-list-info-company">
                                <Link href="/whyus">
                                  <Typography variant="body1" sx={{fontWeight:"medium"}}>Why Us</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="company-option">
                            <div class="item-list-company">
                              <div class="item-list-info-company">
                                <Link href="/career">
                                  <Typography variant="body1" sx={{fontWeight:"medium"}}>Career</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="company-option">
                            <div class="item-list-company">
                              <div class="item-list-info-company">
                                <Link href="/internships">
                                  <Typography variant="body1" sx={{fontWeight:"medium"}}>Internship</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav_list nav_list_menu">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href="#!" class="nav_link">
                      <span>Services</span>
                      {isDropdownActive ? (
                        <ArrowDropUpIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      )}
                    </a>
                    <div class="dropdown">
                      <div class="dropdown-inner">
                        <div class="dropdown-item">
                          <div
                            className="dropdown-header"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "20px",
                            }}
                          >
                            <img
                              src={image}
                              alt="Icon"
                              style={{
                                width: "40px",
                              }}
                            />
                            <h3
                              class="item-heading"
                              style={{
                                marginTop: "7px",
                              }}
                            >
                              Marketing
                            </h3>
                          </div>
                          <hr
                            style={{
                              height: "5px",
                              marginTop: "10px",
                              width: "70%",
                              color: "black",
                              backgroundColor: "black",
                            }}
                          />
                          <div class="item-list">
                            <div
                              class="item-list-info"
                              style={{
                                
                              }}
                            >
                              <Link href="/services-seo">
                                <h4>Search Engine Optimization</h4>
                              </Link>
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                              <Link href="/services-socialMediaMarketing">
                                <h4>Social Media Marketing</h4>
                              </Link>
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                              <Link href="/services-performanceMarketing">
                              <h4>Performance Marketing</h4>
                              </Link>
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                              <Link href="/services-influencerMarketing">
                              <h4>Influencer Marketing</h4>
                              </Link>
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                              <Link href="/services-contentMarketing">
                              <h4>Content Marketing</h4>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div class="dropdown-item">
                          <div
                            className="dropdown-header"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "20px",
                            }}
                          >
                            <img
                              src={image}
                              alt="Icon"
                              style={{
                                width: "40px",
                              }}
                            />
                            <h3
                              class="item-heading"
                              style={{
                                marginTop: "7px",
                              }}
                            >
                           Branding
                            </h3>
                          </div>
                          <hr
                            style={{
                              height: "5px",
                              marginTop: "10px",
                              width: "70%",
                              color: "black",
                              backgroundColor: "black",
                            }}
                          />
                          <div class="item-list">
                            <div class="item-list-info">
                          <Link href="/services-branding"><h4>Branding </h4> </Link> 
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                              <Link href="/services-graphicDesign"><h4>Graphic Design</h4> </Link>
                            </div>
                          </div>
                        </div>

                        <div class="dropdown-item">
                          <div
                            className="dropdown-header"
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "20px",
                            }}
                          >
                            <img
                              src={image}
                              alt="Icon"
                              style={{
                                width: "40px",
                              }}
                            />
                            <h3
                              class="item-heading"
                              style={{
                                marginTop: "7px",
                              }}
                            >
                              Website
                            </h3>
                          </div>
                          <hr
                            style={{
                              height: "5px",
                              marginTop: "10px",
                              width: "70%",
                              color: "black",
                              backgroundColor: "black",
                            }}
                          />
                          <div class="item-list">
                            <div class="item-list-info">
                             <Link href="/services-webDesign"> <h4>UI/UX</h4></Link>
                            </div>
                          </div>
                          <div class="item-list">
                            <div class="item-list-info">
                             <Link href="/services-webDevelopment"><h4>Web Development</h4></Link> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="nav_list">
                  <a href="#!" class="nav_link">
                    <Link href="/business-consultancy">
                      <span>Business Consultancy</span>
                    </Link>
                  </a>
                </li>
                <li class="nav_list">
                  <a href="#!" class="nav_link">
                    <Link href="/blogs">
                      <span>Blogs</span>
                    </Link>
                  </a>
                </li>
                <li class="nav_list nav_list_menu">
                  <div
                    onMouseEnter={handleMouseEnterResource}
                    onMouseLeave={handleMouseLeaveResource}
                  >
                    <a href="#!" class="nav_link">
                      <span>Resources</span>
                      {isResourceActive ? (
                        <ArrowDropUpIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          sx={{
                            // marginTop: "5px",
                          }}
                        />
                      )}
                    </a>
                    <div class="dropdown-resource">
                      <div class="dropdown-inner-resource">
                        <div class="dropdown-item-resource">
                          <div className="resource-option">
                            <div class="item-list-resource">
                              <div class="item-list-info-resource">
                                <Link href="/case-studies">
                                <Typography variant="body1" sx={{fontWeight:"medium"}}>Case Studies</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="resource-option">
                            <div class="item-list-resource">
                              <div class="item-list-info-resource">
                                <Link href="/ebook">
                                <Typography variant="body1" sx={{fontWeight:"medium"}}>Ebooks</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="resource-option">
                            <div class="item-list-resource">
                              <div class="item-list-info-resource">
                                <Link href="/infographics">
                                <Typography variant="body1" sx={{fontWeight:"medium"}}>Infographics</Typography>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="nav_action">
                <Button
                  sx={{
                    backgroundColor: "#3C486B",
                    borderRadius: 4,
                    padding: "1ch 2ch",
                    "&:hover": {
                      backgroundColor: "#3C487E",
                    },
                  }}
                >
                  <Link href="/contact-us">Contact us</Link>
                </Button>
                <div class="nav_toggle">
                  {isActive ? (
                    <CloseIcon onClick={toggleMenu} />
                  ) : (
                    <MenuIcon onClick={toggleMenu} />
                  )}
                </div>
              </div>
              </div>
            </nav>
          </div>
        </header>
      </Grid>
    </Grid>
  );
}