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

