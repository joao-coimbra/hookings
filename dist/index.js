"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyDown = void 0;
var react_1 = require("react");
// Hook personalizado para capturar o evento de pressionar uma tecla específica
function useKeyDown(keyPress, // O código da tecla que será capturada
callback, // A função de callback que será chamada quando a tecla for pressionada
options // Opções adicionais para modificar o comportamento do hook
) {
    if (options === void 0) { options = {}; }
    var _a = options.ctrlKey, ctrlKey = _a === void 0 ? false : _a, _b = options.altKey, altKey = _b === void 0 ? false : _b, _c = options.shiftKey, shiftKey = _c === void 0 ? false : _c;
    // O manipulador do evento de pressionar a tecla
    var handler = function (event) {
        if (event.code !== keyPress)
            return; // Verifica se a tecla pressionada corresponde à tecla desejada.
        if (ctrlKey === (event.ctrlKey || event.metaKey) && // Verifica se a tecla CTRL (ou CMD em Mac) corresponde à configuração fornecida.
            altKey === event.altKey && // Verifica se a tecla ALT corresponde à configuração fornecida.
            shiftKey === event.shiftKey // Verifica se a tecla SHIFT corresponde à configuração fornecida.
        ) {
            event.preventDefault(); // Impede o comportamento padrão da tecla, caso seja um evento passível de prevenção (por exemplo, evitar que um formulário seja enviado).
            callback(); // Chama a função de callback fornecida quando a combinação de teclas corresponder à configuração esperada.
        }
    };
    (0, react_1.useEffect)(function () {
        // Adiciona o evento de escuta para o evento de pressionar uma tecla
        document.addEventListener("keydown", handler);
        return function () {
            document.removeEventListener("keydown", handler); // Remove o evento de escuta quando o componente é desmontado para evitar vazamentos de memória.
        };
    }, [keyPress, callback, options]);
}
exports.useKeyDown = useKeyDown;
