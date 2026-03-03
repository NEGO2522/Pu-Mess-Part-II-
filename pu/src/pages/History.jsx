import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();

  // Simulating meal history data
  const historyData = [
    { date: "03 March", meal: "Lunch", time: "01:20 PM", type: "Mess Hall A" },
    { date: "03 March", meal: "Breakfast", time: "08:45 AM", type: "Mess Hall A" },
    { date: "02 March", meal: "Dinner", time: "08:10 PM", type: "Mess Hall B" },
    { date: "02 March", meal: "Lunch", time: "12:55 PM", type: "Mess Hall A" },
    { date: "01 March", meal: "Snacks", time: "05:15 PM", type: "Mess Hall A" },
    { date: "01 March", meal: "Lunch", time: "01:10 PM", type: "Mess Hall A" },
  ];

  // Load FontAwesome and inject scrollbar hiding styles
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    // Style to hide scrollbar
    const style = document.createElement("style");
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
  }, []);

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
      <main className="relative z-10 w-[90%] max-w-md flex flex-col items-center h-[85vh]">
        
        {/* Header Section */}
        <div className="text-center mb-6 animate-fade-in-down">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Meal History</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-xs">Recent Activity</p>
        </div>

        {/* The Glass Card - Scrollable History */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-6 shadow-2xl flex flex-col overflow-hidden">
          
          {/* Stats Summary */}
          <div className="flex justify-between items-center mb-6 px-2">
            <div className="text-center">
              <p className="text-white/40 text-[10px] uppercase font-bold">This Week</p>
              <p className="text-lg font-bold">18</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="text-center">
              <p className="text-white/40 text-[10px] uppercase font-bold">Missed</p>
              <p className="text-lg font-bold">2</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="text-center">
              <p className="text-white/40 text-[10px] uppercase font-bold">Status</p>
              <p className="text-lg font-bold text-green-400 font-mono italic">OK</p>
            </div>
          </div>

          {/* List Area - Scrollbar Hidden */}
          <div className="flex-1 overflow-y-auto space-y-3 hide-scrollbar">
            {historyData.map((item, index) => (
              <div 
                key={index} 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm border border-white/20">
                    <i className={`fa-solid ${
                      item.meal === 'Breakfast' ? 'fa-coffee' : 
                      item.meal === 'Lunch' ? 'fa-utensils' : 
                      item.meal === 'Snacks' ? 'fa-cookie-bite' : 'fa-moon'
                    } text-white/80`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight">{item.meal}</h3>
                    <p className="text-white/40 text-[10px]">{item.date} • {item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-[10px] italic">Verified</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Fade Overlay for list */}
          <div className="mt-4 pt-2 border-t border-white/10 text-center">
             <p className="text-[10px] text-white/40 tracking-widest uppercase">End of Records</p>
          </div>
        </div>

        {/* Footer Stats - Single Card View */}
        <div className="mt-8 w-full px-2">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/5 text-center">
            <p className="text-white/50 text-[10px] uppercase font-bold">Last Entry</p>
            <p className="text-lg font-semibold">Today • Lunch</p>
          </div>
        </div>

      </main>

      {/* Bottom Nav Simulation */}
      <nav className="relative z-10 mt-10 mb-6 flex gap-8 text-white/50">
        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
        <button className="text-white border-b-2 border-white pb-1">History</button>
        <button className="hover:text-white transition-colors">Timings</button>
      </nav>
    </div>
  );
};

export default History;