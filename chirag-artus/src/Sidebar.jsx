import React from "react";
import ellipse_A from "./sidebar-images/ellipse_A.svg";
import streamline_graph from "./sidebar-images/streamline_graph.svg";
import chat from "./sidebar-images/chat.svg";
import real_bulb from "./sidebar-images/real_bulb.svg";
import pajamas_requirements from "./sidebar-images/pajamas_requirements.svg";
import grp_two_final from "./sidebar-images/grp_two_final.svg";
import graph_nodes_flow from "./sidebar-images/grp_two_final.svg";
import green_circle from "./sidebar-images/green_circle.svg";
import white_circle from "./sidebar-images/white_circle.svg";
import ellipse_B from "./sidebar-images/ellipse_B.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="ellipse-1">
        <img src={ellipse_A} alt="ellipse_A" />
      </div>
      <div className="icons">
        <div className="image-icons">
          <img src={streamline_graph} alt="streamline_graph" />
          <img src={chat} alt="chat" />
          <img src={real_bulb} alt="real_bulb" />
          <img src={graph_nodes_flow} alt="graph_nodes_flow" />
          <img src={pajamas_requirements} alt="pajamas_requirements" />
          <img src={grp_two_final} alt="grp_two_final" />
        </div>
        <div className="colored-circle">
          <img src={green_circle} alt="green_circle" />
          <img src={white_circle} alt="white_circle" />
        </div>
        <div className="ellipse-2">
          <img src={ellipse_B} alt="ellipse_B" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
