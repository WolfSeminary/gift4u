import AppBar from '/AppBar'
import Categories from './Categories'
import { useNavigate } from "react-router-dom";

export default CategoriesPage = () => {
    
    const onCategoryClick = () => {
        navigate(`/Categories/${newInvoice.id}`)
    }

    const navigate = useNavigate();
    return (
        <>
            <AppBar/>
            <div><Categories onClick={onCategoryClick} /></div>
        </>
    )
}
