export default function getGreeting() {
    let date = new Date();
    let hours = date.getHours();
    let greet = '';
    if(hours < 12)  greet = 'Good Morning';
    else if(hours >= 12 && hours < 16) greet = 'Good Afternoon';
    else if(hours >= 16 && hours < 24) greet = 'Good Evening';

    return greet;
}