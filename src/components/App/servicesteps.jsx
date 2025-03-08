const ServiceSteps = () => {
    const steps = [
      {
        imgSrc: "/servicestep/rupee.png", // Replace with your actual image path
        title: "Check Price",
        description: "Choose your device for repair and get the best price.",
      },
      {
        imgSrc: "/servicestep/calender.png",
        title: "Schedule Service",
        description: "Schedule your repair at a convenient date.",
      },
      {
        imgSrc: "/servicestep/spannertool.png",
        title: "Diagnosis & Fix",
        description: "Identify the issue and get it fixed quickly by our experts.",
      },
      {
        imgSrc: "/servicestep/handbox.png",
        title: "Delivered to You",
        description: "Get your repaired device safely delivered to your doorstep.",
      },
    ];
  
    return (
      <div className="max-w-lg mx-auto space-y-6 p-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            <img src={step.imgSrc} alt={step.title} className="w-14 h-14" />
            <div>
              <h3 className="text-lg font-semibold">{index + 1}. {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ServiceSteps;
  