import React from 'react';

export default function Container({ children, className = "" }) {
  className = `container ${className}`;
  return (
    <div className={className} style={{
      padding: "5em 10vw",
      color: "#fff"
    }}>
      {children}
    </div>
  );
}
