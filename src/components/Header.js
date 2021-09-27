import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {
    const location = useLocation()

    return (
        <header className='header' onClick={onAdd}>
            <h1>{title}</h1>
            { location.pathname === '/' &&
                (<Button 
                    color={showAddTask ? 'red' : 'green'}
                    text={showAddTask ? 'Close' : 'Add'} 
                />)
            }
        </header>
    )
}

// Handle Default Value for Props
Header.defaultProps = {
    title: 'Task Tracker'
}

// Handle Prop Types
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS Style in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
