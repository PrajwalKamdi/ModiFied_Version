import React from 'react'
import myntra from "/src/assets/myntra.png"
function Project() {
  return (
    <>
     <div id="project" className='p-3   md:px-10 lg:px-16 xl:px-20  2xl:px-32'>
        <h2 className="text-2xl pb-5">My Projects</h2>
        <h3 className='text-xl font-semibold pb-5'>
            On the basic of  my front end and backend knowledge i have created a simple e commerce website 
        </h3>
        <div className="md:flex xl:flex lg:flex 2xl:flex  p-5 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-sm shadow-xl hover:scale-105 duration-700 py-10">
            <img src={myntra} alt="" className='bg-black p-10 rounded-sm'/>
            <p className=' p-2 m-auto'>Developed a simple E-Commerce website using React for FrontEnd & Spring-Boot for Backend,
            to performs the tasks like add new product to list, cart, and  buy those products, remove products,etc </p> 
            
        </div>
        <div className="md:flex xl:flex lg:flex 2xl:flex  p-5 my-10 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-sm shadow-xl hover:scale-105 duration-700">
            <img src={myntra} alt="" className='bg-black p-10 rounded-sm'/>
            <p className=' p-2 m-auto'>Developed a simple E-Commerce website using React for FrontEnd & Spring-Boot for Backend,
            to performs the tasks like add new product to list, cart, and  buy those products, remove products,etc </p> 
            
        </div>
     </div>
    </>
  )
}

export default Project