const virtualDom = [
    {
      tag: 'div',
      props: {
        className: 'left-side'
      },
      children: [
        {
            tag: 'h3',
            props: {
                innerText: 'Chap tomon'
            }
        },
        {
          tag: 'ul',
          children: [
            {tag: 'li', children: [{tag: 'span', props: {innerText: 'Bir'}}]},
            {tag: 'li', children: [{tag: 'span', props: {innerText: 'Ikki'}}]},
            {tag: 'li', children: [{tag: 'span', props: {innerText: 'Uch'}}]}
          ]
        }
      ]
    },
    {
      tag: 'div',
      props: {
        className: 'right-side'
      },
      children: [
        {
          tag: 'h3',
          props: {
            innerText: 'O`ng tomon'
          }
        },
        {
          tag: 'a',
          props: {
            innerText: 'Kun.uz sayti',
            href: 'https://kun.uz'
          },
          events: {
              onclick: function (e) {
                  if (!confirm('Saytga o`tmoqchimisiz?')) {
                    e.preventDefault();
                    return;
                  }
              }
          }
        }
      ]
    }
  ];

  const rn = new ViewRenderer(virtualDom);
  rn.render();
