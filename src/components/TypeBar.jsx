import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const TypeBar = observer(() => {
  const { devices } = useContext(Context);
  console.log(devices);
  return (
    <ListGroup>
      {devices.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === devices.selectedType.id}
          onClick={() => devices.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
