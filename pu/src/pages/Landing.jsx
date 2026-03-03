import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  // Simulating user data - in a real app, this comes from Auth/Context
  const [user, setUser] = useState({
    name: "Aryan Sharma",
    id: "PU-2024-8842",
    role: "Hosteller", // or "Non-Hosteller" / "Faculty"
    dept: "School of Design & Arts"
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock and Load FontAwesome for the Icon
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine current meal based on time
  const getMealType = () => {
    const hours = currentTime.getHours();
    if (hours < 10) return "Breakfast 🍳";
    if (hours < 15) return "Lunch 🍱";
    if (hours < 18) return "Snacks ☕";
    return "Dinner 🍲";
  };

  // Determine meal time window
  const getMealTimeRange = () => {
    const hours = currentTime.getHours();
    if (hours < 10) return "08:00 - 10:00";
    if (hours < 15) return "12:30 - 15:00";
    if (hours < 18) return "16:30 - 18:00";
    return "19:30 - 21:30";
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
          <h1 className="text-3xl font-bold tracking-tight mb-1">PU Mess Connect</h1>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-xs">Poornima University</p>
        </div>

        {/* The Glass Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center">
          
          {/* User Profile Info */}
          <div className="flex flex-col items-center mb-6 text-center">
            {/* PROFILE ICON BOX - Updated to Transparent White */}
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl shadow-lg border border-white/30 mb-3">
              <i className="fa-solid fa-user text-white"></i>
            </div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-white/60 text-sm">{user.id} • {user.role}</p>
          </div>

          {/* QR Code Container - Now Static for the User */}
          <div className="bg-white p-4 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.3)] transform transition-transform hover:scale-105">
            <QRCode 
              value={`USER_ID:${user.id}`} 
              size={180}
              level="H"
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>

          <p className="mt-6 text-white/80 font-medium flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Scan for {getMealType()}
          </p>

          <div className="mt-4 text-xs text-white/40">
            Your unique permanent digital mess pass
          </div>
        </div>

        {/* Footer Stats / Meal Timing View */}
        <div className="mt-8 grid grid-cols-2 gap-4 w-full px-2">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/5">
            <p className="text-white/50 text-[10px] uppercase font-bold">Today's Entry</p>
            <p className="text-lg font-semibold">1 / 4</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/5">
            <p className="text-white/50 text-[10px] uppercase font-bold">{getMealType().split(' ')[0]} Time</p>
            <p className="text-lg font-semibold">{getMealTimeRange()}</p>
          </div>
        </div>

      </main>

      {/* Bottom Nav Simulation */}
      <nav className="relative z-10 mt-10 mb-6 flex gap-8 text-white/50">
        <button className="text-white border-b-2 border-white pb-1">Home</button>
        <button onClick={() => navigate('/history')} className="hover:text-white transition-colors">History</button>
        <button onClick={() => navigate('/timings')} className="hover:text-white transition-colors">Timings</button>
      </nav>
    </div>
  );
};

export default Landing;