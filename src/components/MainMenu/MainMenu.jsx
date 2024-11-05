import React from 'react'
import StepChart from './StepChart'
import FormFields from './FormFields'

function MainMenu() {
  return (
    <div className=' h-[95vh] w-[40vw] mt-[1.5em] shadow-2xl rounded-md '>
      <StepChart />
      <FormFields />
    </div>
  )
}

export default MainMenu