## Purpose

Tela de listagem de produtos — tabela com dados mock hardcoded exibindo os produtos cadastrados, acessível via sidebar em Produtos → Listar Produtos.

## Requirements

### Requirement: Pagina de listagem de produtos

O sistema DEVE renderizar uma pagina em `/produtos/listar` contendo uma tabela com todos os produtos mock.

#### Scenario: Usuario acessa a pagina de listagem de produtos

- **WHEN** o usuario navega para `/produtos/listar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card com titulo "Listar Produtos" e uma tabela listando os produtos

### Requirement: Tabela de produtos

A tabela DEVE usar o componente `Table` do Ant Design com colunas para Nome, Categoria, Marca, Unidade de Medida e Acoes.

#### Scenario: Tabela exibe colunas corretas

- **WHEN** a pagina de listagem e carregada
- **THEN** a tabela exibe colunas com cabecalhos: "Nome", "Categoria", "Marca", "Unidade de Medida" e "Acoes"

#### Scenario: Tabela exibe dados mock

- **WHEN** a pagina de listagem e carregada
- **THEN** a tabela exibe pelo menos 5 produtos com dados mock (nomes, categorias, marcas e unidades de medida variados)

### Requirement: Botao Editar na tabela

Cada linha da tabela DEVE conter um botao "Editar" na coluna Acoes que redireciona para a pagina de edicao de produto.

#### Scenario: Usuario clica em Editar

- **WHEN** o usuario clica no botao "Editar" em uma linha da tabela
- **THEN** o sistema navega para a rota `/produtos/editar`

### Requirement: Dados mock inline

Os dados da tabela DEVEM ser definidos como um array de objetos hardcoded no componente, sem chamadas a API.

#### Scenario: Dados carregados instantaneamente

- **WHEN** a pagina e montada
- **THEN** a tabela exibe os dados imediatamente, sem indicador de loading
