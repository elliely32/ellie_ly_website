//AIDA facial expressions
export const changeAIDA = (mood)=>{
    const AIDAimage = document.getElementById('AIDAimage');
    
    if(mood==="concerned"){
        AIDAimage.src="../assets/AIDA/AIDA_concerned.png"
    }
    else if(mood==="friendly"){
        AIDAimage.src="../assets/AIDA/AIDA_friendly.png"
    }
    else if (mood = "upset"){
        AIDAimage.src="../assets/AIDA/AIDA_upset.png"
    }
    else{
        AIDAimage.src="../assets/AIDA/AIDA_friendly.png"
    }
}


//AIDA Text Box
const AIDAtext = document.getElementById('AIDAtext');

export const changeText = (text) =>{
    AIDAtext.innerText= text;
}


//Player Response Buttons

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

export const changeButtonText=(text, buttonNumber)=>{
    if(buttonNumber===1){
        button1.innerText=text;
    }
    else if(buttonNumber===2){
        button2.innerText=text;
    }
    else{
        button3.innerText=text;
    }
    return;
}

export const revealButton = (reveal,buttonNumber) =>{
    if(buttonNumber===1){
        reveal ? button1.style.display='inline' :  button1.style.display='none'
    }
    else if(buttonNumber===2){
        reveal ? button2.style.display='inline' :  button2.style.display='none'
    }
    else{
        reveal ? button3.style.display='inline' :  button3.style.display='none'
    }
    return
}
