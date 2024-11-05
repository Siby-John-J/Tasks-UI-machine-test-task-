import React, { useContext, useState } from 'react'
import CheckMark from "../../assets/checkmark.png"
import { dataContext } from '../../context/dataContext';

function StepChart() {
    const { currentField } = useContext(dataContext)
    const { title } = currentField
    const [steps, setSteps] = useState([
        'Add Requirements', 
        'Property Location', 
        'Property Features', 
        'Area', 'Price', 
        'Add Photos',
    ])
    
    return (
        <div className='flex flex-row mx-[2em] py-[1em] '>
            {
                steps.map((item, index) => {
                    if(index === steps.length - 1) {
                        if(title === 'finish') {
                            return <StepNav isTailFill={false} isFill={false} value={index} end={true} />
                        } else {
                            return <StepNav isTailFill={false} isFill={true} value={index} end={true} />
                        }
                    } else {
                        if(index < steps.indexOf(title)) {
                            return <StepNav isTailFill={false} isFill={false} value={index}/>
                        } else if(title === 'finish'){
                            return <StepNav isTailFill={false} isFill={false} value={index}/>
                        } else {
                            return <StepNav isTailFill={true} isFill={true} value={index}/>
                        }
                    }
                })
            }
        </div>
    )
}

function StepNav(props) {
    const { end, value, isFill, isTailFill } = props
    let color = 'bg-gray-200'
    let tail = 'bg-slate-300'

    if(!isFill) color = 'bg-red-400'
    if(!isTailFill) tail = 'bg-red-400'

    return (
        <div className='flex flex-row '>
            <div className=' flex flex-row items-center justify-center'>
                <div className='flex flex-col w-fit'>
                    <div className={'w-[2.2em] h-[2.2em] rounded-full border-gray-400 border-[1px] flex flex-col items-center justify-center ' + color}>
                    <img src={CheckMark} alt="checkmark" className="w-[16px] h-[16px] object-contain" />
                    </div>
                    <h1 className='text-[12px]'>step {value + 1}</h1>
                </div>
                {
                    !end && <div className={'h-[4px] w-[4em] mx-1 mb-5 ' + tail}></div>
                }
            </div>
        </div>
    )
}

export default StepChart