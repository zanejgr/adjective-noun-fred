function getAdj(div){
    const idx = Math.floor(Math.random()*1096);

    fetch(`adjectives/${idx}`)
    .then(res => res.text())
    .then(txt=>div.innerHTML=txt[0].toUpperCase() + txt.slice(1));
}