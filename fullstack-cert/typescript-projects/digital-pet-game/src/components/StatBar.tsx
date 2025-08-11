import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  icon: string;
}

function getStatColorClass(value: number): string {
  if (value >= 70) return 'high';
  if (value >= 40) return 'medium';
  return 'low';
}

export function StatBar({ label, value, icon }: StatBarProps) {
  const colorClass = getStatColorClass(value);

  return (
    <div className="stat-bar">
      <div className="stat-header">
        <div className="stat-label">
          <span className="stat-icon">{icon}</span>
          <span className="stat-name">{label}</span>
        </div>
        <span className="stat-value">{Math.round(value)}%</span>
      </div>
      
      <div className="stat-progress">
        <div 
          className={`stat-fill ${colorClass}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}