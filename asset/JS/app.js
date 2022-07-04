function ClickButton(){
    let age = prompt("Please enter your age", "1" );
    if (age >18) {
      document.write("You are registered because you are over 18");
      document.body.style.display="flex"
      document.body.style.justifyContent="center"
      document.body.style.alignItems="center"
      document.body.style.fontSize="60px"
      document.body.style.color="green"
     
    }else{
        document.write("You cannot register because you are under 18!!!")
        document.body.style.display="flex"
        document.body.style.justifyContent="center"
        document.body.style.alignItems="center"
        document.body.style.fontSize="60px"
        document.body.style.color="red"
    }
}