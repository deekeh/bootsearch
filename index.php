<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Home | BootSearch</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" href="css/master.css">
    <script type="text/javascript" src="js/options.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <nav class="navbar navbar-light bg-light row mynav">
        <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 row">
          <a class="navbar-brand" href=""><img src="img/bs_logo.png" height="35rem" alt=""><span> | BootSearch</span></a>
        </div>
        <div class="col-lg-10 col-md-6 col-sm-12 col-xs-12">
          <form class="form-inline row">
            <input class="form-control mr-sm-2 col-lg-9 col-md-9 col-sm-9 col-xs-12" type="search" placeholder="Search" aria-label="Search">
            <input id='search_b' class="btn btn-outline-success my-2 my-sm-0 col-lg-2 col-md-2 col-sm-2 col-xs-12" type="button" value="Search" onclick="sort();">
          </form>
        </div>
      </nav><br>

      <div id="content" class="list-group"></div>
      <div id="description" style="display: none;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
    <br>
  </body>
</html>
