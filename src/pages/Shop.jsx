import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";

const Shop = () => {
  const { devices } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data));
    fetchBrands().then((data) => devices.setBrands(data));
    fetchDevices().then((data) => devices.setDevices(data.rows));
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
