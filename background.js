chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyAsMarkdown,
  })
})

function copyAsMarkdown() {
  let title = document.title
  let url = window.location.href
  let markdown = `[${title}](${url})`
  navigator.clipboard.writeText(markdown)
}