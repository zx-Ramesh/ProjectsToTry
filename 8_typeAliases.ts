type ID  = (string|number);

let studentID: ID = 1234;

let studentInfo = (studentID: ID):string =>{
    if(typeof studentID === 'number'){
        return  `I have my student ID: ${studentID}`

    }else{
        return  `I have my student ID: ${studentID}`

    }
}

studentInfo('nanami')



// you can write type alias 
type values =  {
    x:number
    y:number;
}