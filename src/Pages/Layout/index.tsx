import "./index.scss";
import React from "react";
import Sidebar from "../../Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";
import StepperMob from "../../Components/Sidebar/Mob";

class Layout extends React.Component<{}, any> {
  constructor(props: Record<string, any>) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentWillMount = () => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => this.setState({ matches: e.matches }) );
  }

  componentWillUnmount = () => {
    window
    .matchMedia("(min-width: 768px)")
    .removeEventListener('change', (e) => e)
  }
  
  render() {
    return (
      <main className="main-layout overflow-x-hidden">
        <div className="grid h-screen mt-0">
          <div className={`${this.state.matches ? 'col-3 h-full p-0' : 'col-12 pt-0'} main-layout__sidebar`}>
            {this.state.matches && <Sidebar />}
          </div>
          <div className={`${this.state.matches ? 'col-9' : 'col-12'} col-9 py-0 h-full`}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AboutUs />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </main>
    );
  }
}

export default Layout;
