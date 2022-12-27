import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'

function Notification() {
    const createNotification = (type) =>{
      return() => {
        switch (type){
          case 'info':
            NotificationManager.inmfo('Info message')
            break
          case 'success':
            NotificationManager.success('Success message', 'Title here');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
          default:
            return
        }
      }
    }
  return (
    <div>

      
    </div>
  )
}

export default Notification