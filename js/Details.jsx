const React = require('react')
const { object } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    params: object
  },
  render () {
    return (
      <div className='container'>
        <pre><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
      </div>
    )
  }
})

module.exports = Details
