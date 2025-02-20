import { FaCircleChevronLeft } from "react-icons/fa6";

export default function BackButton({ title }) {
  return (
    <div className="p-4 lg:p-2 max-w-3xl lg:max-w-2xl mx-auto w-full relative">
      <div className="flex items-center justify-center relative">
        {/* Back Button on the Left */}
        <FaCircleChevronLeft className="text-black w-6 h-6 cursor-pointer absolute left-0" />
        
        {/* Centered Heading */}
        <h1 className="text-xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
    </div>
  );
}
