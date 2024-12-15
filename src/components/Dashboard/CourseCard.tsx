import React from 'react';

interface CourseCardProps {
  title: string;
  progress: number;
  time: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, progress, time }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{time}</p>
        </div>
        <div className="relative h-12 w-12">
          <svg className="w-12 h-12 transform -rotate-90">
            <circle
              className="text-gray-200"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
            <circle
              className="text-blue-500"
              strokeWidth="2"
              strokeDasharray={`${progress * 1.26} 126`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="20"
              cx="24"
              cy="24"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;