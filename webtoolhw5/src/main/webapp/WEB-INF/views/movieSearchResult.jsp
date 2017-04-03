<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <title>Result</title>
    </head>
    <body>
        <h1>Searching movies...</h1>
        <h3> <c:out value="${requestScope.type}"/> is <c:out value="${requestScope.keyword}" /></h3>
        <table class="table table-striped">            
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Main Actor</th>
                    <th>Main Actress</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>                
            </thead>
            <tbody>
            <c:forEach items="${requestScope.movieList}" var="movie">
                <tr>
                    <td>${movie.title}</td>
                    <td>${movie.actor}</td>
                    <td>${movie.actress}</td>
                    <td>${movie.genre}</td>
                    <td>${movie.year}</td>
                </tr>                
            </c:forEach>
            </tbody>
           
        </table> 
    </body>
</html>
