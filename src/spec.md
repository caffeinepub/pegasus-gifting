# Specification

## Summary
**Goal:** Show a proper image for the “Combo Gift Sets” card in the Curated Gift Categories section instead of the SafeImage fallback UI.

**Planned changes:**
- Add/ensure the static asset exists at `frontend/public/assets/generated/category-combo-gift-sets.dim_800x600.png`.
- Ensure the “Combo Gift Sets” curated category card loads the image via the existing `getCategoryImagePath('combo-gift-sets')` path so the SafeImage fallback container/SVG does not render for that card.
- Limit any code changes strictly to the selected card image area/fallback elements within the Curated Gift Categories section; do not modify other cards/sections.

**User-visible outcome:** On the homepage, the “Combo Gift Sets” card in the Curated Gift Categories grid displays its category image (no fallback UI shown for that card).
