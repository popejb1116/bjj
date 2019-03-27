import React, {Fragment} from 'react'

const DiscussionResponses = props => {
   const data = props.response.data()
   return (
      <Fragment>
         <span className="card-title">{data.answer}
            <i className="material-icons right">close</i>
         </span>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque eligendi magnam laboriosam qui rem officia totam ducimus. Tempora aperiam ullam nesciunt repudiandae, voluptatem provident nam qui voluptas nobis nulla.</p>
      </Fragment>
   )
}

export default DiscussionResponses