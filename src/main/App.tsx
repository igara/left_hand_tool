import React from 'react';

const App = () => {
  React.useEffect(() => {
    (() => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (queryTab) => {
        if (queryTab.length === 0) return;
        const tab = queryTab[0];
        if (!tab) return;
        if (!tab.id) return;
        if (!tab.url) return;

        if (/^https:\/\/www.figma.com\/file/.test(tab.url)) {
          chrome.tabs.sendMessage(
            tab.id,
            { event: 'ContentScripts_Figma_Section' },
            (response) => {
              console.log(response);
            },
          );
        }
      });
    })();
  });

  return (
    <>
      <header></header>
    </>
  );
};

export default App;
