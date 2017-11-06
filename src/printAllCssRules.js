[...document.styleSheets]
  .reduce((acc, sheet) => acc.concat([...sheet.cssRules]), [])
  .map(x => x.cssText)
  .join("\n");
