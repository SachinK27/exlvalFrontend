import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
import logo1 from "../assets/images/GIBG.png";
import logo2 from "../assets/images/Team Aviation.png";
import logo3 from "../assets/images/Trived Pharma.png";
import logo4 from "../assets/images/SDECOR Leminates.png";
import logo5 from "../assets/images/CG Logistics.png";
import logo6 from "../assets/images/Relitrade.png";
import logo7 from "../assets/images/Growing Mafia.png";
import logo8 from "../assets/images/KeyCMS.png";
import "./CompanySlider.css"

const CompanySlider = () => {
  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="company-slider-container">
          <div className="company-slider-div">
            <div className="company-slider-track">
              <div className="company-slide-image">
                <img src={logo1} alt="logo1" className="company-slider-img" style={{transform:"scale(1)"}}/>
              </div>
              <div className="company-slide-image">
                <img src={logo2} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo3} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo4} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo5} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo6} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo7} alt="logo1" className="company-slider-img" style={{transform:"scale(1.3)"}}/>
              </div>
              <div className="company-slide-image">
                <img src={logo8} alt="logo1" className="company-slider-img"/>
              </div>
             

              {/* same as above */}
              <div className="company-slide-image">
                <img src={logo1} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo2} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo3} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo4} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo5} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo6} alt="logo1" className="company-slider-img"/>
              </div>
              <div className="company-slide-image">
                <img src={logo7} alt="logo1" className="company-slider-img" style={{transform:"scale(1.3)"}}/>
              </div>
              <div className="company-slide-image">
                <img src={logo8} alt="logo1" className="company-slider-img"/>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CompanySlider;