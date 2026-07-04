## Purpose

TBD

## Requirements

### Requirement: Página de criar unidade de medida

O sistema DEVE disponibilizar uma página na rota `/unidades-de-medida/criar` com um formulário para cadastro de nova unidade de medida.

#### Scenario: Usuário acessa a página de criar

- **WHEN** o usuário clica em "Criar Unidade de Medida" no menu lateral
- **THEN** o sistema navega para `/unidades-de-medida/criar` exibindo um formulário com campo de texto "Nome" e botão "Salvar"

#### Scenario: Usuário preenche e salva uma nova unidade

- **WHEN** o usuário preenche o campo "Nome" com um valor e clica em "Salvar"
- **THEN** o sistema exibe uma mensagem de sucesso e redireciona para `/unidades-de-medida`

#### Scenario: Usuário tenta salvar com campo vazio

- **WHEN** o usuário clica em "Salvar" sem preencher o campo "Nome"
- **THEN** o sistema exibe uma mensagem de validação informando que o campo é obrigatório

#### Scenario: Usuário cancela a criação

- **WHEN** o usuário clica no botão "Cancelar" na página de criar
- **THEN** o sistema redireciona para `/unidades-de-medida`

### Requirement: Página de editar unidade de medida

O sistema DEVE disponibilizar uma página na rota `/unidades-de-medida/editar` com um formulário para edição de unidade de medida existente.

#### Scenario: Usuário acessa a página de editar

- **WHEN** o usuário clica em "Editar Unidade de Medida" no menu lateral
- **THEN** o sistema navega para `/unidades-de-medida/editar` exibindo um formulário com campo de texto "Nome" pré-preenchido e botão "Salvar"

#### Scenario: Usuário edita e salva

- **WHEN** o usuário altera o valor do campo "Nome" e clica em "Salvar"
- **THEN** o sistema exibe uma mensagem de sucesso e redireciona para `/unidades-de-medida`

#### Scenario: Usuário cancela a edição

- **WHEN** o usuário clica no botão "Cancelar" na página de editar
- **THEN** o sistema redireciona para `/unidades-de-medida`

### Requirement: Pagina de listagem de unidades de medida

O sistema DEVE renderizar uma pagina em `/unidades-de-medida/listar` contendo uma tabela com todas as unidades de medida cadastradas.

#### Scenario: Usuario acessa a pagina de listagem

- **WHEN** o usuario navega para `/unidades-de-medida/listar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card com titulo "Listar Unidades de Medida" e uma tabela listando as unidades de medida

### Requirement: Tabela de unidades de medida

A tabela DEVE usar o componente `Table` do Ant Design com colunas para Nome e Acoes.

#### Scenario: Tabela exibe colunas corretas

- **WHEN** a pagina de listagem e carregada
- **THEN** a tabela exibe colunas com cabecalhos: "Nome" e "Acoes"

#### Scenario: Tabela exibe dados mock

- **WHEN** a pagina de listagem e carregada
- **THEN** a tabela exibe pelo menos 5 unidades de medida com nomes variados

### Requirement: Botao Editar na tabela

Cada linha da tabela DEVE conter um botao "Editar" na coluna Acoes que redireciona para a pagina de edicao de unidade de medida.

#### Scenario: Usuario clica em Editar

- **WHEN** o usuario clica no botao "Editar" em uma linha da tabela
- **THEN** o sistema navega para a rota `/unidades-de-medida/editar`

### Requirement: Botao Excluir com modal de confirmacao

Cada linha da tabela DEVE conter um botao "Excluir" na coluna Acoes. Ao clicar, o sistema DEVE exibir um modal de confirmacao usando `Modal.confirm` do Ant Design.

#### Scenario: Usuario clica em Excluir e cancela

- **WHEN** o usuario clica no botao "Excluir" em uma linha da tabela e clica em "Cancelar" no modal
- **THEN** o modal fecha sem alteracoes

#### Scenario: Usuario clica em Excluir e confirma

- **WHEN** o usuario clica no botao "Excluir" em uma linha da tabela e clica em "OK" no modal
- **THEN** o sistema exibe uma mensagem de sucesso "Unidade de medida excluida com sucesso!"

### Requirement: Item no menu lateral

O submenu "Unidades de Medida" do sidebar DEVE conter um item "Listar Unidades de Medida" que navega para `/unidades-de-medida/listar`.

#### Scenario: Usuario clica no item de listagem no menu

- **WHEN** o usuario clica em "Listar Unidades de Medida" no menu lateral
- **THEN** o sistema navega para `/unidades-de-medida/listar`

### Requirement: Redirecionamento da pagina raiz

A pagina `/unidades-de-medida` DEVE redirecionar automaticamente para `/unidades-de-medida/listar`.

#### Scenario: Usuario acessa a raiz do modulo

- **WHEN** o usuario navega para `/unidades-de-medida`
- **THEN** o sistema redireciona para `/unidades-de-medida/listar`

### Requirement: Dados mock inline

Os dados da tabela DEVEM ser definidos como um array de objetos hardcoded no componente, sem chamadas a API.

#### Scenario: Dados carregados instantaneamente

- **WHEN** a pagina e montada
- **THEN** a tabela exibe os dados imediatamente, sem indicador de loading
