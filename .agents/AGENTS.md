# Architecture & Component Guidelines

## Micro-folder Structure & UI Component Reusability Rules
- **UI Components Location**: ALL reusable UI primitive components (such as buttons, cards, badges, inputs, dialogs, tags, etc.) MUST be placed inside `src/components/ui/` (e.g. `src/components/ui/button.tsx`, `src/components/ui/card.tsx`).
- **No Inline Duplication**: NEVER write ad-hoc or duplicate inline styled buttons/inputs/cards inside page components or sections. Always create modular, reusable components.
- **Check Existing Primitives First**: Before implementing any page, section, or feature, agents MUST check `src/components/ui/` to re-use existing UI primitives. If a required UI primitive does not exist or requires missing variations, create or extend the reusable component in `src/components/ui/`.
- **Component Design Standard**: UI components in `src/components/ui/` must accept standard HTML props, support modular variants (e.g., `variant`, `size`), allow passing custom `className` via standard class merging, and follow modular micro-folder design principles.
- **Import Alias**: Always import components using the alias `@/components/ui/...`.
