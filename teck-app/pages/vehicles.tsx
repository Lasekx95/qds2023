import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from "react";

// Components
import Topnav from '../components/topnav'
import SideNav from '../components/sidenav'
import Vehiclecard from '../components/vehicle-cards/vehiclecard'
import Vehiclecard1 from '../components/vehicle-cards/vehiclecard1'
import Vehiclecard2 from '../components/vehicle-cards/vehiclecard2'
import Vehiclecard3 from '../components/vehicle-cards/vehiclecard3'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Teck-App - Vehicles</title>
        <meta name="description" content="Get details of your current fleet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='color-s'>
        <Topnav />
        <div className='flex'>
          <SideNav />
          <div className='flex items-end mx-auto my-6'>
            <Vehiclecard />
            <Vehiclecard1 />
            <Vehiclecard2 />
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex items-end mx-auto mr-8'>
            <Vehiclecard3 />
            <Vehiclecard2 />
            <Vehiclecard />
          </div>
        </div>
      </main>
    </>
  )
}
