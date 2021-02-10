import React, { Component } from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import SimpleMDE from 'react-simplemde-editor'
import './styles.css?raw'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

class MdEditor extends Component {
  render() {
    const {
      minHeight = '500px',
      hasLineNumbers = false,
    } = this.props.type.options

    return (
      <SimpleMDE
        value={this.props.value}
        onChange={(value) => this.props.onChange(createPatchFrom(value))}
        options={{
          lineNumbers: hasLineNumbers,
          minHeight: minHeight,
        }}
      />
    )
  }
}

export default MdEditor
