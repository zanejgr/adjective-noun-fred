function getNoun(div){
    const idx = Math.floor(Math.random()*128835);
    const plural = (Math.random() >= 0.5)?1:0;

    fetch(`nouns/${idx}`)
    .then(res => res.text())
    .then(txt=>{
        let noun = txt.split(",")[plural];
        div.innerHTML=noun[0].toUpperCase() + noun.slice(1);
    });
}