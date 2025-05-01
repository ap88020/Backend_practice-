import React from 'react'
import Input from './input'
import { useRef } from 'react'

const subOtp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

  return (
    <div className='flex gap-7'>
      <Input ref={ref1} nextRef={ref2} />
      <Input ref={ref2} nextRef={ref3} prevRef={ref1} />
      <Input ref={ref3} nextRef={ref4} prevRef={ref2} />
      <Input ref={ref4} nextRef={ref5} prevRef={ref3} />
      <Input ref={ref5} nextRef={ref6} prevRef={ref4} />
      <Input ref={ref6} prevRef={ref5} />
    </div>
  )
}

export default subOtp