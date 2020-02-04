//Might not have much js on this page but I wanted to do something...
const learnBtn = $("#learnBtn");
const quoteBtn = $("#quoteBtn");

function doSomething() {
    console.log("I did something"); 
};

function motivation() {
    $("#quote").empty();
    $("#author").empty();
    $.ajax({
        async: true,
        crossDomain: true,
        url: "https://type.fit/api/quotes",
        method: "GET"
    }).then(function(response) {
            $()
            let random = JSON.parse(response)[Math.floor(Math.random() * JSON.parse(response).length)];
            let quote = random.text;
            let author = random.author;
            $("#quote").append(quote);
            $("#author").append(`-${author}`);
            console.log(random);
        });
}

$(quoteBtn).on("click", motivation);
$(document).ready(motivation);
$(learnBtn).on("click", doSomething);

