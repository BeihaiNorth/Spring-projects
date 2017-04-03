<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <title>movie db</title>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to MOVIE DB!</h1>
            <div class="row">
                <form action="browse.htm" class="col-sm-4">
                    <button type='submit' class='btn btn-primary btn-block'>Browse Movies</button>
                </form>
                <form action="add.htm" class="col-sm-4">
                    <button type='submit' class='btn btn-primary btn-block'>Add New Movie to Database</button>
                </form>
            </div>
    </body>
</html>
