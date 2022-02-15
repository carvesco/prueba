<Modal
            title="Details"
            visible={showDetails}
            onOk={closeDetails}
            onCancel={closeDetails}
          >
            {loadingDetails ? (
              <Spin />
            ) : (
              <React.Fragment>
                <Row justify="space-around" align="middle">
                  <Col>
                    <Avatar
                      size={64}
                      src={details.avatar_url}
                    />
                  </Col>
                </Row>
                <Row justify="space-around" align="middle">
                  <Col >
                    <Title>{details.login}</Title>
                  </Col>
                </Row>
                <Row justify="space-around" align="middle">
                  <Col>
                    <Title level={3}>{details.name}</Title>
                  </Col>
                </Row>
                <Row justify="space-around" align="middle">
                  <Col>
                    <Button type="link" href={details.html_url}>{details.html_url}</Button>
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </Modal>