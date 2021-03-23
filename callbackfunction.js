function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
   console.log("enter your name");
    callback('safwan');
  }
  
  processUserInput(greeting);