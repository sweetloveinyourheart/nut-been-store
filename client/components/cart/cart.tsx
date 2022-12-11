import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import styles from './cart.module.css'
import CartItem from "./item/cart-item";

interface CartProps { }

const Cart: FunctionComponent<CartProps> = () => {

    const router = useRouter()
    const { items } = useAppSelector(state => state.cart)
    const total = items.reduce((item, curr) => item + curr.quantity*curr.type.price, 0)

    return (
        <section className={`${styles["page-add"]} ${styles["cart-page-add"]}`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles["page-breadcrumb"]}>
                            <h2>Giỏ hàng<span>.</span></h2>
                            <Link href="/">Trang chủ</Link>
                            <Link className={styles["active"]} href="/cart">Giỏ hàng</Link>
                        </div>
                    </Col>
                </Row>
                <div className={styles["cart-page"]}>
                    <div className={styles["cart-table"]}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={styles["product-h"]}>Product</th>
                                    <th>Price</th>
                                    <th className={styles["quan"]}>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.length !== 0
                                    ? items.map((item, index) => (
                                        <CartItem item={item} key={index} />
                                    ))
                                    : (
                                        <tr>
                                            <td colSpan={4} className={styles['no-product']}>
                                                <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className={`${styles["total-info"]}`}>
                        <h5 className={styles['total-price']}>Thành tiền: {Intl.NumberFormat().format(total)} đ</h5>
                        <a 
                            href="#" 
                            className={`${styles["primary-btn"]} ${styles["chechout-btn"]}`}
                            onClick={() => router.push('/checkout')}
                        >
                            Tiến hành thanh toán
                        </a>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Cart;