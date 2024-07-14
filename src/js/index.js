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
    else if (bmi >= 25 && bmi < 30) return ` Kg/m2 - ⚠️ Sobrepeso`;
    else if (bmi > 30) return ` Kg/m2 - ❌ Obesidade`;
};

/** Valida os campos de 'peso' e 'altura' retornando 'true' quando ambos campos estiverem com valores adequados */
function validateData() {
    let mass = parseFloat(htmlElements.inputMass.value.trim());
    let height = parseFloat(htmlElements.inputHeight.value.trim());

    const massRegex = /^\d{1,2}\.?\d{1,2}?$/; // define o padrão do peso
    const heightRegex = /^\d\.\d{1,2}$/; // define o padrão da altura

    // Verifica se foi setado valor e se ele corresponde ao formato esperado
    if (!massRegex.test(mass)) {
        htmlElements.messageMass.innerText = 'Insira um valor de peso no formato correto. Ex.: 50.75';
        return false;
    } else htmlElements.messageMass.innerText = '';

    // Verifica se foi setado valor e se ele corresponde ao formato esperado
    if (!heightRegex.test(height)) {
        htmlElements.messageHeight.innerText = 'Insira um valor de altura no formato correto. Ex.: 1.75';
        return false;
    } else htmlElements.messageHeight.innerText = '';

    if (mass < height || mass < 45) {
        alert("⚠️ Peso não pode ter valor menor do que altura!\n⚠️ O peso mínimo para cálculo é 45 kg.");
        return;
    }

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
