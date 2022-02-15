import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const {Title} = Typography
const MainHeader = () => {
  return (
    <header style={{backgroundColor:"#7763FA",textAlign:"center", padding:"1em"}}>
      <Title  className="Title">
        <Link to="/" style={{color: "#FFFFFF"}}>Github user search</Link>
      </Title>
    </header>
  );
};

export default MainHeader;
