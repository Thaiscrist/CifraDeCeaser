window.addEventListener('load', function() {

    var selectTipo = document.getElementById("tipo");
    
    var radioCodifica = document.getElementById("codificar");
    var radioDecodifica = document.getElementById("decodificar");

    var btnCodificarDecodificar = document.getElementById("btnCodificarDecodificar");

    selectTipo.addEventListener("change", function() {
        let incrementoRow = document.getElementById("incrementoRow");
        if (this.value == 'base') {
            incrementoRow.style.display = 'none';
        }else{
            incrementoRow.style.display = 'block';
        }
    });

    radioCodifica.addEventListener("click", function() {
        btnCodificarDecodificar.disabled = false;
        btnCodificarDecodificar.innerHTML = 'Codificar';
    });

    radioDecodifica.addEventListener("click", function() {
        btnCodificarDecodificar.disabled = false;
        btnCodificarDecodificar.innerHTML = 'Decodificar';
    });


    var form = document.getElementById("form");

    form.addEventListener("submit", function() {
        
        var selectTipo = document.getElementById("tipo").value;
        var result = document.getElementById("resultado");
        var texto = document.getElementById("entrada_textual").value.toLowerCase();
        var valueRadio = document.querySelector('input[name="radioBtn"]:checked').value;
        var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var x = parseInt(document.getElementById("incremento").value);
        var resultadoCeaser = [];

        if (selectTipo == 'cifra') {
            if (valueRadio == 'codificar') {
                if (x > 26) {
                    alert('O numero deve ser menor que 26');
                    location.reload();
                }
                for (var i = 0; i < texto.length; i++){
                    for (var j = 0; j < alfabeto.length; j++){
                        if (texto[i] == alfabeto[j]){
                            console.log(j, x);
                            resultadoCeaser[i] = alfabeto[(j + x) % 26];
                        }
                    } 
                }
                result.value = resultadoCeaser.join("");
            }else{
                if (x > 26) {
                    alert('O numero deve ser menor que 26');
                    location.reload();
                }
                for (var i = 0; i < texto.length; i++){
                    for (var j = 0; j < alfabeto.length; j++){
                        if (texto[i] == alfabeto[j]){
                               resultadoCeaser[i] = alfabeto[(j - x + 26) % alfabeto.length];
                        }
                    }
                }
                result.value = resultadoCeaser.join("");
            }
            
        }else{
            if (valueRadio == 'codificar') {
                result.value = btoa(texto);
            }else{
                result.value = atob(texto);
            }
        }
    
    });

})

