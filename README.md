# styled-motif

Utility function for manipulating styled-component colors

Manipulating colors within styled-components can be messy. This was created to make it a bit easier.

You can either access theme properties by path, or by a selector function. The selector function is passed the theme object with all values wrapped by the color library, allowing for easy manipulation.

## Installation

Install styled-motif via npm or yarn:

    npm install --save styled-motif
    //alternatively
    yarn add styled-motif

## Usage

First, create a styled component. Import styled-motif:

    import motif from 'styled-motif';

Then, within the style, either use styled-motif with a theme path:

    color: ${motif('color')}

Or, if manipulating the colors is required, use a selector function. The selector function is passed the theme object, with all values wrapped with the color library. This allows you to easily manipulate the final color passed into the style, cleanly.

    background-color: ${motif(
      (theme) => (theme.backgroundColor.darken(0.2).hex())
    )};

Please note, any theme values that aren't recognized by the color library will be passed as-is.
