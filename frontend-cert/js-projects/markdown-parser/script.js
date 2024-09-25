const patternReplacementArray = [
    { h6: [/^######[ \t](.+$)/gm, "<h6>$1</h6>\n"] },
    { h5: [/^#####[ \t](.+$)/gm, "<h5>$1</h5>\n"] },
    { h4: [/^####[ \t](.+$)/gm, "<h4>$1</h4>\n"] },
    { h3: [/^###[ \t](.+$)/gm, "<h3>$1</h3>\n"] },
    { h2: [/^##[ \t](.+$)/gm, "<h2>$1</h2>\n"] },
    { h1: [/^#[ \t](.+$)/gm, "<h1>$1</h1>\n"] },
    { hr: [/(?<=\n|^)---(?=\n|$)/, "<hr>\n"] },
    { strong: [/((?:\*|_){2})(.*?)\1/g, "<strong>$2</strong>"] },
    { em: [/(\*|_)(.*?)\1/g, "<em>$2</em>"] },
    { img: [/!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g, '<img alt="$1" src="$2">'] },
    { a: [/\[(.*?)\]\(\s*(.*?)\s*\)/g, '<a href="$2">$1</a>'] },
    { blockquote1: [/^> ([^\n]+?)$/gm, "<blockquote>$1</blockquote>\n"] },
    { blockquote2: [/(?<=<blockquote>)(.+?)<\/blockquote>\n\n^([^<\n]+?)$/gm, "$1 $2</blockquote>\n"] },
    { ul: [/(?:^[-*+]\s+.*?$\n)+\s*?/gm, "<ul>\n$&</ul>\n\n"] },
    { ol: [/(?:^\d*\.\s+?\w.*?$\n)+\s*?/gm, "<ol>\n$&</ol>\n\n"] },
    { uli: [/^[-*+]\s+(.*?$)\n/gm, "<li>$1</li>\n"] },
    { oli: [/^\d*\.\s+?(.*?$)\n/gm, "<li>$1</li>\n"] },
    { p1: [/^([^<>\s].*?)(?=\n\s*$)/gsm, "<p>$1</p>\n"] },
    { p2: [/^\w*?(?:<strong>|<em>).+(?:<\/strong>|<\/em>)\s*\w*?[ \t]*$/gm, "<p>$&</p>\n"] }
]

const markdownInput = document.getElementById('markdown-input');
const convertMarkdown = () => {
    let markdown = markdownInput.value;
    let matchUList = false;
    let matchOList = false;
    patternReplacementArray.forEach((item) => {
        const [key] = Object.keys(item);
        const [pattern, replacement] = Object.values(item)[0];
        if (key === "blockquote2") {
            while (markdown.match(pattern)) {
                markdown = markdown.replace(pattern, replacement);
            }
        } else if (key === "ul") {
            if (markdown.match(pattern)) {
                matchUList = true;
                markdown = markdown.replace(pattern, replacement);
            }

        } else if (key === "ol") {
            if (markdown.match(pattern)) {
                matchOList = true;
                markdown = markdown.replace(pattern, replacement);
            }

        } else if (key === "uli" && !matchUList) {
            return;
        } else if (key === "oli" && !matchOList) {
            return;
        } else {
            markdown = markdown.replace(pattern, replacement);
        }
    })
    return markdown;
}

markdownInput.addEventListener('input', () => {
    const html = convertMarkdown();
    const out = document.getElementById('html-output');
    out.textContent = html;
});
