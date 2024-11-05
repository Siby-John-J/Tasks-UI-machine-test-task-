import React, { useState, useContext } from 'react'
import { dataContext } from '../../context/dataContext'
import CheckMark from "../../assets/checkmark.png"

function FormFields() {
    const { currentField } = useContext(dataContext)
    const { data, title } = currentField

    return (
        <div className='flex justify-center w-[100%] h-[90%]'>
            <SingleForm fields={data} title={title} />
        </div>
    )
}

function SingleForm(props) {
    const { fields, title } = props
    const [isBorder, setIsBorder] = useState(true)
    const { currentField } = useContext(dataContext)
    
    const border = isBorder ? 'border-blue-500 border-[4px] ' : 'border-gray-400 border-[1px] '

    if(currentField.title === 'finish') {
        return (
            <div className='flex flex-col items-center'>
                <img className='bg-red-600 py-3 px-3 h-[70px] rounded-full' src={CheckMark} alt="" srcset="" />
                <h1 className='mt-2 font-bold text-[30px]'>Finished</h1>

                <a className='bg-blue-500 rounded-md text-white shadow-md px-2 py-1 mt-2' href="">Submit Again</a>
            </div>
        )
    }
    
    return (
        <div
            onClick={e => setIsBorder(prev => !isBorder)} 
            className={border + 'bg-slate-100 w-[90%] h-fit rounded-md px-[5em] py-[1em]'}>
            <h1 className='font-medium py-[0.4em]'>{title}</h1>
            <div>

                {
                    fields.map(data => {
                        const { type, label } = data
                        return <InputField type={type} label={label} />
                    })
                }
            </div>
            <NavigateToNext /> 
        </div>
    )
}

function NavigateToNext() {
    const { setPosition, position } = useContext(dataContext)

    return (
        <div className='w-[100%] py-[1em] flex justify-end'>
            {
                position !== 0 && 
                <button 
                    onClick={e => setPosition(prev => prev - 1)} 
                    className='bg-slate-500 text-white px-3 py-1 rounded-sm shadow-md mr-3'>
                    Previous
                </button>
            }
            <button
                onClick={e => setPosition(prev => prev + 1)} 
                className='bg-red-500 text-white px-3 py-1 rounded-sm shadow-md'>Next</button>
        </div>
    )
}

function InputField(props) {
    const { label, type } = props
    
    return (
        <div className='flex flex-col'>
            <label className='my-2 text-[14px] text-gray-600' htmlFor="">{label}</label>
            <InputTypeSelector type={type} />
        </div>
    )
}

function InputTypeSelector(props) {
    const { type } = props
    const globalStyle = 'border-gray-600 border-[1px] outline-none rounded-md px-2'

    if(type === 'input') {
        return <input type="text" className={'h-[2.2em] ' + globalStyle } />
    }

    if(type === 'selector') {
        return (
            <select name="" id="" className={'h-[2.2em] ' + globalStyle }>
                <option value="">boi</option>
                <option value="">boi</option>
                <option value="">boi</option>
                <option value="">boi</option>
            </select>
        )
    }

    if(type === 'textfield') {
        return (
            <textarea className={ globalStyle } name="" id="" rows="3"></textarea>
        )
    }

    if(type === 'double-input') {
        return (
            <div className='flex flex-row justify-between'>
                <input type="text" className={'h-[2.2em] w-[47%] ' + globalStyle } />
                <input type="text" className={'h-[2.2em] w-[47%] ' + globalStyle } />
            </div>
        )
    }
}

export default FormFields