import React from 'react';
import jreStock from '../../images/jre_stock2.jpg';
import articleStock from '../../images/article_stock2.jpg';
//import jreStock from '../../images/sample-1.jpg'


const NewsItem = (props) => {

  let displayPic
  if (props.item.type ==='podcast') {
    displayPic = jreStock
  } else {
    displayPic = articleStock
  }

  return (
    <div className="NewsItem">
      <div className="card horizontal small">
        <div className="card-image">
          <img src={displayPic} />              
        </div>            
        <div className="card-stacked">
          <span className="card-title">{props.item.title}</span>
          <div className="card-content">
            <p>{props.item.description.slice(0,70)+'...'}</p>
          </div>
        </div>          
      </div>
    </div>
  )
}

export default NewsItem;