import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import styles from './checkout.module.css'

interface CheckoutProps {

}

const Checkout: FunctionComponent<CheckoutProps> = () => {
    const [shipping, setShipping] = useState<number>(0)

    const { items } = useAppSelector(state => state.cart)
    const total = items.reduce((item, curr) => item + curr.quantity*curr.type.price, 0)


    return (
        <section className={styles["cart-total-page"]}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles["page-breadcrumb"]}>
                            <h2>Thông tin đơn hàng<span>.</span></h2>
                            <Link href="/">Trang chủ</Link>
                            <Link className={styles["active"]} href="/checkout">Xác nhận đơn hàng</Link>
                        </div>
                    </Col>
                </Row>
                <form action="#" className={styles["checkout-form"]}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Thông tin cá nhân</h3>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-2">
                                    <p className={styles["in-name"]}>Tên của bạn*</p>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" placeholder="Tên" />
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" placeholder="Họ đệm" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <p className={styles["in-name"]}>Địa chỉ nhận hàng*</p>
                                </div>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Địa chỉ" />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-lg-2">
                                    <p className={styles["in-name"]}>Số điện thoại*</p>
                                </div>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Số điện thoại"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <p className={styles["in-name"]}>Địa chỉ email</p>
                                </div>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Email"/>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-3">
                            <div className={styles["order-table"]}>
                                <div className={styles["cart-item"]}>
                                    <span>Sản phẩm</span>
                                   {items.map((item) =>  <p className="product-name">{item.product.name}</p>)}
                                </div>
                                <div className={styles["cart-item"]}>
                                    <span>Đơn giá</span>
                                    <p>{Intl.NumberFormat().format(total)} đ</p>
                                </div>
                                <div className={styles["cart-item"]}>
                                    <span>Chi phí vận chuyển</span>
                                    <p>{Intl.NumberFormat().format(shipping)} đ</p>
                                </div>

                                <div className={styles["cart-total"]}>
                                    <span>Thành tiền</span>
                                    <p>{Intl.NumberFormat().format(shipping + total)} đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles["payment-method"]}>
                                <h3>Payment</h3>
                                <ul>
                                    <li>
                                        <label htmlFor="two">Thanh toán khi nhận hàng</label>
                                        <input type="radio" id="two" />
                                    </li>
                                </ul>
                                <button type="submit">Đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </section>
    );
}

export default Checkout;