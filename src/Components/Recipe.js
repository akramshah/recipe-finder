import React from 'react'

const Recipe = ({name,calories,image,ingredients}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{calories}</p>
      <img src={image}></img>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe;