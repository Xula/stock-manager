## Purpose

Define a tela de cadastro de novo produto — formulario com campos de texto, selects mock e upload de imagens, acessivel via sidebar.

## Requirements

### Requirement: Pagina de formulario de cadastro de produto

O sistema DEVE renderizar uma pagina em `/produtos/criar` contendo um formulario para cadastro de novo produto com todos os campos especificados.

#### Scenario: Usuario acessa a pagina de criacao de produto

- **WHEN** o usuario navega para `/produtos/criar` via sidebar ou URL direta
- **THEN** o sistema exibe um Card contendo o titulo "Criar Produto" e o formulario completo

### Requirement: Campos do formulario

O formulario DEVE conter os seguintes campos:

- Nome do Produto (input de texto, obrigatorio)
- Codigo de Barras / QR Code (upload de imagem)
- Descricao do Produto (textarea, opcional)
- Categoria (select com opcoes mock hardcoded, obrigatorio)
- Marca (select com opcoes mock hardcoded, obrigatorio)
- Unidade de Medida (select com opcoes mock hardcoded, obrigatorio)
- Imagem do Produto (upload de imagem, opcional)

#### Scenario: Usuario visualiza todos os campos do formulario

- **WHEN** a pagina de criacao de produto e carregada
- **THEN** todos os 7 campos sao renderizados com seus respectivos labels e placeholders

#### Scenario: Campos obrigatorios sao validados

- **WHEN** o usuario submete o formulario com campos obrigatorios vazios
- **THEN** o sistema exibe mensagens de erro indicando quais campos precisam ser preenchidos

### Requirement: Selects com dados mock

Os selects de Categoria, Marca e Unidade de Medida DEVEM usar arrays hardcoded definidos como constantes no componente.

#### Scenario: Opcoes dos selects disponiveis imediatamente

- **WHEN** a pagina e montada
- **THEN** os selects de Categoria, Marca e Unidade de Medida exibem suas opcoes mock sem loading

#### Scenario: Select de Categoria exibe opcoes mock

- **WHEN** o usuario abre o select de Categoria
- **THEN** o select exibe opcoes como "Eletronicos", "Vestuario", "Alimentos", "Bebidas", "Limpeza"

#### Scenario: Select de Marca exibe opcoes mock

- **WHEN** o usuario abre o select de Marca
- **THEN** o select exibe opcoes como "Samsung", "Nike", "Nestle", "Unilever", "Generica"

#### Scenario: Select de Unidade de Medida exibe opcoes mock

- **WHEN** o usuario abre o select de Unidade de Medida
- **THEN** o select exibe opcoes como "Unidade (UN)", "Quilograma (KG)", "Litro (L)", "Metro (M)", "Caixa (CX)"

### Requirement: Upload de imagens

Os campos de upload de imagem (Codigo de Barras/QR Code e Imagem do Produto) DEVEM usar o componente Upload do Ant Design com preview local.

#### Scenario: Usuario faz upload de uma imagem

- **WHEN** o usuario seleciona um arquivo de imagem no campo de upload
- **THEN** a imagem e exibida como preview (thumbnail) no componente de upload usando base64

#### Scenario: Upload aceita apenas formatos de imagem

- **WHEN** o usuario tenta fazer upload de um arquivo nao-imagem
- **THEN** o sistema rejeita o arquivo e mostra uma mensagem de erro

### Requirement: Submissao mock do formulario

Ao submeter o formulario, o sistema DEVE simular o cadastro exibindo mensagem de sucesso e redirecionando o usuario.

#### Scenario: Produto cadastrado com sucesso (mock)

- **WHEN** o usuario preenche todos os campos obrigatorios e clica em "Salvar"
- **THEN** o sistema exibe mensagem de sucesso "Produto cadastrado com sucesso!" e redireciona para `/produtos`

#### Scenario: Botao de cancelar

- **WHEN** o usuario clica no botao "Cancelar"
- **THEN** o sistema redireciona para a pagina `/produtos` sem salvar os dados
