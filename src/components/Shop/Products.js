import ProductItem from './ProductItem';
import classes from './Products.module.css';
// import CartItem from "../Cart/CartItem";

const items = [{
    title: 'test Item', quantity: 1, total: 0, price: 6, description: 'This is a first product - amazing!', id:1
}, {
    title: 'second Item', quantity: 1, total: 0, price: 10, description: 'This is a second product - amazing!' ,id:2
},];


const Products = (props) => {
    // const items = useSelector(state => state.cartItemsSlice.items);

    const productItem = items.map((item) => (<ul key={item.id}>
        <ProductItem key={item.id} id={item.id} title={item.title} price={item.price}
                     description={item.description}/>
    </ul>));

    return (<section className={classes.products}>
        <h2>Buy your favorite products</h2>
        {productItem}
    </section>);
};

export default Products;
