// document.getElementsByClassName('op').addEventListener('click', getdescription);

var getdescription = function (search_term) {
  document.getElementById('main-body').innerHTML = '<div id="description"></div>';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/bs_data.json', true);
  xhr.onload = function() {
    if (this.status == 200) {
      var json_values = JSON.parse(this.responseText);
      var output = '';
      // for (var i in json_values) {
      for (var i = 0; i < json_values.length; i++) {
        if (search_term == json_values[i].name)
        output = '<div class="card">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + json_values[i].name + '</h5>' +
            '<p class="card-text">' + json_values[i].description + '</p>' +
          '</div>' +
        '</div>';
      }
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
  return found;
}


function display_options() {
  document.getElementById('main-body').innerHTML = "<div id=\"content\" class=\"list-group\"></div>";
  var content = document.getElementById('content');
  var description = document.getElementById('description');

  var found = searchx();
  var output = '', search_results;
  var search_term = document.getElementById('search_term').value;

  if (search_term == '')
  {
    console.log("here");
    document.getElementById('main-body').innerHTML = '<div id="content" class="list-group"></div>';
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'data/bs_data.json', true);
    console.log("here3");
    xhr2.onload = function()
    {
      console.log("here2");
      if (this.status == 200)
      {
        var json_values = JSON.parse(this.responseText);
        var output = '';
        for (var i = 0; i < json_values.length; i++)
        {
          output += "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + json_values[i].name + "\');\">" + json_values[i].name + "</button>";
        }
        document.getElementById('content').innerHTML = output;
      }
    }
  }
  else if (found) {
    document.getElementById('main-body').innerHTML = '<div id="content" class="list-group"></div>';
    document.getElementById('content').innerHTML = "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + search_term + "\');\">" + search_term + "</button>";
  }
  else {
    document.getElementById('main-body').innerHTML = '<div id="description"></div>';
    output = '<div class="card">' +
      '<div class="card-body">' +
        '<h5 class="card-title">' + search_term + ' was not found.' + '</h5>' +
      '</div>' +
    '</div>';
    document.getElementById('description').innerHTML = output;
  }

  // for (var i = 0; i < options.length; i++) {
  //    content.innerHTML += "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + options[i] + "\');\">" + options[i] + "</button>";
  // }
}
