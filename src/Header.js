import { useContext } from "react";
import { AlexioContext,UserDataContext } from "./Context";

const Header = () => {
  const { changeNav, nav, toggle } = useContext(AlexioContext);
  const {userData}=useContext(UserDataContext);
  // console.log(userData);
  return (
    <header className="header theme-bg">
      {/* made changes here to give the name in header */}
     {userData && userData.user ? (
        <div className="logo">{userData.user.about.name}</div>
      ) : (
        <div className="logo">Loading...</div>
      )}
      <div className="menu-toggle">
        <button
          className={`menu-button ${toggle ? "menu-button--open" : ""}`}
          onClick={() => changeNav(nav, !toggle)}
        >
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
