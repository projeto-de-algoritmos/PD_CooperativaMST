# Cooperativa MST

![bandeira](https://github.com/projeto-de-algoritmos/Greed_CooperativaMST/assets/54778783/c4cf29ef-ae7f-4dd1-9b55-68c1920f8c66)

**Número da Lista**: 24<br>
**Conteúdo da Disciplina**: Programação Dinâmica<br>

## Alunos

| Matrícula  | Aluno                 |
| ---------- | --------------------- |
| 17/0111059 | Matheus Fonseca Sousa |
| 17/0105342 | Irwin Schimitt        |

## Sobre

⚠️ ![Vídeo com a explicação](./Explica%C3%A7%C3%A3o.mp4).

O MST, Movimento dos Trabalhadores Rurais Sem Terra, é um movimento de amplitude nacional, que se baseia na aplicação do princípio da função social da terra. Ou seja, o movimento organiza um grupo de trabalhadores que tem disposição para trabalhar, mas não tem terra para plantar. Então, quando alguma terra pode ser considerada "improdutiva", no contexto do que é definido pela Constituição brasileira de 1988, o movimento a ocupa e torna produtiva através do trabalho desses camponeses sem terra. Pura e simplesmente através da aplicação da lei, o MST se tornou o maior produtor de arroz orgânico da América Latina e auxilia diariamente na alimentação de diversas famílias no Brasil.

Essas famílias precisam as vezes fazer o transporte de ferramentas entre acampamentos, e para isso pode ser útil o algorítmo Knapsack 0-1, para evitar viagens desnecessárias, carregando os itens de maneira otimizada.

## Screenshots

![Screen_Shot_2023-05-29_at_20 35 25](https://github.com/projeto-de-algoritmos/Greed_CooperativaMST/assets/54778783/96af75e6-7db3-40d3-9ef1-beec6fc9d055)



## Instalação

### Começando

É necessário ter o `npm` e o `yarn` instalado na máquina.

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
```

Depois execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Você pode começar a editar a página ao modificar `pages/index.tsx`. A página atualiza em tempo real de acordo com o seu trabalho no arquivo.

## Uso

O cooperativaMST é um projeto que serve para organizar, da produção da cooperativa de camponeses, o que será prioritariamente transportado em uma carga definida do caminhão.

Para utilizar o projeto, siga as instruções:

1. Indique a capacidade do veículo que será utilizado, em KG.

2. Adicione os itens que poderão ser transportados, com o peso e quanto seria cobrado por esse item.

3. Assim que o primeiro item for adicionado, e conforme mais itens forem sendo adicionados, a lista de itens que vão no caminhão se atualiza automaticamente.

Alguns detalhes sobre a aplicação:

- A lista de itens do caminhão e o valor total do que está sendo transportado são calculados utilizando o algoritmo de Knapsack.
- A prioridade é calculada com base no valor do produto e no peso que a mochila pode carregar.
- Utilizamos uma técnica base da programação dinamica chamada "Memoization". Para isso, é instanciada uma matriz em que serão armazenados os valores para consulta.
