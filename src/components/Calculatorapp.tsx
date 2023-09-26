 "use client"
 import React,{useState}from 'react'
 import Button from './Button';

  const Calculator = () => {
  const[input, setinput]=useState('')
  
  const Calculate=()=>{
    try{
        setinput(String(eval(input)));
    } catch (err) {
        setinput('Error')
    }
  };
  const Handlekey=(value:string)=>{
 setinput(`${input}${value}`)
  };
  
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
 <div className=' bg-gray-400 p-4 rounded'>
 <div className='mb-4'>
    <input
    placeholder='0'
    value={input}
    readOnly
    className='p-2 border border-gray-400 rounded-md text-right w-full'
    />
    </div>
    <div className='grid grid-cols-4 gap-2 '>
 {'123/456*789-0.+'.split('').map((num)=>(

 <Button key={num} text={num} onclick={()=>Handlekey(num)}/>

 ))}
 <Button
 text='='
 onclick={Calculate}
 color='bg-green-500 p-2 '
 />
 <Button
 text='C'
 onclick={()=>setinput('')}
 color='bg-red-500 p-2'
 />
 </div>

 </div>
    </div>
  )
 };

 export default Calculator;