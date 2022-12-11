import { FunctionComponent } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { CartItem, changeQuantity, removeProduct } from "../../../redux/slices/cart";
import styles from '../cart.module.css'

interface CartItemProps {
    item: CartItem
}

const CartItem: FunctionComponent<CartItemProps> = ({ item }) => {

    const dispatch = useAppDispatch()

    const onRemoveProduct = () => dispatch(removeProduct(item))
    const onChangeQuantity = (quantity: number) => {
        if(quantity < 0) return;
        if(quantity === 0) {
            dispatch(removeProduct(item))
            return;
        }

        const newItem: CartItem = {
            ...item,
            quantity
        }

        dispatch(changeQuantity(newItem))
    }

    return (
        <tr>
            <td className={styles["product-col"]}>
                <img src={item.product.images[0]} alt="" />
                <div className={styles["p-title"]}>
                    <h5>{item.product.name}</h5>
                </div>
            </td>
            <td className={styles["price-col"]}>{Intl.NumberFormat().format(item.type.price)} đ</td>
            <td className={styles["quantity-col"]}>
                <div className={styles["pro-qty"]}>
                    <span className={styles["qtybtn"]} onClick={() => onChangeQuantity(item.quantity - 1)}>-</span>
                    <input type="number" value={item.quantity} onChange={e => onChangeQuantity(Number(e.target.value))} />
                    <span className={styles["qtybtn"]} onClick={() => onChangeQuantity(item.quantity + 1)}>+</span>
                </div>
            </td>
            <td className={styles["total"]}>{Intl.NumberFormat().format(item.type.price * item.quantity)} đ</td>
            <td className={styles["product-close"]} onClick={onRemoveProduct}>x</td>
        </tr>
    );
}

export default CartItem;