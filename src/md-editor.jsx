import React, { Component } from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import SimpleMDE from 'react-simplemde-editor';
import './base-styles.css';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value));

class MdEditor extends Component {
  render() {
    const minHeight = this.props.type
      ? this.props.type.options
        ? this.props.type.minHeight
        : undefined
      : '500px';
    return (
      <SimpleMDE
        value={this.props.value}
        onChange={(value) => this.props.onChange(createPatchFrom(value))}
        options={{
          lineNumbers: false,
          minHeight,
        }}
      />
    );
  }
}

export default MdEditor;
