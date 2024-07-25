import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext } from "react";
import DeviceItem from "./DeviceItem";
import { Row } from "react-bootstrap";

const DeviceList = observer(() => {
  const { devices } = useContext(Context);

  return (
    <Row className="d-flex">
      {devices.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;