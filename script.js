"use strict";
var data;

//get data
var myRequestObject = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=rK5JyGGqZnGLztfHkUcecSp9Y5GUVbsQ";
myRequestObject.onreadystatechange = function() {
  if (myRequestObject.readyState == 4 && myRequestObject.status == 200) {

    data = JSON.parse(myRequestObject.responseText);
    displayPage();

  }
};
myRequestObject.open("GET", url);
myRequestObject.send();


// display the page 

function displayPage() {

  var headline = document.createElement('span');
  var headlineText = document.createTextNode("Here's what's in the news week: ");
  headline.appendChild(headlineText);
  document.body.appendChild(headline);
  headline.style.fontSize = "1.7em";
  headline.style.fontWeight = "bold";
  headline.style.color = "rgb(30,30,30)"

  var todaysDate = document.createElement('span');
  var todaysDateText = document.createTextNode(new Date().toString().substr(0, 15));
  todaysDate.appendChild(todaysDateText);
  document.body.appendChild(todaysDate);
  todaysDate.style.fontSize = "1.7em";
  todaysDate.style.fontWeight = "bold";
  todaysDate.style.color = "rgb(159,182,205)";

  var list = document.createElement('ol');
  for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.style.fontSize = "1.1em";
    li.style.color = "rgb(30,30,30)";
    list.appendChild(li);
  }
  document.body.appendChild(list);

  function displayList() {
    // console.log('displayList is run.');
    var lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
      // var li = document.createElement('li');
      let a = document.createElement('a')
      a.setAttribute('href', 'data.results[i].url');
      lis[i].appendChild(a);
      let aText = document.createTextNode(data.results[i].title);
      a.appendChild(aText)

    }

  }
  displayList();

}

