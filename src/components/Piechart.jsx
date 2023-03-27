import React from 'react';
import { PieChart, Pie ,Tooltip} from 'recharts';
import data from './data';


const Pchart = () => {
  return (
    
     
      
        <PieChart width={400} height={400}>
          <Pie dataKey="value"
          
          data={data}
          cx={200}
          cy={200}
          outerRadius={120}
          fill="#8884d8"
          label/>
          <Tooltip/>
        </PieChart>
  )
}

export default Pchart