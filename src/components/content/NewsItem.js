import React from 'react'
import videoStock from '../../images/item-video.jpeg'
import articleStock from '../../images/item-article.jpeg'
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
    <Card >
      <div className="card horizontal small">
        <div className="card-image">
          <img src={displayPic} />              
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description.slice(0,70)+'...'}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default NewsItem