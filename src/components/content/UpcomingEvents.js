import React, { Component } from 'react';
import UpcomingEvent from './UpcomingEvent'

class UpcomingEvents extends Component {


  state={
    upcomingEvents: [
      {id: '1', title: 'UFC 234', type: 'MMA', date: 'Sat, Feb 9, 10:00 PM', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi veniam qui provident quasi consectetur minus, omnis dolorem nam vel atque dolorum, harum similique sequi animi, excepturi quia assumenda doloribus.'},
      {id: '2', title: 'WBO Super-Welterweight Title', type: 'Boxing', date: 'Sat, Jan 26, 08:00 PM', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi veniam qui provident quasi consectetur minus, omnis dolorem nam vel atque dolorum, harum similique sequi animi, excepturi quia assumenda doloribus.'},
      {id: '3', title: 'European IBJJF Jiu-Jitsu Championship', type: 'IBJJF', date: 'Jan 15, 08:00 AM', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi veniam qui provident quasi consectetur minus, omnis dolorem nam vel atque dolorum, harum similique sequi animi, excepturi quia assumenda doloribus.'},
      {id: '4', title: 'UFC 235', type: 'MMA', date: 'Sat, Feb 9, 10:00 PM', description:'This is the 234 ufc event featuring Robert Whittaker vs Kelvin Gastelum and Isreal Adesyanum vs Anderson Silva'},
      {id: '5', title: 'WBO Welterweight Title', type: 'Boxing', date: 'Sat, Jan 26, 08:00 PM', description:'Jamie Munguia vs Takeshi Inoue and Jesus Rojas vs Can Xu'},
      {id: '6', title: 'Greece IBJJF Jiu-Jitsu Championship', type: 'IBJJF', date: 'Jan 15, 08:00 AM', description:'Jamie Munguia vs Takeshi Inoue and Jesus Rojas vs Can Xu'},
      {id: '7', title: 'UFC 236', type: 'MMA', date: 'Sat, Feb 9, 10:00 PM', description:'This is the 234 ufc event featuring Robert Whittaker vs Kelvin Gastelum and Isreal Adesyanum vs Anderson Silva'},
      {id: '8', title: 'WBO Super-Welterweight Title', type: 'Boxing', date: 'Sat, Jan 26, 08:00 PM', description:'Jamie Munguia vs Takeshi Inoue and Jesus Rojas vs Can Xu'},
      {id: '9', title: 'Japan IBJJF Jiu-Jitsu Championship', type: 'IBJJF', date: 'Jan 15, 08:00 AM', description:'Jamie Munguia vs Takeshi Inoue and Jesus Rojas vs Can Xu'}
    ]
  }

  render() {

    const upcomingEventList = this.state.upcomingEvents.map(item => {
      return (
        <UpcomingEvent id={item.id} event={item}/>
      )
    })

    return (
      <div className="UpcomingEvents container">
        <h3 className="header">Upcoming Events</h3>
        {upcomingEventList}
      </div>
    )
  }
}

export default UpcomingEvents;