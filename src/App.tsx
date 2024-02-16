// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "./components/Hooks";
// import { getMusicAction } from "./redux/store/actions";
import "./App.css";
import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/BottomPlayer.css";
import "./assets/css/SideBar.css";
import "./assets/css/MainPageSection.css";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
// import { useDispatch } from "react-redux";

const App = () => {
  return (
    <>
      <SideBar />
      <MainSection />
      <Player />
    </>
  );
};

export default App;
