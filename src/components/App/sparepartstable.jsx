
import { Smartphone,  BatteryFull, Camera,  Speaker, PlugZap } from "lucide-react";
import { BsMotherboard } from "react-icons/bs";
import { IoKeypadSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const spareParts = [
  { name: "Display", items: [
      { id: 1, name: "iphone 15 plus display qty1", price: "₹10,000", icon:  <Smartphone /> },
      { id: 2, name: "iphone 15 plus display qty2", price: "₹8,000", icon: <Smartphone /> },
      { id: 3, name: "iphone 15 plus display qty3", price: "₹5,000", icon: <Smartphone /> },
      { id: 4, name: "iphone 15 plus display qty4", price: "₹3,000", icon: <Smartphone /> },
    ]
  },
  { name: "Motherboard", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <BsMotherboard /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <BsMotherboard /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <BsMotherboard /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <BsMotherboard /> },
    ]
  },
  { name: "Battery", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <BatteryFull /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <BatteryFull /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <BatteryFull /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <BatteryFull /> },
    ]
  },
  { name: "Camera", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <Camera /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <Camera /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <Camera /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <Camera /> },
    ]
  },
  { name: "Speaker", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <Speaker /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <Speaker /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <Speaker /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <Speaker /> },
    ]
  },
  { name: "Ports", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <PlugZap /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <PlugZap /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <PlugZap /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <PlugZap /> },
    ]
  },
  { name: "Buttons", items: [
      { id: 1, name: "USB-C Charging Port", price: "₹1,500", icon: <IoKeypadSharp /> },
      { id: 2, name: "Lightning Port", price: "₹2,000", icon: <IoKeypadSharp /> },
      { id: 3, name: "Headphone Jack", price: "₹1,200", icon: <IoKeypadSharp /> },
      { id: 4, name: "Microphone Port", price: "₹1,800", icon: <IoKeypadSharp /> },
    ]
  }
];

const SparePartsTable = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-2 p-[18px]">
      <div className="flex justify-between font-bold pb-2">
        <span>SPARE PART NAME</span>
        <span>PRICE</span>
      </div>
      <hr className="border-t border-black mb-2" />
      
      <Accordion type="single" collapsible className="mt-8 space-y-8">
        {spareParts.map((part, index) => (
          <AccordionItem key={index} value={part.name} className="border border-black p-1.5 rounded-[12px] mt-4 mb-4">
            <AccordionTrigger className="flex justify-between w-full font-medium px-3 py-2 no-underline focus:ring-0 focus:outline-none hover:no-underline">
              {part.name}
            </AccordionTrigger>
            {part.items.length > 0 && (
              <AccordionContent>
                <div className="space-y-2">
                  {part.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-2">
                      {item.icon}
                      <span className="flex-1 ml-2">{item.name}</span>
                      <span className="font-bold">{item.price}</span>
                      <Button className="ml-2 px-4 py-1 text-white bg-black rounded-[4px] text-xs flex flex-col leading-none">
                        <span><FaCartPlus /></span>
                        
                      </Button>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>

      {/* Go to Cart Button */}
      <Button className="w-full mt-6 bg-black text-white py-3 text-lg rounded-[8px] hover:bg-gray-900">
        Go to Cart
      </Button>
    </div>
  );
};

export default SparePartsTable;
