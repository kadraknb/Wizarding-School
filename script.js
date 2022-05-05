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
/* 
function getUserValue (){
    event.preventDefault();
    console.log(inputNameUser.value);
    nameUser.innerHTML=inputNameUser.value;
  button.addEventListener('click', getUserValue);
   */

// document.querySelector('#agreement').checked;
document.querySelector('#agreement').addEventListener('click', () => {
  if (document.querySelector('#agreement').checked === true) {
    document.querySelector('#submit-btn').outerHTML =
      '<button id="submit-btn" type="submit" >Enviar</button>';
  }
});
