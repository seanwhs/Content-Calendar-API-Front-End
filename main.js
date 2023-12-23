fetch('http://localhost:8080/api/v1/content')
.then(response => response.json())
.then(data => console.log(data));
