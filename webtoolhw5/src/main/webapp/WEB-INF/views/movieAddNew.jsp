<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <title>Add new movie</title>
    </head>
    <body>
        <div class="container">
            <form action="success.htm" method="post">
                <div class="row">
                    <div class='form-group col-sm-5'>
                        <label>Movie Title:</label>
                        <input type='text' class='form-control' name='title'>
                    </div>
                    <div class='form-group col-sm-5'>
                        <label>Lead Actor:</label>
                        <input type='text' class='form-control' name='actor'>
                    </div>
                    <div class='form-group col-sm-5'>
                        <label>Lead Actress:</label>
                        <input type='text' class='form-control' name='actress'>
                    </div>
                    <div class='form-group col-sm-5'>
                        <label>Genre:</label>
                        <input type='text' class='form-control' name='genre'>
                    </div>
                    <div class='form-group col-sm-5'>
                        <label>Year:</label>
                        <input type='number' class='form-control' name='year' step="1" min="1895" max="2017">
                    </div>
                    <button type='submit' class='btn btn-primary btn-block'>Add Movie</button>
                </div>
            </form>
        </div>
    </body>
</html>
