class ViewRenderer
  {
    constructor (elements, root = 'app') {
      this.elements = elements;
      this.root = root;
    }

    render() {
      const elementContainer = [];

      this.elements.forEach(el => {
        elementContainer.push(
          this.createElement(el)
        );
      });
      
      this.renderToRoot(elementContainer);
    }

    createElement(el) {
      const element = document.createElement(el.tag);

      if (el.hasOwnProperty('props')) {
        for (const key in el.props) {
          element[key] = el.props[key];
        }
      }

      if (el.hasOwnProperty('children')) {
        el.children.forEach(childEl => {
          const childElement = this.createElement(childEl);

          element.appendChild(childElement);
        });
      }

      if (el.hasOwnProperty('events')) {
        for (const key in el.events) {
            element[key] = el.events[key];
          }
      }

      return element;
    }

    renderToRoot(elements) {
      const rootTag = document.getElementById(this.root);

      if (!rootTag) {
        console.error(`${this.root} root tag not found!`);
        return;
      }

      elements.forEach(el => {
        rootTag.appendChild(el);
      })

    }
  }