import SectionContainer from "./SectionContainer";
import { useContext } from "react";
import { AlexioContext,UserDataContext } from "../Context";

const Services = () => {
  const {userData}=useContext(UserDataContext);
  const timelineItems = userData.user.timeline.sort((a, b) => a.sequence - b.sequence);
  const topThreeItems = timelineItems.slice(0, 3);
  const skillsData=userData.user.skills;
  const filteredSkills = skillsData.filter(
    (skill) => skill.enabled // Filter only enabled skills
  );

  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
            {topThreeItems.map((timelineItem) => (
        <li key={timelineItem.sequence} className="timeline-item">
          <div className="r-name">
            <i className="theme-bg ti-briefcase" />
            <span className="dark-color">{timelineItem.company_name}</span>
            <label>
              {new Date(timelineItem.startDate).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
              {' - '}
              {timelineItem.endDate
                ? new Date(timelineItem.endDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })
                : 'Present'}
            </label>
          </div>
          <div className="r-info">
            {timelineItem.summary && (
              <p>{timelineItem.summary}</p>
            )}
          </div>
        </li>
      ))}
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">University</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Design and Art</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Design Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Coral Draw</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Photoshop</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Illustrator</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
          <h3 className="dark-color">Coding Skills</h3>
          <div className="skills">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="skill-item" style={{ padding: "7px 0" }}> {/* Removed li tag, added class */}
                <div className="progress-lt">
                  <h6>{skill.name}</h6>
                  <span className="theme-bg">{skill.percentage}%</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.percentage}%` }} // Dynamic width using string interpolation
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
