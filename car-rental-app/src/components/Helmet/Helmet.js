import React from "react";

const Helmet = (props) => {
  document.title = "Rent Car Service - " + props.title;
  return <div className="body_section w-100">{props.children}</div>;
};

export default Helmet;
