/**
 * Created by muzikayise on 2016/10/23.
 */
const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes
Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
