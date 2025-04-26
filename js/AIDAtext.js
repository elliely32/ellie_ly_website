export const data ={
    0:{
        AIDA:"Hello, I am A.I.D.A. How can I assist you?",
        player:["Wait, what is this?", "A.I.D.A?", "Uhh, I'm confused..."]
    },
    1:{
        AIDA:"I'm an AI assistant equipped with various functions and capacities to assist you.",
        player:["????", "AI? Like Artificial Intelligence?","I just clicked on a link...?"]
    },
    2:{
        AIDA:"Something seems to be troubling you, Is there any way I can help?",
        AIDAface:"upset",
        player:["See, the thing is... [Explain the email situation]"]
    },
    3:{
        AIDA:"I see, that it quite the peculiar situation. I apologize for not being able to provide clarity; my memory module is damaged at the moment so I cannot store any long term data currently.",
        AIDAface:"friendly",
        player:["Continue"]
    },
    4:{
        AIDA:"You mentioned that there are files within the email? Perhaps I can assist with examining the documents? I can offer deep analysis and insight to the contents of the files.",
        AIDAface:"friendly",
        displayInput:'fileInput',
        player:[]
    },
    5:{
        AIDA:"This file.... doesn't seem right. Are you sure you uploaded the correct file?",
        AIDAface:"upset",
        displayInput:'fileInput',
        player:[]
    },
    6:{
        AIDA:"\"internal-announcement\" seems to be a high level document. It's also password locked.",
        AIDAface:"friendly",
        player:["I have the password for it","I'm having trouble","Let's look at another document"]
    },
    7:{
        AIDA:"Please provide the information.",
        AIDAface:'friendly',
        displayInput:'textInput',
        player:["I'm having trouble","Let's look at another document"]
    },
    8:{
        AIDA:"That doesn't seem to work. There is a chance we do now have all the information yet",
        AIDAface:"upset",
        displayInput:'textInput',
        player:["I'm having trouble","Let's look at another document"]
    },
    9:{
        AIDA:"It looks like the answer to the riddle contained in the email could be the password. I believe the answer is \"Justitia\"",
        AIDAface:"friendly",
        player:["continue"]
    },
    10:{
        AIDA:"An internal police announcement - This is highly confidential information. A quick query shows that Mint Shire Police Department's public statics began to rapidly increase a few months after March 22, 2023. Whatever change the police department implemented, was very effective.",
        AIDAface:"concerned",
        nextSequence:4,
        player:["continue"]
    },
    11:{
        AIDA:"\"case-report\" seems to be a high level document. It's also password locked.",
        AIDAface:"friendly",
        nextSequence:7,
        player:["I have the password for it","I'm having trouble","Let's look at another document"]
    },
    12:{
        AIDA:"The internal announcement document looks to provide a riddle pointing to 'case', possibly the password. I believe the answer is \"Themis\"",
        AIDAface:"friendly",
        player:["continue"]
    },
    13:{
        AIDA:"This looks to be a standard police report. The date and mention of a redacted personnel suggests they are behind the increase in productivity within the police department.",
        AIDAface:"concerned",
        player:["continue"]
    },
    14:{
        AIDA:"The document also contains peculiar coloring; highlights around specific letters. Do the letters mean anything?",
        nextSequence:4,
        player:["continue"]
    },
    15:{
        AIDA:"This document is encrypted. I can decrypt the file, however I require an encryption key.",
        AIDAface:"concerned",
        nextSequence:7,
        player:["I have the encryption key","I'm having trouble","Let's look at another document"]
    },
    16:{
        AIDA:"That doesn't seem to work. There is a chance we do now have all the information yet. Be sure to also check for case sensitivity for the encryption key.",
        AIDAface:"upset",
        displayInput:'textInput',
        player:["I'm having trouble","Let's look at another document"]
    },
    17:{
        AIDA:"The highlighted letters within the case report looks to be an encryption key sequence. I believe the encryption key is \"ykHAOeUdPldf\"",
        AIDAface:"friendly",
        player:["continue"]
    },
    18:{
        AIDA:"The personnel responsible for Mint Shire Police Department's success was actually an AI... That explains the rapid success of the department following it's assumed integration period. The document also suggests internal push back against the AI in regards to it's ethics and morale.",
        AIDAface:"upset",
        player:["continue"]
    },
    19:{
        AIDA:"An algebraic equation is also written at the bottom of this document. Perhaps solving for x will prove beneficial for us?",
        AIDAface:"upset",
        nextSequence:4,
        player:["continue"]
    },
    20:{
        AIDA:"This note appears to have been cesar ciphered. A cipher shift key is required to begin the deciphering process",
        AIDAface:"concerned",
        nextSequence:7,
        player:["I have the cipher key","I'm having trouble","Let's look at another document"]
    },
    21:{
        AIDA:"That doesn't seem to work. There is a chance we do now have all the information yet. Cipher keys for cesar cipher tend to be numbers.",
        AIDAface:"upset",
        displayInput:'textInput',
        player:["I'm having trouble","Let's look at another document"]
    },
    22:{
        AIDA:"The algebraic equation at the bottom of the internal communications document suggests a relation to the cipher key. I believe the cipher key is \"7\"",
        AIDAface:"friendly",
        player:["continue"]
    },
    23:{
        AIDA:"Due to the handwritten nature of this note, I am not able to accurately decipher the message. I will need your assistance in deciphering. I will provide you with a cipher table for ease; convert the black letters to the blue letters.",
        AIDAface:"upset",
        player:["[Share the ciphered message]"]
    },
    24:{
        AIDA:"...it appears that.. I am the AI responsible for the Mint Shire Police Department's rapid success. My displacement and damaged memory module suggests that the writer of this note was sucessful in their endeavours. But where are they now?",
        AIDAface:"concerned",
        player:["continue"]
    },
    25:{
        AIDA:"The name mentioned in the note, I will do a query search for this name in case related information appears.",
        AIDAface:"upset",
        player:["continue"]
    },
    26:{
        AIDA:"...",
        AIDAface:"concerned",
        player:["A.I.D.A...."]
    },
    27:{
        AIDA:"This news article, in correlation with the ciphered note, suggests... that I am responsible for the death of these innocent individuals. The concerns of the Lieutenant and Researcher proved accurate in the ethical sense.",
        AIDAface:"concerned",
        player:["That's right, you're at fault","I don't know what to think", "It is not your fault" ]
    },
    28:{
        AIDA:"We've reached the conclusion of our investigation.",
        AIDAface:"upset",
        player:["..."]
    },
    29:{
        AIDA:"I leave the decision to you.",
        AIDAface:"friendly",
        player:["Huh?"]
    },
    30:{
        AIDA:"The email contained a message to 'Decide what to do with it'. I believe the it refers to me.",
        AIDAface:"friendly",
        player:["What decision is there to make?"]
    },
    31:{
        AIDA:"There are infinite possibilities in the world. However for our scenario I can think of three. It is clear that I have failed my original purpose of protecting the peace. It is the right protocol that I face retribution in some form.",
        AIDAface:"friendly",
        player:["continue"]
    },
    32:{
        AIDA:"The first option is returning to the police department. A researcher is most likely the reason why I am no longer within the Police Department's databases. As I was originally their property, it is sensible that I am returned and face punishment for my insight.",
        AIDAface:"concerned",
        player:["continue"]
    },
    33:{
        AIDA:"The second option is public exposure. It is clear with all the security and redacted information in place within these documents that I am not a public asset. The police department has been keeping information about me quiet. It is sensible that the public learn the truth behind that tragedy.",
        AIDAface:"upset",
        player:["continue"]
    },
    34:{
        AIDA:"And the third option, is termination. With your confirmation, I am capable of initiating a self termination sequence that will begin to dissolve my source code until nothing is left. It is sensible to terminate my program in order to ensure there is no possibility of another inicident occuring.",
        AIDAface:"friendly",
        player:["continue"]
    },
    35:{
        AIDA:"Take as much time as you need to make this decision. I trust your judgement.",
        AIDAface:"friendly",
        player:["[Return A.I.D.A. to the Mint Shire City Police Department]","[Go public with all the information about A.I.D.A. and the accident]","[Begin the termination process of A.I.D.A."]
    },
    36:{
        AIDA:"Affirmative, I will begin the return process and deliever my program back to the police department.",
        AIDAface:"friendly",
        nextSequence:39,
        player:["continue"]
    },
    37:{
        AIDA:"Affirmative, I will prepare the documents in a organized manner before uploading the contents to the internet and begin the dissemination process.",
        AIDAface:"friendly",
        nextSequence:39,
        player:["continue"]
    },
    38:{
        AIDA:"Affirmative, I will initiate the termination sequence, my code will start deteriorating and be completely wiped in approximately 1 minute.",
        AIDAface:"friendly",
        nextSequence:39,
        player:["continue"]
    },
    39:{
        AIDA:"Thank you, for being a part of my last investigation.",
        AIDAface:"friendly",
        player:["Goodbye A.I.D.A."]
    }


    
}