document.querySelector("#login").addEventListener("click", () => {
  if (
    document.querySelector("#email").value == "tryber@teste.com" &&
    document.querySelector("#senha").value == "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

document.querySelector("#agreement").addEventListener("click", () => {
  if (document.querySelector("#agreement").checked === true) {
    document.querySelector("#submit-btn").outerHTML =
      '<button id="submit-btn" type="submit" >Enviar</button>';
  }
});

document.querySelector("#textarea").addEventListener("keyup", () => {
  const textLenght = document.querySelector("#textarea").value.length;
  document.querySelector("#counter").innerHTML = 500 - textLenght;
});
