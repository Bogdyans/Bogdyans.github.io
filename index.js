


let openImage = function (me) {
    let images = document.getElementsByClassName("size-image")
    let bg_div = document.createElement("div")
    bg_div.style.backgroundColor = 'rgba(33,33,33,0.5)'
    bg_div.style.position = 'absolute'
//Добавить контейнер для изображение с затемнением и стики позишеном

    bg_div.style.height = '100%'
    bg_div.style.width = '100%'

    document.body.prepend(bg_div)

    let big_img = document.createElement("img")
    big_img.src = me.src
    bg_div.appendChild(big_img)


    big_img.style.width = '70%'
    bg_div.style.display = 'flex'
    big_img.style.margin = '0 auto'
    big_img.style.borderRadius = "11px"
    bg_div.style.flexDirection = "column"
    bg_div.style.justifyContent = "center"
}

// document.querySelector("#girl").onclick = openImage

// images[0].setAttribute('onclick', function (){
//     var bg_div = document.createElement("div")
//     bg_div.style.backgroundColor = 'grey'
//     document.body.appendChild(bg_div)
// })
//
// images[0].addEventListener('click', function () {
//     var bg_div = document.createElement("div")
//     bg_div.style.backgroundColor = 'grey'
//     document.body.appendChild(bg_div)
// },false)