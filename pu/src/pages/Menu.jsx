import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);
    
    // Hide scrollbars completely
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      *::-webkit-scrollbar {
        display: none !important;
      width: 0 !important;
        height: 0 !important;
      }
      .overflow-x-auto {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      .overflow-x-auto::-webkit-scrollbar {
        display: none !important;
      width: 0 !important;
        height: 0 !important;
      }
      .overflow-y-auto {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      .overflow-y-auto::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Set initial selected date to today
    const today = new Date();
    const todayStr = getDateString(today);
    setSelectedDate(todayStr);
  }, []);

  // Function to get date string for a given date
  const getDateString = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dateNum = date.getDate();
    
    return `${dayName} ${monthName} ${dateNum}`;
  };

  // Generate 7 days starting from today
  const generateWeekDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      
      const dayName = days[currentDate.getDay()];
      const monthName = months[currentDate.getMonth()];
      const dateNum = currentDate.getDate();
      
      dates.push({
        day: dayName,
        date: `${monthName} ${dateNum}`,
        fullDate: getDateString(currentDate)
      });
    }
    
    return dates;
  };

  const dates = generateWeekDates();

  const menuData = {
    Breakfast: "Sada Paratha, Mirchi Achar, Bread Butter, Hot Milk, Tea.",
    Lunch: "Dal, Besan Gutta, Bengan, Rayta, Plain Rice, Chapati, Salad, Achar.",
    Snacks: "Kachori, Tea (PU), Bread, Tea (PIET & PGI), Patties, Tea (PCE)",
    Dinner: "Dal, Tinda, Razma, Plain Rice, Chapati, Salad."
  };

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col items-center font-sans text-white overflow-hidden bg-black">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://content.jdmagicbox.com/comp/jaipur/g3/0141px141.x141.230201230302.m1g3/catalogue/school-of-design-and-arts-poornima-university-vidhani-jaipur-colleges-0hpavyad5r.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content - pt-20 for top spacing */}
      <main className="relative z-10 w-full max-w-[360px] px-4 flex flex-col pt-12 h-[calc(100vh-80px)]">
        
        {/* Header Section */}
        <div className="text-center mb-5 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-1">
            <img src="/icon.png" alt="PU Icon" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold tracking-tight">PU Mess Connect</h1>
          </div>
          <p className="text-blue-300 font-medium tracking-widest uppercase text-[10px]">Mess Menu</p>
        </div>

        {/* Date Selector Row */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6 pb-2">
          {dates.map((item, idx) => {
            const isSelected = selectedDate === item.fullDate;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(item.fullDate)}
                className={`flex-shrink-0 w-20 py-3 rounded-2xl border transition-all ${
                  isSelected 
                  ? "bg-white text-blue-900 border-white shadow-lg scale-105" 
                  : "bg-white/10 text-white border-white/20 backdrop-blur-md"
                }`}
              >
                <p className="text-[10px] font-bold uppercase tracking-tighter">{item.day}</p>
                <p className="text-xs font-semibold whitespace-nowrap">{item.date}</p>
              </button>
            );
          })}
        </div>

        {/* Menu Glass Card */}
        <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-5 shadow-2xl flex flex-col gap-5 overflow-y-auto hide-scrollbar max-h-[50vh]">
          
          {Object.entries(menuData).map(([meal, items], index) => (
            <div key={index} className="relative pl-4 border-l-4 border-yellow-400">
              <h3 className="text-lg font-bold text-white mb-1">{meal}:</h3>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                {items}
              </p>
            </div>
          ))}

        </div>
        {/* Applied logic note */}

      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="absolute bottom-8 z-10 flex gap-8 text-white/50 text-sm">
        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
        <button onClick={() => navigate('/history')} className="hover:text-white transition-colors">History</button>
        <button onClick={() => navigate('/menu')} className="text-white border-b-2 border-white pb-1">Menu</button>
      </nav>
    </div>
  );
};

export default Menu;