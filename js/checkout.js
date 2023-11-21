function formatearNumeroTarjeta(numero) {
    return numero.replace(/(\d{4})/g, '$1 ').trim();
  }
  
  function validarFormulario() {
    var nombreInput = document.getElementById("nombre");
    var tarjetaInput = document.getElementById("tarjeta");
    var tarjetaValor = tarjetaInput.value.replace(/\s/g, '');
  
    if (!/^\d{16}$/.test(tarjetaValor)) {
      alert("Por favor, ingrese un número de tarjeta válido.");
      return false;
    }
  
    tarjetaInput.value = formatearNumeroTarjeta(tarjetaValor);
  
  
    return true;
  }
  