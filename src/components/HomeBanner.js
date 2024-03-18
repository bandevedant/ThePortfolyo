import { use, useContext } from "react";
import { AlexioContext,UserDataContext } from "../Context";
import TypingAnimation from "./TypingAnimation";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const {userData}=useContext(UserDataContext);
  const socialLinks = userData.user.social_handles

  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <img src="static/img/user.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm {userData.user.about.name}</h1>
                    <p>
                      <TypingAnimation />
                    </p>
                    <div className="btn-bar">
                      <a href="#" className="btn btn-theme">
                        Download CV
                      </a>
                    </div>
                  </div>
                  <ul className="social-icons">
                  {socialLinks.map((socialHandle) => (
                    <li key={socialHandle.platform} style={{ display: 'inline-block', margin: '0 7px' }}> {/* Use unique key for each social media */}
                      {socialHandle.enabled && ( // Only render enabled social media
                        <a
                          className={socialHandle.platform.toLowerCase()} // Set class based on platform
                          href={socialHandle.url}
                        >
                          <img src={socialHandle.image.url} alt={socialHandle.platform} />
                        </a>
                      )}
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
