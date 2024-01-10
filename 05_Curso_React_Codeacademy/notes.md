**REACT**

**Framework or Libraries**

    Library: conjunto de códigos previamente escritos que podem ser usados quando estamos escrevendo nosso próprio código.
    Ex: 
        const Promise = require('promise') <<< dessa forma podemos usar código pré-escrito da biblioteca promise acessando a const Promise
        const bodyParser = require('body-parser')
        const _ = require('lodash')
        const validator = require('email-validator')

        console.log(validator.validate('email@gmail.com')) >> true

    Framework: é uma estrutura pré-definida onde o meu próprio código preenche os vazios e faz o código funcionar. Dessa forma, um framework engessa muito a usabilidade da aplicação.
        Por isso é importante escolher o framework necessário para determinado fim de acordo com o escopo.

    Ex: 
        const express = require('express')
        const app = express()

        const PORT = 3000

        app.get('/', (req, res) => {
            res.send('Hello World!')
        })

        app.listen(PORT)

        Diferente de uma library, o framework espera que você coloque EXATAMENTE o que ele espera: o método get dentro da instância de app espera dois argumentos(uma rota e uma callback func). Caso ela não seja colocada dessa forma, uma mensagem de erro irá aparecer. Assim, espera-se que a função seja executada da forma adequada.

**React Library**

    O que é React: uma biblioteca JS usada para criar interfaces de usuários.
        A biblioteca do React é baseada na criação de componentes reutilizáveis. Para componentes mais complexos, usamos mais de um componente combinados.
        Para criar um componente podemos usar a notação de classe ou function:

            function Button(props) {
                return <button>My Button!</button>
            }
                (Componentes de função são usados quando os componentes são mais simples e não suportam todos os features do React)


            class Button extends React.Component{
                render() {
                    return <button>My Button!</button>
                }
            }
        
**Virtual DOM**

    Diferente do DOM, o Virtual DOM é uma representação em memória da estrutura da página. 
    Quando ocorro alguma alteração no Virtual DOM, o framework analisa com o DOM do navegador e realiza apenas as mudanças necessárias.
    Dessa forma a manipulação ocorre de maneira muito mais otimizada.

    Em resumo, o DOM é a representação estruturada do documento real, enquanto o Virtual DOM é uma técnica utilizada por alguns frameworks para otimizar a manipulação do DOM, reduzindo as operações diretas no DOM e melhorando a eficiência das atualizações de interface do usuário.

**JSX element**

    A parte do código escrito em JS que lembra um HTML é, na verdade, um JSX. Código JSX se parece com HTML.
        Código JSX não pode ser lido pelo browser! Por isso ele é compilado e, antes de chegar ao browser, o compilador vai traduzir JSX para JavaScript comum.
        Com o JSX podemos escrever como o código deve parecer e, por trás dos panos, será chamada várias vezes o React.createElement(). Desse forma o código se torna mais DRY(Don't Repeat Yourself), tem mais escalabilidade e separa funções ao invés de separar tecnologias. 

    Apesar de parecido, um elemento JSX NÃO É um elemento HTML. Ele é, na verdade, uma representação do que queremos ver na página.

    Elementos JSX são tratados como expressões JS. Dessa forma eles podem ser alocados em qualquer lugar que uma expressão JS pode ir: salvo em uma variável, passada a uma função, guardada em um objeto ou array etc.

    ex: 
        const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
};

**JSX elements Attributes**

    Assim como em elementos HTML, elementos JSX podem receber atributos diretamente dentro das tags.

    ex: 
        <a href='http://www.example.com'>Welcome to the Web</a>;

        const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 

    É possível criar nossos próprios atributos e JSX! Para criá-los não podemos colocar espaços em branco, deve ser separados usando '-' ou camelCase.

    ex:
        const myH1 = <h1 my-custom-attribute="my-custom-attribute-value" myOtherCustomAttribute="my-other-custom-attribute-value" anothercustomattribute="another-custom-attribute-value">Hello React</h1>;

    É possível atribuir variáveis aos valores de um atributo.
    ex:

        const sideLength = "200px";

        const panda = (
        <img 
            src="images/panda.jpg" 
            alt="panda" 
            height={sideLength} 
            width={sideLength} />
        );

    neste caso o valor do atributo foi alocado à constante "sideLength" e foi usado com a notação de colchetes para que seja lido como JS.

    Também é possível alocar valores dentro de um objeto:

        const pics = {
        panda: "http://bit.ly/1Tqltv5",
        owl: "http://bit.ly/1XGtkM3",
        owlCat: "http://bit.ly/1Upbczi"
        }; 

        const panda = (
        <img 
            src={pics.panda} 
            alt="Lazy Panda" />
        );

        dessa forma, podemos acessar os valores de cada chave usando notação de objeto.

**Nested JSX**

    elementos JSX podem ser encapsulados dentro de outros elementos JSX, assim como elementos HTML.

    ex:
        <a href="https://www.example.com"><h1>Click me!</h1></a>

    para que o elemento seja mais legível, podemos usar breaks como em HTML

    ex: 

    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>

    Quando uma expressão JSX toma mais que uma linha, deve ser encapsulada em parênteses:
    Elas devem ser escritas com parênteses para que não sejam abreviadas com ';' automaticamente pelo JS.

    ex:
        (
        <a href="https://www.example.com">
            <h1>
            Click me!
            </h1>
        </a>
        )

    Expressões JSX encapsuladas podem ser salvas como variáveis, passada para funções etc.

    ex:
        const theExample = (
        <a href="https://www.example.com">
            <h1>
            Click me!
            </h1>
        </a>
        );

    Para que uma expressão JSX funcione corretamente, é necessário que o mesmo elemento que abre a expressão a feche. Assim, se múltiplos elementos estiverem em uma mesma expressão JSX sem nenhum tipo de agrupamento, ela encerrará em um erro.
    Caso haja muitos elementos dentro de uma expressão, basta envolvê-los com uma tag div.

    Além da div, é possível usar outros meios para encapsular elementos JSX dentro de apenas um elemento:
    ex: 
        USANDO APENAS AS SETAS:
        <>
            <p>Hello there</p>
            <p>Have a nice day!</p>
        </>

        USANDO A PROPRIEDADE FRAGMENT NATIVA DO REACT:
        render() {
            return (
                <React.Fragment>
                    <ChildA />
                    <ChildB />
                    <ChildC />
                </React.Fragment>
            );
        }

**React and ReactDOM**

    React é uma library JS usada para criar interfaces para usuários.
    ReactDOM é uma libraby complementar usada para integrar o React ao DOM, ajudando a manipular e controlar o DOM mais facilmente.

**Render JSX elements**

    React é baseado essencialmente em duas coisas: O QUE renderizar e ONDE renderizar.

        import React from 'react';
        import { createRoot } from 'react-dom/client';

        const container = document.getElementById('app');
            << a const container utiliza do objeto document, que representa a página do DOM, e usa o método getElementById para selecionar o elemento app e o armazena em 'container' >>

        const root = createRoot(container);
            << createRoot() é um método da library react-dom/client usado para criar uma React root usando o container e aloca em root. Root pode ser usado para renderizar uma expressão JSX. Funciona como um ONDE colocar a expressão JSX. >>

        root.render(<h1>Hello world</h1>);
            << usa o método render() de root para renderizar o que foi passado como argumento >>. Funciona como O QUE renderizar.

    O método render() não precisa necessariamente receber como argumento um expressão JSX, mas sim algo que resulte em uma expressão JSX. Pode receber, por exemplo, uma variável onde foi alocada uma expressão JSX.
    ex:
        const toDoList = (
            <ol>
                <li>Learn React</li>
                <li>Become a Developer</li>
            </ol>
        );

        const container = document.getElementById('app');
        const root = createRoot(container);
        root.render(toDoList);

**Erros comuns**

    ATRIBUIÇÃO COM NOME RESERVADO: em JSX é necessário se atentar para a utilização de atribuições com nome reservado. Não se pode usar "class" dentro de uma tag, mas podemos substituí-la por "className"

    TAG AUTO-FECHANTE: tags que não precisam de um fechamento (<img> por exemplo) devem ser usadas como <img /> (colocando a barra antes do fechamento da tag)

    É possível usar o fechamento com barra até em tags que comumente precisariam de uma tag de fechamento. Seu uso só é aconselhável quando não há elementos filhos.
    ex: 
        <div className="myDiv" />

**JavaScript dentro do JSX**

    Para que lógica JS seja aplicada dentro do JSX é preciso envolver o código com {}.
    ex:
        import React from 'react';
        import { createRoot } from 'react-dom/client';

        const container = document.getElementById('app');
        const root = createRoot(container);
        
        root.render(<h1>{2 + 3}</h1>)

        <<< retorna 5 >>>

**Event Listener**
    
    Listener de Eventos são usados em JSX dentro de tags como atributos.
    ex: 
        <img onClick={clickAlert} />

    Diferente do HTML, o listener de eventos em JSX deve ser escrito com camelCase e seu argumento deve sempre ser uma função já declarada dentro do escopo do projeto.

**JSX conditionals**

    Uma maneira de escrever condicionais dentro do JSX é colocar o bloco do if FORA do JSX
    ex:
        if (user.age >= drinkingAge) {
            message = (
                <h1>
                Hey, check out this alcoholic beverage!
                </h1>
            );
            } else {
            message = (
                <h1>
                Hey, check out these earrings I got at Claire's!
                </h1>
            );
        }

        root.render(message);

        No exemplo a inserção SJX acontece após a comparação com as condicionais serem executadas.

**Quando usar operador ternário, if ou &&**

    We should decide to use either an if statement, ternary operator, or the && operator based on what is most concise while still maintaining readability.

    Tips to help decide on which conditional statement or operator to use:

    - the && and ternary operators are more concise, choose either of these when possible
    - choose the && over a ternary when you want an action to occur (or not) based on a single condition
    - choose an if/else/else if statement when you need to extrapolate logic to make it easier to read and understand

**map em JSX**

    const strings = ['Home', 'Shop', 'About Me'];

    const listItems = strings.map(string => <li>{string}</li>);

    <ul>{listItems}</ul>

    É possível criar uma lista de array alocada dentro de uma const:
    
        // This is fine!
            <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        </ul>

        // This is also fine!
        const liArray = [
        <li>item 1</li>, 
        <li>item 2</li>, 
        <li>item 3</li>
        ];

        <ul>{liArray}</ul> <<< resulta em uma li funcionável

    É possível fazer o mesmo com forEach, mas como o método forEach não retorna um valor é preciso escrever um código menos conciso.

        const myArr = ['one', 'two', 'three'];

        const myArrMadeFromForEach = []; // we create a new array which will evaluate to a value when we inject it into a JSX expression

        myArr.forEach((item, i) => myArrMadeFromForEach.push(<li key={item+i}>{item}</li>)); // we push a JSX element containing a value to our 'myArrMadeFromForEach' because `.forEach()` does not return any value, nor does it mutate the array on which it is called

        const myList = (
        <ul>{myArrMadeFromForEach}</ul> // `myArrMadeFromForEach` will evaluate to an array of `<li>` elements
        )

        ReactDOM.render(myList, document.getElementById('app')); 

**Keys**

    As chaves são atributos que são alocados em uma lista. As chaves não tem nenhuma utilidade visível além do uso interno do React para organizar listas.
    Keys devem ser usadas nas seguintes situações:
        - listas tem memória de um render para o outro. Portanto, quando uma lista é renderizada, ela deve se "lembrar" se io item foi excluído ou não. 
        - a ordem da lista não pode ser alterada. Nesse caso, é preciso que os itens estejam listados na ordem correta utilizando o atributo "key"

    ex:
        import React from 'react';
        import { createRoot } from 'react-dom/client';

        const container = document.getElementById('app');
        const root = createRoot(container);
        const people = ['Rowe', 'Prevost', 'Gare'];

        const peopleList = people.map((person,i) =>
        // expression goes here:
        <li key={'person_'+i}>{person}</li> <<< DESSA FORMA, CADA PESSOA RECEBE A CHAVE 'PESSOA_1', 'PESSOA_2' ETC
        );


        // root.render goes here:
        root.render(<ul>{peopleList}</ul>)

    É desaconselhado o uso direto do index como o valor das chaves, pois eventualmente, caso a ordem da lista mude, o valor da chave pode mudar também. Por isso é aconselhado que sejam dados valores mais específicos para cada chave.
    A chave só precisa ser única dentro de seus elementos irmãos, não globalmente.

**Create Elemente**

    Por trás dos panos, JSX usa o método Create Element toda vez que uma expressão JSX com HTML é criada.
    ex:
        const h1 = <h1>Hello world</h1>;

            corresponde à mesma coisa que:

        const h1 = React.createElement(
            "h1",
            null,
            "Hello world"
        );

    No React, CreateElement recebe três argumentos: type, props, ...children
        - type: tag name OU componente React
        - props: lista de propriedades. Ou recebe como arumento um objeto contento as propriedades ou 'null'
        - (opcional) children: zero ou mais elementos filhos.

 
**React Components**

    Componente é uma parte pequena de código que pode ser reutilizada, geralmente para renderizar algo no browser e mudar quando houver alguma modificação.
    Criar vários componentes em apenas um arquivo é possível, mas para que a organização seja mantida, é melhor que funções sejam separadas por arquivos.

    Para começar a utilizar componentes é preciso importar a biblioteca react:
        import React from 'react';

    Isso cria um objeto 'React' que contem os métodos necessários para usar a biblioteca react. React é importado do 'react' package, que deve ser instalado como uma dependência de projeto. Com o objeto, podemos começar a usar os recursos da biblioteca react.

    é possível importar mais de uma função da mesma biblioteca:
        import { Router, Switch } from 'react-router';

    Antigamente se usava componentes feitos a partir de classes JS. Porém, depois da introdução dos Hooks, componentização atualmente é feita com functions.
    ex:
        import React from 'react';

        function MyComponent() {
            return <h1>Hello, I'm a functional React Component!</h1>;
        }

        export default MyComponent;

    Componentes devem ser nomeados como PascalCase, ou seja, começando com letra maiúscula. Isso deve ser feito para que o React entenda que se trata de um componente e não procure elementos HTML.

**React-DOM**

    Os métodos usados a partir da importação da biblioteca React são direcionados apenas ao React, como criação de componentes e expressões JSX.
    Para manipular o DOM é preciso importar a biblioteca 'react-dom/client'

    Como apenas algumas páginas são importantes para a manipulação do DOM (index.js), geralmente não importaremos em páginas voltadas apenas para componentes.



