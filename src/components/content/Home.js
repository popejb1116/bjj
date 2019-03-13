import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'
import { StoreContext } from '../../StoreContext'
import { ListHeader } from './StyledComponents'

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
         
         <div className="col s10 offset-s1 m8 offset-m2 l3 offset-l2">
            <ListHeader>News</ListHeader>
            {newsItemList}   
         </div>

         <div className="col s10 offset-s1 m8 offset-m2 l3 offset-l2">
            <ListHeader>Events</ListHeader>
            {upcomingEventList}
         </div>
      </div>
       
    )

    
  }
}

export default Home