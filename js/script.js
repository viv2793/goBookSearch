	var num = 10;
    var index = 1;
    var sw = 0;

    function check(){
        number = Number.parseInt(document.getElementById("num").value);
		if (Number.isInteger(number)){
			if (number > 40) num = 40;
				else if (number < 1) num = 1;
					else num = number;
		}
		else num = 10;
    }
    function next(){
		index = index + num;
		my();
    }
    function previous(){
        index=index-num;
        if(index >0){
            my();
        }
    }
	
    function my(){
		var firstSearchVal=document.getElementById("title").value;
		if(firstSearchVal!==""){
			document.getElementById("sectitle").value=firstSearchVal;
		}
		var s = document.createElement("script");
                s.type = "text/javascript";
				url = document.getElementById("sectitle").value;
				s.src = "https://www.googleapis.com/books/v1/volumes?q="+url+"&maxResults="+num+"&startIndex="+index+"&callback=handleResponse";
				var out = document.getElementById("output");
				
	if (out.hasChildNodes())
		out.removeChild(out.firstChild);
		document.getElementById("content").innerHTML = "";
		out.appendChild(s);
	document.getElementById("title").value="";
    }

    function handleResponse(response) {
		if(response!=undefined && (response.items.length!=0)){
			for (var i = 0; i < response.items.length; i++) {
				var flag= 0;
				var flag2 = 0;
				var item = response.items[i];
				document.getElementById("content").innerHTML += "<br><table style='height:200px'><tr><td><img src='"+item.volumeInfo.imageLinks.thumbnail +"'></td><td>Title: <a href='"+item.volumeInfo.infoLink+"'>"+item.volumeInfo.title+"</a><br>Author: "+item.volumeInfo.authors+"<br>Description: "+item.volumeInfo.description+"</td></tr> </table>";

			}
		}
		else{
			document.getElementById("content").innerHTML += "<p>results are not found</p>";
		}
	}
	
    
