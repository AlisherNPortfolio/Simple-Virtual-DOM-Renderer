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

      this.addProps(el, element);

      this.addEvents(el, element);

      this.addChildren(el, element);

      return element;
    }

    addProps(data, element) {
        if (data.hasOwnProperty('props')) {
            for (const key in data.props) {
              element[key] = data.props[key];
            }
          }
    }

    addChildren(data, element) {
        if (data.hasOwnProperty('children')) {
            data.children.forEach(childEl => {
              const childElement = this.createElement(childEl);
    
              element.appendChild(childElement);
            });
          }
    }

    addEvents(data, element) {
        if (data.hasOwnProperty('events')) {
            for (const key in data.events) {
                element[key] = data.events[key];
              }
          }
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