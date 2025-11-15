import React from 'react';

interface FixedWidthWrapperProps {
  children: React.ReactNode;
  maxWidth?: number | string; 
  padding?: number;
  className?: string;
}

const FixedWidthWrapper: React.FC<FixedWidthWrapperProps> = ({
  children,
  maxWidth = 1440,
  padding = 0,
  className = "",
}) => {
  // Convert maxWidth to appropriate Tailwind class or custom style
  const getMaxWidthStyle = () => {
    if (typeof maxWidth === 'number') {
      return { maxWidth: `${maxWidth}px` };
    }
    return { maxWidth };
  };

  // Convert padding to appropriate Tailwind class
  const getPaddingClass = () => {
    if (padding === 0) return '';
    if (padding <= 4) return `px-${padding}`;
    return `px-[${padding}px]`;
  };

  return (
    <div className={`flex justify-center w-full px-5 md:px-10 ${getPaddingClass()} ${className}`}>
      <div 
        className="w-full"
        style={getMaxWidthStyle()}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedWidthWrapper;
