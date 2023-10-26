function checkForm(){
    let form = document.forms.resume.elements;
    console.log("Имя - " + form.first_name.value)
    console.log("Фамилия - " + form.last_name.value)
    console.log("Email - " + form.email.value)

    for (let i = 0; i < form.front_end.length; i++){
        if (form.front_end[i].checked){
            console.log(form.front_end[i].id)
        }
    }
}