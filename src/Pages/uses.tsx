import TerminalBar from "@/MyComponents/Header";
import React from "react";


const services = [
    { name: "Google Workspace", since: "2019", icon: "🔵" },
    { name: "GitHub", since: "2019", icon: "🐙" },
    { name: "VS Code", since: "2019", icon: "💻" },
    { name: "AWS", since: "2020", icon: "☁️" },
    { name: "ChatGPT", since: "2024", icon: "🤖" },
    { name: "Claude", since: "2024", icon: "⚡" },
    { name: "Canva", since: "2016", icon: "🎨" },
    { name: "Microsoft Office 365", since: "2014", icon: "📄" },
    { name: "Crazy Domains", since: "2021", icon: "🌐" },
    { name: "Slack", since: "2022", icon: "💬" },
    // { name: "ClickUp", since: "2023.03", icon: "📌" },
    { name: "Google Cloud Services", since: "2022", icon: "📊" },
    { name: "Udemy", since: "2019", icon: "🎓" },
    // { name: "Apple iCloud", since: "2016.06", icon: "🍏" }
  ];

const SpecsList: React.FC = () => {
  return (
    <div className="min-h-screen w-full text-gray-900 flex flex-col items-center p-8 text-left">
      <TerminalBar page={"uses"} />
      <div className="flex w-full flex-col items-left justify-start my-10">
      <h2 className='text-blue-500 text-5xl lilita-one-regular'>My Setup</h2>
      <p className="text-blue-400 mt-2">A quick overview of my system setup, gadgets, and online services I use daily.</p>

      <div className="my-10">
      <h2 className="text-xl font-semibold mb-3 text-blue-400">System Specs</h2>

      <div className="my-5">
          <h4 className="text-lg font-semibold ">1. Macbook 13 inch 2023</h4>
          <ul className="list-disc ml-5 mt-2">
           <div className="flex flex-row items-center space-x-2"> <span>CPU:</span><span>M3</span></div>
            <div className="flex flex-row items-center space-x-2"> <span>RAM:</span><span>16GB DDR5</span></div>
            <div className="flex flex-row items-center space-x-2"> <span>SSD:</span><span>256GB NVMe</span></div>
          </ul>
    </div>
    <div className="my-5">
          <h4 className="text-lg font-semibold">2. HP Pavilion</h4>
          <ul className="list-disc ml-5 mt-2">
           <div className="flex flex-row items-center space-x-2"> <span>CPU:</span><span>Intel i5-12900K</span></div>
            <div className="flex flex-row items-center space-x-2"> <span>GPU:</span><span>GTX 1750Ti</span></div>
            <div className="flex flex-row items-center space-x-2"> <span>RAM:</span><span>16GB DDR5</span></div>
            <div className="flex flex-row items-center space-x-2"> <span>SSD:</span><span>1TB NVMe</span></div>
          </ul>
    </div>

      </div>
      <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-blue-400">Gadgets & Peripherals</h2>
      <ul className="list-disc ml-5 my-5">
        <div className="flex flex-row items-center space-x-2"> <span>1. BenQ GW2790 27</span></div>
        <div className="flex flex-row items-center space-x-2"> <span>2. Cosmic Byte CB-GK-26 Pandora TKL Mechanical Keyboard</span></div>
        <div className="flex flex-row items-center space-x-2"> <span>3. Logitech G102</span></div>
        <div className="flex flex-row items-center space-x-2"> <span>4. Samsung Buds 3 Pro</span></div>
        <div className="flex flex-row items-center space-x-2"> <span>5. Samsung S9 FE+</span></div>
      </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Online Services</h2>
        <div className="grid grid-cols-3 gap-4 my-5">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-2xl">{service.icon}</span>
              <div>
                <p className="font-semibold">{service.name}</p>
                <p className="text-sm text-gray-500">Since {service.since}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SpecsList;
