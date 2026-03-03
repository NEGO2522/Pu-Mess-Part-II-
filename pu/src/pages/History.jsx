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
    { date: "28 February", meal: "Dinner", time: "08:25 PM", type: "Mess Hall A" },
    { date: "28 February", meal: "Lunch", time: "01:30 PM", type: "Mess Hall B" },
    { date: "27 February", meal: "Breakfast", time: "09:00 AM", type: "Mess Hall A" },
    { date: "27 February", meal: "Dinner", time: "08:15 PM", type: "Mess Hall A" },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col items-center font-sans text-white overflow-hidden bg-black">
      
      {/* PU Icon - Top Left Corner */}
      <div className="absolute top-6 left-6 z-20">
        <img src="/icon.png" alt="PU Icon" className="w-12 h-12 object-contain" />
      </div>

      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://content.jdmagicbox.com/comp/jaipur/g3/0141px141.x141.230201230302.m1g3/catalogue/school-of-design-and-arts-poornima-university-vidhani-jaipur-colleges-0hpavyad5r.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container - pt-24 provides the top spacing */}
      <main className="relative z-10 w-full max-w-[350px] px-4 flex flex-col items-center pt-24 h-[calc(100vh-80px)]">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">Meal History</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-[10px]">Recent Activity</p>
        </div>

        {/* The Glass Card - Scrollable History */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-5 shadow-2xl flex flex-col overflow-hidden max-h-[50vh]">
          
          {/* Stats Summary */}
          <div className="flex justify-between items-center mb-5 px-1">
            <div className="text-center">
              <p className="text-white/40 text-[9px] uppercase font-bold">This Week</p>
              <p className="text-base font-bold">18</p>
            </div>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <div className="text-center">
              <p className="text-white/40 text-[9px] uppercase font-bold">Missed</p>
              <p className="text-base font-bold">2</p>
            </div>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <div className="text-center">
              <p className="text-white/40 text-[9px] uppercase font-bold">Status</p>
              <p className="text-base font-bold text-green-400 font-mono italic">OK</p>
            </div>
          </div>

          {/* List Area - Showing all items with hidden scrollbar */}
          <div className="flex-1 overflow-y-auto space-y-2.5 hide-scrollbar">
            {historyData.map((item, index) => (
              <div 
                key={index} 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-xs border border-white/20">
                    <i className={`fa-solid ${
                      item.meal === 'Breakfast' ? 'fa-coffee' : 
                      item.meal === 'Lunch' ? 'fa-utensils' : 
                      item.meal === 'Snacks' ? 'fa-cookie-bite' : 'fa-moon'
                    } text-white/80`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xs leading-tight">{item.meal}</h3>
                    <p className="text-white/40 text-[9px]">{item.date} • {item.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/30 text-[9px] italic">Verified</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-center">
             <p className="text-[9px] text-white/40 tracking-widest uppercase">End of Records</p>
          </div>
        </div>

        {/* Footer Info Box */}
        <div className="mt-6 w-full px-1">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
            <p className="text-white/50 text-[9px] uppercase font-bold">Last Entry</p>
            <p className="text-base font-semibold">Today • Lunch</p>
          </div>
        </div>
      </main>

      {/* Bottom Nav Simulation - Stays at bottom */}
      <nav className="absolute bottom-8 z-10 flex gap-8 text-white/50 text-sm">
        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
        <button className="text-white border-b-2 border-white pb-1">History</button>
        <button onClick={() => navigate('/timings')} className="hover:text-white transition-colors">Timings</button>
      </nav>
    </div>
  );
};

export default History;