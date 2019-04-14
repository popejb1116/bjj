import React from 'react'
import videoStock from '../../images/item-video-w.png'
import articleStock from '../../images/item-article-s.png'
import { Card } from './StyledComponents'

const NewsItem = props => {

  const { title, description, type } = props.item

  let displayPic
  switch (type) {

    case 'video':
      displayPic = videoStock
      break

    case 'article':
      displayPic = articleStock
      break
  
    default:
      break
  }

  return (
    <Card>
      <div className="card">
        <div className="card-image">
          <img src={displayPic} />  
        </div>        
          <div className="card-content">     
            <span className="card-title">{title}</span>                   
            <p>{description.slice(0,70)+'...'}</p>
          </div>        
      </div>
    </Card>
    
  )
}

export default NewsItem