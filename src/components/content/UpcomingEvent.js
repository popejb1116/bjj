import React, { Component } from 'react';
import mmaIcon from '../../images/event-mma-2.jpg'
import boxingIcon from '../../images/event-boxing.jpeg'
import bjjIcon from '../../images/event-bjj-2.jpg'

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

    const style = {
    }

    return (
      <div className="UpcomingEvent">
        <div className="card horizontal">
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