window.onload = function hide() {
    document.getElementById('state-label').style.display = 'none';
    document.getElementById('city-label').style.display = 'none';
};

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

var tbody = d3.select("tbody");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var columnUpper = ["city", "state", "country", "shape"]

//Inputing the data into the HTML
data.forEach(Sighting => {
    var row = tbody.append("tr");
    columns.forEach(column =>
        row.append("td").text(
            (columnUpper.includes(column)) ?
                Sighting[column].toUpperCase() : Sighting[column])
    )
});

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