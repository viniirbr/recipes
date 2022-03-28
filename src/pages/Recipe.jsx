import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

  const [details, setDetails] = useState({});
  const [active, setActive] = useState('instructions')
  const params = useParams()

  const fetchDetails = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const response = await data.json();
    setDetails(response);
    
  }

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name])


  return (
    <DetailWrapper>
      <Main>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </Main>
      <Info>
        <Button
          onClick={() => setActive('instructions')}
          className={active === 'instructions' ? 'active' : ''}>
          Instructions
        </Button>
        <Button
          onClick={() => setActive('ingredients')}
          className={active === 'ingredients' ? 'active' : ''}>
          Ingredients
        </Button>
        {active === 'instructions' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
          </div>
        )}

        {(active === 'ingredients') && (
          <ul>
          {details.extendedIngredients.map(ingredient => {
            return (
              <li key={ingredient.id}>{ingredient.original}</li>
            )
          })}
        </ul>
        )}

        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-around;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h4 {
    margin: 1rem 0;
  }
  li {
    font-size: 1rem;
    line-height: 2rem;
  }
  ul {
    margin-top: 1rem;
  }
`
const Main = styled.div`
  width: 50%;
  img {
    width: 80%;
  }
`

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1.7rem;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
`
const Info = styled.div`
  width: 40%;
`

export default Recipe