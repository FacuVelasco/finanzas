# Proyecto finanzas

## Setup

1. Clone this repository 
2. `npm install`
3. `npm run build`
4. `sudo npm start` // to run on port 80

## Develop

- `npm run build:w` to watch changes

#### Dependencies

The proyect use:

- React and MaterialUI for component structure and ui
- Styled Components for extra-styles
- React Router for navigation (not much really)
- React Icons for... icons
- Victory for chars

#### Folders

`src` folder has all the component and containers from the app.
Also has a file `data.js` with the info for the tables.

Each component it's on their own. As it was a small proyect it doesnt have a folder with the component, test, and styles for each one. But now have grown to the point that that became an issue so the styles are not great to work with.

`containers/SimulationTool.jsx` is the main container with all the calculations. The **calculate** function and probably some others should be put apart, but then again it was not thought for this amount of stuff at the start.

##### State managment

The proyect its at a size that could use some state managment tool such as `Redux` or `Mobx`.
