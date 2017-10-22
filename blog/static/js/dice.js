var result; 
function roll_dice(num){
    return Math.floor((Math.random() * num) + 1);
 }

function roll_six(){
    result = roll_dice(6);
    document.getElementById("demo").innerHTML = result;
}

function roll_eight(){
    result = roll_dice(8);
    document.getElementById("demo").innerHTML = result;
}

function roll_twelve(){
    result = roll_dice(12);
    document.getElementById("demo").innerHTML = result;
}
function roll_hundred(){
    result = roll_dice(100);
    document.getElementById("demo").innerHTML = result;
}
function flip_coin(){
    result = roll_dice(2);
    var reply;
    if(result == 1){
        reply = "heads";
    }else{
        reply = "tails";
    }
    document.getElementById("demo").innerHTML = reply;
}

