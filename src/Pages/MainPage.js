import React, { useEffect } from "react";
import { Form, Button, Input } from "antd";

import "./MainPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const MainPage = () => {
    let history = useHistory();
  /*useEffect(() => {
    fetch("https://api.github.com/search/users?q=tom")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);*/

  const searchHandler=(e)=>{
    console.log(e.name);
    history.push("/"+e.name);
  }


  return (
    <div className="search-div">
    <Form onFinish={searchHandler}>
        <h1 style={{color:"#7763FA"}}>Github API Search</h1>
        <Form.Item name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Name to search"/>
        </Form.Item>
        <Form.Item >
            <Button block type="primary" htmlType="submit" style={{backgroundColor:"#7763FA"}}>Search</Button>
        </Form.Item>
    </Form>
    </div>
  );
};

export default MainPage;
