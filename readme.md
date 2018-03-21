# HEML Mauthic Themes

Build tool for creating a email themes for [Mautic](https://www.mautic.org/)
based on [HEML](https://heml.io/). 

### Getting started

1. Create package.json and set your theme name. 
Use `name`, `author`, `url` and `features` to specify theme configs. Install by running `npm install`. 

2. Create `./src/email.hml` and run `npm run dev` 
and begin building you new responsive email theme for Mautic with the power of HEML.

3. All done? Build your new shiny theme! Run `npm run build` and your new 
Mautic Theme will be built to `./dist` folder.


### Sample package.json
```
{
  "name": "my-theme",  
  "scripts": {
    "build": "hemath",
    "dev": "heml develop src/email.heml --open"
  },
  "author": "",
  "dependencies": {
    "hemath": "^0.1.0"
  },
  "features": [
    "email"
  ]
}
```

### Mautic Sections

For ease the heml element `<container />` will contain a mautic section when building.
If a custom section is needed the element `<section />` can be used.

### Mautic Slots

Buttons, images, and typographic elements will be rendered with a slot container followed by a slot when
building. If custom slots and/or slot container is needed use `<slot>` and `<slotcontainer>`.

### Aligning in columns

HEML is not handling align and actually it's harcoded to left. Which causes some headache with Outlook.
Since it's not possible to override allowed attributes on the Column element we have added `<Col />` that supports `align`.
  