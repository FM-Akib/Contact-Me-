
//Name Add 
const NameSubmit=()=>{
    const NameField=document.getElementById('name');
    const name =NameField.value;
    const nameString=JSON.stringify(name);
     
    localStorage.setItem('name',nameString);
}

const CheckPreviousName=()=>{
     const PreviousName=localStorage.getItem('name');
     let Name='';
     if(PreviousName){
        Name=JSON.parse(PreviousName);
     }
     return Name;
}
const ShowPreviousName=()=>{
    const Name= CheckPreviousName();
    const NameField=document.getElementById('name');
    NameField.value=Name;
}

//Name Delete

const NameDelete=()=>{
    localStorage.removeItem('name');
    const NameField=document.getElementById('name');
    NameField.value='';

}

//Email Submit

const EmailSubmit=()=>{
    const EmailField=document.getElementById('email');
    const email =EmailField.value;
    const emailString=JSON.stringify(email);
     
    localStorage.setItem('email',emailString);
}

const CheckPreviousEmail=()=>{
     const PreviousEmail=localStorage.getItem('email');
     let Email='';
     if(PreviousEmail){
        Email=JSON.parse(PreviousEmail);
     }
     return Email;
}
const ShowPreviousEmail=()=>{
    const Email= CheckPreviousEmail();
    const EmailField=document.getElementById('email');
    EmailField.value=Email;
}

//Email Delete

const EmailDelete=()=>{
    localStorage.removeItem('email');
    const EmailField=document.getElementById('email');
    EmailField.value='';

}




//Message Submit

const MessageSubmit=()=>{
    const MessageField=document.getElementById('message');
    const message =MessageField.value;
    console.log(message);
    const messageString=JSON.stringify(message);
     
    localStorage.setItem('message',messageString);
}

const CheckPreviousMessage=()=>{
     const PreviousMessage=localStorage.getItem('message');
     let Message='';
     if(PreviousMessage){
        Message=JSON.parse(PreviousMessage);
     }
     return Message;
}
const ShowPreviousMessage=()=>{
    const Message= CheckPreviousMessage();
    const MessageField=document.getElementById('message');
    MessageField.value=Message;
}

//Message Delete

const MessageDelete=()=>{
    localStorage.removeItem('message');
    const MessageField=document.getElementById('message');
    MessageField.value='';

}



//Send Button
const SendButton=()=>{
    const NameField=document.getElementById('name');
    const name =NameField.value;
   

    const EmailField=document.getElementById('email');
    const email =EmailField.value;

    
    const MessageField=document.getElementById('message');
    const message =MessageField.value;

    const personalInfo={
        'name':name,
        'email':email,
        'messahe':message
    }
    const personalInfoString=JSON.stringify(personalInfo);
    // console.log(personalInfoString);
    localStorage.setItem('person',personalInfoString)
}


//reset everything by clicking reset button

const ResetButton=()=>{
    localStorage.clear();
    const NameField=document.getElementById('name');
    NameField.value='';
   

    const EmailField=document.getElementById('email');
    EmailField.value='';

    
    const MessageField=document.getElementById('message');
    MessageField.value='';
}



ShowPreviousName();
ShowPreviousEmail();
ShowPreviousMessage();





