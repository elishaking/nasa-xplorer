import React from 'react';

export default function Container({ children, className = "" }) {
  className = `container ${className}`;
  return (
    <div className={className} style={{
      color: "#fff"
    }}>
      {children}
    </div>
  );
}
