function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asunto = document.getElementById("asunto");
    let mensaje = document.getElementById("mensaje");

    if (nombre.value === "" && email.value === "" && asunto.value === "" && mensaje.value === "") {
        alert("Mesedez, bete formularion datuak");
        nombre.focus();
        return false;

    }

    if (nombre.value === "") {
        alert("Mesedez, idatzi izena");
        nombre.focus();
        return false;
    }

    if (email.value === "") {
        alert("Mesedez, idatzi emaila");
        email.focus();
        return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        alert("Posta elektronikoa ez da baliozkoa");
        email.focus();
        return false;
    }

    if (asunto.value === "") {
        alert("Mesedez, idatzi gaia");
        asunto.focus();
        return false;
    }

    if (mensaje.value === "") {
        alert("Mesedez, idatzi mezu bat");
        mensaje.focus();
        return false;
    }



    let equipos = document.getElementsByName("checkbox[]");
    let equiposArray = Array.from(equipos);
    var cont = 0;
    equiposArray.forEach(function (equipo) {
        if (equipo.checked) {
            cont++;
        }
    });


    if (cont === 0) {
        alert("Onartu baldintzak bidali aurretik");
    } else {
        let parm = {

            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            asunto: document.getElementById("asunto").value,
            mensaje: document.getElementById("mensaje").value
        }
        emailjs.send("service_c93y6im", "template_yr3nkxw", parm).then(alert("Mezua bidali egin da"));



        





        return true;



    }

    (function () {
        emailjs.init({
            publicKey: "Kr91kV7NegRjoEvZR",

        });
    })();


}




