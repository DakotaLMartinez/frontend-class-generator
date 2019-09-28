import React     from 'react'
import PropTypes from 'prop-types'

const ClassCode = ({ nameOfClass  }) => {
  let code = `
  class ${nameOfClass} {
    constructor(attributes) {
      Object.keys(attributes).forEach((attribute) => {
        this[attribute] = attributes[attribute]
      })
      ${nameOfClass}.all.push(this)
    }

    static findBy(attributes) {
      return ${nameOfClass}.all.find((${nameOfClass.toLowerCase()}) => {
        return Object.keys(attributes).every((attr)=>{
          return attributes[attr] === ${nameOfClass.toLowerCase()}[attr]
        })
      })
    }
  }

  ${nameOfClass}.all = []
  `
  return <textarea rows="40" cols="80" value={code}></textarea>
}


ClassCode.propTypes = {
  
}

export default ClassCode