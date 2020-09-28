// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from 'react';
import RootWrapper from './src/components/rootwrapper'

export const wrapPageElement = ({element, props}) => (
<RootWrapper {...props}>{element}</RootWrapper>
)