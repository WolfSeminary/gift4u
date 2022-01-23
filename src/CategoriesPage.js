import AppBar from '/AppBar'
import Categories from './Categories'
import { useNavigate } from "react-router-dom";

export default CategoriesPage = () => {
    const navigate = useNavigate();
    const onCategoryClick = () => {
        navigate(`/Categories/${id}`)
    }
    return (
        <>
            <AppBar />
            <div><Categories onClick={onCategoryClick} /></div>
        </>
    )
}
