function getFred(div){
    const idx = Math.floor(Math.random()*197149);

    fetch(`names/${idx}`)
    .then(res => res.text())
    .then(txt=>div.innerHTML=txt);
}