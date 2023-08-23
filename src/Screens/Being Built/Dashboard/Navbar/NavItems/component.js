import React from "react";

const NavItem = ({ activeTab, setActiveTab, icon, active, name, tabId }) => {
  return (
    <div
      className="d-flex flex-column my-4 cursor-pointer"
      onClick={() => setActiveTab(tabId)}
    >
      <div
        className={tabId === activeTab ? "navtextPhoto-active" : "navtextPhoto"}
        style={{ paddingLeft: "16px" }}
      >
        <div className="navicon  d-flex">
          <div
            className={
              tabId === activeTab
                ? "d-flex m-auto iconDiv-active"
                : "d-flex m-auto iconDiv"
            }
          >
            <img
              src={icon}
              alt=""
              className="my-auto cursor-pointer"
              style={{ height: "32px", width: "32px" }}
            />
          </div>
        </div>
      </div>
      <div
        className={
          "navtext " +
          // (tabId === activeTab ? "navtext-active" : "") +
          "  y-center"
        }
      >
        {name}
      </div>
    </div>
  );
};

export default NavItem;
