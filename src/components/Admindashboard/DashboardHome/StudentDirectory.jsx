import React, { useState } from "react";
import { 
  FiSearch, 
  FiUser, 
  FiUsers, 
  FiBookOpen, 
  FiPhone, 
  FiMail,
  FiCalendar,
  FiEdit2,
  FiEye,
  FiChevronRight
} from "react-icons/fi";
import { 
  HiOutlineAcademicCap, 
  HiOutlineUserGroup,
  HiOutlineTag
} from "react-icons/hi";
import { BsGenderFemale, BsDroplet } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const students = [
  {
    id: 1,
     name: "Faisal Malik",
    admission: "1111012",
    img: "https://i.pravatar.cc/150?img=12",
    dob: "15 Mar 2003",
    gender: "Male",
    bloodGroup: "O+",
    fatherName: "Ahmed Malik",
    motherName: "Sara Malik",
    parentEmail: "faisal.parent@gmail.com",
    parentContact: "6479950001",
    tcNo: "TC2023001",
  },
  {
    id: 2,
    name: "Faisal Malik",
    admission: "1111012",
    img: "https://i.pravatar.cc/150?img=12",
    dob: "15 Mar 2003",
    gender: "Male",
    bloodGroup: "O+",
    fatherName: "Ahmed Malik",
    motherName: "Sara Malik",
    parentEmail: "faisal.parent@gmail.com",
    parentContact: "6479950001",
    tcNo: "TC2023001",
  },
  {
    id: 3,
     name: "Faisal Malik",
    admission: "1111012",
    img: "https://i.pravatar.cc/150?img=12",
    dob: "15 Mar 2003",
    gender: "Male",
    bloodGroup: "O+",
    fatherName: "Ahmed Malik",
    motherName: "Sara Malik",
    parentEmail: "faisal.parent@gmail.com",
    parentContact: "6479950001",
    tcNo: "TC2023001",
  },
];

const StudentDirectory = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5 md:p-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-blue-900 flex items-center gap-2">
              <HiOutlineUserGroup className="text-blue-600" />
              Directory and Skill Based Search
            </h2>
            <p className="text-xs text-blue-600 mt-1">
              Manage and search through student records efficiently
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
            <FiUser className="text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Admin Panel</span>
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-1 bg-blue-50/50 rounded-xl p-1 mb-6 max-w-md">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-blue-200 rounded-lg shadow-sm text-blue-700 font-medium text-sm transition-all duration-200">
            <FiUsers className="text-blue-600" />
            Student
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 text-blue-600/70 hover:text-blue-700 font-medium text-sm transition-all duration-200">
            <FiUser className="opacity-70" />
            Teacher
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 text-blue-600/70 hover:text-blue-700 font-medium text-sm transition-all duration-200">
            <HiOutlineAcademicCap className="opacity-70" />
            Alumni
          </button>
        </div>

        {/* SEARCH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Search by student name..."
              className="w-full pl-11 pr-4 py-3 border border-blue-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 bg-white placeholder-blue-400/60"
            />
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400">
              <FiSearch />
            </div>
            <input
              type="text"
              placeholder="Search by admission number..."
              className="w-full pl-11 pr-4 py-3 border border-blue-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 bg-white placeholder-blue-400/60"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
              {students.length}
            </span>
            Students Found
          </p>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1 transition-colors">
            <FiEdit2 size={12} />
            Advanced Filters
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* LEFT LIST */}
          <div className="space-y-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
            {students.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedStudent.id === student.id
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-50/30 shadow-md'
                    : 'border-blue-100 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <div className="relative">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-blue-100"
                  />
                  {selectedStudent.id === student.id && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-900">{student.name}</p>
                  <p className="text-xs text-blue-600 flex items-center gap-1">
                    <span className="font-medium">Admission:</span> {student.admission}
                  </p>
                </div>
                <FiChevronRight className={`transition-transform ${
                  selectedStudent.id === student.id 
                    ? 'text-blue-500 rotate-90' 
                    : 'text-blue-300'
                }`} />
              </div>
            ))}
          </div>

          {/* RIGHT DETAILS */}
          <div className="lg:col-span-2 border border-blue-200 rounded-xl p-5 md:p-6 bg-gradient-to-b from-white to-blue-50/20 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg group">
                <FiEye />
                View Full Profile
              </button>
            </div>

            <h3 className="text-lg font-bold text-blue-900 mb-1 flex items-center gap-2">
              <CgProfile className="text-blue-600" />
              {selectedStudent.name}
            </h3>
            <p className="text-sm text-blue-600 mb-6">Student ID: {selectedStudent.admission}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* IMAGE SECTION */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={selectedStudent.img}
                    className="rounded-xl w-32 h-32 object-cover border-4 border-white shadow-lg"
                    alt={selectedStudent.name}
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    Active
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium flex items-center gap-1">
                      <HiOutlineTag size={10} />
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      Physics
                    </span>
                  </div>
                </div>
              </div>

              {/* PERSONAL INFO */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <FiUser className="text-blue-600" />
                    Personal Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <FiCalendar className="text-blue-600" size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-500">Birth Date</p>
                        <p className="text-sm font-medium text-blue-900">{selectedStudent.dob}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <BsGenderFemale className="text-blue-600" size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-500">Gender</p>
                        <p className="text-sm font-medium text-blue-900">{selectedStudent.gender}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <BsDroplet className="text-blue-600" size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-500">Blood Group</p>
                        <p className="text-sm font-medium text-blue-900">{selectedStudent.bloodGroup}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADDITIONAL + ACADEMIC */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <FiUsers className="text-blue-600" />
                    Additional Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-blue-600">Father Name</span>
                      <span className="font-medium text-blue-900">{selectedStudent.fatherName}</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-blue-600">Mother Name</span>
                      <span className="font-medium text-blue-900">{selectedStudent.motherName}</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-blue-600">Parents Email</span>
                      <span className="font-medium text-blue-900">{selectedStudent.parentEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">Parents Contact</span>
                      <span className="font-medium text-blue-900">{selectedStudent.parentContact}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <HiOutlineAcademicCap className="text-blue-600" />
                    Academic Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-blue-600">Admission No</span>
                      <span className="font-medium text-blue-900">{selectedStudent.admission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">TC No</span>
                      <span className="font-medium text-blue-900">{selectedStudent.tcNo}</span>
                    </div>
                    <button className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-1 transition-colors">
                      View Enrollment Details
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 pt-4 border-t border-blue-100">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                    <FiPhone className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">{selectedStudent.parentContact}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                    <FiMail className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">{selectedStudent.parentEmail}</span>
                  </div>
                </div>
                <div className="text-xs text-blue-500 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Last updated: Today, 10:30 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #1d4ed8);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default StudentDirectory;