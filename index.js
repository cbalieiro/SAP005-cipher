import cipher from './cipher.js'
let resultadoDisplay = window.document.getElementById('txtRes');
window.document.getElementById('btnEncode').addEventListener("click", function chamaEncode() {
  const textoInput = window.document.getElementById('txtSringE').value.toUpperCase();
  const offsetInput = Number(window.document.getElementById('offsetEncode').value);
  const codificado = cipher.encode(offsetInput, textoInput);
  resultadoDisplay.innerHTML = codificado;
  return codificado
})
window.document.getElementById('btnDecode').addEventListener("click",function chamaDecode() {
  const textoInput = window.document.getElementById('txtSringD').value.toUpperCase();
  const offsetInput = Number(window.document.getElementById('offsetDecode').value);
  const decodificado = cipher.decode(offsetInput, textoInput);
  resultadoDisplay.innerHTML = decodificado;
  return decodificado
})