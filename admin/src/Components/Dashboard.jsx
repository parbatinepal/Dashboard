import React from 'react'
import OverView from './OverView'
import Activity from './Activity'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 bg-slate-400 px-4 pt-8">
        <OverView/>
        <Activity/>
    </div>
  )
}

export default Dashboard