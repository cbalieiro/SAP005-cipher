const cipher = {
  // Para não realizar confusões nas obrigatoriedades, mantive a estrutura de nomeclatura do README cipher.encode(offset, string)

  encode(offset, string) {
    let textoC = "";
    if(typeof offset == 'number' && typeof string == 'string'){
    for(let i = 0; i < string.length; i++)  
    {textoC += String.fromCharCode(Math.abs((string.charCodeAt(i)+65 + offset)%26)+65);}
  } else {
    throw new TypeError();
  }
    return textoC
  } , // sem a vírgula não funciona. Isso pq estamos criando dois metodos distintos dentro do objeto.

  decode(offset, string){
    let textoD = "";
    if(typeof offset == 'number' && typeof string == 'string'){
    for(let i = 0; i < string.length; i++) 
    {textoD += String.fromCharCode(Math.abs((string.charCodeAt(i)+65 - offset)%26)+65);}
  } else {
    throw new TypeError();
  }
    return textoD
  }
};

export default cipher;
