import React from 'react'

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card col-4">

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
   )

 }

export default Card