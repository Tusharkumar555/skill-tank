import React from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import StatsCard from './components/Dashboard/StatsCard';
import CourseCard from './components/Dashboard/CourseCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatsCard label="Overall Rating" value="8.2" />
          <StatsCard label="Completed Projects" value="75%" />
          <StatsCard label="Proficient Skills" value="10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Skill Set</h2>
            <div className="space-y-4">
              {[
                { skill: 'Java', level: 60 },
                { skill: 'C++', level: 45 },
                { skill: 'Python', level: 80 },
                { skill: 'Figma', level: 90 },
                { skill: 'Cloud System', level: 70 },
                { skill: 'IT Solution', level: 85 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Courses</h2>
            <div className="space-y-4">
              <CourseCard
                title="Cyber Security"
                progress={62}
                time="2:00pm-4:00pm"
              />
              <CourseCard
                title="UX Research"
                progress={20}
                time="10:00am-12:00pm"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;