import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'

class Home extends Component {

  state = {
    newsItems: [
      {id: '0', type: 'video', title: 'JRE MMA #56', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '1', type: 'article', title: 'MMA News 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '2', type: 'video', title: 'JRE MMA #54', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '3', type: 'video', title: 'JRE MMA #53', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '4', type: 'article', title: 'MMA News 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '5', type: 'video', title: 'JRE MMA #51', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '6', type: 'article', title: 'MMA News 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '7', type: 'video', title: 'JRE MMA #49', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"}
    ],
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

  componentDidMount(){
    // grab data from central data context
  }

  render() {

    const newsItemList = this.state.newsItems.map(item => {
      return <NewsItem key={item.id} item={item} />
    })

    const upcomingEventList = this.state.upcomingEvents.map(item => {
      return (
        <UpcomingEvent key={item.id} event={item}/>
      )
    })

    return (
      <div className="Home wrapper">
        <div className="flex-container">

          <div className="box">
            <h3>News Feed</h3>
            {newsItemList}
          </div>

          <div className="box">
            <h3>Upcoming Events</h3>
            {upcomingEventList}
          </div>

        </div>        
      </div>
    )
  }
}

export default Home