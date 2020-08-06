$(document).ready(function(){
    // test
    const trial = false;
    // get times from moment.js
    const present = moment().format('MMMM Do YYYY');
    
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');

    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    let $dayHeading = $('')

})