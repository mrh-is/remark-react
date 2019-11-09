'use strict'

/* eslint-env browser */

import React from 'react'
import ReactDOM from 'react-dom'
import TextareaAutosize from 'react-autosize-textarea'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

var processor = unified()
  .use(parse)
  .use(remark2react)

var text = `# Hello, world!

Some *emphasis*, **importance**, and \`code\`.`

class App extends React.Component {
  constructor() {
    super()
    this.state = {text}
    this.onChange = this.onChange.bind(this)
  }

  onChange(ev) {
    this.setState({text: ev.target.value})
  }

  render() {
    return (
      <>
        <TextareaAutosize value={this.state.text} onChange={this.onChange} />
        <div className="markdown-body">
          {processor.processSync(this.state.text).contents}
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
