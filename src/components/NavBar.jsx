import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            КупиДевайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>Админ панель</Button>
              <Button
                variant={"outline-light"}
                style={{ marginLeft: "15px" }}
                onClick={() => user.setIsAuth(false)}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
