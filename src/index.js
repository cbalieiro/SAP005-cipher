import cipher from './cipher.js'
let resultadoDisplay = window.document.getElementById('txtRes');

function chamaEncode() {
  const textoInput = window.document.getElementById('txtSringE').value.toUpperCase();
  const offsetInput = Number(window.document.getElementById('offsetEncode').value);
  const codificado = cipher.encode(offsetInput, textoInput);
  resultadoDisplay.innerHTML = codificado;
  return codificado
};

function chamaDecode() {
  const textoInput = window.document.getElementById('txtSringD').value.toUpperCase();
  const offsetInput = Number(window.document.getElementById('offsetDecode').value);
  const decodificado = cipher.decode(offsetInput, textoInput);
  resultadoDisplay.innerHTML = decodificado;
  return decodificado
};

window.document.getElementById('btnEncode').addEventListener("click", chamaEncode);
window.document.getElementById('btnDecode').addEventListener("click", chamaDecode);


