var fortunes = ["nice try", "sorry", "better luck next time", "definitely"];

$("#button1").click(function(){
    var index = Math.floor(Math.random() * fortunes.length);// You want this variable to store the random whole number. The whole number should be between 0 and the length of the array. Do NOT just use the number 4.
    fortunes.push("you will say thanks to codenations volunteers");
    $("#text").html(fortunes[index]);
});

//Bonus: create additional response for your Magic 8 Ball. 
//Bonus: edit the CSS so it looks more like a Magic 8 Ball.