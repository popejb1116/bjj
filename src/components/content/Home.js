import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'
import { StoreContext } from '../../contexts/StoreContext'
import { ListHeader, ListBody } from './StyledComponents'

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

    return(       
      <div className="row">         
         <div className="col s10 offset-s1 m8 offset-m2 l4 offset-l2">
            <ListHeader>News</ListHeader>
            <ListBody>{newsItemList}</ListBody>
         </div>
         <div className="col s10 offset-s1 m8 offset-m2 l4">
            <ListHeader>Events</ListHeader>
            <ListBody>{upcomingEventList}</ListBody>
         </div>
      </div>       
    )
  }
}

export default Home