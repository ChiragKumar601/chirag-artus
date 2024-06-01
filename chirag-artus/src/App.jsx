import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./header.css";
import "./sidebar.css";
import MainBody from "./MainBody";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div>
        <Header />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
