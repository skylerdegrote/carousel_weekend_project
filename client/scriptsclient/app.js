//this is the user experience app.js file (scriptsclient/app.js)

$(document).ready(function() {
    $.ajax({
        url: "/data",
        success: function (data) {
            $.each(data, function () {
                //var cardHeader = $('<div class="cardHeader"></div>');
                //var cardBody = $('<div class ="cardBody"></div>');
                //var cardFooter = $('<div class ="cardFooter"></div>');
                //
                //var name = this.name;
                //var description = this.desc;
                //var shoutOut = this.thanks;
                //var card = $('<div class="card"></div>');//each person has own div
                //
                //$(".card").append(cardHeader);
                //$(".card").append(cardBody);
                //$(".card").append(cardFooter);
                $(".allClassmatesContainer").append("<div class = 'indvStudent'></div>");//appending to div on index
                var student = $(".allClassmatesContainer").children().last();//student is "last child" on the card

                student.append("<h1 class='name'>Hello My Name is: "+this.name+"</h1>").css("height", "700px");
                student.append("<h2 class='description'>A little about me: <br></h2><p>"+this.desc+"</p>").css("height", "700px");
                student.append("<h2 class='shoutOut'>A little thanks to me: <br></h2><p>"+this.thanks+"</p>").css("height", "700px");
                //student.append("<div class='cardFooter'><button class='prev'>Previous</button><button class='next'>Next</button></div>").css("height", "700px");


            });
            $(".indvStudent:first").addClass("showStudent");

            $('body').on('click', '.next', function(){
                var currentSlide = $('.showStudent'); //defines the current slide
                var nextSlide = currentSlide.next();
                if(nextSlide.length == 0){
                    nextSlide = $('.indvStudent:first');
                }
                currentSlide.removeClass("showStudent");
                nextSlide.addClass("showStudent");

            });

            $("body").on("click", ".prev", function(){
                var currentStudent = $(".showStudent");
                var prevStudent = currentStudent.prev();
                if ( prevStudent.length == 0) {
                    prevStudent = $(".indvStudent:last");
                }
                currentStudent.removeClass("showStudent");
                prevStudent.addClass("showStudent");
            });


        }
    });
});


        //
        //
        //        //appends all 22 students to the DOM one student per div, there is a css class each-person that auto turns all students to display none
        //        $(".allClassmatesContainer").append("<div class='eachPerson'");
        //        var eachPerson = $("allClassmatesContainer").children().last();
        //
        //
        //        var headTitle = "Hello! My name is: ";
        //        var name = this.name;
        //        var descriptionTitle = "A little about me: ";
        //        var description = this.desc;
        //        var shoutOutTitle = "A shoutout about me: ";
        //        var shoutOut = this.thanks;
        //
        //        cardHeader.append(headTitle);
        //        cardHeader.append(name);
        //        cardBody.append(descriptionTitle);
        //        cardBody.append(description);
        //        cardBody.append(shoutOutTitle);
        //        cardBody.append(shoutOut);
        //
        //
        //        eachPerson.append(cardHeader);
        //
        //        eachPerson.append("<h1 class='name'" + this.name + "</h1>");
        //    });//end each function
        //}//end success
        //url:"/data", //calls server app.js and asks for JSON file
        //success: function(data){
        //    $.each(data, function(){
        //sections


        //makes fancy background
        //$("body").append('.cardContainer');
        ////the sections
        //$(".cardContainer").append("<div class='cardHeader'"+"</div>");
        //$(".cardContainer").append("<div class='cardBody'"+"</div>");
        //$(".cardContainer").append("<div class='cardFooter'"+"</div>");
        //
        ////the pieces
        //$('.cardHeader').append("<h2 class='name'> "+"Hello! My name is: "+this.name+ " </h2>");
        //$('.cardBody').append("<h2 class='shoutout'> "+"A shoutout to me: "+ \n + "</h2><h3>" + this.shoutout + " </h3>");
        //
        //
        ////stacking them
        //$('.cardContainer').append('.cardHeader');
        //$('.cardContainer').append('.cardBody');
        //$('.cardContainer').append('.cardFooter');

    //
    //         });//end ajax function
    //
    //});//end document ready










//$(document).ready(function (){
//    var classmates = [];
//    $.ajax({
//        type: "POST",
//        url: "/classList-request",
//        contentType: "application/JSON",
//        dataType: "json",
//        data: JSON.stringify(classmates),  //apparently classmates is not defined...
//        success: function(response) {
//            var classmates = response;
//            for(var i = 0; i < classmates.length; i++) {
//                var student = classmates[i];
//                current_student.push(emp);
//                $(".cardContainer").append(createCard(classmates));
//            }
//
//            //var $sprintReq = $("<h2/>", {text: "Sprints Needed: " + calculateSprintsRequired()});
//            //$(".project-info-container").append($sprintReq);
//
//        }
//    });
//
////example from code academy
//    //var main = function() {
//    //    $('.dropdown-toggle').click(function() {
//    //        $('.dropdown-menu').toggle();
//    //    });
//    //
//    //
//    //    $('.arrow-next').click(function() {
//    //        var currentSlide = $('.active-slide');
//    //        var nextSlide = currentSlide.next();
//    //
//    //        var currentDot = $('.active-dot');
//    //        var nextDot = currentDot.next();
//    //
//    //        if(nextSlide.length === 0) {
//    //            nextSlide = $('.slide').first();
//    //            nextDot = $('.dot').first();
//    //        }
//    //
//    //        currentSlide.fadeOut(600).removeClass('active-slide');
//    //        nextSlide.fadeIn(600).addClass('active-slide');
//    //
//    //        currentDot.removeClass('active-dot');
//    //        nextDot.addClass('active-dot');
//    //    });
//    //
//    //
//    //    $('.arrow-prev').click(function() {
//    //        var currentSlide = $('.active-slide');
//    //        var prevSlide = currentSlide.prev();
//    //
//    //        var currentDot = $('.active-dot');
//    //        var prevDot = currentDot.prev();
//    //
//    //        if(prevSlide.length === 0) {
//    //            prevSlide = $('.slide').last();
//    //            prevDot = $('.dot').last();
//    //        }
//    //
//    //        currentSlide.fadeOut(600).removeClass('active-slide');
//    //        prevSlide.fadeIn(600).addClass('active-slide');
//    //
//    //        currentDot.removeClass('active-dot');
//    //        prevDot.addClass('active-dot');
//    //    });
//    //
//    //}
//
//
//
//    function createCard() {
//        //sections
//        var cardHeader = $('<div/>', {class: cardHeader});
//        var cardBody = $('<div/>', {class: cardBody});
//        var cardFooter = $('<div/>', {class: cardFooter});
//        //info parts
//        var cardHeaderTitle = $('<h2/>', {text: "Hello! My Name is: "});
//        var cardHeaderName = $('<h2/>', {text: classData.name});
//        var cardBodyDescriptionTitle = $('<h2/>', {text: "A little about me!"});
//        var cardBodyDescription = $('<h2/>', {text: classData.description});
//        var cardBodyShoutTitle = $('<h2/>', {text: "Shout out to me!"});
//        var cardBodyShout = $('<h2/>', {text: classData.shoutout});
//
//        //header parts
//        cardHeader.append(cardHeaderTitle);
//        cardHeader.append(cardHeaderName);
//        //body parts
//        cardBody.append(cardBodyDescriptionTitle);
//        cardBody.append(cardBodyDescription);
//        cardBody.append(cardBodyShoutTitle);
//        cardBody.append(cardBodyShout);
//
//        //putting sections together
//        card.append(cardHeader);
//        card.append(cardBody);
//        card.append(cardFooter);
//
//
//        return card;
//
//    }
//
//
