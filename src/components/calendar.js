import React, { Component } from 'react'

import Button from './button'
import DayPicker, { DateUtils } from 'react-day-picker'
import Helmet from 'react-helmet'
import 'react-day-picker/lib/style.css'

export default class Calendar extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick = () => this.setState({ from: undefined, to: undefined })

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div>
        <DayPicker
          className="Selectable"
          {...this.props}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />

        <Helmet>
          <style>{`
          .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
            background-color: #f0f8ff !important;
            color: #4a90e2;
          }
          .Selectable .DayPicker-Day {
            border-radius: 0 !important;
          }
          .Selectable .DayPicker-Day--start {
            border-top-left-radius: 50% !important;
            border-bottom-left-radius: 50% !important;
          }
          .Selectable .DayPicker-Day--end {
            border-top-right-radius: 50% !important;
            border-bottom-right-radius: 50% !important;
          }
        `}</style>
        </Helmet>
        <Button title="reset" clickHandler={this.handleResetClick} />
      </div>
    )
  }
}
