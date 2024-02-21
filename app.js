function encriptar(traduccion) {
    // Elimina cualquier estilo previo del mensaje de advertencia
    document.querySelector("#warning").removeAttribute("style");
  
    // Obtiene referencias a los elementos del DOM
    const textarea = document.querySelector("#texto");
    const texto = textarea.value;
    const areaDefault = document.querySelector("#default");
    const areaResult = document.querySelector("#result");
    const textoOut = document.querySelector("#texto_out");
  
    if (texto !== "") {
      // Cadena para almacenar el texto cifrado
      let out = "";
  
      // Recorre cada caracter del texto de entrada
      for (let i = 0; i < texto.length; i++) {
        // Valida que solo contenga letras minúsculas y espacios
        if (((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] !== ' ')) {
          // Muestra un mensaje de advertencia si hay caracteres inválidos
          document.querySelector("#warning").style.color = "red";
          document.querySelector("#warning").style.fontSize = "16px";
          return;
        } else if ((texto.length === 1 && texto === " ") || texto.replace(/ /g, "") === "") {
          // Oculta el área de resultados si la entrada está vacía o solo contiene espacios
          areaDefault.classList.remove("invisible");
          areaResult.classList.add("invisible");
          return;
        }
  
        // Aplica la traducción a las vocales
        if (texto[i] === 'a') {
          out += traduccion["a"];
        } else if (texto[i] === 'e') {
          out += traduccion["e"];
        } else if (texto[i] === 'i') {
          out += traduccion["i"];
        } else if (texto[i] === 'o') {
          out += traduccion["o"];
        } else if (texto[i] === 'u') {
          out += traduccion["u"];
        } else {
          // Mantiene los caracteres que no son vocales sin cambios
          out += texto[i];
        }
      }
  
      // Muestra el área de resultados y establece el texto cifrado
      areaDefault.classList.add("invisible");
      areaResult.classList.remove("invisible");
      textoOut.innerHTML = out;
    }
  }
  
  // Función para desencriptar el texto
  function desencriptar(traduccion) {
    // Elimina cualquier estilo previo del mensaje de advertencia
    document.querySelector("#warning").removeAttribute("style");
  
    // Obtiene referencias a los elementos del DOM (similar a la función encriptar)
    // ...
  
    if (texto !== "") {
      // Recorre cada caracter del texto cifrado
      for (let i = 0; i < texto.length; i++) {
        // Valida que solo contenga caracteres permitidos (similar a la función encriptar)
        // ...
      }
  
      // Reemplaza las traducciones de las vocales para desencriptar el texto
      texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
      texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
      texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
      texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
      texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
  
      // Muestra el texto desencriptado
      areaDefault.classList.add("invisible");
      areaResult.classList.remove("invisible");
      textoOut.innerHTML = texto;
    }
  }
  
  // Función para copiar el texto al portapapeles
  function clipboard() {
    const textoOut = document.querySelector("#texto_out");
    navigator.clipboard.writeText(textoOut.value);
  }
  
  // Asigna eventos a los botones
  const enc = document.querySelector('#enc');
  const des = document.querySelector('#des');
  const copy = document.querySelector('#copiar');
  
// Objeto que define la traducción de las vocales
var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );