## ADDED Requirements

### Requirement: Pagina de listagem de clientes

O sistema DEVE renderizar uma pagina em `/clientes/listar` contendo uma tabela (Table do Ant Design) com os clientes cadastrados, utilizando dados mock.

#### Scenario: Usuario acessa a pagina de listagem de clientes

- **WHEN** o usuario navega para `/clientes/listar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Clientes" e uma tabela com todos os clientes mock

#### Scenario: Tabela exibe as colunas corretas

- **WHEN** a pagina de listagem de clientes e carregada
- **THEN** a tabela exibe as colunas: Nome, CPF/CNPJ, Email, Telefone, Acoes

### Requirement: Botao de editar na tabela

A coluna Acoes da tabela DEVE conter um botao "Editar" que redireciona o usuario para a pagina de edicao do cliente correspondente.

#### Scenario: Usuario clica em editar

- **WHEN** o usuario clica no botao "Editar" em uma linha da tabela
- **THEN** o sistema navega para `/clientes/editar` com os dados do cliente selecionado

### Requirement: Botao de remover na tabela

A coluna Acoes da tabela DEVE conter um botao "Remover" que abre um modal de confirmacao com os dados do cliente.

#### Scenario: Usuario clica em remover

- **WHEN** o usuario clica no botao "Remover" em uma linha da tabela
- **THEN** o sistema exibe um Modal com os dados do cliente (Nome, CPF/CNPJ, Email, Telefone) e um botao "Confirmar"

#### Scenario: Usuario confirma a remocao

- **WHEN** o usuario clica em "Confirmar" no modal de remocao
- **THEN** o sistema exibe mensagem de sucesso "Cliente removido com sucesso!" e o cliente e removido da tabela

#### Scenario: Usuario cancela a remocao

- **WHEN** o usuario clica em "Cancelar" no modal de remocao
- **THEN** o modal e fechado e nenhum cliente e removido da tabela

### Requirement: Pagina de criacao de cliente

O sistema DEVE renderizar uma pagina em `/clientes/criar` contendo um formulario para cadastrar um novo cliente.

#### Scenario: Usuario acessa a pagina de criacao de cliente

- **WHEN** o usuario navega para `/clientes/criar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Criar Cliente" e o formulario completo

### Requirement: Campos do formulario de criacao

O formulario de criacao DEVE conter os seguintes campos, cada um usando o input adequado do Ant Design:

- Nome (input de texto, obrigatorio)
- CPF/CNPJ (input de texto, obrigatorio)
- Email (input de email com validacao de formato, obrigatorio)
- Telefone (input de texto, obrigatorio)

#### Scenario: Usuario visualiza todos os campos do formulario de criacao

- **WHEN** a pagina de criacao de cliente e carregada
- **THEN** todos os 4 campos sao renderizados com seus respectivos labels e placeholders

#### Scenario: Campos obrigatorios sao validados

- **WHEN** o usuario submete o formulario com campos obrigatorios vazios
- **THEN** o sistema exibe mensagens de erro indicando quais campos precisam ser preenchidos

#### Scenario: Email invalido e rejeitado

- **WHEN** o usuario digita um email com formato invalido e submete o formulario
- **THEN** o sistema exibe mensagem de erro no campo Email indicando que o formato e invalido

### Requirement: Submissao mock do formulario de criacao

Ao submeter o formulario de criacao, o sistema DEVE simular o cadastro exibindo mensagem de sucesso e redirecionando o usuario.

#### Scenario: Cliente cadastrado com sucesso (mock)

- **WHEN** o usuario preenche todos os campos obrigatorios e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Cliente cadastrado com sucesso!" e redireciona para `/clientes/listar`

#### Scenario: Botao de cancelar

- **WHEN** o usuario clica no botao "Cancelar"
- **THEN** o sistema redireciona para a pagina `/clientes/listar` sem salvar os dados

### Requirement: Pagina de edicao de cliente

O sistema DEVE renderizar uma pagina em `/clientes/editar` contendo um formulario pre-preenchido com dados mock para edicao de um cliente.

#### Scenario: Usuario acessa a pagina de edicao de cliente

- **WHEN** o usuario navega para `/clientes/editar`
- **THEN** o sistema exibe um Card contendo o titulo "Editar Cliente" e o formulario com os campos pre-preenchidos

### Requirement: Campos do formulario de edicao

O formulario de edicao DEVE conter os mesmos campos do formulario de criacao (Nome, CPF/CNPJ, Email, Telefone), pre-preenchidos com dados mock.

#### Scenario: Campos pre-preenchidos com dados mock

- **WHEN** a pagina de edicao e carregada
- **THEN** os campos Nome, CPF/CNPJ, Email e Telefone sao exibidos pre-preenchidos com os dados mock do cliente

#### Scenario: Submissao do formulario de edicao

- **WHEN** o usuario altera os campos e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Cliente atualizado com sucesso!" e redireciona para `/clientes/listar`

### Requirement: Redirecionamento da raiz de clientes

A pagina `/clientes` DEVE redirecionar automaticamente para `/clientes/listar`.

#### Scenario: Usuario acessa a raiz do modulo de clientes

- **WHEN** o usuario navega para `/clientes`
- **THEN** o sistema redireciona automaticamente para `/clientes/listar`
