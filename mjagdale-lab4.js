window.addEventListener("DOMContentLoaded", startfunction)
function startfunction()
{
    /*............................................................Section-1............................................................*/

    // Bind an event handler to the 'Alert Me!' button when clicked to get the text out of the text input and use a browser alert to show the provided text.

    document.getElementById('sec1-btn1').addEventListener("click", InputText);
    function InputText()
    {
        var textInput = document.getElementById("sec1-input").value
        
        if(textInput === " "|| textInput === "")                                                       // if value is null
            {
                alert("No alert text has been entered!")
            }
        else if(!isNaN(textInput))                                                                  // if value is not a text
            {
                alert("Please enter valid text input!")
            }
        else
            {
                alert(textInput)
            }
        document.getElementById("sec1-input").value="";
    }

    /*............................................................Section-2............................................................*/

    // Modify HTML and CSS via JavaScript.

    document.getElementById("sec2-btn1").addEventListener("click", makechanges2);

    function makechanges2()
    {
            //Change the Headline text to your name
            let a = document.getElementsByTagName("h3")[0];
            document.getElementsByTagName("h3")[0].innerHTML = "Madhu Jagdale";
            
            //Change the green box to a grey, #888888, box that is 100% wide and 20px tall.
            var box2 = document.getElementById("sec2-box")
            box2.style.backgroundColor = "#888888"
            box2.style.width = "100%"
            box2.style.height = "20px"

            //Change the styles on the paragraph of text so it is bold, italic, and 12px in size.
            var paragraph2 = document.getElementsByTagName("p")[3]
            console.log("para3 value = " +paragraph2);
            paragraph2.setAttribute("style", "font-weight: bold; font-style: italic; font-size: 12px;")
            
            //Change the B&W hamburger icon to the color one provided, change the alt tag to 'Color Hamburger Icon', change the size of the icon so it is only 100px wide.
            var imageicon2= document.getElementsByTagName("IMG")[0];
            imageicon2.getAttributeNode("src").value = "img/hamburger_color_icon.png";
            imageicon2.setAttribute("style", "width: 100px") 

            //Change the Google link to a link to the Illinois Tech website, www.iit.edu, and also change the text of the link to 'Illinois Tech Website'.
            var gilink2 = document.getElementsByTagName("a")[0];
            console.log("link = " +gilink2)
            gilink2.href = "https://www.iit.edu/"
            gilink2.innerHTML = "Illinois Tech Website"

            //Change the styling on the link so that it is red, #cc0000, and underlined.
            gilink2.style.color = "#cc0000"
            gilink2.style.textDecoration = "underline"
    }

    /*............................................................Section-3............................................................*/
    
    // Implement a degress Celsius to degress Fahrenheit converter. Allow the user to enter a celsius degree value in the text box and click convert to see the fahrenheit.

    document.getElementById("sec3-btn1").addEventListener("click", converttofahrenheit);
	document.getElementById("sec3-btn2").addEventListener("click", cleartemp);

    function converttofahrenheit()                                                          // function to convert celsius to fahrenheit
        {
            var celsiusDegree = document.getElementById("sec3-input").value;
            if(celsiusDegree=="")
                {
                    document.getElementById("sec3-input").value="";
                    alert("No value has been entered!");                
                    return false;
                }  

            if (isNaN(celsiusDegree)) 
                {
                    document.getElementById("sec3-input").value="";
                    alert("A non-numeric value was entered!");                
                    return;
                }

            else
                {
                    var celsiusDegree = parseInt(celsiusDegree);
                    var fahrenheitDegree = (celsiusDegree*1.8)+32;                         // formula for celsius to fahrenheit conversion
                    var paragraph3 = document.createElement("p");              
                    var displayresult = document.createTextNode(celsiusDegree + " degress celsius is equal to " + fahrenheitDegree + " degress fahrenheit.");
                    paragraph3.appendChild(displayresult);
                    var element = document.getElementById("sec3-contentarea");
                    element.appendChild(paragraph3);
                    document.getElementById("sec3-input").value="";
            }                
        }

    function cleartemp()                                                                  // function to clear out the results area
        {
            document.getElementById("sec3-contentarea").innerHTML="";
        }

/*............................................................Section-4............................................................*/

/* create a user supplied number of small boxes of a specific color to the results area. 
The user enters a quantity and chooses a color and you insert that many boxes of that color in the results area. */

    document.getElementById("sec4-btn1").addEventListener("click", addboxs);
    document.getElementById("sec4-btn2").addEventListener("click", clearboxResult);

    let len = 0
    function addboxs()
        {
            len = document.getElementsByTagName("div").length
            var quantity = document.getElementById("sec4-input1").value
            var colorname = document.getElementById("sec4-select1").value
            
            if (quantity === ''|| quantity === null || quantity === "null") 
                {
                    alert('Quantity can not be empty or null!');
                }

            if (isNaN(quantity))
                {
                    document.getElementById("sec4-input1").value="";
                    alert("A non-numeric value was entered!");                
                    return;
                }

            document.getElementById("sec4-input1").value="";
            num = parseInt(quantity)
            var contentArea = document.getElementById("sec4-contentarea");
            contentArea.style.writingMode = "horizontal-tb"                            // Box flow from left to right
            contentArea.style.wordWrap = "break-word"                                  // Colored box should be split when reaching the end of the outer content are
            console.log("area = "+contentArea);
            console.log("div length for content area = "+ contentArea.getElementsByTagName("div").length)

            for(var i=1; i<=quantity;i++)
                {
                    var div = document.createElement("div");  
                    div.id = len+i;  
                    div.style.background = colorname;
                    div.setAttribute("style", "width: 60px; height: 60px; background-color : "+colorname+";");                                     
                    div.style.margin = "5px"
                    //div.style.flexWrap = "wrap";                                       // For arranging boxes considering remaining space
                    div.style.display = "inline-flex";                                 // Displays an element as an inline-level flex container
                    div.style.cursor = 'pointer';
                    div.addEventListener('click',function removeElement(e) 
                        {
                            var element = document.getElementById(e.target.id);
                            element.parentNode.removeChild(element);
                        })
                    contentArea.appendChild(div)
                }
        }
    function clearboxResult()
        {    
            document.getElementById("sec4-input1").value = "";
            document.getElementById("sec4-contentarea").innerHTML = "";
        }

/*............................................................Section-5............................................................*/

// Display the pressed key in the results area

    document.getElementById("sec5-input").addEventListener("keyup", inputText);                       // To indicate which key has been entered
    document.getElementById("sec5-input").addEventListener("keydown", inputText);

    function inputText(KeyboardEvent)
    {
        document.getElementById("sec5-contentarea").innerHTML = "";
        document.getElementById("sec5-input").innerHTML = " ";
        var contentArea = document.getElementById("sec5-contentarea");
        
        var resultSpan = document.createElement("span");
        resultSpan.setAttribute("style", "font-weight : bold; font-size: 60px");                                         
        var validEntry = /^[A-Za-z0-9]+$/.test(KeyboardEvent.key);                                     // regular expession for validating an entry
                   
        if(validEntry)
            {
                var textArea = document.createTextNode(KeyboardEvent.key);
                resultSpan.appendChild(textArea);
                contentArea.appendChild(resultSpan);                
            }  
        else
            {
                var textArea = document.createTextNode(KeyboardEvent.code);
                resultSpan.appendChild(textArea);
                contentArea.appendChild(resultSpan);
            }
            document.getElementById("sec5-input").value = "";        
            document.getElementById("sec5-input").focus();
    }    


/*............................................................Section-6............................................................*/

// The native AJAX methods to do a simple get request for a list of users from the sample API provide using XMLHttpRequest.

    document.getElementById("sec6-btn1").addEventListener('click', function()
    {
        let myRequest = new XMLHttpRequest();

        myRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
        myRequest.send();
        myRequest.onreadystatechange = function()
            {
                if (myRequest.readyState === 4)                                                 // XMLHttpRequest ready state value (4) is equal to done
                    {
                        if(myRequest.status === 200)                                            // Ok status
                        {
                            let userdata = JSON.parse(myRequest.responseText);                  // JSON object in text format from server is converted into JS object
                            let list1 = document.createElement('ul');
                        
                            for(var i=0;i<userdata.length;i++) 
                            {
                                let list2 = document.createElement('li');
                                list2.appendChild(document.createTextNode(userdata[i].name+" , "+userdata[i].email));      // Selecting only name and an email of the user
                                list1.appendChild(list2)
                            }         
                            
                        document.getElementById("sec6-contentarea").appendChild(list1);
                        document.getElementById("sec6-btn1").disabled = true
                        }
                    }
            };           
    }, false);

    document.getElementById("sec6-btn2").addEventListener('click', function()
        {
            document.getElementById("sec6-contentarea").innerHTML = "";
            document.getElementById("sec6-btn1").disabled = false
        })


/*............................................................Section-7............................................................*/

// The native AJAX methods to do a simple get request for a list of users from the sample API provided using Fetch API.

    document.getElementById("sec7-btn1").addEventListener('click', function()

    {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(function(response)
        {
            return response.json();
        })
        
        .then(function(myJson)
        {
            let list3 = document.createElement('ul');
            for(var i=0;i<myJson.length;i++) 
            {
                let list4 = document.createElement('li');
                list4.appendChild(document.createTextNode(myJson[i].name+" , "+myJson[i].email));
                list3.appendChild(list4)
            }         
            document.getElementById("sec7-contentarea").appendChild(list3);
            document.getElementById("sec7-btn1").disabled = true
        }); 
    }, false);

    document.getElementById("sec7-btn2").addEventListener('click', function()
        {
            document.getElementById("sec7-contentarea").innerHTML = "";
            document.getElementById("sec7-btn1").disabled = false
        })

}

