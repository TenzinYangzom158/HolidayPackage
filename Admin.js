
    ///////  xmlhttp request  ////////
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();  
    }  
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  
    }  

    xmlhttp.open("GET","packages.xml",false);  
    xmlhttp.send(); 
    xmlDoc=xmlhttp.responseXML; 
    
    //////////  Button event listeners  /////
    document.getElementById("showbtn").addEventListener("click",ShowTable);
    document.getElementById("delbtn").addEventListener("click",deln);
    document.getElementById("changebtn").addEventListener("click",changen);
    document.getElementById("addbtn").addEventListener("click",del);
    document.getElementById("submitbtn").addEventListener("click",addnewele);

    /////////  ShowTable function  ///////////////
    function ShowTable()
    {
           var div = document.getElementById("overlayform");
           var table= document.getElementById("tbl");

           table.style.display = "block";

           if (div.style.display !== " none")
              {
                 div.style.display = "none";
                
              }
         
              
        console.log("Show Table function")
        var x = xmlDoc.getElementsByTagName("Packages");
        var table = `<tr>
                    <th>id</th>
                    <th>date</th>
                    <th>price</th>
                    <th>duration</th>
                    <th>dept_city</th>
                    <th>dest_city</th>
                    </tr>`;
        

        for (i = 0; i < x.length; i++) {
            table += "<td>" +
                    x[i].getElementsByTagName("id")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("date")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("price")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("duration")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("dept_city")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("dest_city")[0]
					.childNodes[0].nodeValue + "</td></tr>"; 
        }

        // Print the xml data in table form
        document.getElementById("tbl").innerHTML = table;
    }

    // Delete function
    function del(){
            var div = document.getElementById("tbl");
            var divform = document.getElementById("overlayform");
            divform.style.display = "block";
            if (div.style.display !== " none")
              {
                 div.style.display = "none";
                
              }
              if (img.style.display !== " none")
              {
                 img.style.display = "none";
                
              }
    }

    function deln()
        {   
            var x = xmlDoc.getElementsByTagName("Packages");
            var node_number = parseInt(window.prompt("Enter the node number to delete! "));
            node_number = node_number-1;
            console.log(x.length)
            console.log(node_number, typeof(node_number))
            if (node_number<x.length){
                y = xmlDoc.getElementsByTagName("Packages")[node_number];
                xmlDoc.documentElement.removeChild(y);
                alert("The Node has been deleted!");
                ShowTable();
            }
            else{
                alert("The node number you entered is invalid!");
            }
        }

   
    function addnewele(){
        
        console.log("Adding new element");
        var eid = document.getElementById("id").value;
        var ename = document.getElementById("date").value;
        var eprice = document.getElementById("price").value;
        var etype = document.getElementById("duration").value;
        var elocation= document.getElementById("dept_city").value;
        var edescription = document.getElementById("dest_city").value;



        newElement = xmlDoc.createElement("Packages");
        x = xmlDoc.getElementsByTagName("PackagesDetail")[0];

     

        neweid = xmlDoc.createElement("id");
        neweidtxt = xmlDoc.createTextNode(eid);
        neweid.appendChild(neweidtxt);
        newElement.appendChild(neweid);

        newename = xmlDoc.createElement("date");
        newenametxt = xmlDoc.createTextNode(ename);
        newename.appendChild(newenametxt);
        newElement.appendChild(newename);

        neweprice = xmlDoc.createElement("price");
        newepricetxt = xmlDoc.createTextNode(eprice);
        neweprice.appendChild(newepricetxt);
        newElement.appendChild(neweprice);


        newetype= xmlDoc.createElement("duration");
        newetypetxt = xmlDoc.createTextNode(etype);
        newetype.appendChild(newetypetxt);
        newElement.appendChild(newetype);

        newelocation= xmlDoc.createElement("dept_city");
        newelocationtxt = xmlDoc.createTextNode(elocation);
        newelocation.appendChild(newelocationtxt);
        newElement.appendChild(newelocation);


        newedescription  = xmlDoc.createElement("dest_city");
        newedescriptiontxt = xmlDoc.createTextNode(edescription );
        newedescription .appendChild(newedescriptiontxt);
        newElement.appendChild(newedescription );

        console.log(newElement);
        x.appendChild(newElement);

        x = xmlDoc.getElementsByTagName("Packages");
        xLen = x.length;
        console.log(x)
        console.log(xLen)

        ShowTable();
        //eideol();
    }

    //////////////////// Change the values ////////////
    function changen(){
        console.log("Change node value");
        var x = xmlDoc.getElementsByTagName("Packages");
        var nodeno = parseInt(window.prompt("Enter the node value, whose Event ID You want to change!"));
        console.log(nodeno)
        if(nodeno=="")
        {
            alert("The node number is invalid!");
        }
        else
        {
            var neweid= window.prompt("Enter the event id");
            x = xmlDoc.getElementsByTagName("id")[nodeno-1].childNodes[0];    
            x.nodeValue = neweid;
        }
    
        ShowTable();
    }