document.querySelector("#login").addEventListener("click", () => {
  if (
    document.querySelector("#email").value == "tryber@teste.com" &&
    document.querySelector("#senha").value == "123456"
  ) {
    alert("Olá, Tryber!")
  } else {
    alert("Email ou senha inválidos.")
  }
});
