import React, { Component } from 'react'
import styles from './styles.module.css'

export class ExampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      close: false,
      type: this.props.type.toLowerCase(),
      time: this.props.time,
      width: 5
    }
    this.close = this.close.bind(this)
  }

  close = (e) => {
    e.preventDefault()
    this.setState({
      close: true
    })
  }

  componentDidMount() {
    if (this.state.type === 'warning') {
      this.setState({
        color: '#ff5100e3'
      })
    }
    if (this.state.type === 'success') {
      this.setState({
        color: '#41ce41'
      })
    }
    if (this.state.type === 'error') {
      this.setState({
        color: '#d41010'
      })
    }
    if (this.state.type === 'info') {
      this.setState({
        color: '#3fabf3'
      })
    }
    setTimeout(() => {
      this.setState({
        close: true
      })
    }, this.state.time)
  }

  render() {
    if (!this.state.close) {
      return (
        <div className={styles.app_notification}>
          <div className={styles.timescrol}>
            <div
              className={styles.span}
              id='bar'
              // style={{
              // background: `${this.state.color}`,
              // width: `${this.state.width}px`
              // }}
            />
          </div>
          <div
            className={styles.top_toast}
            style={{ background: `${this.state.color}` }}
          >
            <div className={styles.context_icon}>
              <img
                src={require(`../src/Icons/${this.state.type}.svg`)}
                alt='W'
              />
            </div>
            <p className={styles.title_of_noti}>{this.props.title}</p>
            <div className={styles.context_icon}>
              <span onClick={this.close}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='22'
                  height='22'
                  viewBox='0 0 48 48'
                  style={{ fill: '#000000' }}
                >
                  <path d='M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z' />
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.context}>
            <p className={styles.disc_of_noti}>{this.props.message} </p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
