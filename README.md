# Autocomplete Demo

Tried to make the component accessible by following the guidelines mentioned here:

[Combo Box](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox)

[Combo Box Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html)

Demo Link: https://autocomplete-demo.vercel.app/

## Component Usage

```tsx
<AutoComplete
  value={data]}
  onChange={(newValue) => console.log(newValue)}
  options={data}
  getLabel={(item) => item.name}
  getValue={(item) => item.name}
  resetOnSelect
/>
```

## Local Dev

1. Clone/Fork repo
2. `yarn install` to add NPM packages
3. `yarn dev` to run dev server

## Run tests in Dev

1. Run `yarn cypress`
2. Modify tests in `cypress/integration` folder

## Todo

1. Improve accessibility
2. Make component reusable
3. Add more tests
