# Specification

## Summary
**Goal:** Add a clearly visible “Home” navigation option that returns users to the start of the guided chat experience and orients them back at the top of the page without reloading or adding routes.

**Planned changes:**
- Add a navigation/menu area (or extend the existing one) to include an option labeled exactly “Home”.
- Implement the “Home” action to reset the guided flow back to the initial welcome step (equivalent to start over) without a page reload or new routes.
- On “Home” click/activation, scroll the main view back to the top of the app (hero/header/top of content) for orientation.
- Ensure the “Home” control is keyboard accessible and uses appropriate accessible semantics/labeling (e.g., button or link).

**User-visible outcome:** Users can select “Home” at any time to restart the guided experience at the welcome step and be returned to the top of the page in the same single-page flow.
