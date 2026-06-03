## Requirements

### Requirement: Global header with title on all pages

The system SHALL render a global header at the top of every page. The header MUST display the title "Stock Manager" aligned to the left.

#### Scenario: Header visible on home page

- **WHEN** the user accesses the home page (`/`)
- **THEN** the header is rendered at the top of the content area with the title "Stock Manager" on the left

#### Scenario: Header visible on any module page

- **WHEN** the user navigates to any module route (e.g., `/produtos`)
- **THEN** the header remains visible at the top of the content area with the title "Stock Manager" on the left

### Requirement: Action buttons on the header

The header SHALL display two icon buttons aligned to the right side. The buttons MUST use Ant Design icon components and be visually consistent with the header style.

#### Scenario: Buttons visible on header

- **WHEN** the header is rendered
- **THEN** two icon buttons (notification and settings) are displayed on the right side of the header

### Requirement: Header visual consistency

The header MUST use the same dark theme background color (`#001529`) as the sidebar. Text and icons in the header SHALL use light/white colors for contrast.

#### Scenario: Header matches sidebar theme

- **WHEN** the header and sidebar are rendered together
- **THEN** both elements share the same dark background color and visual style
