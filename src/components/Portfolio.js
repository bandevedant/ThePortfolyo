import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState,useContext } from "react";
import {UserDataContext } from "../Context";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";

const Portfolio = () => {

  const {userData}=useContext(UserDataContext);
  const projects=userData.user.projects;
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
          percentPosition: true,
          masonry: {
            columnWidth: ".portfolio-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    );
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <SectionContainer
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
    >
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("photoshop")} theme-after`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Photoshop
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Website
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Apps
            </li>
          </ul>
        </div>{" "}
        {/* r */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
          
          {projects.map((project) => (
              <li key={project._id} className="portfolio-item apps">
                <div className="portfolio-col portfolio-hover-01">
                  <div className="portfolio-img">
                    <a href="#"> {/* Adjust link as needed */}
                      <img src={project.image.url} alt={project.title} />
                    </a>
                    <div className="hover">
                      <div className="action-btn">
                        {/* Add links/buttons based on your requirements */}
                        <a
                          href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                          className="popup-video theme-color"
                        >
                          <i className="fa fa-play" />
                        </a>
                        <a href={project.githuburl} className="lightbox-gallery theme-color">
                          <i className="fas fa-expand" />
                        </a>
                        <a href={project.liveurl} className="theme-color">
                          <i className="fa fa-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h5>{project.title}</h5>
                    <span>Recent Work</span>
                  </div>
                </div>
              </li>
            ))}  
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
