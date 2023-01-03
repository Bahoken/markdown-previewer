import { useState } from 'react';
import { marked } from 'marked';
import './App.css';


// a header (H1 size), a sub header (H2 size), a link, 
// inline code, a code block, a list item, 
// a blockquote, an image, and bolded text

function App() {
  const [text, setText] = useState(`
# <marquee>Hello world</marquee>
## H2
[title](https://www.exemple.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)
    
**bold text**
`);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">

      <h1>Markdown Previewer</h1>

      <div className="container">
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value)
          }}
          value={text}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
        ></div>
      </div>

    </div>
  );
}

export default App;
