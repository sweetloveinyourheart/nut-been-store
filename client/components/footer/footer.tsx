import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './footer.module.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTumblr, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useQuery } from "@apollo/client";
import { GetPageCollectionData, GET_PAGE_COLLECTIONS } from "../../graphql/queries/collection";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    const { data } = useQuery<GetPageCollectionData>(GET_PAGE_COLLECTIONS)

    const collections = data?.collections

    return (
        <footer className={styles["footer-section"]}>
            <Container>
                <div className={styles["newslatter-form"]}>
                    <Row>
                        <Col lg={12}>
                            <form action="#">
                                <input type="text" placeholder="Địa chỉ email của bạn" />
                                <button type="submit">Gửi yêu cầu</button>
                            </form>
                        </Col>
                    </Row>
                </div>
                <div className={styles["footer-widget"]}>
                    <Row>
                        <Col sm={6} lg={3}>
                            <div className={styles["single-footer-widget"]}>
                                <h4>Công ty Eira Been</h4>
                                <ul>
                                    <li>Hotline: 035.412.8181</li>
                                    <li>CN1: 357 Trường Chinh, TP BMT</li>
                                    <li>CN2: 1B Trần Não, Q1, TP HCM</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className={styles["single-footer-widget"]}>
                                <h4>Chính sách</h4>
                                <ul>
                                    <li>Chính sách mua bán</li>
                                    <li>Chính sách đổi trả</li>
                                    <li>Chính sách giao hàng</li>
                                    <li>Chính sách bảo mật thông tin</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6} lg={3}>
                            <div className={styles["single-footer-widget"]}>
                                <h4>Sản phẩm</h4>
                                <ul>
                                {collections
                                ? (
                                   collections.map((collection, index) => (
                                    <li key={index}>
                                        {collection.name}
                                    </li>
                                   ))
                                )
                                : null
                           }
                                </ul>
                            </div>
                        </Col>
                        
                        <Col sm={6} lg={3}>
                            <div className={styles["single-footer-widget"]}>
                                <h4>Về chúng tôi</h4>
                                <ul>
                                    <li>Eira Been là đơn vị chuyên cung các loại đặc sản vùng Tây Nguyên có giấy kiểm định chất lượng và vệ sinh an toàn thực phẩm. Cam kết sản phẩm thật - sản phẩm nguyên chất.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className={styles["social-links-warp"]}>
                <Container>
                    <div className={styles["social-links"]}>
                        <a href="" className={styles["instagram"]}><FaInstagram /><span>instagram</span></a>
                        <a href="" className={styles["pinterest"]}><FaPinterest /><span>pinterest</span></a>
                        <a href="" className={styles["facebook"]}><FaFacebook /><span>facebook</span></a>
                        <a href="" className={styles["twitter"]}><FaTwitter /><span>twitter</span></a>
                        <a href="" className={styles["youtube"]}><FaYoutube /><span>youtube</span></a>
                        <a href="" className={styles["tumblr"]}><FaTumblr /><span>tumblr</span></a>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;