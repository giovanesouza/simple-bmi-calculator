/** Guarda todos os elementos que serão manipulados via JS */
const htmlElements = {
    inputMass: document.getElementById('mass'),
    inputHeight: document.getElementById('height'),
    messageMass: document.getElementById('inputGroup-message-mass'),
    messageHeight: document.getElementById('inputGroup-message-height'),
    btnCalculate: document.getElementById('btnCalculate'),
    bmiResult: document.getElementById('bmi'),
    bmiClassification: document.getElementById('bmi-classification'),
};


/** Retorna o valor do IMC com duas casas decimais
 * @param mass: corresponde ao peso em kg
 * @param height: Corresponde a estatura em metros (ex.: 1.90)
 */
function bmiCalculate(mass, height) {
    return parseFloat((mass / (height * height))).toFixed(2);
};

/** Retorna a classificação do IMC
 * @param bmi: corresponde ao valor do imc
 */
function bmiClassification(bmi) {
    if (bmi < 18.5) return ` Kg/m2 - ❌ Abaixo do peso`;
    else if (bmi >= 18.5 && bmi < 25) return ` Kg/m2 - ✅ Peso normal`;
    else if (bmi >= 25 && bmi < 30) return  ` Kg/m2 - ⚠️ Sobrepeso`;
    else if (bmi > 30) return ` Kg/m2 - ❌ Obesidade`;
};

/** Valida os campos de 'peso' e 'altura' retornando 'true' quando ambos campos estiverem com valores adequados */
function validateData() {
    let mass = parseFloat(htmlElements.inputMass.value);
    let height = parseFloat(htmlElements.inputHeight.value);

    // Verifica se foi setado valor
    if (!mass) {
        htmlElements.messageMass.innerText = 'Insira um valor numérico. Ex.: 50.75';
        return false;
    } else htmlElements.messageMass.innerText = '';

    // Verifica se foi setado valor
    if (!height) {
        htmlElements.messageHeight.innerText = 'Insira um valor numérico. Ex.: 1.72';
        return false;
    } else htmlElements.messageHeight.innerText = '';

    return true;
};


// Evento de clique para calcular o IMC
htmlElements.btnCalculate.addEventListener('click', async (e) => {
    e.preventDefault(); // Evita recarregamento da página
    const bmi = bmiCalculate(htmlElements.inputMass.value, htmlElements.inputHeight.value);

    if (validateData()) {
        htmlElements.bmiResult.innerText = bmi;
        htmlElements.bmiClassification.innerText = bmiClassification(bmi);
    } else {
        htmlElements.bmiResult.innerText = '';
        htmlElements.bmiClassification.innerText = '';
    };
});
