/*  Chris de Leon
    10/16/2022
    CIS 131 */

    var httpRequest = new XMLHttpRequest(); // created variable with constructor
    httpRequest.open("get", "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/"); // gets information about upcoming launches
    httpRequest.send();

    httpRequest.onreadystatechange = loadLaunches;

    // function loadLaunches(){
    //     if (httpRequest.readyState == 4 && httpRequest.status == 200){ // compares XMLHttpRequest client and status code
    //         var rockets = httpRequest.responseText;
    //         var rocketsObj = JSON.parse(rockets);
    //         document.getElementById('cardImageOne').src = rocketsObj.results[0].image; 
    //         document.getElementById('cardImageTwo').src  = rocketsObj.results[1].image;
    //         document.getElementById('cardImageThree').src = rocketsObj.results[2].image;
    //     }
    // }

