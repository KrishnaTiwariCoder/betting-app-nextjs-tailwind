"use client";
import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Hotmatches from "../components/Hotmatches";
import Footer from "../components/Footer";
import SidebarAndMainContent from "../components/Sidebar";
// import { login , register } from "../actions/auth";

const Page = () => {
  return (
    <>
      <Topbar/>
      <SidebarAndMainContent/>
    </>
  );
};

export default Page