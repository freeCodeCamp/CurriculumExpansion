const h3Regex = /^###\s(.*$)/gm;
const h3Replacement = "<h3>$1</h3>";

const h2Regex = /^##\s(.*$)/gm;
const h2Replacement = "<h2>$1</h2>";

const h1Regex = /^#\s(.*$)/gm;
const h1Replacement = "<h1>$1</h1>";

const boldRegex = /((?:\*|_){2})(.*)\1/g;
const boldReplacement = "<b>$2</b>";

const italicRegex = /(\*|_)(.*)\1/g;
const italicReplacement = "<i>$2</i>";

const imageRegex = /!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g;
const imageReplacement = '<img alt="$1" src="$2">';

const linkRegex = /\[(.*?)\]\(\s*(.*?)\s*\)/g;
const linkReplacement = '<a href="$2">$1</a>';

const blockquoteRegex = /^> (.*?)$/gm;
const blockquoteReplacement = '<blockquote>$1</blockquote>';
console.log(blockquoteRegex, blockquoteReplacement)

const unorderedListRegex1 = /(?<!^[+*-] .*?\n)^[+*-] (.*?)$/gm
const unorderedListReplacement1 = "<ul><li>$1</li>";

const unorderedListRegex2 = /(?<!^[+*-] .*?\n)^[+*-] (.*?)$(?!\n^[+*-] .*?$)/gm;
const unorderedListReplacement2 = "<ul><li>$1</li></ul>";

const unorderedListRegex3 = /^[+*-] (.*?)$(?!\n^[+*-] .*?$)/gm
const unorderedListReplacement3 = "<li>$1</li></ul>";

const unorderedListRegex4 = /^[+*-] (.*?)$/gm;
const unorderedListReplacement4 = "<li>$1</li>";

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
    [unorderedListRegex2, unorderedListReplacement2],
    [unorderedListRegex3, unorderedListReplacement3],
    [unorderedListRegex4, unorderedListReplacement4],
]

const parseMarkdown = (markdown) => {
    for (element of replacementArray) {
        console.log(element[0], element[1])
        markdown = markdown.replace(element[0], element[1]);
    }
    return markdown.trim();
}

const markdownInput = document.getElementById('markdown-input');
markdownInput.addEventListener('input', () => {
    const html = parseMarkdown(markdownInput.value);
    console.log(html)
    document.getElementById('html-output').innerHTML = html;
});
