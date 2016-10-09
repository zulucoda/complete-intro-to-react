/**
 * Created by muzikayise on 2016/10/09.
 */

const React = require('react')

const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
