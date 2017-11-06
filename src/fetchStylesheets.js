let loadCss = url => fetch(url).then(response => console.log(response.text()));
[...document.styleSheets].map(x => loadFile(x.href))
