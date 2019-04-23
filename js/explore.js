var addButtons = function()
{
	var button_names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var button_nav = document.getElementById('button-nav');

	for (var i = 0; i < button_names.length; i++) {
		button_nav.innerHTML += '<button type="button" id = "' + button_names[i] + '" class="btn btn-secondary" onclick="getAll(\'' + button_names[i] + '\')">' + button_names[i] + '</button>';
	}
}

var getAll = function(e_char)
{
  document.getElementById('explore-area').innerHTML = '<div id="content" class="list-group"></div>';
  
  var output = '';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/bs_data.json', true);
  console.log("hi 2");
  xhr.onload = function()
  {
	    if (this.status == 200)
	    {
	      var json_values = JSON.parse(this.responseText);
	      var output = '';
	      
	      for (var i = 0; i < json_values.length; i++)
	      	{
	        	if (e_char == json_values[i].name[0])
	        	{
		        	console.log("hi 5" + json_values[i].name);
		        	document.getElementById('content').innerHTML += "<button type=\"button\" class=\"list-group-item list-group-item-action op\" onclick=\"getdescription(\'" + json_values[i].name + "\');\">" + json_values[i].name + "</button>";
	        	}
	        }
	    }
	}
  xhr.send();
}