import AppBar from '/AppBar'
import Categories from './Categories'
import { useNavigate } from "react-router-dom";

export default CategoriesPage = () => {
    const navigate = useNavigate();
    const onCategoryClick = ({categoryName}) => {
        navigate(`/Categories/${categoryName}`)
    }
    return (
        <>
            <AppBar />
            <Categories onClick={onCategoryClick} />
        </>
    )
}
