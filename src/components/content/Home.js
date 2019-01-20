import React, { Component } from 'react';
import NewsItem from './NewsItem'

class Home extends Component {

  state = {
    newsItems: [
      {id: '0', type: 'podcast', title: 'JRE MMA #56', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '1', type: 'article', title: 'MMA News 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '2', type: 'podcast', title: 'JRE MMA #54', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '3', type: 'podcast', title: 'JRE MMA #53', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '4', type: 'article', title: 'MMA News 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '5', type: 'podcast', title: 'JRE MMA #51', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '6', type: 'article', title: 'MMA News 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"},
      {id: '7', type: 'podcast', title: 'JRE MMA #49', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum ad assumenda corrupti debitis aut beatae, laborum odit officiis ab libero, nam alias, asperiores repellendus adipisci accusamus qui inventore? Eius.', url: "https://www.youtube.com/watch?v=HvNJaZuzDDE"}
    ]
  }

  componentDidMount(){
    // grab data from central data context
  }

  render() {

    let podcastList = this.state.newsItems.map(item => {
      if (item.type === 'podcast') {
        return (
          <NewsItem id={item.id} item={item} />          
        )
      }      
    })

    let articleList = this.state.newsItems.map(item => {
      if (item.type==='article') {
        return (
          <NewsItem id={item.id} item={item} />
        )
      }
    })

    const style = {
      redText: 'red-text text-accent-3'
    }

    return (
      <div className="Home wrapper">
        <div className="flex-container">
          <div className="box one"></div>
          <div className="box podcast-list">
            <h3 className={style.redText}>Recent Podcasts</h3>
            {podcastList}
          </div>
          <div className="box article-list">
            <h3 className={style.redText}>Recent Articles</h3>
            {articleList}
          </div>
        </div>        
      </div>
    )
  }
}

export default Home