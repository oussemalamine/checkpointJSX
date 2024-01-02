
import Product from '../products.jsx'


const Image = () => {

    return (

        <div>
            <img src={Product.imageUrl} alt={Product.name} style={{ maxWidth: '100%' }} />
        </div>



    )

}

export default Image ;