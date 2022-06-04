import "./index.scss";
import { Steps } from "primereact/steps";
import { useState } from "react";

const Stepper = (props: Record<string, any>) => {
  let [activeIndex, setActiveIndex] = useState(0);

  const interactiveItems = [
    {
      label: "Personal",
      command: (event: Record<string, any>) => {
        console.log(`Personal`);
      },
    },
    {
      label: "Seat",
      command: (event: Record<string, any>) => {
        console.log(`Seat`);
      },
    },
    {
      label: "Payment",
      command: (event: Record<string, any>) => {
        console.log(`Payment`);
      },
    },
    {
      label: "Confirmation",
      command: (event: Record<string, any>) => {
        console.log(`Confirmation`);
      },
    },
  ];

  const stepperData: Array<{ title: string; description: string }> = [
    {
      title: `Personal Details`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
    },
    {
      title: `Policy Coverage`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
    },
    {
      title: `Payment`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
    }
  ];

  return (
    <section className="stepper">
      <ul className="stepper__ui list-none p-0 mx-3 my-7">
        {stepperData.map((item, i) => (
          <li className={`stepper__li pb-4 ${activeIndex === i ? 'active' : ''}`} key={i} onClick={()=> setActiveIndex(i)}>
            <span className={`icon text-white ${activeIndex === i ? 'bg-orange-600' : 'bg-orange-100'}`}>
              {/* <i className="pi pi-check m-auto"></i> */}
              {activeIndex === i ? <i className="pi pi-check m-auto"></i> : <span className="text-orange-700 m-auto font-bold">{i + 1}</span>}
            </span>
            <span className="title font-bold mx-2 capitalize">{item.title}</span>
            <span className="description mx-4 pt-2 line-height-1 text-black-alpha-50">{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stepper;
