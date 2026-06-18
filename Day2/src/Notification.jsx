import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState(0);

  return (
    <>
      <div>Notification</div>

      <div>
        <h1>Notifications: {notifications}</h1>

        <button onClick={() => setNotifications(notifications + 1)}>
          🔔 New Notification
        </button>
      </div>
    </>
  );
};

export default Notification;