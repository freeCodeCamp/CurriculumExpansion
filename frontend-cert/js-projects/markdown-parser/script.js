const h3Regex = /^###\s(.*$)/gm;
const h3Replacement = "<h3>$1</h3>";

const h2Regex = /^##\s(.*$)/gm;
const h2Replacement = "<h2>$1</h2>";

const h1Regex = /^#\s(.*$)/gm;
const h1Replacement = "<h1>$1</h1>";

const boldRegex = /((?:\*|_){2})(.*)\1/g;
const boldReplacement = "<strong>$2</strong>";

const italicRegex = /(\*|_)(.*)\1/g;
const italicReplacement = "<em>$2</em>";

const imageRegex = /!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g;
const imageReplacement = '<img alt="$1" src="$2">';

const linkRegex = /\[(.*?)\]\(\s*(.*?)\s*\)/g;
const linkReplacement = '<a href="$2">$1</a>';

const blockquoteRegex = /^> (.*?)$/gm;
const blockquoteReplacement = '<blockquote>$1</blockquote>';

const unorderedListRegex1 = /((?:^-\s+.*?$\n)+\s*?)\n/gm
const unorderedListReplacement1 = "<ul>\n$1</ul>";

const unorderedListRegex2 = /^-\s+(.*?$)\n/gm
const ListReplacement2 = "<li>$1</li>\n";

const orderedListRegex1 = /((?:^\d*\.\s+.*?$\n)+\s*?)\n/gm;
const orderedListReplacement1 = "<ol>\n$1</ol>";

const orderedListRegex2 = /^\d*\.\s+(.*?$)\n/gm;

const replacementArray = [
    [h3Regex, h3Replacement],
    [h2Regex, h2Replacement],
    [h1Regex, h1Replacement],
    [boldRegex, boldReplacement],
    [italicRegex, italicReplacement],
    [imageRegex, imageReplacement],
    [linkRegex, linkReplacement],
    [blockquoteRegex, blockquoteReplacement],
    [unorderedListRegex1, unorderedListReplacement1],
    [unorderedListRegex2, ListReplacement2],
    [orderedListRegex1, orderedListReplacement1],
    [orderedListRegex2, ListReplacement2],
]
const markdownInput = document.getElementById('markdown-input');
const convertMarkdown = () => {
    let markdown = markdownInput.value;
    replacementArray.forEach((item) => {
        markdown = markdown.replace(item[0], item[1]);
    })
    return markdown.trim();
}

markdownInput.addEventListener('input', () => {
    const html = convertMarkdown();
    const out = document.getElementById('html-output');
    out.innerHTML = html;
    if (out.innerHTML !== "") {
        out.style.display = "block";
    } else {
        out.style.display = "none";
    }
});
