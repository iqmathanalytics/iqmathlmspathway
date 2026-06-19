---
name: design-system-coddy
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Coddy

## Mission
Deliver implementation-ready design-system guidance for Coddy that can be applied consistently across dashboard web app interfaces.

## Brand
- Product/brand: Coddy
- URL: https://coddy.tech/journeys/python/fundamentals
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Varela Round`, `font.family.stack=Varela Round, Noto Sans Arabic, -apple-system, BlinkMacSystemFont, Segoe UI, Ubuntu, DejaVu Sans, Helvetica, Arial, sans-serif`, `font.size.base=20px`, `font.weight.base=700`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=12px`, `font.size.sm=13.33px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`
- Color palette: `color.text.primary=#ffffff`, `color.text.secondary=#29abe2`, `color.text.tertiary=#aaaaaa`, `color.text.inverse=#fcad00`, `color.surface.base=#000000`, `color.surface.muted=#1b78a0`, `color.surface.raised=#2d2e2f`, `color.surface.strong=#252627`
- Spacing scale: `space.1=2px`, `space.2=6px`, `space.3=8px`, `space.4=12px`, `space.5=16px`, `space.6=40px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=8px`, `radius.md=12px` | `shadow.1=rgb(73, 77, 80) 0px 3px 0px 0px`, `shadow.2=rgb(38, 77, 115) 0px 4px 0px 0px`, `shadow.3=rgb(73, 77, 80) 0px 1px 0px 0px`, `shadow.4=rgb(115, 73, 38) 0px 4px 0px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
