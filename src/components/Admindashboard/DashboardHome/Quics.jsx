import React, { useState, useEffect } from "react";
import { 
  FaBullhorn, 
  FaCalendarAlt, 
  FaUserCircle, 
  FaVideo, 
  FaChevronRight,
  FaChevronLeft,
  FaCalendarDay,
  FaCalendarWeek,
  FaBell,
  FaUsers,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserFriends
} from "react-icons/fa";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [meetings, setMeetings] = useState([]);
  const [calendarDays, setCalendarDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate sample meetings data
  useEffect(() => {
    const sampleMeetings = [
      {
        id: 1,
        title: "Parent-Teacher Conference",
        person: "John Doe",
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        color: "bg-blue-100 border-l-4 border-blue-500"
      },
      {
        id: 2,
        title: "Staff Meeting",
        person: "Sarah Johnson",
        date: new Date(new Date().setDate(new Date().getDate() + 5)),
        color: "bg-purple-100 border-l-4 border-purple-500"
      },
      {
        id: 3,
        title: "Curriculum Planning",
        person: "Michael Chen",
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
        color: "bg-green-100 border-l-4 border-green-500"
      }
    ];
    setMeetings(sampleMeetings);
  }, []);

  // Generate calendar days for current month
  useEffect(() => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start, end });
    setCalendarDays(days);
  }, [currentMonth]);

  const navItems = [
    { id: 1, label: "Admin", icon: <FaUserCircle className="w-4 h-4" />, active: true },
    { id: 2, label: "School", icon: <FaBell className="w-4 h-4" /> },
    { id: 3, label: "Student", icon: <FaUserGraduate className="w-4 h-4" /> },
    { id: 4, label: "Parents", icon: <FaUserFriends className="w-4 h-4" /> },
    { id: 5, label: "Lectures", icon: <FaChalkboardTeacher className="w-4 h-4" /> },
  ];

  const events = [
    { id: 1, title: "Sports Day", date: 7, color: "bg-blue-200" },
    { id: 2, title: "Exam Week", date: 16, color: "bg-yellow-300" },
    { id: 3, title: "Parent Meeting", date: 19, color: "bg-pink-400" },
    { id: 4, title: "Annual Day", date: 29, color: "bg-green-400" },
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="min-h-screen   p-4 md:p-6">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div className="space-y-4 md:space-y-6">
          {/* NOTICE BOARD (TOP LEFT) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-wrap gap-2 md:gap-4 text-sm text-slate-600 font-medium border-b pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    item.active
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : "hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 md:mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaVideo className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-blue-600 font-semibold text-sm md:text-base">
                    Learning Portal Demonstration Video
                  </p>
                  <p className="text-slate-500 text-xs">
                    {format(new Date(), "MMM dd, yyyy")} • 15:30
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-3">
                Welcome to Elite High School Learning Platform. Check out the
                video below to learn how to navigate the platform effectively.
              </p>
              <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 cursor-pointer text-sm mt-4 group">
                <span>Watch Tutorial</span>
                <FaChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* MEETINGS + DATE SECTION (BOTTOM LEFT) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <FaBullhorn className="w-4 h-4 text-blue-500" />
                Upcoming Meetings
              </h2>
              <span className="text-xs text-slate-500">
                {format(new Date(), "MMMM yyyy")}
              </span>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`flex items-center p-3 md:p-4 rounded-xl ${meeting.color} hover:shadow-sm transition-shadow duration-200`}
                >
                  <div className="w-12 md:w-14 flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                    <span className="text-xs text-slate-500 font-medium">
                      {format(meeting.date, "MMM")}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-blue-600">
                      {format(meeting.date, "dd")}
                    </span>
                  </div>

                  <div className="ml-3 md:ml-4 flex-1">
                    <p className="font-medium text-slate-800 text-sm md:text-base">
                      {meeting.person}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {meeting.title}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <FaCalendarAlt className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-500">
                        {format(meeting.date, "MMM dd, yyyy • HH:mm")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Calendar */}
            <div className="border-t pt-4 md:pt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-slate-700">
                  {format(currentMonth, "MMMM yyyy")}
                </h3>
                <div className="flex gap-1">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-slate-100 rounded"
                  >
                    <FaChevronLeft className="w-4 h-4 text-slate-500" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-slate-100 rounded"
                  >
                    <FaChevronRight className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs">
                {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                  <div
                    key={day}
                    className="h-8 flex items-center justify-center text-slate-500 font-medium"
                  >
                    {day}
                  </div>
                ))}
                {calendarDays.map((day, i) => (
                  <div
                    key={i}
                    className={`h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                      isToday(day)
                        ? "bg-blue-500 text-white"
                        : isSameMonth(day, currentMonth)
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-slate-400"
                    } ${isSameDay(day, new Date()) ? "ring-2 ring-blue-300" : ""}`}
                  >
                    {format(day, "d")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – CALENDAR SECTION */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-slate-800">
                {format(currentMonth, "MMMM yyyy")}
              </h2>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm transition-colors duration-200">
                <FaCalendarDay className="w-4 h-4" />
                Day
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors duration-200">
                <FaCalendarWeek className="w-4 h-4" />
                Week
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm transition-colors duration-200">
                Month
              </button>
            </div>
          </div>

          {/* Calendar Header */}
          <div className="grid grid-cols-7 text-sm text-center font-medium text-slate-500 mb-2">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="p-2 truncate">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border border-slate-200 rounded-lg overflow-hidden">
            {Array.from({ length: 35 }).map((_, i) => {
              const dayNumber = i + 1;
              const event = events.find(e => e.date === dayNumber);
              
              return (
                <div
                  key={i}
                  className="h-20 md:h-24 border border-slate-100 relative p-1 hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className={`absolute top-1 right-1 text-xs md:text-sm font-medium ${
                    dayNumber === new Date().getDate() && isSameMonth(currentMonth, new Date())
                      ? "bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                      : "text-slate-400"
                  }`}>
                    {dayNumber <= 31 ? dayNumber : ""}
                  </span>

                  {event && (
                    <div className={`absolute bottom-1 left-1 right-1 ${event.color} rounded p-1 md:p-2`}>
                      <p className="text-xs font-medium truncate">{event.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Event List */}
          <div className="mt-4 md:mt-6">
            <h3 className="font-medium text-slate-700 mb-3 md:mb-4">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 bg-slate-50 hover:bg-white p-3 rounded-lg border border-slate-200 transition-all duration-200 hover:shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <FaUsers className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 text-sm truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {format(new Date(new Date().setDate(event.date)), "EEEE, MMMM do")}
                    </p>
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;