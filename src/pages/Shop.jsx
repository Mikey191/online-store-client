import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";
import { observer } from "mobx-react-lite";

const Shop = observer(() => {
  const { devices } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data));
    fetchBrands().then((data) => devices.setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, []);
  useEffect(() => {
    fetchDevices(
      devices.selectedType.id,
      devices.selectedBrand.id,
      devices.page,
      2
    ).then((data) => {
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, [devices.page, devices.selectedType, devices.selectedBrand]);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
