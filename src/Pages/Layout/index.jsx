import "./index.scss";
import React from "react";
import Sidebar from "../../Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";
import StepperMob from "../../Components/Sidebar/Mob";
import Header from "../../Components/Header";

const Layout = props => {

  return (
      <main className="main-layout overflow-x-hidden">
        <div className="grid h-screen mt-0">
          <div className={`hidden h-screen lg:flex lg:col-3 lg:pb-0 lg:pt-0 main-layout__sidebar`}>
            <Sidebar />
          </div>
          <div className={`lg:col-9 col-12 py-0 h-full`}>
          <section className="h-full relative overflow-hidden">
            <div className="overflow-y-auto h-full flex flex-column mb-1">
              <div className="hidden lg:block">
                <Header />
              </div>
              <div className="lg:hidden block">
                <StepperMob />
              </div>
              
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<AboutUs />} />
                </Routes>
              </BrowserRouter>
            </div>
          </section>
          </div>
        </div>
      </main>
    );
}

export default Layout;
