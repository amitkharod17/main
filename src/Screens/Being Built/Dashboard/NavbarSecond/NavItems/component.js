import React from "react";

const NavItem = ({ activeTab, setActiveTab, icon, active, name, tabId }) => {
  return (
    <div
      className="d-flex flex-column my-4 cursor-pointer"
      onClick={() => setActiveTab(tabId)}
    >
      <div className="navicon mx-3 d-flex">
        <div className="d-flex m-auto">
          <img
            style={{}}
            src={icon}
            alt=""
            className="my-auto cursor-pointer"
          />
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
