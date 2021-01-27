// Javascript covers the first part of the assignment with single filter option with just date field

// Onload hide unused elements
window.onload = function hide() {
    document.getElementById('state-label').style.display = 'none';
    document.getElementById('city-label').style.display = 'none';
};

// If user needs to use advanced search functions once check box is selected display html elements
function adv() {
   var chk = document.getElementById("multi-search");

   if(chk.checked == true){
    document.getElementById('state-label').style.display = 'block';
    document.getElementById('city-label').style.display = 'block';
   }
   else{
    document.getElementById('state-label').style.display = 'none';
    document.getElementById('city-label').style.display = 'none';
   };
};


// Main JS for creating and loading html table onto the page
var tbody = d3.select("tbody");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"] //used to access columns inside of the data
var columnUpper = ["city", "state", "country", "shape"] // Created in order to manipulate certain columns by turing them into uppercase

//Inputing the data into the HTML
data.forEach(Sighting => {
    var row = tbody.append("tr");
    columns.forEach(column =>
        row.append("td").text(
            (columnUpper.includes(column)) ?
                Sighting[column].toUpperCase() : Sighting[column])
    )
});

// Used to populate the dropdown box with unique values for state abbrv
var select = document.getElementById('state');
var opt = [];
for (i = 0; i < data.length; i++) {
    if (opt.indexOf(data[i].state) === -1) {
        opt.push(data[i].state);
    }
};

for (i = 0; i < opt.length; i++) {
    var val = opt[i].toUpperCase();
    var el = document.createElement("option");
    el.textContent = val;
    el.value = val;
    select.appendChild(el);
}

// Used to populate the dropdown box with unique values for cities
var select = document.getElementById('city');
var opt = [];
for (i = 0; i < data.length; i++) {
    if (opt.indexOf(data[i].city) === -1) {
        opt.push(data[i].city);
    }
};

for (i = 0; i < opt.length; i++) {
    var val = opt[i].toUpperCase();
    var el = document.createElement("option");
    el.textContent = val;
    el.value = val;
    select.appendChild(el);
}