import React from 'react'
import DashboardHome from './DashboardHome';
import Quics from './Quics';
import Statistic from './Statistic';
import StudentDirectory from './StudentDirectory';
const index = () => {
  return (
    <div>
      <DashboardHome/>
      <Quics/>
      <Statistic/>
      <StudentDirectory/>
    </div>
  )
}

export default index
