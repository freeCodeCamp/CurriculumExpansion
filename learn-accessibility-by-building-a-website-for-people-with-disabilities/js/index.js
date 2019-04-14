/*
Items to refactor:

* dates => html5 time el
* click here => meaningful text
* fix hamburger (aria-label "Menu" and aria-hidden for trigram)
* add lang attr to html element
* increase contrast to conform to at least [WCAG](https://www.w3.org/TR/WCAG20/) AA
* .top-bar => header
* .top-nav, .left-nav => nav
* .main-content => main
* add skip nav link
* .image - add meaningful alt
* .divider - add empty alt
* .form => form
* placeholder => add a label for
* all .field-label => label for
* .radio-group => fieldset with legend
* .btn => button type=submit
* outline on focus

*/


// for testing color contrast

const hasAlpha = color => {
  return color[3] === 'a' && parseFloat(color.match(/([0-9.]+)\)/)[1], 10) < 0.99;
}

const toHex = color => {
  return '#' + color
    .match(/\d+/g)
    .slice(0, 3) // discard alpha if actually rgba
    .map(el => parseInt(el, 10).toString(16).padStart(2, '0'))
    .join('');
};
