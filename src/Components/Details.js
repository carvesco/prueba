import React, { useEffect, useState } from "react";
import { Modal, Button, Spin, Avatar, Row, Col, Typography } from "antd";
import Axios from "axios";
import Orgs from "./Orgs";
import Repos from "./Repos";

const { Title } = Typography;

const Details = (props) => {
  const [details, setDetails] = useState([]);
  const [loadingDetails, setLoadingDetails] = useState(true);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async (n) => {
    await Axios.get("https://api.github.com/users/" + props.name).then(
      (res) => {
        setLoadingDetails(false);
        setDetails(res.data);
      }
    );
  };

  return (
    <Modal
      title="Details"
      visible={props.visible}
      onOk={props.close}
      onCancel={props.close}
    >
      {loadingDetails ? (
        <Row justify="space-around" align="middle">
          <Spin />
        </Row>
      ) : (
        <React.Fragment>
          <Row justify="space-around" align="middle">
            <Col>
              <Avatar size={64} src={details.avatar_url} />
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col>
              <Title style={{color:"#7763FA"}}>{details.login}</Title>
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
              <Title level={4} style={{color:"#7763FA"}}>Name</Title>
              </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col>
              <Title level={5}>{details.name}</Title>
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
              <Title level={4} style={{color:"#7763FA"}}>Profile</Title>
              </Col>
          </Row>
          <Row justify="space-around" align="middle">
            <Col>
              <Button type="link" href={details.html_url}>
                {details.html_url}
              </Button>
            </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
              <Title level={4} style={{color:"#7763FA"}}>Organizations</Title>
              </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
                <Orgs name={props.name}/>                
              </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
              <Title level={4} style={{color:"#7763FA"}}>Repositories</Title>
              </Col>
          </Row>
          <Row justify="space-around" align="middle">
              <Col>
                <Repos name={props.name}/>                
              </Col>
          </Row>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default Details;
