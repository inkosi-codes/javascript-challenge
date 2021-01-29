// Javascript covers the first part of the assignment with single filter option with just date field

// Onload hide unused elements
window.onload = function hide() {
    document.getElementById('state-label').style.display = 'none';
    document.getElementById('city-label').style.display = 'none';
};

// If user needs to use advanced search functions once check box is selected display html elements
var chk = document.getElementById("multi-search");

function adv() {

    if (chk.checked == true) {
        document.getElementById('state-label').style.display = 'block';
        document.getElementById('city-label').style.display = 'block';
    }
    else {
        document.getElementById('state-label').style.display = 'none';
        document.getElementById('city-label').style.display = 'none';
    };
};


// Main JS for creating and loading html table onto the page
var tableData = data;
var tbody = d3.select("tbody");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]; //used to access columns inside of the data
var columnUpper = ["city", "state", "country", "shape"]; // Created in order to manipulate certain columns by turing them into uppercase

//Inputing the data into the HTML
var ufoData = (getData) => {
    getData.forEach(Sighting => {
        var row = tbody.append("tr");
        columns.forEach(column =>
            row.append("td").text(
                (columnUpper.includes(column)) ?
                    Sighting[column].toUpperCase() : Sighting[column])
        )
    });
};
ufoData(tableData);

// Create event for date selection filter of dataset
var filter = d3.select("#filter-btn");


filter.on("click", function () {
    d3.event.preventDefault();
    tbody.html("");

    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value");

    var inputElementState = d3.select("#state");
    var inputValueState = inputElementState.property("value");

    var inputElementCity = d3.select("#city");
    var inputValueCity = inputElementCity.property("value");

    if (chk.checked !== true) {
        var date = new Date(inputValueDate);

        var inputValueDate = date.toLocaleDateString('en-US', { timeZone: 'UTC' });

        var filterDate = tableData.filter(tableData => tableData.datetime === inputValueDate);

        let response = {
            filterDate
        }

        if (response.filterDate.length !== 0) {
            ufoData(filterDate);
        }

        else {
            tbody.html("No Data Avaiable for the requested Date");
        }
    }
    else {
        tbody.html("");
    };
});

// Create event for user to reset table with entire dataset
var reset = d3.select("#reset-btn");

reset.on("click", function () {
    d3.event.preventDefault();

    tbody.html("");
    ufoData(tableData);
})

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
