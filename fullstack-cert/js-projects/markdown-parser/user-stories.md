1. You should have a function named `convertMarkdown` that takes no parameter.
1. The `convertMarkdown` function should convert the markdown input from `#markdown-input` into HTML and should return a string containing the HTML code.
Here's a table containing all the markdown that `convertMarkdown` should be able to handle and the expected HTML after conversion:

    | Markdown | HTML |
    |----------|------|
    | `# heading 1` | `<h1>heading 1</h1>` |
    | `## heading 2` | `<h2>heading 2</h2>` |
    | `### heading 3` | `<h3>heading 3</h3>` |
    | `**bold text**` or `__bold text__` | `<strong>bold text</strong>` |
    | `*italic text*` or `_italic text_` | `<em>italic text</em>` |
    | `![alt-text](image-source)` | `<img alt="alt-text" src="image-source">` |
    | `[link text](URL)` | `<a href="URL">link text</a>` |
    | `> quote` | `<blockquote>quote</blockquote>` |

1. When you input text inside `#markdown-input`, the raw HTML code returned by `convertMarkdown` should be displayed inside `#html-ouput`.