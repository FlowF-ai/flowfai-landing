"use client"

import Image from 'next/image'
import React from 'react'
import { getImagePath } from '@/lib/utils'



export default function Blockchain() {


  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       <Image className='object-cover rounded-lg' src={getImagePath('/blockchain.webp')} width={400} height={500} alt='Blockchain'></Image>
<div className='flex flex-col gap-2 '>
  <p className='text-4xl gradient-text font-bold'>Blockchain</p>
  <p className='text-lg gradient-text'>Decentralized, secure, transparent ledger for digital transactions.</p>
</div>
      </div>
    </div>
  )
}



