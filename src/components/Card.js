import React from 'react'
import Onecard from './Onecard';
import card from  '../cardstyle.css'

const Card = () => {
  return <section className="pricing py-5">
    <div className="container">
      <div className="row">
        <Onecard pm="$0" />
        <Onecard pm="$9" />
        <Onecard pm="$49" />



      </div>
    </div>
  </section>
}

export default Card;