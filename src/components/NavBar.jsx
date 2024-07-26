import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { NavLink, useNavigate } from "react-router-dom";


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            КупиДевайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>
                Админ панель
              </Button>
              <Button
                variant={"outline-light"}
                style={{ marginLeft: "15px" }}
                onClick={() => history(LOGIN_ROUTE)}
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
