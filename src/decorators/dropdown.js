import React, { Component } from 'react'
import Button from '../components/button'

export default (WrappedComponent) =>
  class DropDownComponent extends Component {
    state = {
      isOpen: false
    }

    toggleDropDown = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
      const { isOpen } = this.state
      let title = !isOpen ? 'show comments' : 'hide comments'
      return (
        <div>
          <WrappedComponent isOpen={isOpen} {...this.props} />
          <Button title={title} clickHandler={this.toggleDropDown} />
        </div>
      )
    }
  }
