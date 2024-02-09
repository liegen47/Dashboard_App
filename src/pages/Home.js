import Charts from "../components/Charts";
import MyNavbar from "../components/MyNavbar";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      {" "}
      <MyNavbar></MyNavbar>
      <Container fluid className="home-section">
        <Charts></Charts>
      </Container>
    </div>
  );
}

export default Home;
