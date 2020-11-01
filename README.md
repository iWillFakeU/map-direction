Scripted By Jsantos

```javascript
// ==UserScript==
// @name          Map Direction
// @description   Windguru helper
// @license       MIT
// @version       0.0.1
// @include       https://www*windguru.*
// @grant none
// ==/UserScript==

// ==OpenUserJS==
// @author JSantos
// ==/OpenUserJS==


(() => {
  console.log('Starting...')

  console.log('Adding listener to page...')

  window.addEventListener('load', (event) => {
    console.log('All page elements were loaded')

    //script goes here

    MapDirection.render()
  })
})()```