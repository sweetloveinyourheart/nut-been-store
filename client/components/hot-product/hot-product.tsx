import { FunctionComponent } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GetPageCollectionData, GET_PAGE_COLLECTIONS } from "../../graphql/queries/collection";
import styles from './hot-product.module.css'
import { useQuery } from "@apollo/client";
import Image from "next/image";


interface HotProductProps {

}

const HotProduct: FunctionComponent<HotProductProps> = () => {

    const { data } = useQuery<GetPageCollectionData>(GET_PAGE_COLLECTIONS)

    const collections = data?.collections

    return (
        <section className={styles["latest-products"]}>
            <Container>
                <div className={styles["product-filter"]}>
                    <Row>
                        <Col lg={12} className={styles["text-center"]}>
                            <div className={styles["section-title"]}>
                                <h2>Sản phẩm mới nhất</h2>
                            </div>
                            <ul className={styles["product-controls"]}>
                                <li >Tất cả</li>
                                {collections
                                    ? collections.map((collection, index) => <li key={index}>{collection.name}</li>)
                                    : null}
                            </ul>
                        </Col>
                    </Row>
                </div>
                <Row id="product-list">
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-1.jpeg" alt="" /></a>
                                <div className={styles["p-status"]}>new</div>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Mật ong tam đảo</h6>
                                <p>Từ 99.0000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-2.jpeg" alt="" /></a>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Mật ong honeyco</h6>
                                <p>Từ 149.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-3.jpeg" alt="" /></a>
                                <div className={styles["p-status"]}>new</div>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt macca Macadamia</h6>
                                <p>Từ 199.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-4.jpeg" alt="" /></a>
                                <div className={`${styles["p-status"]} ${styles["popular"]}`}>popular</div>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt macca Úc</h6>
                                <p>Từ 149.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-5.jpeg" alt="" /></a>
                                <div className={styles["p-status"]}>new</div>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt dinh dưỡng hỗn hợp</h6>
                                <p>Từ 149.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#"><Image width={300} height={300} src="/img/products/p-6.jpeg" alt="" /></a>
                                <div className={`${styles["p-status"]} ${styles["sale"]}`}>sale</div>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt dinh dưỡng hỗn hợp</h6>
                                <p>Từ 149.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                            <Image width={300} height={300} src="/img/products/p-7.jpeg" alt="" />
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt dinh dưỡng hỗn hợp</h6>
                                <p>Từ 99.000 đ</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className={styles["single-product-item"]}>
                            <figure>
                                <a href="#">
                                <Image width={300} height={300} src="/img/products/p-8.jpeg" alt="" />
                                </a>
                            </figure>
                            <div className={styles["product-text"]}>
                                <h6>Hạt dinh dưỡng hỗn hợp</h6>
                                <p>Từ 149.000 đ</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-4">
                    <Button className={styles["more-btn"]} variant="dark">Xem Thêm</Button>
                </div>
            </Container>
        </section>
    );
}

export default HotProduct;