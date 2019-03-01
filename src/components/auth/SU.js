import React, { Component, Fragment } from 'react'
import M from 'materialize-css'

class SU extends Component {

   componentDidMount(){
      //const elems = document.querySelectorAll('.modal')
      const elems = document.getElementById('modal1')
      const instance = M.Modal.init(elems)
      instance.open()
   }

   componentWillUnmount(){
      const elems = document.getElementById('modal1')
      const instance = M.Modal.init(elems)
      instance.destroy()
   }

   /* removeListener = () => {
      const elems = document.getElementById('modal1')
      const instance = M.Modal.init(elems)
      instance.destroy()
   } */


   render() {
      return (
         <Fragment>

         {/* <button data-target="modal1" className="btn modal-trigger">Modal</button>
         <button className="btn" onClick={this.removeListener}>RL</button>
         */}

         <div id="modal1" className="modal">
            <div className="modal-content">
               <h4>Auth Info</h4>
               <p>Auth Form</p>
            </div>
            <div className="modal-footer">
               <a href="/auth" className="modal-close btn-flat">Cancel</a>
            </div>
         </div>

         </Fragment>
      )
   }
}

export default SU