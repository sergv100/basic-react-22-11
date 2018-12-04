import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { sortByTitle } from '../../ac'

class SelectFilter extends Component {
  state = {
    selected: []
  }

  handleChange = (selected) => {
    const { sortByTitle } = this.props
    this.setState({ selected })
    selected.forEach((article) => {
      sortByTitle(article.value)
    })
    console.log(selected)
  }

  get options() {
    const { articles } = this.props
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  null,
  { sortByTitle }
)(SelectFilter)
