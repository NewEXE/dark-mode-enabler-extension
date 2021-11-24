function switchDarkMode() {
  const tag = document.documentElement; // <html> tag
  const cssFilter = 'invert(90%)';

  if (tag.style.filter === cssFilter) {
    tag.style.filter = '';
  } else {
    tag.style.filter = cssFilter;
  }
}

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: switchDarkMode
  });
});