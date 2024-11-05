import React, { useEffect, useState, useContext, useRef } from 'react'
import { dataContext } from '../context/dataContext'

function Steps() {
    const { fields } = useContext(dataContext)
    const [steps, setStepFields] = useState([])

    useEffect(() => {
        const res = fields.map(item => item.title)
        setStepFields(prev => res)
    }, [])
    
    return (
        <div className='h-[100vh] w-[20vw] flex flex-col items-start pt-[2em]'>
            {
                steps.map((item, index) => {
                    if(index === steps.length - 1) {
                        return <SingleStep index={index} data={item} end={true} />
                    } else {
                        return <SingleStep index={index} data={item}/>
                    }
                })
            }    
        </div>
    )
}

function SingleStep(props) {
    const { data, end, index } = props
    const { position } = useContext(dataContext)

    return (
        <div className='flex flex-row ml-[30%]'>
            <div className='mr-2 flex flex-col items-center'>
                <input type="radio" className='h-[1em] w-[1em]' checked={
                    index === position ? true: false
                } />
                {
                    !end && <div className='bg-slate-300 w-[4px] h-[3em]'></div>
                }
            </div>
            <div className='font-semibold'>{data}</div>
        </div>
    )
}



export default Steps