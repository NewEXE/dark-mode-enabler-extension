function switchDarkMode() {
  const tag = 'documentElement'; // <html> tag
  const cssFilter = 'invert(90%)';
  
  if(document[tag].style.filter === cssFilter) {
	  document[tag].style.filter = '';
  } else {
	  document[tag].style.filter = cssFilter;
  }
}

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: switchDarkMode
  });
});