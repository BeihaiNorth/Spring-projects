<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
            <div class="row">
                <h1>${successnumber} out of ${totalnumber} books added successfully!</h1>
                <form action="addnumber.htm"  class="col-sm-3">
                    <button type='submit' class='btn btn-primary btn-block'>Add more books</button>
                </form>
                <form action="home.htm"  class="col-sm-3">
                    <button type='submit' class='btn btn-primary btn-block'>Back to BOOK home</button>
                </form>
            </div>
        </div>
    </body>
</html>
