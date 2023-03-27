import React from 'react'
import data from './data'

import {  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';
const Bargraph = () => {
  return (
    <BarChart
    width={600}
    height={500}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 30,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="4 4" />
    <XAxis dataKey="year" />
    <YAxis dataKey="value"/>
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#8884d8" />
    <Bar dataKey="years" fill="#82ca9d" />
    
  </BarChart>
  )
}

export default Bargraph