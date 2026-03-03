import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timings = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    { meal: "Breakfast", time: "08:00 AM - 10:00 AM", icon: "fa-coffee", color: "text-orange-300" },
    { meal: "Lunch", time: "12:30 PM - 03:00 PM", icon: "fa-utensils", color: "text-blue-300" },
    { meal: "Snacks", time: "04:30 PM - 06:00 PM", icon: "fa-cookie-bite", color: "text-yellow-300" },
    { meal: "Dinner", time: "07:30 PM - 09:30 PM", icon: "fa-moon", color: "text-purple-300" }
  ];

  // Logic to find which meal is active
  const getActiveStatus = (mealName) => {
    const hours = currentTime.getHours();
    if (mealName === "Breakfast" && hours >= 8 && hours < 10) return true;
    if (mealName === "Lunch" && hours >= 12 && hours < 15) return true;
    if (mealName === "Snacks" && hours >= 16 && hours < 18) return true;
    if (mealName === "Dinner" && hours >= 19 && hours < 22) return true;
    return false;
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center font-sans text-white overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url('https://content.jdmagicbox.com/comp/jaipur/g3/0141px141.x141.230201230302.m1g3/catalogue/school-of-design-and-arts-poornima-university-vidhani-jaipur-colleges-0hpavyad5r.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Card Content */}
      <main className="relative z-10 w-[90%] max-w-md flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-6 animate-fade-in-down">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Mess Timings</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-xs">Daily Schedule</p>
        </div>

        {/* The Glass Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 shadow-2xl flex flex-col gap-4">
          
          {schedule.map((item, index) => {
            const isActive = getActiveStatus(item.meal);
            return (
              <div 
                key={index} 
                className={`relative w-full border rounded-3xl p-5 transition-all duration-300 ${
                  isActive 
                  ? "bg-white/20 border-white/40 scale-[1.02] shadow-lg" 
                  : "bg-white/5 border-white/10 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center text-xl ${item.color}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{item.meal}</h3>
                      <p className="text-white/60 text-sm font-medium">{item.time}</p>
                    </div>
                  </div>
                  {isActive && (
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          <div className="mt-2 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
              Timings may vary on holidays
            </p>
          </div>
        </div>

      </main>

      {/* Bottom Nav Simulation */}
      <nav className="relative z-10 mt-10 mb-6 flex gap-8 text-white/50">
        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
        <button onClick={() => navigate('/history')} className="hover:text-white transition-colors">History</button>
        <button className="text-white border-b-2 border-white pb-1">Timings</button>
      </nav>
    </div>
  );
};

export default Timings;