import React, { useEffect } from "react";
import ChatScreen from "./ChatScreen";
import "./css/index.css";
import Sidebar from "./Sidebar";
import { updateFooter } from "../../Actions/Footer";
import { dashboard } from "../../Actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state) => state.dashboard);

  const { dashboard: data } = dashboardData;
  useEffect(() => {
    dispatch(
      updateFooter({
        footerDisplay: "none",
      })
    );
  }, []);

  console.log(data);
  return (
    <div className="index">
      <Sidebar data={data?.batch} />
      <ChatScreen data={data?.batch} />
    </div>
  );
}

export default Index;
