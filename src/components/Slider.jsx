import React, { Component } from 'react'

class Slider extends Component {
  state = {
    Hue: 55,
    Saturation: 44,
    Lightness: 22,
  }
  componentDidMount() {
    this.randomizeColor()
  }

  state = {
    Hue: this.getRandomInt(255),
    Saturation: this.getRandomInt(101),
    Lightness: this.getRandomInt(101),
  }

  handleHueSliderLongForm = event => {
    const sliderThatChangedHue = event.target
    const valueOfTheHueSlider = parseInt(sliderThatChangedHue.value)

    this.setState({ Hue: valueOfTheHueSlider })
  }

  handleHueSlider = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  randomizeColor = event => {
    const Hue = this.getRandomInt(360)
    const Saturation = this.getRandomInt(100)
    const Lightness = this.getRandomInt(99)
    this.setState({
      Hue: Hue,
      Saturation: Saturation,
      Lightness: Lightness,
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  randomizeColor = event => {
    const Hue = this.getRandomInt(255)
    const Saturation = this.getRandomInt(100)
    const Lightness = this.getRandomInt(99)
    this.setState({
      Hue,
      Saturation,
      Lightness,
    })
  }
  render() {
    const backgroundColor = `hsl(${this.state.Hue}, ${this.state.Saturation}%, ${this.state.Lightness}%)`
    return (
      <>
        <fieldset>
          <h1>Color Picker!</h1>
          <div
            className="color"
            style={{
              backgroundColor,
            }}
          ></div>
          <h2>{this.props.Hue}</h2>
          <h3>{this.state.Hue}</h3>
          <input
            style={{
              backgroundColor: `(${this.state.Hue},${this.state.Saturation},${this.state.Lightness})`,
            }}
            name="Hue"
            type="range"
            min="0"
            max="255"
            value={this.state.Hue}
            onChange={this.handleHueSlider}
          />
          <h2>{this.props.Saturation}</h2>
          <h3>{this.state.Saturation}</h3>
          <input
            name="Saturation"
            type="range"
            min="0"
            max="255"
            value={this.state.Saturation}
            onChange={this.handleHueSlider}
          />
          <h2>{this.props.Lightness}</h2>
          <h3>{this.state.Lightness}</h3>
          <input
            name="Lightness"
            type="range"
            min="0"
            max="255"
            value={this.state.Lightness}
            onChange={this.handleHueSlider}
          />
        </fieldset>
        <code>{backgroundColor}</code>
        <button onClick={this.randomizeColor}>Random!</button>
      </>
    )
  }
}

export default Slider
