const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>mfb video</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/' className='browse-all'> or Browse All</Link>
    </div>
  </div>
)

module.exports = Landing
