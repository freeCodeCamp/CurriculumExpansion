const { assert } = require('chai');

// The main function that returns the array of steps for the challenge
exports.create = () => [
  // STEP 1: Setting up the main flex container
  {
    text: 'To begin building the navigation bar, first select the `.navbar` element in `styles.css`. This element will serve as your main flex container.',
    test: (code) => {
      assert.match(code, /\.navbar\s*\{/);
    }
  },
  // STEP 2: Make .navbar a flex container
  {
    text: 'Inside the `.navbar` selector, set the `display` property to `flex`. This makes the direct children (`.logo` and `.nav-links`) flex items.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.include(codeToTest, 'display: flex;');
      assert.match(codeToTest, /\.navbar\s*\{\s*[^}]*display:\s*flex;/);
    }
  },
  // STEP 3: Distribute space horizontally
  {
    text: 'Next, use the `justify-content` property to distribute the space between the flex items. Set it to `space-between` so the logo is on one side and the links are on the other.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.include(codeToTest, 'justify-content: space-between;');
      assert.match(codeToTest, /\.navbar\s*\{\s*[^}]*justify-content:\s*space-between;/);
    }
  },
  // STEP 4: Align items vertically
  {
    text: 'The logo and links are not vertically centered. Add the `align-items` property to the `.navbar` selector and set it to `center` to vertically align the items in the center of the cross axis.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.include(codeToTest, 'align-items: center;');
      assert.match(codeToTest, /\.navbar\s*\{\s*[^}]*align-items:\s*center;/);
    }
  },
  // STEP 5: Target the navigation list
  {
    text: 'Now, focus on arranging the individual links. Select the `ul` element inside `.nav-links`.',
    test: (code) => {
      assert.match(code, /\.nav-links\s*ul\s*\{/);
    }
  },
  // STEP 6: Make the list horizontally stacked
  {
    text: 'Set the `display` property of the `.nav-links ul` selector to `flex` to arrange the list items (`li`) horizontally.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.include(codeToTest, '.nav-links ul { display: flex;');
      assert.match(codeToTest, /\.nav-links\s*ul\s*\{\s*[^}]*display:\s*flex;/);
    }
  },
  // STEP 7: Add a small gap between the list items
  {
    text: 'To separate the links slightly, use the `gap` property and set it to `5px` on the `.nav-links ul` selector.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.include(codeToTest, 'gap: 5px;');
      assert.match(codeToTest, /\.nav-links\s*ul\s*\{\s*[^}]*gap:\s*5px;/);
    }
  },
  // STEP 8: Introducing responsiveness via media query
  {
    text: 'The navigation bar looks good on desktop, but on small screens, the items can get squished. Create a media query that targets screens with a maximum width of $600px$ (e.g., `@media (max-width: 600px) { ... }`).',
    test: (code) => {
      assert.match(code, /@media\s*\(max-width:\s*600px\)/);
    }
  },
  // STEP 9: Change flex direction for mobile
  {
    text: 'Inside the media query, select the `.navbar` element. Change its layout direction for mobile by setting `flex-direction` to `column`.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*\.navbar\s*\{\s*flex-direction:\s*column;/);
    }
  },
  // STEP 10: Center items when stacked
  {
    text: 'When `flex-direction` is `column`, `justify-content` now handles vertical alignment. Change the `justify-content` property within the media query to `center` to center the items vertically when they are stacked.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*\.navbar\s*\{\s*[^}]*justify-content:\s*center;/);
    }
  },
  // STEP 11: Add margin to separate logo and links
  {
    text: 'Since the items are now stacked, the logo and links touch. Add a bottom margin of `15px` to the `.logo` selector inside the media query to create separation.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*[^}]*\.logo\s*\{\s*margin-bottom:\s*15px;/);
    }
  },
  // STEP 12: Make the navigation links take full width
  {
    text: 'For mobile usability, the links should span the full width of the container. Inside the media query, select `.nav-links` and set its `width` to `100%`.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*[^}]*\.nav-links\s*\{\s*width:\s*100%;/);
    }
  },
  // STEP 13: Allow links to wrap on small screens
  {
    text: 'Even with `width: 100%`, the links inside the `ul` might overflow if they don\'t fit. Inside the media query, set `flex-wrap: wrap;` on the `.nav-links ul` selector to allow items to wrap to the next line.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*[^}]*\.nav-links\s*ul\s*\{\s*flex-wrap:\s*wrap;/);
    }
  },
  // STEP 14: Final link style adjustment for mobile
  {
    text: 'Finally, inside the media query, target the `.nav-links li` elements and set their `width` to `50%` so they display two links per row.',
    test: (code, __editor) => {
      const codeToTest = __editor.getFileContent('styles.css');
      assert.match(codeToTest, /@media\s*\(max-width:\s*600px\)\s*\{\s*[^}]*\.nav-links\s*li\s*\{\s*width:\s*50%;/);
    }
  },
  // STEP 15: Congratulations
  {
    text: 'Congratulations! You have successfully built a responsive navigation bar using Flexbox, demonstrating strong knowledge of `display: flex`, `justify-content`, `align-items`, and `flex-direction`.',
    test: () => {
      assert.isTrue(true);
    }
  }
];
