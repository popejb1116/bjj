import React, { Component } from 'react';
import mmaIcon from '../../images/event-mma-w.png'
import boxingIcon from '../../images/event-boxing-w.png'
import bjjIcon from '../../images/event-bjj-w.png'
import { Card } from './StyledComponents'
import styled from 'styled-components'

const ImageContainer = styled.div`
  background-color: transparent;
  min-width: 100%;
  min-height: 250px;
`

const UpcomingEvent = props => {

  let displayIcon
  const { title, type, description } = props.event
  if (type ==='MMA') {
    displayIcon = mmaIcon
  } else if (type ==='Boxing'){
    displayIcon = boxingIcon
  } else {
    displayIcon = bjjIcon
  }

  return (
    <Card>
      <div className="card">
        <ImageContainer className="card-image">
          <img src={displayIcon} />
        </ImageContainer>          
        <div className="card-content">           
          <span className="card-title">{title}</span> 
          <p>{description.slice(0,70)+'...'}</p>
        </div>          
      </div>
    </Card>
  )
  
}

export default UpcomingEvent;