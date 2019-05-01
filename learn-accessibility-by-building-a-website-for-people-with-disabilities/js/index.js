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
// https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast

const WCAG_MIN_CONTRAST_RATIOS = {
  AA: {
    normal: 4.5,
    large: 3
  },
  AAA: {
    normal: 7,
    large: 4.5
  }
};

const hasAlpha = color => {
  return color[3] === 'a' && parseFloat(color.match(/([0-9.]+)\)/)[1], 10) < 0.99;
};

const getRgbArr = (htmlEl, cssProp) => {
  const color = getComputedStyle(htmlEl)[cssProp];

  if (hasAlpha(color)) throw new Error('Color must not have alpha.');

  return color
    .match(/\d+/g)
    .slice(0, 3)
    .map(el => parseInt(el, 10));
};

const getRelativeLuminance = rgbArr => {
  const sRGB = rgbArr.map(color => color/255);
  const vals = [];

  sRGB.forEach(color => {
    vals.push(
      color <= 0.03928
      ? color / 12.92
      : ((color + 0.055) / 1.055) ** 2.4
    );
  });

  return 0.2126 * vals[0] + 0.7152 * vals[1] + 0.0722 * vals[2];
}

const getContrastRatio = (rgbArr1, rgbArr2) => {
  const l1 = getRelativeLuminance(rgbArr1);
  const l2 = getRelativeLuminance(rgbArr2);

  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const isLargeFont = (htmlEl) => {
  // https://www.w3.org/TR/WCAG20/#larger-scaledef

  // based on rough equivalence between pixels, which is the val returned from
  // `getComputedStyle`, and pt, which is specified in the WCAG guidelines
  const EIGHTEEN_PT = 24; // px
  const FOURTEEN_PT = 18.6667; // px

  const size = parseInt(getComputedStyle(htmlEl).fontSize, 10);
  // console.log('size', size)
  const isBold = parseInt(getComputedStyle(htmlEl).fontWeight) >= 700;
  // console.log('isBold', isBold)

  return (size >= EIGHTEEN_PT) || (isBold && size >= FOURTEEN_PT);
};

const isWcagCompliant = (wcagLevel, bgEl, fgEl) => {
  // console.log('bgEl', bgEl);
  // console.log('fgEl', fgEl);

  const bgRgb = getRgbArr(bgEl, 'backgroundColor');
  const fgRgb = getRgbArr(fgEl, 'color');

  // console.log('bgRgb', bgRgb);
  // console.log('fgRgb', fgRgb);

  const size = isLargeFont(fgEl) ? 'large' : 'normal';

  // console.log('size', size);

  const contrastRatio = getContrastRatio(bgRgb, fgRgb);
  // console.log('contrastRatio', contrastRatio);
  // console.log('WCAG_MIN_CONTRAST_RATIOS[wcagLevel][size]', WCAG_MIN_CONTRAST_RATIOS[wcagLevel][size]);

  return contrastRatio >= WCAG_MIN_CONTRAST_RATIOS[wcagLevel][size];
};

const checkContrasts = () => {
  [
    ['.top-bar', '.top-bar a'],
    ['.secondary-nav', '.secondary-nav a'],
    ['.secondary-nav', '.secondary-nav-heading']
  ].forEach(([bgEl, fgEl]) => {
    const els = (`Background: \`${bgEl}\`;\nForeground: \`${fgEl}\``);
    if (isWcagCompliant('AAA', document.querySelector(bgEl), document.querySelector(fgEl))) {
      console.log(`%c${els}\n\nContrast compliant with WCAG AAA`, 'color: #060;');
    } else {
      console.error(`${els}\n\nContrast not compliant with WCAG AAA`);
    }
  });
};

