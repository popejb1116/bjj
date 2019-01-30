import React from 'react';
import jreStock from '../../images/jre_stock2.jpg';
import articleStock from '../../images/article_stock2.jpg';

const NewsItem = (props) => {

  let {title, description } = props.item

  let displayPic
  switch (props.item.type) {
    case 'video':
      displayPic = jreStock
      break;

    case 'article':
      displayPic = articleStock
      break;
  
    default:
      break;
  }

  return (
    <div className="NewsItem">
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
    </div>
  )
}

export default NewsItem;