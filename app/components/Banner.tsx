'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Banner() {
  
  // Get current month name
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  //default is hidden
  //once the screensize is small, display flex
  //back ground is gray


  return (
    <div className="flex justify-evenly md:justify-end bg-white pt-2 pb-2 md:pr-16 text-gray-400 gap-2">
        <a href="tel:123-456-7890" className={` ${montserrat.className}`}>123-456-7890</a>
        <span className={`${montserrat.className}`}> | </span>
        <Link href="/specials" className={`italic ${montserrat.className}`}>VIEW LEASING SPECIALS</Link>
        <span className={`${montserrat.className}`}> | </span>
        <Link href="/residents" className={`t ${montserrat.className}`}>RESIDENTS</Link>
  </div>
   
  );
}