//this is the user experience app.js file


$(document).ready(function (){
    $.ajax({
        //get request is default
        url: "/data",
        //automatically assumes its going to go up to the server level to find this url
        success: function(data){
            console.log(data);
        }
    });


    function buildClassCard(){
        //divs
        var cardHeader = $('<div/>', {class:card-header});
        var cardBody = $('<div/>', {class:card-body});
        var cardFoot = $('<div/>', {class:card-foot});

        //info
        var headText = $('<h3/>', {text: "Hello! My Name Is: "+ classlist.name});
        var bodyDescription = $('<h3/>', {text: "A little about me: "+ classlist.description});
        var bodyshout = $('<h3/>', {text: "A shout out to me: "+ classlist.shoutout});

        cardHeader.append(headText);
        rotate-container.append(cardHeader);
    }


});