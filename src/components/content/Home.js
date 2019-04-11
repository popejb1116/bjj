import React, { Component } from 'react';
import NewsItem from './NewsItem'
import UpcomingEvent from './UpcomingEvent'
import { StoreContext } from '../../contexts/StoreContext'
import { ListHeader, ListBody } from './StyledComponents'

class Home extends Component {

   static contextType = StoreContext

      state = {
      newsItems: null,
      upcomingEvents: null,
      loadingData: true
   }

   componentDidMount(){
      console.log('/Home CDM')
   // async grab data from central data context, probably do this is StoreContext actually
      const { newsItems, upcomingEvents } = this.context.state
      
      this.setState({
         newsItems: newsItems,
         upcomingEvents: upcomingEvents,
         loadingData: false
      }, () => {
         console.log('/Home post setstate')
      })

   }

   render() {
      
      // let nis = this.state.newsItems ?  ('true') : ('false')
      // let ues = this.state.upcomingEvents ? ('true') : ('false')
      // let lds = this.state.loadingData ? ('true') : ('false')
      // console.log('/Home render status:')
      // console.log(nis + ' : ' + ues + ' : ' + lds)

      if (this.state.loadingData) {
         console.log('render NULL')
         return null
         
      } else {

         console.log('render view')

         const { newsItems, upcomingEvents } = this.state

         const newsItemList = newsItems.map(item => {
            return <NewsItem key={item.id} item={item} />
         })
   
         const upcomingEventList = upcomingEvents.map(event => {
            return (
               <UpcomingEvent key={event.id} event={event}/>
            )
         })

         return (       
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


}

export default Home