export default function getSessionStatus(date1,date2) {
    let status = '';
    let currDate = new Date();
    if(currDate > date2.getTime()) status = 'Completed';
    else if(currDate < date1.getTime()) status = 'Upcoming';
    else status = 'Ongoing';

    return status;
}