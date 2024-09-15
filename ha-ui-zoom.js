console.info(
  `%c🔍 HA UI Zoom 🔍 1.0.0`,
  "color: #8db9f1; font-weight: 700;"
);

const css = 'html { zoom: var(--ha-ui-zoom, 1); }';
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

head.appendChild(style);
style.appendChild(document.createTextNode(css));
