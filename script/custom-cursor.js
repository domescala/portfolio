window.addEventListener('load', () => {
  const urlSvg = (emoji) =>
    `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='33' height='33' viewport='0 0 100 100' style='fill:black;font-size:25px; text-align:center;'><text y='25px'>${emoji}</text></svg>")`;

  const emojis = '🤳🏻-🦉-📃-🎮-🚂-🚀-🎨-📖-🍅-🕑-🔡-🔑-🚴🏻‍♀️-🪑-👆🏻-👌🏻-✖-🔥'.split('-');
  const styleTag = document.createElement('style');
  styleTag.setAttribute('type', 'text/css');
  styleTag.innerHTML = `
  :root{
    ${emojis.map((emoji) => `--url-emoji-${emoji}: ${urlSvg(emoji)};`).join('\n')}
    ${emojis.map((emoji) => `--cursor-${emoji}: var(--url-emoji-${emoji}) 16 0, auto;`).join('\n')}
  }
  ${emojis
    .map((emoji) => `.cursor-${emoji} { cursor: var(--cursor-${emoji}) }`)
    .join('\n')}
  `;
  document.querySelector('body').appendChild(styleTag);
});

