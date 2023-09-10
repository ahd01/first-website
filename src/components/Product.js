import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photo from "./photo";
import description from "./description";
import price from "./price";
import name from "./name";
import { CardImg } from "react-bootstrap";

const Product = ({ name, description = "No description" }) => {
  const handleClick = (title) => {
    alert(title);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <CardImg src=".\src\components\photo.js\photo" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleClick(name);
          }}
        >
          Primary
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
