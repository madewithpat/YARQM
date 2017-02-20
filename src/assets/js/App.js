// let jokeId;
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // This parses the JSON response, and should return an object
//             // Note, the iccndb API that is used here may require accessing the properties differently
//             const json = JSON.parse(xhr.responseText);

//             // Check for repeat jokes
//             if (json.id == jokeId) {
//                 xhr.send(); //resend request if joke is a repeat
//                 return; // not sure if this is necessary... test without first
//             } else {
//                 jokeId = json.id;
//             }
//             // After inspecting json, note which fields are needed
//             // In this case, only one object is returned at a time,
//             //  so it's okay to call the properties directly by their keys
//             let joke = json.joke;
//             let html = "<h1>" + joke + "</h1>";

//             document.getElementById('ajax').innerHTML = html;

//         } else if (xhr.status === 404) {
//             // File not Found Error
//         } else if (xhr.status === 500) {
//             // Server borked error
//         } else {
//             alert(xhr.statusText);
//         }
//     }
// };

// xhr.open('GET', 'test.html');
// xhr.send();

// // This single line of jQuery will fetch AJAX data from the source and insert the
// // responseText into the element matched in the selector
// $("#ajax").load('test.html');

// // The previous line is equivalent to...
// $.get('test.html', function(response) {
//     $("#ajax").html(response);
// });


// const url = '/url/for/api';
// // This is equivalent to a query string in a url, specifically..
// //      example.com/?firstName=Mickey&lastName=Mouse
// // jQuery will handle all of the formatting
// let data = {
//     firstName: "Mickey",
//     lastName: "Mouse"
// };

// // The response variable passed in here is sent by jQuery
// // It is equivalent to the xhr.responseText variable above
// // jQuery also will wait for xhr.readyState === 4 && xhr.status === 200 before execcuting callback
// function callback(response) {
//     //Do some stuff with the response
// };

// $.get(url, data, callback);

'use strict';

function newQuote() {
    // const apiURL = "http://api.forismatic.com/api/1.0/";
    const apiURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    // const query = {
    //     method: "getQuote",
    //     format: "json",
    //     lang: "en"
    // };

    function quoteUpdate(data) {
        let html = `<blockquote>${data}</blockquote>`;
        $("#quote").html(html);
    };

    function quoteError(errorThrown) {
        let html = "<strong>Error Thrown: </strong>" + errorThrown;
        $("#quote").html(html);
    };

    $.ajax({
        url: apiURL,
        // data: query,
        dataType: "json",
        type: "GET",
        crossDomain: true,
        success: quoteUpdate,
        error: quoteError
    });

};

$(document).ready(newQuote);
$("#newQuoteButton").on("click", newQuote);