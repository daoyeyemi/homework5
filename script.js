
    // var plannerSpace = $("");
    // for (time = 9; time < 17; time++) {
    //     value = time - 9;
// Create timeblocks
$("#plannerSpace").append("<div class='row'>");
// console.log(row);
$(".row").append("<div class='col-md-2' id='timeBox'>");
$("#timeBox").append('<span class="input-group-text" id="basic-addon1">@</span>');
$(".row").append("<div class='col-md-8' id='inputBox'>");
$("#inputBox").append('<input type="text" class="form-control" placeholder="Enter tasks here..." aria-label="Username" aria-describedby="basic-addon1">');
$(".row").append("<div class='col-md-2' id='saveBox'>");
$("#saveBox").append('<button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>');


// Time: 9 am

// Create buttons for saving info in box  
// Create date on top of page  
// Color code according to hour in work day