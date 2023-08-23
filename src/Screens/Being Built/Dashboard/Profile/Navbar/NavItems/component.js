import React from "react";

const NavItem = ({
  activeTab,
  setActiveTab,
  icon,
  active,
  name,
  tabId,
  scroll,
}) => {
  return (
    <div
      className="d-flex my-4 cursor-pointer"
      onClick={() => {
        window.location.href = "#";
        window.location.href = "#" + scroll;
        setActiveTab(tabId);
        {
          /* onClick(); */
        }
      }}
    >
      <div className="navicon mx-3 d-flex">
        <div className="d-flex m-auto">
          <img src={icon} alt="" className="my-auto cursor-pointer" />
        </div>
      </div>
      <div
        className={
          "navtext " +
          (tabId === activeTab ? "navtext-active" : "") +
          "  y-center"
        }
      >
        {name}
      </div>
    </div>
  );
};

export default NavItem;
