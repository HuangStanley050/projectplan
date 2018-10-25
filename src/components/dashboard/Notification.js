import React from "react";


const Notifications = (props) => {
    return (
        <div className="section">
          <div className="card blue lighten-4 z-depth-0">
            <div className="card-content">
                <span className="card-title">Notifications</span>
                <ul className="notifications">
                    {props.notifications && props.notifications.map(notification=>{
                        return (
                            <li key={notification.id}>
                                <span className="red-text">{notification.user}</span>
                                <span> {notification.content}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
          </div>
        </div>

    );
};

export default Notifications;
