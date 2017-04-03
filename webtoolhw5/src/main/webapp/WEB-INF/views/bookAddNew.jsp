<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
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
            <h1>Welcome to BOOK DB!</h1>
            <h3>Add new Books</h3>

            <form action="success.htm">
                <table class="table">            
                    <thead>
                        <tr>
                            <th class="col-sm-3">ISBN</th>
                            <th class="col-sm-3">Book Title</th>
                            <th class="col-sm-3">Author</th>
                            <th class="col-sm-3">Price</th>
                        </tr>                
                    </thead>
                    <tbody>
                        <c:forEach var="i" begin="1" end="${requestScope.num}" step="1">
                            <tr>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" name="isbn${i}" type="texy">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" name="title${i}" type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" name="author${i}" type="text">
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input class="form-control" name="price${i}" type="text">
                                    </div>
                                </td>
                            </tr>                
                        </c:forEach>
                    </tbody>
                </table>
                <input hidden name="num" type="text" value="${requestScope.num}" placeholder="${requestScope.num}">
                
                <button type='submit' class='btn btn-primary btn-block'>Submit</button>
            </form>
        </div>
    </body>
</html>
