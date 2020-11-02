import cipher from './cipher.js';
//console.log(cipher);

const btnCriptografar = window.document.getElementById('btnEncode');
const btnDescriptografar = window.document.getElementById('btnDecode');

let res = window.document.getElementById('txtRes');

btnCriptografar.addEventListener("click", function chamaEncode() {
  let tCod = window.document.getElementById('txtSringC').value.toUpperCase();
  let offCod = Number(window.document.getElementById('resOffset').value);
  const codificado = cipher.encode(offCod, tCod);
  res.innerHTML = codificado;
}
);

btnDescriptografar.addEventListener("click", function chamaDecode() {
  let tCod = window.document.getElementById('txtSringC').value.toUpperCase();
  let offCod = Number(window.document.getElementById('resOffset').value);
  const codificado = cipher.decode(offCod, tCod);
  res.innerHTML = codificado;
}
); 
