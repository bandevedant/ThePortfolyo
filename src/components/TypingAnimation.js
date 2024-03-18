import TypeIt from "typeit-react";
import { useContext } from "react";
import { AlexioContext,UserDataContext } from "../Context";
const TypingAnimation = () => {
  const {userData}=useContext(UserDataContext);

  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: [userData.user.about.title],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
