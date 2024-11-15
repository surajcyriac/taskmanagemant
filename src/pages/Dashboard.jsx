import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import View from '../component/View'
import { json } from 'react-router-dom'



const Dashboard = () => {


  return (

<>
<Header insideDashboard={true}></Header>

<div className="container-fluid" style={{paddingTop:'100px'}}>
<div className="row mt-3">
  <div className="col-lg-8">
    <h1>welcome <span className='text-warning'> username</span></h1>
    <View></View>
  </div>

</div>


</div>

</>  )
}

export default Dashboard