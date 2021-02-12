import React, { Component } from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import SimpleMDE from 'react-simplemde-editor'
import './base-styles.css'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

class MdEditor extends Component {
  defaultProps = {
    minHeight: '500px',
  }

  render() {
    const { value, type } = this.props

    return (
      <SimpleMDE
        value={value}
        onChange={(newValue) => this.props.onChange(createPatchFrom(newValue))}
        options={{
          ...this.defaultProps,
          ...(type.options || {}),
        }}
      />
    )
  }
}

export default MdEditor
