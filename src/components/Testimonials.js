import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
import { useContext } from "react";
import { UserDataContext } from "../Context";

const Testimonials = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What People Say?</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        {/* Directly render testimonials within the Slider */}
        {userData.user.testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-col">
            <div className="say">
              <p>{testimonial.review}</p>
            </div>
            <div className="user">
              <div className="img">
                <img src="static/img/avtar1.jpg" alt={testimonial.name} />
              </div>
              <div className="name ml-2">
                <span>{testimonial.name}</span>
                <label>{testimonial.position}</label>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
