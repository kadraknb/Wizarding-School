// confirir login
document.querySelector('#login').addEventListener('click', () => {
  if (
    document.querySelector('#email').value === 'tryber@teste.com'
    && document.querySelector('#senha').value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
// contador do texto
document.querySelector('#textarea').addEventListener('keyup', () => {
  const textLenght = document.querySelector('#textarea').value.length;
  document.querySelector('#counter').innerHTML = 500 - textLenght;
});
// criarLabelInput
function criarLabelInput(idLocal, tipo, texto, quant) {
  // const id2 = idLocal.slice(1);
  document.getElementById(idLocal)
    .appendChild(document.createElement('label')).outerHTML = `<label for="${idLocal}${quant}">
    <input id="${idLocal}${quant}" class="${idLocal}" type="${tipo}" name="" value="${texto}">
    ${texto}</label>`;
}
// Casa house
const idHouse = ['gitnoria-house', 'reactpuff-house', 'corvinode-house', 'pytherina-house'];
const valueHouse = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
for (let i = 0; i < 4; i += 1) {
  document.querySelector('#house').appendChild(document.createElement('option')).outerHTML = `
  <option id="${idHouse[i]}"
   value="${valueHouse[i]}">${valueHouse[i]}</option>`;
}
// radio-family family
const textoArr = ['Frontend', 'Backend', 'FullStack'];
for (let i = 0; i < 3; i += 1) {
  criarLabelInput('radio-family', 'radio', textoArr[i], i);
  document.querySelector(`#radio-family${i}`).name = 'family';
}
// subject
const subject = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
for (let i = 0; i < 6; i += 1) {
  criarLabelInput('checkboxSubj', 'checkbox', subject[i], i);
  document.querySelector(`#checkboxSubj${i}`).className = 'subject';
}
// input-radio rate
for (let i = 1; i < 11; i += 1) {
  criarLabelInput('input-radio', 'radio', i, i);
  document.querySelector(`#input-radio${i}`).name = 'rate';
}

document.querySelector('#form').innerText = `
 Nome: Alguem Aqui 
 Email: email@mail.com 
 Casa: Casa Escolhida 
 Família: Família Escolhida 
 Matérias: Matérias, Marcadas, Aqui 
 Avaliação: NotaAqui 
 Observações: Observações aqui`;

// salva form
let aprender = '';
function salvaForm() {
  const check = document.querySelectorAll('.subject:checked');
  for (let i = 0; i < check.length; i += 1) {
    aprender += `${check[i].value}, `;
  }
  const nome = document.querySelector('#input-name').value;
  const sobreNome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const family = document.querySelector('.radio-family:checked').value;
  const rate = document.querySelector('.input-radio:checked').value;
  const texto = document.querySelector('#textarea').value;
  document.querySelector('#form').innerText = `Nome: ${nome} ${sobreNome} 
      Email: ${email} 
      Casa: ${casa} 
      Família: ${family} 
      Matérias: ${aprender} 
      Avaliação: ${rate} 
      Observações: ${texto}`;
}
// dasativa reloade ao enviar / add Att form
function getUserValue(event) {
  event.preventDefault();
  salvaForm();
}
// desativa button
document.querySelector('#agreement').addEventListener('click', () => {
  if (document.querySelector('#agreement').checked === true) {
    document.querySelector('#submit-btn').outerHTML = `<button id="submit-btn" 
    type="submit" >Enviar</button>`;

    document.querySelector('#submit-btn').addEventListener('click', getUserValue);
  }
});
