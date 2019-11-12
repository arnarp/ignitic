# Ignitic

A React UI toolkit

## Changelog

### 0.22

- Fix tooltip
- Font sizes moved to css variables
- Minor color changes

## Publish

Run

```bash
npm run version:{x}
npm run build
npm publish
```

## Breaking changes from 0.19 to 0.20

### Changed css variables

--background-default -> --background-color
--paper-background -> --paper-surface-color

### New css variables

--neutral-light-on-background-color: #dcdcdc;
--neutral-very-light-on-background-color: #F5F5F5;

--spacer: 0.5rem;
--space-sm: calc(var(--spacer) _ 1);
--space-md: calc(var(--spacer) _ 2);
--space-lg: calc(var(--spacer) _ 3);
--space-xl: calc(var(--spacer) _ 4);

### gone

--neutral-color
--neutral-on-background-color-light
