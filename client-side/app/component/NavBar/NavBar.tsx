import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const NavBar = () => {
  return (
   
       <Navbar className=' p-0 flex w-full h-14 justify-center items-center bg-black text-slate-100 gap-0'>
          <NavbarBrand className=' w-20'>
            <span className='font-bold text-large'>Game</span>
          </NavbarBrand>
        
            <NavbarContent className=" flex-1 items-center justify-center   w-full ">

               <div className='flex-1'>
                <NavbarItem className="  text-center">
                   <Link href='/' className='text-slate-100'><span className="text-xl font-bold">Vendetta</span></Link>
                  </NavbarItem>
               </div>

                <div className='flex justify-center items-center font-bold text-large'>
                  <NavbarItem className='w-20'>
                    <Link href="#"><span className=''>About</span></Link>
                  </NavbarItem>
                  <NavbarItem className=''>
                    <Link href='/source-code'><span>Source Code</span></Link>
                  </NavbarItem>
                </div>
            </NavbarContent>
           
         </Navbar>
 
  )
}

export default NavBar
