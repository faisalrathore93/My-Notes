/*
partial template views are similar to include files in php. We can add the code snippts that needs to be used again and agin
and then include them in the view.

The partial view can be included as <% include partial_view.ejs %>


Example:
*/


File: project/views/nav_partial.ejs
-----------------------------------

<nav>
	
	<ul>
		<li><a href="">Home</a></li>	
		<li><a href="">Contacts</a></li>

	</ul>
</nav>




File: project/views/home.ejs
-----------------------------------
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>
<% include nav_partial.ejs %>
<center>
<h1>Welcome To your Home !</h1>
<h2>This is the home page of website</h2>

</body>
</html>



File: project/views/contact.ejs
--------------------------------

<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
</head>
<body>
<% include nav_partial.ejs %>
<center>
<h1>Welcome To your Home !</h1>
<h2>This is the home page of website</h2>
<
</body>
</html>




The code of nav_partial will be added to the both the home.ejs and contact.ejs

