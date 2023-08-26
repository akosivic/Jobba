import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import SearchBar from "../../components/searchbar/searchbar";
import Pagination from "react-bootstrap/Pagination";
import "./findjobs.scss";
import DefaultPage from "/src/pages/defaultpage";

export default function FindJobs() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  let cardcount = 5;
  let cards = [];
  for (let ctx = 0; ctx <= cardcount; ctx++) {
    cards.push(
      <ListGroup.Item>
        <Row>
          <Col lg={2} sm={12} className=""></Col>
          <Col lg={8} sm={12}>
            <Card.Title>Company {ctx + 1}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
          <Col lg={2} sm={12} className="my-auto sm-float-left">
            <ButtonGroup aria-label="Basic example" size="sm">
              <Button className="border">Apply Now</Button>
              <Button className="border btn-success">
                <i className="bi bi-heart-fill"></i>
              </Button>
              <Button className="border btn-success">
                <i className="bi bi-share-fill" />
              </Button>
              <Button className="border btn-success">
                <i className="bi bi-flag-fill"></i>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <DefaultPage>
        <div className="container my-5">
          <SearchBar />
          {/* <Stack direction="horizontal" gap={3} className="mb-2">
            <div>1 - 15 of 4251 job matches</div>
          </Stack>

          <Card>
            <ListGroup variant="flush">{cards}</ListGroup>
          </Card> */}
          {/* <Pagination className="mt-1">{items}</Pagination> */}
        </div>
      </DefaultPage>
    </>
  );
}
