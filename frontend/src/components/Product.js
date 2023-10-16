import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
    // toast notification for add to cart
    toast.success(`${product.name} added to cart`, {
      position: 'bottom-center',
      autoClose: 1000, // Duration in milliseconds (1 second)
    });
  };

  return (
    <Card className='home-card'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Title>from: {product.from}</Card.Title>
          <Card.Title>Finish: {product.finish}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant='light' disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            className='btn btn-primary btn-sm'
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;