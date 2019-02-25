import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'
import { StoreContext } from '../../StoreContext'

class Home extends Component {

  static contextType = StoreContext

  componentDidMount(){
    // async grab data from central data context, probably do this is StoreContext actually
  }

  render() {

    const { newsItems, upcomingEvents } = this.context.state
    
    const newsItemList = newsItems.map(item => {
      return <NewsItem key={item.id} item={item} />
    })

    const upcomingEventList = upcomingEvents.map(event => {
      return (
        <UpcomingEvent key={event.id} event={event}/>
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