import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { IoIosSearch } from "react-icons/io";
import repairtool from './repairtool.png';
import { BsCart2 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Appintro() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center justify-start">
      <Card className="w-screen max-w-sm">
        <CardHeader>
          <div className="flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-bold">Fixamigo</CardTitle>
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-8 h-8  ">
              <IoIosSearch />
              </button>
              <button className="flex items-center justify-center w-8 h-8 ">
              <BsCart2 />               
              </button>
              <button className="flex items-center justify-center w-8 h-8 ">
              <GoPerson />
              </button>
              
              <button className="flex items-center justify-center w-8 h-8 ">
              <GiHamburgerMenu />               
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">         
          <img
            src={repairtool}
            alt="Repair tools pic"
            className="mb-4 object-cover w-full "      
          />
          <p className="text-center text-gray-700">Search your products for parts</p>
        </CardContent>
      </Card>
    </div>
  );
}