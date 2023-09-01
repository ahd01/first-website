import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import photo from "./photo";
import description from "./description";
import price from "./price";
import name from "./name";

const Product = ({ name, description = "No description" }) => {
  const handleClick = (title) => {
    alert(title);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img>{photo}</Card.Img>
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
