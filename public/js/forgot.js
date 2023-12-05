async function postForgot(username, newPassword) {
    const response = await fetch("/api/session/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, newPassword }),
    });
  
    const result = await response.json();
    return result;
  }
  
  const loginForm = document.getElementById("login-form");
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const newPassword = document.getElementById("newPassword").value;
    const newTwoPassword = document.getElementById("newTwoPassword").value;
  
    if (newPassword !== newTwoPassword) {
      alert("la nueva constrasena no coincide");
    } else {
      postForgot(username, newPassword)
        .then((datos) => alert("Contrasena reiniciada", datos.respuesta))
        .catch((err) => alert("algo a pasado, por favor valide"));
    }
  });
  