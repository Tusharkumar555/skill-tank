import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default StatsCard;