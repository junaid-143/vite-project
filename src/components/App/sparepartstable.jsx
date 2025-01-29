import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const spareParts = [
  { name: "Display", options: ["OLED", "LCD"] },
  { name: "Motherboard", options: ["64GB", "128GB"] },
  { name: "Battery", options: [] },
  { name: "Camera", options: [] }
];

const SparePartsTable = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-6 p-[10px]">
      <div className="flex justify-between font-bold pb-2">
        <span>SPARE PART NAME</span>
        <span>PRICE</span>
      </div>
      <hr className="border-t  border-black mb-2" />
      
      <Accordion type="single" collapsible className="mt-2 space-y-2">
        {spareParts.map((part, index) => (
          part.options.length > 0 ? (
            <AccordionItem key={index} value={part.name} className="bg-gray-100 p-3 rounded-lg">
              <AccordionTrigger>{part.name}</AccordionTrigger>
              <AccordionContent>
                <ul className="pl-4 list-disc">
                  {part.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <div key={index} className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
              <span>{part.name}</span>
            </div>
          )
        ))}
      </Accordion>
    </div>
  );
};

export default SparePartsTable;