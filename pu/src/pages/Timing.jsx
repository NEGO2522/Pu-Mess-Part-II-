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

  const getActiveStatus = (mealName) => {
    const hours = currentTime.getHours();
    if (mealName === "Breakfast" && hours >= 8 && hours < 10) return true;
    if (mealName === "Lunch" && hours >= 12 && hours < 15) return true;
    if (mealName === "Snacks" && hours >= 16 && hours < 18) return true;
    if (mealName === "Dinner" && hours >= 19 && hours < 22) return true;
    return false;
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center font-sans text-white overflow-hidden bg-black">
      
      {/* Background Image - scale-105 removed to fix zoom */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://content.jdmagicbox.com/comp/jaipur/g3/0141px141.x141.230201230302.m1g3/catalogue/school-of-design-and-arts-poornima-university-vidhani-jaipur-colleges-0hpavyad5r.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Container - Adjusted width to prevent horizontal overflow/zoom */}
      <main className="relative z-10 w-full max-w-[350px] px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">Mess Timings</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-[10px]">Daily Schedule</p>
        </div>

        {/* The Glass Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-5 shadow-2xl flex flex-col gap-3">
          
          {schedule.map((item, index) => {
            const isActive = getActiveStatus(item.meal);
            return (
              <div 
                key={index} 
                className={`relative w-full border rounded-2xl p-4 transition-all duration-300 ${
                  isActive 
                  ? "bg-white/20 border-white/40 scale-[1.01] shadow-lg" 
                  : "bg-white/5 border-white/10 opacity-70"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center text-lg ${item.color}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-tight">{item.meal}</h3>
                      <p className="text-white/60 text-xs font-medium">{item.time}</p>
                    </div>
                  </div>
                  {isActive && (
                    <span className="flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          <div className="mt-1 text-center">
            <p className="text-[9px] text-white/30 uppercase tracking-[0.2em]">
              Timings may vary on holidays
            </p>
          </div>
        </div>

      </main>

      {/* Bottom Nav Simulation */}
      <nav className="relative z-10 mt-8 mb-4 flex gap-8 text-white/50 text-sm">
        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
        <button onClick={() => navigate('/history')} className="hover:text-white transition-colors">History</button>
        <button className="text-white border-b-2 border-white pb-1">Timings</button>
      </nav>
    </div>
  );
};

export default Timings;