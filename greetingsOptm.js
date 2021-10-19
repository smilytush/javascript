const greetingsOptm=(type)=>{
    switch (type){
        case 1:
            console.log("Good Morning");
            break;
        case 2:
            console.log("Good Afternoon");
            break;
        case 3:
            console.log("good Evening");
            break;
        case4:
            console.log("Good Night");
            break;
        default: 
            console.log("Hello");
    }
}; 

greetingsOptm(7);