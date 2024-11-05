import Steps from './components/Steps'
import MainMenu from './components/MainMenu/MainMenu'
import { dataContext } from './context/dataContext'
import { useEffect, useState } from 'react'

function App() {
  const [position, setPosition] = useState(0)
  const [fields, setFields] = useState(
    [
        {
            start: true,
            title: 'Add Requirements',
            data: [
                { type: 'selector', label: 'Customer' },
                { type: 'selector', label: 'Property Type' },
                { type: 'input', label: 'Requirement' },
                { type: 'textfield', label: 'Detailed Requirement' },
                { type: 'double-input', label: 'Price Range' },
                { type: 'selector', label: 'Time Line' },
            ]
        },
        {
          title: 'Property Location',
          data: [
              { type: 'selector', label: 'City' },
              { type: 'input', label: 'Area' }
          ]
        },
        {
          title: 'Property Features',
          data: [
            { type: 'input', label: 'Year Built' },
            { type: 'selector', label: 'Amenities' }
          ]
        },
        {
          title: 'Area',
          data: [
            { type: 'selector', label: 'Transportation & Connectivity' },
            { type: 'textfield', label: 'Community Features' },
          ]
        },
        {
          title: 'Price',
          data: [
            { type: 'selector', label: 'Transportation & Connectivity' },
            { type: 'textfield', label: 'Community Features' },
          ]
        },
        {
          title: 'Add Photos',
          data: [
            { type: 'selector', label: 'Transportation & Connectivity' },
            { type: 'textfield', label: 'Community Features' },
          ]
        },
        {
          title: 'finish',
          data: []
        }
    ]
  )
  
  const [currentField, setCurrentField] = useState(fields[position])

  useEffect(() => {
    setCurrentField(fields[position])
  }, [position])

  return (
    <dataContext.Provider value={{
      position,
      setPosition,
      fields,
      currentField,
      setCurrentField
    }}>
      <div className='flex flex-row'>
        <Steps />
        <MainMenu />
      </div>
    </dataContext.Provider>
  )
}

export default App
