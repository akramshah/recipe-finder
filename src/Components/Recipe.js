import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

const Recipe = ({name,calories,image,ingredients}) => {
  return (
    <div>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      <b>Calories:</b> {Math.floor(calories)}
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </Card.Text>
    </Card.Body>
  </Card>
  </CardDeck>
    </div>
  )
}

export default Recipe;