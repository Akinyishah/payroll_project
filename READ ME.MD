JAVASCRIPT REACTIVITY AND USER INTERACTIVITY- 
JS enables us to get user input/data from HTML forms and manipulates the data 
JS uses ID attribute
document.getElementbyId() -JS function that selects and accesses a single HTML element using its ID 

1 .innerHTML=full HTML content inside atag/element
2 .innertext=visible text inside an element/Access values from any element
3 .value= can only access user input in forms ONLY
4 .innervalue= Access values from any element

FORM INPUTS
    Forms are the primary way users interact with applications.
    -We need to make our applications interactive and dynamic
    -JS helps us access and manipulate form inputs real time
  USING JS YOU CAN:
    -1.Read User Input
    2.Validate User Input
    3.Dynamically update pages based on input
  PROCESS:
  1.User fills the form
  2.JS reads input values
  3.JS processes the data (calculations,modifications)

document.getElementById()-method used to select and access a single HTML element by its unique ID attribute    

.addEventListener() -function that listens for specific events.
Events-What a user cab do when using an application e.g clicks, scrolling, submissions. key presses and mouse movements.

even.prevent Default()-it prevents the default behaviour of the browser when an event (FORM SUBMISSION ) occurs


NETFLIFY-pass- paltform as a service-provides a platform for devs to build, deploy and manage applicationwithout worrying about infrastructure.
POINT of ENTRY should be index.html

HTML BINDING WITH JAVA SCRIPT
  -Updating HTML content using java script
  -JS idenfities elements using ID attributes.
  -ID attributes uniquely identifies elements for a script.

HOW TO ACCESS .PASS VALUES TO OR FROM HTML USING JAVA SCRIPT.
USE document.getelementbyID()takes 1 argument-- argument is the ID of the element.-used to access elements by their unique defined attribute/gets the first instance. 
document.getelementbyid("id").value-used with form elements only.
document.getelementbyid("id").innerHTML-used with any element
document.getelementbyid("id").innerText-used with any element




