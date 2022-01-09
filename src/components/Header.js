
import { FaPlus } from "react-icons/fa"

const Header = ({btnClass,toggleAdd}) => {

    
    return(
        <header>
            <h2>Task Tracker</h2>
            <button onClick={() => toggleAdd(btnClass) }><FaPlus className="plus-icon" /></button>
        </header>
    )
}

export default Header