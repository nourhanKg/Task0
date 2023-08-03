import ElementCard from "../../layout/ElementCard";
import ElementCode from "../../layout/ElementCode";
import { Button, Card } from "react-bootstrap";
const ColoredCards = function () {
  const code = `
  <Card style={{ width: "18rem" }} bg="main" text="light">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<br />
<Card style={{ width: "18rem" }} bg="sec" text="dark">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<br />
<Card style={{ width: "18rem" }} bg="terinary" text="light">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>
  `;
  return (
    <>
      <ElementCard name="Cards with Colors">
        <Card style={{ width: "18rem" }} bg="main" text="light">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: "18rem" }} bg="sec" text="dark">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: "18rem" }} bg="terinary" text="light">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </ElementCard>
      <ElementCode code={code}></ElementCode>
    </>
  );
};
export default ColoredCards;
