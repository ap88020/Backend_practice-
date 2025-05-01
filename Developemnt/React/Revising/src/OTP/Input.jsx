import React from 'react'
import { forwardRef } from 'react'


const Input = forwardRef(({nextRef,prevRef},ref) => {
    const handleKeyUp = (e)=>{
        if(e.key >= '0' && e.key <= '9'){
            if(nextRef && nextRef.current) nextRef.current.focus();
        }else if(e.key === 'Backspace'){
            if(prevRef && prevRef.current) prevRef.current.focus();
        }
    }
    return (
        <div>
            <input 
                type="text" 
                className='w-10 h-10 rounded p-2 border border-pink-600 outline-none'
                maxLength={1} 
                onKeyUp={handleKeyUp}
                ref={ref}
            />
        </div>
    )
})



export default Input