
import Card from "react-bootstrap/Card";


const CardImagen = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.imagen}/>
    <Card.Body>
    <Card.Title>{props.titulo}</Card.Title>
    <Card.Text>
    {props.descripcion}
      </Card.Text>
      </Card.Body>
      </Card>
  )
}

export default CardImagen;