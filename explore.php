<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Home | BootSearch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="css/master.css">
    <script type="text/javascript" src="js/options.js"></script>
    <script type="text/javascript" src="js/explore.js"></script>
  </head>
  <body onload="addButtons();">
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light row mynav">
        <div class="">
          <a class="navbar-brand" href="/bootsearch"><img src="img/bs_logo.png" height="35rem" alt=""><span> | BootSearch</span></a>
        </div>
        <!-- <div class="">
          <form class="form-inline" method="get">
            <input class="form-control mr-sm-2 col-lg-8 col-md-8 col-sm-12 col-xs-12" id='search_term' type="search" placeholder="Search" aria-label="Search">
            <input id='search_b' class="btn btn-outline-success my-2 my-sm-0 col-lg-3 col-md-3 col-sm-12 col-xs-12" type="button" value="Search" onclick="display_options();">
          </form>
        </div> -->
      </nav><br>
      <div id="explore-navX" style="overflow: auto;">
      	<div class="btn-group" style="width: 100%;" id="button-nav" role="group" aria-label="Basic example"></div>
      </div>
      <br>
      <div id="explore-area" style="overflow: auto;">
      	<div id="main-body"></div>
      </div>
    </div>
    <br>
  </body>
</html>
