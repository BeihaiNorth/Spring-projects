<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <title>book db</title>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to BOOK DB!</h1>
            <form action="addnew.htm" method="post">
                <div class="row">
                    <div class="form-group col-sm-4">
                        <lable>How many books do you want to add?</lable>
                        <input class="form-control" name="num" type="number">
                    </div>
                    <button type='submit' class='btn btn-primary btn-block'>Submit</button>
                </div>
            </form>
    </body>
</html>
