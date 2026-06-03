## ADDED Requirements

### Requirement: Home page uses Ant Design components

The home page MUST use Ant Design components (Card and Typography) for its content layout, matching the visual language of the system's Ant Design-based sidebar and layout. The page SHALL NOT rely solely on raw Tailwind utility classes for its primary content structure.

#### Scenario: Home page renders with Ant Design styling

- **WHEN** the user accesses the home page (`/`)
- **THEN** the welcome content is rendered inside an Ant Design `Card` component using `Typography.Title` for the heading and `Typography.Paragraph` for the subtitle

### Requirement: Home page content is vertically centered

The home page content SHALL be vertically and horizontally centered within the available content area. The implementation MUST use valid CSS centering (flex on the content wrapper) rather than `flex-1` on a child element whose parent is not a flex container.

#### Scenario: Content is centered on viewport

- **WHEN** the user views the home page on a screen of any size
- **THEN** the welcome Card is visually centered both vertically and horizontally within the content area
