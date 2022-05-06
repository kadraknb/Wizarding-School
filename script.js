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

document.querySelector('#agreement').addEventListener('click', () => {
  if (document.querySelector('#agreement').checked === true) {
    document.querySelector('#submit-btn').outerHTML = `<button id="submit-btn" 
    type="submit" >Enviar</button>`;
  }
});

document.querySelector('#textarea').addEventListener('keyup', () => {
  const textLenght = document.querySelector('#textarea').value.length;
  document.querySelector('#counter').innerHTML = 500 - textLenght;
});

function criarLabelInput(idLocal, tipo, texto, quant) {
  const id2 = idLocal.slice(1);
  document.getElementById(idLocal)
    .appendChild(document.createElement('label')).outerHTML = `<label for="${id2}${quant}">
    <input id="${id2}${quant}" type="${tipo}" name="" value="${texto}">${texto}
    </label>`;
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
  document.querySelector(`#adio-family${i}`).name = 'family';
}
// subject
const subject = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
for (let i = 0; i < 6; i += 1) {
  criarLabelInput('checkboxSubj', 'checkbox', subject[i], i);
  document.querySelector(`#heckboxSubj${i}`).className = 'subject';
}
// input-radio rate
for (let i = 1; i < 11; i += 1) {
  criarLabelInput('#input-radio', 'radio', i, i);
  document.querySelector(`#input-radio${i}`).name = 'rate';
}
