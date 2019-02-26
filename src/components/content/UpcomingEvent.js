import React, { Component } from 'react';
import mmaIcon from '../../images/event-mma.jpeg'
import boxingIcon from '../../images/event-boxing.jpeg'
import bjjIcon from '../../images/event-bjj.jpeg'

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
      <div className="UpcomingEvent">
        <div className="card horizontal small">
          <div className="card-image">
            <img src={displayIcon} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpcomingEvent;