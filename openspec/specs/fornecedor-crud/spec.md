## Purpose

Define o comportamento do modulo de Fornecedores: paginas de listagem, criacao, edicao e remocao de fornecedores com dados mock, usando os inputs adequados do Ant Design para cada campo (Nome, CNPJ, Telefone e Email).

## Requirements

### Requirement: Pagina de listagem de fornecedores

O sistema DEVE renderizar uma pagina em `/fornecedores/listar` contendo uma tabela (Table do Ant Design) com os fornecedores cadastrados, utilizando dados mock.

#### Scenario: Usuario acessa a pagina de listagem de fornecedores

- **WHEN** o usuario navega para `/fornecedores/listar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Fornecedores" e uma tabela com todos os fornecedores mock

#### Scenario: Tabela exibe as colunas corretas

- **WHEN** a pagina de listagem de fornecedores e carregada
- **THEN** a tabela exibe as colunas: Nome, CNPJ, Telefone, Email, Acoes

### Requirement: Botao de editar na tabela

A coluna Acoes da tabela DEVE conter um botao "Editar" que redireciona o usuario para a pagina de edicao do fornecedor correspondente.

#### Scenario: Usuario clica em editar

- **WHEN** o usuario clica no botao "Editar" em uma linha da tabela
- **THEN** o sistema navega para `/fornecedores/editar` com os dados do fornecedor selecionado

### Requirement: Botao de remover na tabela

A coluna Acoes da tabela DEVE conter um botao "Remover" que abre um modal de confirmacao com os dados do fornecedor.

#### Scenario: Usuario clica em remover

- **WHEN** o usuario clica no botao "Remover" em uma linha da tabela
- **THEN** o sistema exibe um Modal com os dados do fornecedor (Nome, CNPJ, Telefone, Email) e um botao "Confirmar"

#### Scenario: Usuario confirma a remocao

- **WHEN** o usuario clica em "Confirmar" no modal de remocao
- **THEN** o sistema exibe mensagem de sucesso "Fornecedor removido com sucesso!" e o fornecedor e removido da tabela

#### Scenario: Usuario cancela a remocao

- **WHEN** o usuario clica em "Cancelar" no modal de remocao
- **THEN** o modal e fechado e nenhum fornecedor e removido da tabela

### Requirement: Pagina de criacao de fornecedor

O sistema DEVE renderizar uma pagina em `/fornecedores/criar` contendo um formulario para cadastrar um novo fornecedor.

#### Scenario: Usuario acessa a pagina de criacao de fornecedor

- **WHEN** o usuario navega para `/fornecedores/criar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Criar Fornecedor" e o formulario completo

### Requirement: Campos do formulario de criacao

O formulario de criacao DEVE conter os seguintes campos, cada um usando o input adequado do Ant Design:

- Nome (input de texto, obrigatorio)
- CNPJ (input de texto, obrigatorio)
- Telefone (input de texto, obrigatorio)
- Email (input de email com validacao de formato, obrigatorio)

#### Scenario: Usuario visualiza todos os campos do formulario de criacao

- **WHEN** a pagina de criacao de fornecedor e carregada
- **THEN** todos os 4 campos sao renderizados com seus respectivos labels e placeholders

#### Scenario: Campos obrigatorios sao validados

- **WHEN** o usuario submete o formulario com campos obrigatorios vazios
- **THEN** o sistema exibe mensagens de erro indicando quais campos precisam ser preenchidos

#### Scenario: Email invalido e rejeitado

- **WHEN** o usuario digita um email com formato invalido e submete o formulario
- **THEN** o sistema exibe mensagem de erro no campo Email indicando que o formato e invalido

### Requirement: Submissao mock do formulario de criacao

Ao submeter o formulario de criacao, o sistema DEVE simular o cadastro exibindo mensagem de sucesso e redirecionando o usuario.

#### Scenario: Fornecedor cadastrado com sucesso (mock)

- **WHEN** o usuario preenche todos os campos obrigatorios e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Fornecedor cadastrado com sucesso!" e redireciona para `/fornecedores/listar`

#### Scenario: Botao de cancelar

- **WHEN** o usuario clica no botao "Cancelar"
- **THEN** o sistema redireciona para a pagina `/fornecedores/listar` sem salvar os dados

### Requirement: Pagina de edicao de fornecedor

O sistema DEVE renderizar uma pagina em `/fornecedores/editar` contendo um formulario pre-preenchido com dados mock para edicao de um fornecedor.

#### Scenario: Usuario acessa a pagina de edicao de fornecedor

- **WHEN** o usuario navega para `/fornecedores/editar`
- **THEN** o sistema exibe um Card contendo o titulo "Editar Fornecedor" e o formulario com os campos pre-preenchidos

### Requirement: Campos do formulario de edicao

O formulario de edicao DEVE conter os mesmos campos do formulario de criacao (Nome, CNPJ, Telefone, Email), pre-preenchidos com dados mock.

#### Scenario: Campos pre-preenchidos com dados mock

- **WHEN** a pagina de edicao e carregada
- **THEN** os campos Nome, CNPJ, Telefone e Email sao exibidos pre-preenchidos com os dados mock do fornecedor

#### Scenario: Submissao do formulario de edicao

- **WHEN** o usuario altera os campos e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Fornecedor atualizado com sucesso!" e redireciona para `/fornecedores/listar`

### Requirement: Redirecionamento da raiz de fornecedores

A pagina `/fornecedores` DEVE redirecionar automaticamente para `/fornecedores/listar`.

#### Scenario: Usuario acessa a raiz do modulo de fornecedores

- **WHEN** o usuario navega para `/fornecedores`
- **THEN** o sistema redireciona automaticamente para `/fornecedores/listar`
