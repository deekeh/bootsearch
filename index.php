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
  </head>
  <body>
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light row mynav">
        <div class="">
          <a class="navbar-brand" href=""><img src="img/bs_logo.png" height="35rem" alt=""><span> | BootSearch</span></a>
        </div>
        <div class="">
          <form class="form-inline" method="get">
            <input class="form-control mr-sm-2 col-lg-8 col-md-8 col-sm-12 col-xs-12" id='search_term' type="search" placeholder="Search" aria-label="Search">
            <input id='search_b' class="btn btn-outline-success my-2 my-sm-0 col-lg-3 col-md-3 col-sm-12 col-xs-12" type="button" value="Search" onclick="display_options();">
          </form>
        </div>
      </nav><br>

      <div class="" id="main-body">
        <div class="jumbotron jumbotron-fluid text-center" id="main">
          <div class="container">
            <h1 class="display-3">BootStrap at your fingertips</h1><br><br><br><br>
            <p class="lead" id="main-desc">
              Bootsearch is a simple searching tool for all your BootStrap queries. Start searching now!
            </p>
          </div>
        </div>
      </div>
      <!-- <div id="content" class="list-group"></div>
      <div id="description" style="display: none;"></div> -->
    </div>
    <br>
  </body>
</html>
