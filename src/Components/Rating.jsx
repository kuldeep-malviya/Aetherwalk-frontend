import ReactStars from "react-rating-stars-component"

const ProductRating = () => {
    return (
        <ReactStars
            count={5}
            value={4} // Product's rating
            size={24}
            activeColor="#ffd700"
            edit={true} // To make it non-editable
        />
    );
};
export default ProductRating;