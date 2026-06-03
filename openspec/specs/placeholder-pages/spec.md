## Requirements

### Requirement: Placeholder page for each module

The system SHALL render a placeholder page for each module route listed in the sidebar menu. Each placeholder page MUST display the module name prominently and match the visual style of the system layout.

#### Scenario: User navigates to a module route

- **WHEN** the user clicks a sidebar menu item (e.g., "Produtos")
- **THEN** the system navigates to the corresponding route (e.g., `/produtos`) and renders a placeholder page displaying the module name "Produtos" with Ant Design Card and Typography components

#### Scenario: Placeholder page visual consistency

- **WHEN** any placeholder page is rendered
- **THEN** the page uses the same Ant Design component layout (Card container with Typography.Title and Typography.Paragraph) present in the home page, maintaining consistent visual design across all pages

### Requirement: All menu routes resolve to a valid page

The system SHALL provide a valid page component file for each of the 11 module routes defined in `lib/menu-items.ts`.

#### Scenario: No 404 for sidebar routes

- **WHEN** the user navigates to any route listed in the sidebar menu
- **THEN** the system renders a placeholder page instead of a 404 error page

#### Scenario: Sidebar navigation works after multiple navigations

- **WHEN** the user navigates between multiple module routes using the sidebar
- **THEN** the router responds correctly to each click and the URL updates to the target route
