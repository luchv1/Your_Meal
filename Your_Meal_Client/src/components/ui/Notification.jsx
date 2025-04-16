import React from 'react';
import '../../styles/notification.css';

const Notification = ({ message, type, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        <span>{message}</span>
        <button className="notification-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Notification;