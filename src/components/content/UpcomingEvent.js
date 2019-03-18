import React, { Component } from 'react';
import mmaIcon from '../../images/event-mma-w.png'
import boxingIcon from '../../images/event-boxing-w.png'
import bjjIcon from '../../images/event-bjj-w.png'


import { Card } from './StyledComponents'

class UpcomingEvent extends Component {
  render() {

    let displayIcon
    const { title, type, description } = this.props.event
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
          <div className="card-image">
            <img src={displayIcon} />
            <span className="card-title">{title}</span>
          </div>          
         <div className="card-content">            
            <p>{description.slice(0,70)+'...'}</p>
         </div>          
        </div>
      </Card>
    )
  }
}

export default UpcomingEvent;