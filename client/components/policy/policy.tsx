import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './policy.module.css'

interface ShopPolicyProps {

}

const ShopPolicy: FunctionComponent<ShopPolicyProps> = () => {
    return (
        <section className={styles["features-section"]}>
            <div className={styles["features-ads"]}>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className={`${styles["single-features-ads"]} ${styles["first"]}`}>
                                <img src="img/icons/f-delivery.png" alt="" />
                                <h4>An toàn tuyệt đối</h4>
                                <p>Đã được kiểm định chất lượng và vệ sinh an toàn thực phẩm</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles["single-features-ads"]} ${styles["second"]}`}>
                                <img src="img/icons/coin.png" alt="" />
                                <h4>Giá cả hợp lý</h4>
                                <p>Bán trực tiếp từ nông trại với giá tốt nhất thị trường, hỗ trợ 24/7</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={`${styles["single-features-ads"]}`}>
                                <img src="img/icons/chat.png" alt="" />
                                <h4>Hỗ trợ nhiệt tình</h4>
                                <p>Bổ sung dưỡng chất tăng cường đề kháng, tốt cho sức khỏe</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ShopPolicy;