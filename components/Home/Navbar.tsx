"use client";
import React, {useEffect, useState} from 'react';
import LogoImage from '@/public/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { getServerSession, Session } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '../Helper/User';



const Navbar =  () => {

  const [session, setSession] = useState<Session | null>(null);


  

  const getSession  = async () => {
    
    
    return await getServerSession(authOptions);
  
  }

    useEffect(  () => {
      
      
      getSession().then(
        result => setSession(result)
        
      )
     
    }, [])
    console.log(session);
    

  return (
    <div className='h-[13vh] overflow-hidden shadow-md'>
        <div className='w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between'>
        {/* {Logo} */}
         <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px]'>
        <Link href='/'>
            <Image 
            src={LogoImage}
             alt='Logo' 
             width={250} 
             height={250} 
             className='w-[100%] h-[100%]'/>
        </Link>
         </div>
      <div className='flex item-center space-x-4'>

        {!session &&(
         <Link href='/signup' >
            <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300'>
                Sign up
            </button>
        </Link>
    )}

    {session && <User session={session} /> }
    {session && (
         <button className='px-4 py-1.5 text-[14px] sm:text-[16px] sm:px-6 sm:py-2 bg-orange-600 font-semibold text-white rounded-lg hover:bg-orange-800 transition-all duration-300'>
         Post a Job
     </button>
    )}
      </div>
    </div>
    </div>
  )
}

export default Navbar
