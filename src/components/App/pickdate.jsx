import React, { useState, useEffect } from "react";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const today = new Date();
    const newDates = [];
    for (let i = 0; i < 5; i++) {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + i);
      newDates.push({
        day: futureDate.getDate(),
        month: futureDate.toLocaleString("default", { month: "long" }),
        weekday: futureDate.toLocaleString("default", { weekday: "long" })
      });
    }
    setDates(newDates);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 justify-between">
      <p className="mb-4 text-md font-normal">Please select your preferred pickup date.</p>

      <div className="flex flex-col items-center w-full max-w-[calc(3*6rem+2*0.75rem)]">
        <div className="grid grid-cols-3 gap-3 mb-6" id="date-section">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`bg-gray-100 border rounded-[8px] cursor-pointer w-24 h-24 flex flex-col justify-center items-center ${
                selectedDate === index
                  ? "border-blue-500 text-blue-500 border-dashed"
                  : "text-black border-gray-300"
              }`}
              onClick={() => setSelectedDate(index)}
            >
              {/* Keep Today and Tomorrow headings in original color */}
              {index === 0 && <p className="text-sm font-medium bg-gray-300 w-full text-center rounded-t-[6px] text-black">Today</p>}
              {index === 1 && <p className="text-sm font-medium bg-gray-300 w-full text-center rounded-t-[6px] text-black">Tomorrow</p>}
              
              <div className="flex flex-col items-center justify-center text-center flex-1">
                <p className="text-2xl font-bold">{date.day}</p>
                <p className="text-sm">{date.weekday}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 bg-white p-4 w-full flex justify-center md:w-auto md:self-center">
          <button
            className="px-6 py-2 bg-black text-white font-semibold rounded-[6px] w-[calc(3*6rem+2*0.75rem)]"
            disabled={selectedDate === null}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
