window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        packages: ['base', 'ams', 'noerrors', 'noundefined', 'textmacros', 'newcommand', 'physics', 'cancel', 'color', 'bbox', 'boldsymbol', 'mhchem', 'dsfont'],
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    },
    chtml: {
        fontURL: 'lib/fonts/woff-v2'
    },
    menuOptions: {
        settings: {
            contextMenu: false
        }
    }
};
