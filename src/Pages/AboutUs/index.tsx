import React from "react";
import Form from "../../Components/AboutUs/Form";
import Summary from "../../Components/AboutUs/Summary";
import Header from "../../Components/Header";
import StepperMob from "../../Components/Sidebar/Mob";

class AboutUs extends React.Component<{}, any> {
  constructor(props: Record<string, any>) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentWillMount = () => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => this.setState({ matches: e.matches }));
  };

  componentWillUnmount = () => {
    window
      .matchMedia("(min-width: 768px)")
      .removeEventListener("change", (e) => e);
  };

  render() {
    return (
      <section className="about-us flex flex-column h-full justify-content-between relative overflow-hidden">
        <div className="overflow-y-auto mb-3">
          {this.state.matches ? <Header /> : <StepperMob />}
          <div className="">
            <Form />
          </div>
        </div>
        <Summary />
      </section>
    );
  }
}

export default AboutUs;
