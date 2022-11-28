import PropTypes from 'prop-types'


const Header = ({text,bg,textColor}) => {
    const style = {
        backgroundColor:bg,
        color:textColor,
    }

  return (
    <header style={style}>
        <div className="container">
            <h2>{text}</h2>
        
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bg: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}
Header.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header