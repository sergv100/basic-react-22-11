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
      return (
        <div>
          <WrappedComponent isOpen={isOpen} toggleDropDown={this.toggleDropDown} {...this.props} />
        </div>
      )
    }
  }
