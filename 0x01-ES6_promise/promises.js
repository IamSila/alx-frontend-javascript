function successCallback(result){
    console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
    console.log(`Error generating audio file: ${error}`);
}


function createAudioFileAsync (audioSettings, successCallback, failureCallback);