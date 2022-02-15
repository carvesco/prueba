import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Axios from "axios";
import { Table, Space, Button,  Spin,  Typography } from "antd";

import "./ResultsPage.css";
import Avatar from "antd/lib/avatar/avatar";
import Details from "../Components/Details";
import MainHeader from "../Components/MainHeader";

const { Title } = Typography;

function ResultsPage() {
  const name = useParams().name;
  const [state, setstate] = useState([]);
  const [searchTotal, setSearchTotal] = useState();
  const [loading, setloading] = useState(true);

  const [showDetails, setShowDetails] = useState(false);

  const [detailsName, setDetailsName] = useState();
  useEffect(() => {
    getData(1);
  }, []);

  const getData = async (pagination) => {
    await Axios.get(
      "https://api.github.com/search/users?q=" +
        name +
        "&page=" +
        pagination.current
    ).then((res) => {
      setloading(false);
      setstate(
        res.data.items.map((row) => ({
          Name: row.login,
          Url: row.html_url,
          id: row.id,
          avatar: row.avatar_url,
        }))
      );
      let count = Math.floor(res.data.total_count / 30);
      setSearchTotal(count);
      console.log(res.data.items);
    });
  };

  const openDetails = (details) => {
    setShowDetails(true);
    setDetailsName(details.Name);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      width: 150,
    },
    {
      title: "URL",
      dataIndex: "Url",
      width: 150,
    },
    {
      title: "Details",
      dataIndex: "Details",
      width: 150,
      render: (text, record) => (
        <Space size="middle">
          <Button block type="primary"style={{backgroundColor:"#7763FA"}} onClick={(e) => openDetails(record)}>
            Details
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <MainHeader/>
      {loading ? (
        <div className="results-div">
        <Spin />
        </div>
      ) : (
        <React.Fragment>
          {showDetails && (
            <Details
              name={detailsName}
              visible={showDetails}
              close={closeDetails}
            />
          )}
          <div className="results-div">
            <h1>Results for {name}</h1>
            <Table
              columns={columns}
              dataSource={state}
              pagination={{ total: searchTotal, pageSize: 30 }}
              scroll={{ y: 650 }}
              loading={loading}
              onChange={getData}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ResultsPage;
