const cipher = {
  // Para não realizar confusões nas obrigatoriedades, mantive a estrutura de nomeclatura do README cipher.encode(offset, string)

  encode(offset, string) {
    let textoC = "";
    for(let i = 0; i < string.length; i++) 
    {textoC += String.fromCharCode(string.charCodeAt(i)+ offset);}
    return textoC
  } , // sem a vírgula não funciona. Isso pq estamos criando dois metodos distintos dentro do objeto.

  decode(offset, string){
    let textoD = "";
    for(let i = 0; i < string.length; i++) 
    {textoD += String.fromCharCode(Math.abs(string.charCodeAt(i)-offset));}
    return textoD
  }
};

export default cipher;
