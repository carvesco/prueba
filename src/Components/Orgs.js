import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import Axios from "axios";
import Avatar from "antd/lib/avatar/avatar";

const { Title } = Typography;
const Orgs = (props) => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getOrgs();
  }, []);
  const getOrgs = async (n) => {
    await Axios.get(
      "https://api.github.com/users/" + props.name + "/orgs"
    ).then((res) => {
      setOrganizations(res.data);
      //console.log(res.data);
    });
  };
  if (organizations.length === 0) {
    return <Title level={5}>No organizations</Title>;
  }
  return (
    <div>
        {
            organizations.map( org=>(<a href={org.url}><Avatar shape="sqare" src={org.avatar_url} /></a>))
        }
    </div>
  );
};

export default Orgs;
