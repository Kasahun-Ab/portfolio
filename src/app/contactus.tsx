// import { Facebook } from '@mui/icons-material'
// import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react'

function contactus() {
  return (
    <div className=' bg-transparent text-center text-gray-100'>
          
    <div className="container px-16 pt-40 pb-20  mx-auto text-left md:text-center lg:text-left   grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-4  ">
   
     <div className="flex py-4 flex-col gap-6 ">
    <h3 className=' text-2xl md:text-3xl lg:text-3xl text-teal-200'>Aqu Development</h3>
    <p className=' '>
      Firmament morning sixth subdue<br />  darkness creeping gathered divide.
    </p>
    <div>
  {/* <TelegramIcon/>
    <Facebook/> */}
    
    </div>
     </div>

     <div className="  py-4 flex flex-col gap-6" >
        <h2 className='  text-white   text-2xl'>Services</h2>
        <div className=' text-left flex flex-col gap-4'>
        <a href="#" className=' hover:text-blue-400'>Design</a>
        <a href="#" className=' hover:text-blue-400'>Web Develpment</a>
        <a href="#" className=' hover:text-blue-400'>Mobile App Develpment</a>
        </div>
     </div>
     <div className=" py-4 flex flex-col gap-6">
    <h2 className='text-2xl   text-white'>Useful Links</h2>
    <div className='flex text-left flex-col gap-4 '>
        <a href="#" className=' hover:text-blue-400'>Home</a>
        <a href="#" className=' hover:text-blue-400'>About</a>
        <a href="#" className=' hover:text-blue-400'>Services</a>
        <a href="#" className=' hover:text-blue-400'>Contacts</a>
    </div>
     </div>
     <div className=" py-4 flex flex-col gap-6">
        <h2 className='text-2xl   text-white'>Address</h2>
        <div className='flex flex-col  text-left  gap-4'>
            <a href="#" className=' hover:text-blue-400'>Hossana,Ethiopia</a>
            <a href="#" className=' hover:text-blue-400'>+251938951000</a>
            <a href="#" className=' hover:text-blue-400'>aquDevelopment@gmail.com</a>
        </div>
     </div>
     </div>

    </div>
  )
}

export default contactus