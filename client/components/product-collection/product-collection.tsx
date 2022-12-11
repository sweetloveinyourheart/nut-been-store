import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Collection } from "../../types/collection";
import { Product as ProductInterface } from "../../types/product";
import Product from "../hot-product/product/product";
import styles from './product-collection.module.css'

interface ProductCollectionProps {
    collection: Collection
    products: ProductInterface[]
}

const ProductCollection: FunctionComponent<ProductCollectionProps> = ({ collection, products }) => {
    return (
        <section className={styles['collection']}>
            <Container>
                <div className={styles['title']}>
                    <h3>{collection.name}</h3>
                    <p>{collection.description}</p>
                </div>
                <div className={styles['products']}>
                    <Row>
                        {products.map((product, index) => (
                            <Col lg={3} key={index}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default ProductCollection;