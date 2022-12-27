import {NotificationManager} from 'react-notifications'

const createNotification = (type) =>{
    console.log("called",type)
    NotificationManager.info("called")
    return() => {
    switch (type){
        case 'info':
         NotificationManager.info('Info message')
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
            NotificationManager.info("No type detected")
    }
    }
}

export default createNotification
