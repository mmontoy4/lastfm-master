  var myapplication_name="api doc";
  var myAPI_key="062e9a51720da9c3c4e2bce4aaf4e5ab";
  var myshared_secret="d28efddba401878b2c80f6f252f43a65";

  function loginLastFm(){
  			/*
  			params api_key ( my api key)
  			cb the web that goes when user is authenticated relative path ( depends on the server is launched): http://localhost:3000/mainpage.ht*/
  			var url= 'http://www.last.fm/api/auth/?api_key=062e9a51720da9c3c4e2bce4aaf4e5ab&cb=http://localhost:3000/principal.html';

  			window.location.replace(url);
  }
