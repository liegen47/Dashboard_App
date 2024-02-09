import MyNavbar from "../components/MyNavbar";
import Todo from "../components/Todo";
import { Container } from "react-bootstrap";

function TodoPage() {
  return (
    <div>
      {" "}
      <MyNavbar></MyNavbar>
      <Container fluid className="Todo-section">
        <Todo></Todo>
      </Container>
    </div>
  );
}

export default TodoPage;
