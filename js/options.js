// document.getElementsByClassName('op').addEventListener('click', getdescription);

var getdescription = function (search_term) {
  document.getElementById('content').style = "display: none";
  document.getElementById('description').style = "display: block";
  document.getElementById('description').innerHTML = '';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/bs_data.json', true);
  xhr.onload = function() {
    // if (this.status == 200) {
      var json_values = JSON.parse(this.responseText);

      var output = '';
      for (var i in json_values) {
        if (search_term == json_values.name[i])
        output = '<div class="card">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + json_values[i].name + '</h5>' +
            '<p class="card-text">' + json_values[i].description + '</p>' +
          '</div>' +
        '</div> something';
      // }
      document.getElementById('description').innerHTML = output;
    }
  }
  xhr.send();
}


/////////////////////////////////////////////////////////////////////

var options = new Array();
options = ['Containers', 'Tooltips', 'Toasts', 'Spinners', 'Scrollspy', 'Progress', 'Popovers', 'Pagination', 'Navbar', 'Navs', 'Modal', 'Media Object', 'List object', "Forms", "Dropdowns", "Collapse", "Carousel"];

var searchx = function () {
  options.sort();

  var found = false; var position;
  var search_term = document.getElementById('search_term').value;
  for (var i = 0; i < options.length; i++) {
    if (options[i] == search_term) {
      found = true;
      position = i;
      break;
    }
  }

  var output;
  var content = document.getElementById('content');
  var description = document.getElementById('description');
  if (found) {
    content.style = 'display: block;'; console.log('reached');
    description.style = 'display: none;';
    content.innerHTML = "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + options[position] + "\');\">" + options[position] + "</button>";
  }
  else {
    content.style = 'display: none;';
    description.style = 'display: block;';
    output = '<div class="card">' +
      '<div class="card-body">' +
        '<h5 class="card-title">' + search_term + ' was not found.' + '</h5>' +
      '</div>' +
    '</div>';
    description.innerHTML = output;
  }
}


function display_options() {
  var content = document.getElementById('content');
  document.getElementById('description').style = "display: none";
  document.getElementById('content').style = "display: block";
  searchx();

  // for (var i = 0; i < options.length; i++) {
  //    content.innerHTML += "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + options[i] + "\');\">" + options[i] + "</button>";
  // }
}
