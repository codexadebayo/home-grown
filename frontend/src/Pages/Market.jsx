import React from 'react'
import Banner4 from '../Components/Banner4/Banner4'
import Subscription from '../Components/Subscription/Subscription'
import Popular from '../Components/Popular/Popular'
import Produce from "../Components/Produce/Produce";

const Market = () => {
  return (
    <div>
        <Banner4/>
        <Subscription/>
        <Popular/>
        <Produce/>
    </div>
  )
}

export default Market