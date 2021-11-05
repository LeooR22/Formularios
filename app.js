const formulario = document.querySelector("#formulario");
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")

const alertName = document.querySelector("#alertName")
const alertEmail = document.querySelector("#alertEmail")
const alertSuccess = document.querySelector("#alertSuccess")


const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = "Mensaje enviado con exito"
}

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg
        
    });
}


formulario.addEventListener("submit", e => {
    e.preventDefault()

    alertSuccess.classList.add("d-none")


    const errores = []

    if(!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "formato no valido en el campo nombre, solo letras"
        })
    } else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    } else {
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    if (errores.length !== 0){
        pintarMensajeError(errores)
        return
    }

    console.log("FORMULARIO ENVIADO")
    pintarMensajeExito()
})