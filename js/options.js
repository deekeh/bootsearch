// document.getElementsByClassName('op').addEventListener('click', getdescription);

var getdescription = function (search_term) {
  document.getElementById('content').style = "display: none";
  document.getElementById('description').style = "display: block";
  document.getElementById('description').innerHTML = '';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/bs_data.json', true);
  xhr.onload = function() {
  // function xhr.onload() {
    if (this.status == 200) {
      console.log(this.responseText);
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

// const desc = [
//   {
//     "namex": "Containers",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Scrollspy",
//     "description": "Scrollspy has a few requirements to function properly:<br><ul><li>If you’re building our JavaScript from source, it requires util.js.</li><li>It must be used on a Bootstrap nav component or list group.</li><li>Scrollspy requires position: relative; on the element you’re spying on, usually the <body>.</li><li>When spying on elements other than the <body>, be sure to have a height set and overflow-y: scroll; applied.</li><li>Anchors (<a>) are required and must point to an element with that id.</li></ul><p>When successfully implemented, your nav or list group will update accordingly, moving the .active class from one item to the next based on their associated targets.</p>",
//     "output": "xyz"
//   },
//   {
//     "namex": "Tooltips",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Toasts",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Spinners",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Progress",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Popovers",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Pagination",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Navbar",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Navs",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Modal",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Media object",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "List group",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Forms",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Dropdowns",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Collapse",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   },
//   {
//     "namex": "Carousel",
//     "description": "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).<br><br>While containers can be nested, most layouts do not require a nested container.",
//     "output": "xyz"
//   }
// ];


// var getdescription = function (search_term) {
//   loady();
// }

// var loady = function(optn) {
//   document.getElementById('description').innerHTML = `
//   ${desc.map(gd).join('')}
//   `
// }

// var gd = function(a) {
//   return `

//   <div class="card">
//     <div class="card-body">
//       <h5 class="card-title"> ${a.namex}></h5>      
//       <p class="card-text"> ${a.description} </p>
//     </div>
//   </div>
//   `
// }



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
  // if (search_term == '') {

  // }
  if (found) {
    content.style = 'display: block;'; // console.log('reached');
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
