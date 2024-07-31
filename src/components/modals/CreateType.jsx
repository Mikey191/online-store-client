import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            placeholder="Введите название типа"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
