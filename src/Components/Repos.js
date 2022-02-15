import React, { useEffect, useState } from "react";
import { Button, Table, Typography } from "antd";
import Axios from "axios";
import Avatar from "antd/lib/avatar/avatar";

const { Title } = Typography;

const Repos = (props) => {
  const [repoloading, setRepoloading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async (n) => {
    await Axios.get(
      "https://api.github.com/users/" + props.name + "/repos"
    ).then((res) => {
        setRepoloading(false);
      setRepositories(
        res.data.map((row) => ({
          Name: row.name,
          Url: row.html_url,
        }))
      );
      //console.log(res.data);
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "URL",
      dataIndex: "Url",
      render: text => <a href={text}>{text}</a>
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={repositories}
      scroll={{ y: 150 }}
      loading={repoloading}
    />
  );
};

export default Repos;
