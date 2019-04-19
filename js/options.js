// document.getElementsByClassName('op').addEventListener('click', getdescription);

var getdescription = function () {
  document.getElementById('content').style = "display: none";
  document.getElementById('description').style = "display: block";
  console.log("idhar aaya");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/bs_data.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var namex = JSON.parse(this.responseText);
      // do something here
      console.log("reached here.")
      console.log(namex.name);
    }
  }
  xhr.send();
}


/////////////////////////////////////////////////////////////////////

var options = new Array();
options = ['Containers', 'Tooltips', 'Toasts', 'Spinners', 'Scrollspy', 'Progress', 'Popovers', 'Pagination', 'Navbar', 'Navs', 'Modal', 'Media Object', 'List object'];

var sort = function () {
  var content = document.getElementById('content');
  document.getElementById('description').style = "display: none";
  document.getElementById('content').style = "display: block";

  for (var i = 0; i < options.length; i++) {
    content.innerHTML += "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + options[i] + "\');\">" + options[i] + "</button>";
  }
}
