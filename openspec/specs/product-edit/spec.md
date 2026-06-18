## Purpose

Tela de edicao de produto — formulario pre-preenchido com dados mock de um produto existente, acessivel via sidebar em Produtos → Editar Produto ou via botao Editar na listagem.

## Requirements

### Requirement: Pagina de formulario de edicao de produto

O sistema DEVE renderizar uma pagina em `/produtos/editar` contendo um formulario pre-preenchido com dados mock de um produto para edicao.

#### Scenario: Usuario acessa a pagina de edicao de produto

- **WHEN** o usuario navega para `/produtos/editar` via sidebar, URL direta ou botao Editar na listagem
- **THEN** o sistema exibe um Card com titulo "Editar Produto" e o formulario com campos pre-preenchidos

### Requirement: Campos do formulario pre-preenchidos

O formulario DEVE conter os mesmos 7 campos de "Criar Produto" (Nome, Codigo de Barras/QR Code, Descricao, Categoria, Marca, Unidade de Medida, Imagem), porem pre-carregados com dados mock de um produto.

#### Scenario: Usuario visualiza formulario com dados existentes

- **WHEN** a pagina de edicao e carregada
- **THEN** os campos Nome, Descricao, Categoria, Marca e Unidade de Medida aparecem preenchidos com dados mock de um produto existente

#### Scenario: Usuario altera campos e salva

- **WHEN** o usuario modifica um ou mais campos e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Produto atualizado com sucesso!" e redireciona para `/produtos/listar`

### Requirement: Selects com dados mock

Os selects de Categoria, Marca e Unidade de Medida DEVEM usar os mesmos arrays mock de "Criar Produto".

#### Scenario: Selects exibem opcoes mock

- **WHEN** a pagina de edicao e montada
- **THEN** os selects exibem as mesmas opcoes mock de Categoria, Marca e Unidade de Medida definidas em Criar Produto

### Requirement: Botao Cancelar

O formulario DEVE conter um botao "Cancelar" que redireciona para a listagem de produtos.

#### Scenario: Usuario clica em Cancelar

- **WHEN** o usuario clica no botao "Cancelar"
- **THEN** o sistema redireciona para `/produtos/listar` sem salvar alteracoes
