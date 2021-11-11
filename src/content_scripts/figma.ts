export {};

const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.runtime.getURL('web_accessible_resource_figma.js'));
script.id = 'web_accessible_resource_figma';
document.body.appendChild(script);

script.addEventListener('content_script_figma_event', () => {
  console.log('content_script_figma_event');
});

window.onload = () => {
  const webAccessibleResourceFigmaEvent = new CustomEvent(
    'web_accessible_resource_figma_event',
    {
      detail: null,
    },
  );

  window.onclick = (e) => {
    const element = e.target;
    if (!(element instanceof HTMLSpanElement)) return;

    const classAttribute = element.getAttribute('class');
    if (!classAttribute) return;

    if (!/^object_row--rowText--/.test(classAttribute)) return;
    script.dispatchEvent(webAccessibleResourceFigmaEvent);
  };
};
