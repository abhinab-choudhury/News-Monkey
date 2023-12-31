import { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center m-4'>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
}
