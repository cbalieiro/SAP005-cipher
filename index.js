import cipher from './cipher.js';
//console.log(cipher);

const btnCriptografar = window.document.getElementById('btnCodif').addEventListener("click", function chamaEncode() {

    let tCod = window.document.getElementById('txtSringC').value.toUpperCase();
    let offCod = Number(window.document.getElementById('resOffset').value);
    
    const codificado = cipher.encode(offCod,tCod);
 
    let res = window.document.getElementById('res');
    res.innerHTML = codificado


    //console.log(typeof offCod)
    //console.log(tCod.charCodeAt(0))
  }
  ); 

  const btnDescriptografar = window.document.getElementById('btnDescodif').addEventListener("click", function chamaDecode() {

    let tCod = window.document.getElementById('txtSringC').value.toUpperCase();
    let offCod = Number(window.document.getElementById('resOffset').value);
    
    const codificado = cipher.decode(offCod,tCod);
 
    let res = window.document.getElementById('res');
    res.innerHTML = codificado


    //console.log(typeof offCod)
    //console.log(tCod.charCodeAt(0))
  }
  ); 