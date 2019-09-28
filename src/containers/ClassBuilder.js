import React, { Component }               from 'react'
import PropTypes                          from 'prop-types'
import ClassCode                          from '../components/ClassCode'
class ClassBuilder extends Component {

  static propTypes = {
    nameOfClass: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      nameOfClass: ''
    }

    this.updateField = this.updateField.bind(this)
  }

  componentDidMount() {
    
  }

  updateField(e) {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    // const {  } = this.state
    // const {  } = this.props
    return (
      <div>
        <p>
          <label for="nameOfClass">Name of Class</label>
          <input 
            type="text" 
            name="nameOfClass" 
            onChange={this.updateField} />

        </p>
        <ClassCode nameOfClass={this.state.nameOfClass} />
      </div>
    )
  }
}

export default ClassBuilder