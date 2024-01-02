import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Product from '../products.jsx'
import Name from './Name'
import Description from './Description'
import Price from "./Price";
// YourComponent.js
import '../assets/styles.css'; // Adjust the path accordingly

function BasicExample() {
  return (
    <Card className="custom-card" style={{ width: '18rem'}}> 
      <Card.Img variant="top" src={Product.imageUrl} style={{width: '20vw'}}/>
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
        <Description />
        </Card.Text>
        <Button variant="primary"><Price /></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;    