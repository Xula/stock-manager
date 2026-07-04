## ADDED Requirements

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
