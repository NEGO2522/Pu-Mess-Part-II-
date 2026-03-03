import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Aryan Sharma",
    id: "PU-2024-8842",
    role: "Hosteller",
    dept: "School of Design & Arts"
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getMealType = () => {
    const hours = currentTime.getHours();
    if (hours < 10) return "Breakfast 🍳";
    if (hours < 15) return "Lunch 🍱";
    if (hours < 18) return "Snacks ☕";
    return "Dinner 🍲";
  };

  const getMealTimeRange = () => {
    const hours = currentTime.getHours();
    if (hours < 10) return "08:00 - 10:00";
    if (hours < 15) return "12:30 - 15:00";
    if (hours < 18) return "16:30 - 18:00";
    return "19:30 - 21:30";
  };

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col items-center justify-center font-sans text-white overflow-hidden bg-black">
      
      {/* Background Image - Removed scale-105 to fix zoom issue */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://content.jdmagicbox.com/comp/jaipur/g3/0141px141.x141.230201230302.m1g3/catalogue/school-of-design-and-arts-poornima-university-vidhani-jaipur-colleges-0hpavyad5r.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Container - Adjusted width for mobile scaling */}
      <main className="relative z-10 w-full max-w-[340px] px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">PU Mess Connect</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-[10px]">Poornima University</p>
        </div>

        {/* The Glass Card - Reduced padding and adjusted border radius */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl flex flex-col items-center">
          
          {/* User Profile Info */}
          <div className="flex flex-col items-center mb-5 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-xl shadow-lg border border-white/30 mb-2">
              <i className="fa-solid fa-user text-white"></i>
            </div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-white/60 text-xs">{user.id} • {user.role}</p>
          </div>

          {/* QR Code Container - Adjusted size for better fit */}
          <div className="bg-white p-3 rounded-2xl shadow-xl">
            <QRCode 
              value={`USER_ID:${user.id}`} 
              size={160}
              level="H"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>

          <p className="mt-5 text-white/90 text-sm font-medium flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Scan for {getMealType()}
          </p>

          <div className="mt-3 text-[10px] text-white/40">
            Your unique permanent digital mess pass
          </div>
        </div>

        {/* Footer Stats - Adjusted spacing */}
        <div className="mt-6 grid grid-cols-2 gap-3 w-full">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <p className="text-white/50 text-[9px] uppercase font-bold">Today's Entry</p>
            <p className="text-base font-semibold">1 / 4</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
            <p className="text-white/50 text-[9px] uppercase font-bold">{getMealType().split(' ')[0]} Time</p>
            <p className="text-base font-semibold">{getMealTimeRange()}</p>
          </div>
        </div>

      </main>

      {/* Bottom Nav Simulation - Fixed positioning for mobile flow */}
      <nav className="relative z-10 mt-8 mb-4 flex gap-8 text-white/50 text-sm">
        <button className="text-white border-b-2 border-white pb-1">Home</button>
        <button onClick={() => navigate('/history')} className="hover:text-white transition-colors">History</button>
        <button onClick={() => navigate('/timings')} className="hover:text-white transition-colors">Timings</button>
      </nav>
    </div>
  );
};

export default Landing;