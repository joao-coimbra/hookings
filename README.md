<h1 align="center">Hookings</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/hookings">
    <img alt="npm version" src="https://badge.fury.io/js/hookings.svg">
  </a>
  <a href="https://github.com/joao-coimbra/hookings/blob/main/LICENSE">
    <img alt="MIT license" src="https://img.shields.io/npm/l/hookings">
  </a>
</p>

<p align="center">🎣 Uma coleção de hooks personalizados para React que simplificam e aprimoram a experiência de desenvolvimento em React.</p>

## Instalação 🚀

Você pode instalar o `hookings` usando npm:

```bash
npm install hookings
```

ou

```bash
yarn add hookings
```

## Recursos 🌟

- Hooks fáceis de usar e bem documentados para casos de uso comuns em React.
- Opções altamente personalizáveis para adaptar os hooks às suas necessidades.
- Uma crescente coleção de hooks úteis e versáteis.

# Hooks Disponíveis 🎣

1. `useKeyDown`: Um hook para capturar o evento de pressionar uma tecla específica no teclado, com opções personalizáveis para teclas de modificação.
1. `useDebounce`: Um hook para criar um efeito de "debounce" que atrasa a execução de uma função até que um determinado tempo tenha passado sem chamadas adicionais.
1. `useDropdown`: Um hook para lidar com o comportamento de um menu suspenso e detectar cliques fora do menu para fechá-lo.

> Nota: Mais hooks estão em desenvolvimento e serão adicionados à coleção em breve! 🚧

## Uso 📝

### useKeyDown

Aqui está um exemplo rápido de como usar o hook `useKeyDown`:

```jsx
import { useKeyDown } from "hookings";

const MyComponent = () => {
  // Chame esta função quando as teclas 'Ctrl + Enter' forem pressionadas
  const handleKeyPress = () => {
    // Sua lógica aqui...
  };

  useKeyDown("KeyEnter", handleKeyPress, { ctrlKey: true });

  // Resto do código do seu componente...
};
```

Para exemplos mais detalhados e instruções de uso, consulte a [documentação](https://github.com/joao-coimbra/hookings#readme).

## Contribuições 🤝

Contribuições para o `hookings` são sempre bem-vindas! Se você tem ideias para novos hooks ou melhorias nos existentes, sinta-se à vontade para abrir uma issue ou enviar um pull request no [GitHub](https://github.com/joao-coimbra/hookings).

## Licença 📄

Hookings é um software de código aberto licenciado sob a [MIT License](https://github.com/joao-coimbra/hookings/blob/main/LICENSE).

## Conclusão 🎉

Obrigado por usar o **Hookings**! Esperamos que esses hooks personalizados ajudem a melhorar a sua experiência de desenvolvimento em React. Se encontrar algum problema ou tiver alguma dúvida, não hesite em nos contatar no [Github](https://github.com/joao-coimbra/hookings/issues). Happy coding! 🚀
