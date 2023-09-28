function animateWord(typewriter){
    let text = typewriter.datatext;
    text.split('').forEach((letter,ind) => {
        let div = document.createElement('div');
        div.innerText = letter;
        setTimeout(()=> typewriter.append(div),ind*200);
    })
}

const typewriter = document.querySelector('.typewriter');
animateWord(typewriter);