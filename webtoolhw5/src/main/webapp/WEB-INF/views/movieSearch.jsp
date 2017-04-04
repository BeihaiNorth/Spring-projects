<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <title>search movie</title>
    </head>
    <body>
        <h1>Search a Movie</h1>
        <div class="container">
            <form action="result.htm" method="get">
                <div class="row">
                    
                    <div class='form-group col-sm-4'>
                        <label>Keyword:</label>
                        <input type='text' class='form-control' name='keyword'>
                    </div>
                    <div class='form-group col-sm-12'>
                        <label>Type:</label>
                        <div class='radio'>
                            <input type='radio' name='searchtype' value='title'>Title</div>
                        <div class='radio'>
                            <input type='radio' name='searchtype' value='actor'>Actor</div>
                        <div class='radio'>
                            <input type='radio' name='searchtype' value='actress'>Actress</div>
                        <div class='radio'>
                            <input type='radio' name='searchtype' value='genre'>Genre</div>
                        <div class='radio'>
                            <input type='radio' name='searchtype' value='year'>Year</div>
                    </div>
                    <button type='submit' class='btn btn-primary btn-block col-sm-4'>search</button>
                </div>
            </form>
        </div>
    </body>
</html>
