## Why

O sistema não possui um cabeçalho (header) global. A identidade visual do sistema fica restrita à sidebar, e não há área visível para botões de ação global como notificações, configurações ou perfil de usuário.

## What Changes

- Criar componente `Header` usando Ant Design `Layout.Header` com tema escuro consistente com a sidebar
- Exibir título "Stock Manager" alinhado à esquerda
- Exibir dois botões genéricos alinhados à direita (NotificationOutlined e SettingOutlined)
- Integrar o header no `AppLayout` entre a sidebar e o conteúdo, usando Layout aninhado

## Capabilities

### New Capabilities

- `page-header`: Cabeçalho global exibido em todas as páginas do sistema com o título "Stock Manager" à esquerda e dois botões de ação à direita.

### Modified Capabilities

<!-- None -->

## Impact

- Affected code: `components/AppLayout.tsx`, novo arquivo `components/Header.tsx`
- Dependencies: antd `@ant-design/icons` (NotificationOutlined, SettingOutlined)
- Breaking: None
