import { data } from './AIDAtext.js'
import { changeAIDA, changeText, changeButtonText, revealButton } from './AIDAutilFuncs.js'

//All the Document Elements
const loaderContainer = document.getElementById('loaderContainer')
const aidaFrame = document.getElementById('aidaFrame');
const textBox = document.getElementById('textBox');
const fileInput = document.getElementById('fileInput')
const fileInputContainer = document.getElementById('fileInputContainer')
const textInput = document.getElementById('textInput')
const textInputContainer = document.getElementById('textInputContainer')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

//Variable currStorySequence
let documentcurrStorySequence={
    //Array order meaing : [hasRead, needsInfo, whatInfo]
    internalAnnoucement:false,
    cipherNote:false,
    internalCommunication:false,
    caseReport:false,
    newsArticle:false
}
const encryptionKey="ykHAOeUdPldf"

//loader animation at the first arrival
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(() => {
        loaderContainer.style.display = 'none'
        aidaFrame.style.display = 'flex';
        textBox.style.display = 'flex';
    }, 4000);
})

//The story tracker
let currStorySequence = 0;
let currDocument ='';

// The continueDialogue function aka where all the magic happens lol
const continueDialogue = (sceneNumber=null, event) =>{
    if(currStorySequence === 40){
        aidaFrame.style.display = 'none';
        textBox.style.display = 'none'
        return;
    }
    if(!!event && event.target.innerHTML ==="Let's look at another document"){
        continueDialogue(4)
        return
    }
    else if(!!event && event.target.innerHTML ==="I'm having trouble"){
        giveAnswer(currDocument)
        return
    }
    else if(!!event && event.target.innerHTML ==="[Go public with all the information about A.I.D.A. and the accident]"){
        continueDialogue(37)
        return;
    }
    else if(!!event && event.target.innerHTML ==="[Begin the termination process of A.I.D.A."){
        continueDialogue(38)
        return;
    }

    if(sceneNumber){
        currStorySequence=sceneNumber;
    }

    if(currStorySequence === 18){
        window.open('assets/AIDA/documents/internal-communications-110824(decrypted).pdf','_blank');
    }
    else if(currStorySequence === 23){
        window.open('assets/AIDA/documents/cipher-chart.png','_blank');
    }
    else if(currStorySequence === 26){
        window.open('assets/AIDA/documents/news-article-032225.pdf','_blank');
    }
    

    changeText(data[currStorySequence].AIDA)

    if(data[currStorySequence].AIDAface){
        changeAIDA(data[currStorySequence].AIDAface)
    }

    fileInputContainer.style.display='none'
    textInput.style.display ='none'
    textInputContainer.style.display ='none'

    if(data[currStorySequence].displayInput){
        if(data[currStorySequence].displayInput === 'fileInput'){
            fileInputContainer.style.display='inline'
        }

        if(data[currStorySequence].displayInput === 'textInput'){
            textInput.style.display ='inline'
            textInputContainer.style.display ='inline'
        }
    }

    if(data[currStorySequence].player.length > 0){
        for(let i = 0; i < 3; i++){
            if(data[currStorySequence].player[i]){
                changeButtonText(data[currStorySequence].player[i], i+1)
                revealButton(true, i+1)
            }
            else{
                revealButton(false, i+1)
            }
        }
    }
    else{
        revealButton(false,1)
        revealButton(false,2)
        revealButton(false,3)
    }
    if(data[currStorySequence].nextSequence){
        currStorySequence = data[currStorySequence].nextSequence;
    }
    else{
        currStorySequence++
    }
    return;
}

const checkAnswer = (answer) =>{
    console.log(currDocument)
    if(currDocument === "internalAnnouncement"){
        if(answer==="Justitia"){
            continueDialogue(10)
            documentcurrStorySequence.internalAnnoucement = true
        }
        else{
            continueDialogue(8)
        }
    }
    else if(currDocument === "caseReport"){
        if(answer==="Themis"){
            continueDialogue(13)
            documentcurrStorySequence.caseReport = true
        }
        else{
            continueDialogue(8)
        }
    }
    else if(currDocument === "internalCommunication"){
        if(answer===encryptionKey){
            continueDialogue(18)
            documentcurrStorySequence.internalCommunication = true
        }
        else{
            continueDialogue(16)
        }
    }
    else if(currDocument === "cipherNote"){
        if(answer==='7'){
            continueDialogue(23)
            documentcurrStorySequence.internalCommunication = true
        }
        else{
            continueDialogue(21)
        }
    }
}

const giveAnswer = (currDocument) =>{
    if(currDocument === "internalAnnouncement"){

        documentcurrStorySequence.internalAnnoucement = true
        continueDialogue(9);
    }
    else if(currDocument === "caseReport"){
        documentcurrStorySequence.caseReport = true
        continueDialogue(12);
    }
    else if(currDocument === "internalCommunication"){
        documentcurrStorySequence.internalCommunication = true
        continueDialogue(17);
    }
    else if(currDocument==="cipherNote"){
        documentcurrStorySequence.cipherNote = true;
        continueDialogue(22)
    }
}

//For reading the files
const getFileName = (event) => {
    const fileName = event.target.files[0].name;
    if(fileName==="internal-announcement-032223.pdf"){
        continueDialogue(6);
        currDocument="internalAnnouncement"
    }
    else if(fileName==="case-report-2354-0238-1273.pdf"){
        continueDialogue(11);
        currDocument="caseReport"
    }
    else if(fileName==="internal-communications-110824.pdf"){
        continueDialogue(15);
        currDocument="internalCommunication"
    }
    else if(fileName==="note.png"){
        continueDialogue(20);
        currDocument="cipherNote"
    }
    else{
        continueDialogue(5);
    }
}


fileInput.addEventListener('change', getFileName)
textInputContainer.addEventListener('click', function(e){
    checkAnswer(textInput.value)
})

button1.addEventListener('click', function(e){
    continueDialogue(null, e)
})
button2.addEventListener('click', function(e){
    continueDialogue(null, e)
})
button3.addEventListener('click', function(e){
    continueDialogue(null, e)
})



//The start of the dialogue
//TODO - REMAKE THE CIPHER NOTE
//TODO - remove the value in function below before committing - moving the dialogue ahead for development
continueDialogue()

