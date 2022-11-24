const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const api='30cf742e-56f4-48e9-b017-574f8d9481a1';
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const audio_box = document.querySelector('.audio');
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    
        fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${inpWord}?key=${api}`)
        .then((response1) => response1.json())
        .then((data1) => {
            result.innerHTML= `<br><h3>${inpWord}</h3><br><h4>${data1[0].fl}</h4><br><p>${data1[0].shortdef[0]}<br><br>`;
            let sound_name = data1[0].hwi.prs[0].sound.audio;
            if (sound_name) { 
                soundRender(sound_name);}
            })
                .catch(() => {
                    result.innerHTML = `<h3 class="error">could not find a word..</h3>`;
                });
        
});
function soundRender(sound_name) {
    let sub_folder = sound_name.charAt(0);
    let sound_src = `https://media.merriam-webster.com/soundc11/${sub_folder}/${sound_name}.wav?key=${api}`;

    let aud = document.createElement('audio');
    aud.src = sound_src;
    aud.controls = true;
    audio_box.appendChild(aud)
}