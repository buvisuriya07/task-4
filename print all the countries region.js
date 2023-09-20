<!DOCTYPE html>
<html >
<head>
    
</head>
<body>
    <script> 
    function handledata(){
        let data=JSON.parse(this.responseText)
        console.log(data)

        let country=data.map((e)=>e.region)
        console.log(country)
    }
    const req =new XMLHttpRequest();
    req.addEventListener('load',handledata)
    req.open("GET","https://restcountries.com/v3.1/all")
    req.send()
    </script>
    
</body>
</html>
