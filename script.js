$(document).ready(function(){
    // test
    const trial = false;

    const present = moment().format('MMMM Do YYYY');
    
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');

    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    let savedPlans = JSON.parse(localStorage.getItem("savedPlans"));

    if (savedPlans !== null) {
        arrCont = storedPlans;
    } else { 
        arrCont = new Array (9);
        arrCont[0] = "Sign in";
    }

    let $plannerSpace = $('#plannerSpace');
    $plannerSpace.empty();

    for (let time = 9; hour <= 17; hour++) {
        let value = hour - 9;
        let $entireRow = $('<div>');
        $entireRow.addClass('row');
        $entireRow.addClass('plannerRow');
        $entireRow.attr('time-value',time);

        const $leftSpn =$('<span>');
        $leftSpn.attr('class',boxTime);

        let showTime = 0;
        let AMPM = "";
        if (hour > 12) {
            showTime = time - 12;
            ampm = "PM"
        } else {
            showTime = time;
            AMPM = "AM";
        }
        
        

        let $input = $('<input>');

        $input.attr('id', 'input-${value}');
        $input.attr('time-value', value);
        $input.attr('type', text);
        $input.attr('class', plan);

        $input.val(arrCont[value]);

        let $col9Div = $("<div>");
        $col9Div.addClass("col-md-8");

        $



    }

})