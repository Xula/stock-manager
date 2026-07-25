## ADDED Requirements

### Requirement: Pagina de listagem de estoque

O sistema DEVE renderizar uma pagina em `/estoque/listar` contendo uma tabela (Table do Ant Design) com os itens de estoque cadastrados, utilizando dados mock.

#### Scenario: Usuario acessa a pagina de listagem de estoque

- **WHEN** o usuario navega para `/estoque/listar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Estoque" e uma tabela com todos os itens de estoque mock

#### Scenario: Tabela exibe as colunas corretas

- **WHEN** a pagina de listagem de estoque e carregada
- **THEN** a tabela exibe as colunas: Produto, Quantidade, Preco de Compra, Preco de Venda, Acoes

#### Scenario: Coluna de Preco de Compra formatada em reais

- **WHEN** a tabela e renderizada
- **THEN** os valores da coluna Preco de Compra sao exibidos no formato "R$ X,XX"

#### Scenario: Coluna de Preco de Venda formatada em reais

- **WHEN** a tabela e renderizada
- **THEN** os valores da coluna Preco de Venda sao exibidos no formato "R$ X,XX"

### Requirement: Botao de editar na tabela

A coluna Acoes da tabela DEVE conter um botao "Editar" que redireciona o usuario para a pagina de edicao do item correspondente.

#### Scenario: Usuario clica em editar

- **WHEN** o usuario clica no botao "Editar" em uma linha da tabela
- **THEN** o sistema navega para `/estoque/editar` com os dados do item selecionado

### Requirement: Botao de remover na tabela

A coluna Acoes da tabela DEVE conter um botao "Remover" que abre um modal de confirmacao com os dados do item.

#### Scenario: Usuario clica em remover

- **WHEN** o usuario clica no botao "Remover" em uma linha da tabela
- **THEN** o sistema exibe um Modal com os dados do item (Produto, Quantidade, Preco de Compra, Preco de Venda) e um botao "Confirmar"

#### Scenario: Usuario confirma a remocao

- **WHEN** o usuario clica em "Confirmar" no modal de remocao
- **THEN** o sistema exibe mensagem de sucesso "Item removido com sucesso!" e o item e removido da tabela

#### Scenario: Usuario cancela a remocao

- **WHEN** o usuario clica em "Cancelar" no modal de remocao
- **THEN** o modal e fechado e nenhum item e removido da tabela

### Requirement: Pagina de criacao de item de estoque

O sistema DEVE renderizar uma pagina em `/estoque/criar` contendo um formulario para registrar nova entrada no estoque.

#### Scenario: Usuario acessa a pagina de criacao de estoque

- **WHEN** o usuario navega para `/estoque/criar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Entrada de Estoque" e o formulario completo

### Requirement: Campos do formulario de criacao

O formulario de criacao DEVE conter os seguintes campos:

- Produto (select com busca, obrigatorio)
- Quantidade (input number, obrigatorio, minimo 1)
- Preco de Compra (input de texto formatado em reais, obrigatorio)
- Preco de Venda (input de texto formatado em reais, obrigatorio)

#### Scenario: Usuario visualiza todos os campos do formulario de criacao

- **WHEN** a pagina de criacao de estoque e carregada
- **THEN** todos os 4 campos sao renderizados com seus respectivos labels e placeholders

#### Scenario: Campos obrigatorios sao validados

- **WHEN** o usuario submete o formulario com campos obrigatorios vazios
- **THEN** o sistema exibe mensagens de erro indicando quais campos precisam ser preenchidos

### Requirement: Select de produto com busca e dados mock

O select de Produto DEVE usar um array hardcoded de produtos mock como opcoes e suportar busca textual (showSearch) para filtrar as opcoes.

#### Scenario: Opcoes do select disponiveis imediatamente

- **WHEN** a pagina de criacao e carregada
- **THEN** o select de Produto exibe as opcoes mock sem loading

#### Scenario: Select de Produto exibe opcoes mock

- **WHEN** o usuario abre o select de Produto
- **THEN** o select exibe opcoes como "Smartphone Samsung Galaxy", "Teclado Mecanico", "Monitor 24 polegadas", "Mouse Gamer", "Notebook Dell"

#### Scenario: Usuario busca produto por nome

- **WHEN** o usuario digita um termo de busca no select de Produto
- **THEN** o select filtra as opcoes exibindo apenas os produtos que contem o termo digitado

### Requirement: Submissao mock do formulario de criacao

Ao submeter o formulario de criacao, o sistema DEVE simular o registro exibindo mensagem de sucesso e redirecionando o usuario.

#### Scenario: Item de estoque cadastrado com sucesso (mock)

- **WHEN** o usuario preenche todos os campos obrigatorios e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Entrada de estoque registrada com sucesso!" e redireciona para `/estoque/listar`

#### Scenario: Botao de cancelar

- **WHEN** o usuario clica no botao "Cancelar"
- **THEN** o sistema redireciona para a pagina `/estoque/listar` sem salvar os dados

### Requirement: Pagina de edicao de item de estoque

O sistema DEVE renderizar uma pagina em `/estoque/editar` contendo um formulario pre-preenchido com dados mock para edicao de um item de estoque.

#### Scenario: Usuario acessa a pagina de edicao de estoque

- **WHEN** o usuario navega para `/estoque/editar`
- **THEN** o sistema exibe um Card contendo o titulo "Editar Estoque" e o formulario com os campos pre-preenchidos

### Requirement: Campos do formulario de edicao

O formulario de edicao DEVE conter os mesmos campos do formulario de criacao (Quantidade, Preco de Compra, Preco de Venda), exceto o campo Produto que DEVE ser exibido como texto nao editavel.

#### Scenario: Produto exibido como campo desabilitado

- **WHEN** a pagina de edicao e carregada
- **THEN** o nome do produto e exibido como texto (nao editavel) no formulario, e os campos Quantidade, Preco de Compra e Preco de Venda sao editaveis e pre-preenchidos com dados mock

#### Scenario: Submissao do formulario de edicao

- **WHEN** o usuario altera os campos e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Item de estoque atualizado com sucesso!" e redireciona para `/estoque/listar`

### Requirement: Redirecionamento da raiz de estoque

A pagina `/estoque` DEVE redirecionar automaticamente para `/estoque/listar`.

#### Scenario: Usuario acessa a raiz do modulo de estoque

- **WHEN** o usuario navega para `/estoque`
- **THEN** o sistema redireciona automaticamente para `/estoque/listar`
