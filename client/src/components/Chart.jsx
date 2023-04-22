import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import './chart.css'
const Chart = () => {
  return (
    
     <div className='chart'>
     <CChart
type="doughnut"
data={{
 labels: ['Phishing Attack', 'XSS Attack', 'RCE', 'Mobile Attack'],
 datasets: [
   {
     backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
     data: [40, 20, 80, 10],
   },
 ],
}}
/>
 </div>

  )
}

export default Chart