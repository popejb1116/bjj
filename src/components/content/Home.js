import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'
import { StoreContext } from '../../StoreContext'
import { ListWrapper, List, ListHeader } from './StyledComponents'

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
      <ListWrapper>

        <List>
          <ListHeader>News Feed</ListHeader>
          {newsItemList}
        </List>

        <List>
          <ListHeader>Upcoming Events</ListHeader>
          {upcomingEventList}
        </List>

      </ListWrapper>        
    )
  }
}

export default Home