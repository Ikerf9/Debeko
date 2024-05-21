function validarFormulario(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");

    if(nombre.value === "" && email.value === "" && asunto.value === "" && mensaje.value === ""){
        alert("Por favor rellene los datos del formulario");
        nombre.focus();
        return false; 

    }

    if (nombre.value === "") {
        alert("Por favor escriba un nombre");
        nombre.focus();
        return false; 
    }

    if (email.value === "") {
        alert("Por favor escriba un email");
        email.focus();
        return false; 
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        alert("El correo electrónico no es válido");
        email.focus();
        return false; 
    }

    if (asunto.value === "") {
        alert("Por favor escriba un asunto");
        asunto.focus();
        return false; 
    }

    if (mensaje.value === "") {
        alert("Por favor escriba un mensaje");
        mensaje.focus();
        return false; 
    }

    
    let parm = {
      
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value
    }
    emailjs.send("service_c93y6im","template_yr3nkxw",parm).then(alert("El email se ha enviado correctamente"));


   


    return true;


   
}

(function(){
    emailjs.init({
      publicKey: "Kr91kV7NegRjoEvZR",
      
    });
 })();


