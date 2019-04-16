# Contributing

Hello 👋!

freeCodeCamp.org is possible, thanks to thousands of kind volunteers like you. We are grateful for your contributions and we are excited to welcome you aboard.

We strictly enforce our ["Code of Conduct".](https://code-of-conduct.freecodecamp.org/) Take a moment to read it. It's only 196 words long.

Happy contributing 🎉!

## How can I contribute?
There are many ways to contribute. Check out the [CurriculumExpansion](https://github.com/freeCodeCamp/CurriculumExpansion) repository. The projects are listed as [issues](https://github.com/freeCodeCamp/CurriculumExpansion/issues) where you can join in on the discussion about each one. Projects with a [help wanted](https://github.com/freeCodeCamp/CurriculumExpansion/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) tag are unclaimed, so leave a comment in that issue and mention @scissorsneedfoodtoo if you'd like to work on one. We'll also need help reviewing projects that have been broken down into steps and submitted as [pull requests](https://github.com/freeCodeCamp/CurriculumExpansion/pulls). 

## Will the UI change?
Yes, the goal is to move to a single column layout that resembles an actual code editor. You can read more about it in [freeCodeCamp Redesign: Command Line Chic](https://www.freecodecamp.org/forum/t/freecodecamp-redesign-command-line-chic/267917).

## I claimed an [open project](https://github.com/freeCodeCamp/CurriculumExpansion/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22). How should I build the prototype?
Use your favorite online code editor and post a link in your project's [issue](https://github.com/freeCodeCamp/CurriculumExpansion/issues) when you're finished. [CodePen](https://codepen.io/), [Glitch](https://glitch.com/), [CodeSandbox](https://codesandbox.io/), and [Repl.it](https://repl.it/) are a few popular platforms.

## Can I use Bootstrap/jQuery/Semantic-UI/some-other-framework-or-library to build my project?
No, contributors should not use any sort of framework or library while building one of the new curriculum projects. The exception is projects where it's required like "Learn React by Building Flappy Bird". Otherwise, stick to plain ol' HTML, CSS, and JavaScript. (Note that this doesn't apply to users, who are free to use whatever frameworks/libraries they want for the Front End Libraries Certification projects.)

## I’m building a project that teaches Express/Node/MongoDB/RESTful APIs. Can I use that?
We want all of this to work even when people’s browsers are offline, so we won’t have the benefit of running a server or making calls to an API. Instead, contributors should create their own return statements, error messages, and output to mock the functionality of those services. We’ll use regular expressions to test user input. That said, feel free to use these services while working on your prototype – it’ll be easier to see how your project should run.

## I finished a prototype of a project. What's next?
Start breaking it down step-by-step like [this](https://github.com/freeCodeCamp/CurriculumExpansion/pull/135/files). Since the new UI will include multiple file support, break your project down into separate HTML, CSS, and JS files. Write your test descriptions in the file around the area users will be focused on during that step. For example, if the user has to create a paragraph element with the text "Hello, World", write your description in the HTML file just above or below the line the user will write `<p>Hello, World!</p>`. Your test descriptions should be short, without a lot of explainer text. Every step will test exactly one thing, so don't worry about edge cases. When you are finished, submit a pull request to the [CurriculumExpansion](https://github.com/freeCodeCamp/CurriculumExpansion) repo.

## How will you handle my pull request?
After you break your project down into steps and submit it as a pull request, reviewers will go through the code and test descriptions in each file. If reviewers notice something that can be changed, they’ll leave a comment with some suggestions. Once your project and test descriptions look good, we’ll merge your PR!

## My pull request was merged and my project is part of the new curriculum. Is there anything else I can do?
Absolutely. Please consider working on another [unclaimed project](https://github.com/freeCodeCamp/CurriculumExpansion/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) or helping us review other [submitted projects](https://github.com/freeCodeCamp/CurriculumExpansion/pulls). And stick around -- eventually we'll start writing the actual tests that will run in the browser, so we could use your help implementing those.
