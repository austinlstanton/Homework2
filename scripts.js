 //Class Example
 document.write("<p>My To-Do List:</p>");
 
var myTask = [{
    'name': 'Laundry',
    'complete': false
}, {
    'name': 'Garbage',
    'complete': true

},{
    'complete': false

}];

   function status() { 
 

    if (myTask[i].complete === true)
    
    
        {return('<p>Completed!</p>');
    }  
        else
        
        {return('<p>Still waiting...</p');
    }}

   

    for(var i = 0; i < myTask.length; i++) {
    
    document.write('<ul> <li>' + myTask[i].name + status(myTask[i]) + '</li> </ul>');
    
       try {
       print(myTask[i]);
        } catch (error) {
        console.log(error);
        }
    }

function print(theTask) {
    if(typeof theTask.name == 'undefined') {
        throw ('The task name is missing!');
    } else if (typeof theTask.complete == 'undefined') {
        throw ('The task status is missing!');
    } else {
        console.log('print this out as a fancy list item with a check next to it if myTask.complete is true.');
    }
}

  
    

   

    