[...document.styleSheets]
  .filter(x => x.href == null)
  .reduce((acc, sheet) => acc.concat([...sheet.cssRules]), [])
  .map(x => x.cssText)
  .join("\n");
