import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";
import { addProduct, CartItem } from "../../redux/slices/cart";
import { Product, ProductType } from "../../types/product";
import styles from './detail.module.css'

interface DetailProps {
    product: Product
}

const Detail: FunctionComponent<DetailProps> = ({ product }) => {
    const [selectedType, setSelectedType] = useState<ProductType | undefined>()
    const [quantity, setQuantity] = useState<number>(1)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setSelectedType(product.types[0])
    }, [])

    const handleQuantityClick = (action: 'incr' | 'desc') => {
        if(action === 'incr') {
            setQuantity(prevS => prevS + 1)
        }

        if(action === 'desc') {
            if(quantity === 0) return;
            setQuantity(prevS => prevS - 1)
        }
    }

    const onAddToCart = () => {
        if(!selectedType) return;

        const cartItem: CartItem = {
            product,
            quantity,
            type: selectedType
        }

        dispatch(addProduct(cartItem))
    }

    return (
        <section className={styles["product-page"]}>
            <Container>
                <div className={styles["page-breadcrumb"]}>
                    <Link href="/">Trang chủ</Link>
                    <Link href={`/collections/${product.product_collection.short_link}`}>{product.product_collection.name}</Link>
                    <Link className={styles["active"]} href="#">{product.name}</Link>
                </div>
                <Row>
                    <Col lg={6}>
                        <Carousel>
                            {product.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <Image
                                        style={{ width: '100%', height: 'auto' }}
                                        src={image}
                                        width={768}
                                        height={768}
                                        alt={`slide ${index}`}
                                    />
                                </Carousel.Item>

                            ))}
                        </Carousel>
                    </Col>
                    <Col lg={6}>
                        <div className={`${styles["product-content"]} pt-lg-0`}>
                            <h2>{product.name}</h2>
                            <div className={styles["pc-meta"]}>
                                <h5>{Intl.NumberFormat().format(selectedType?.price || 0)}</h5>
                                <div className={styles["rating"]}>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                            <div className={styles['weight']}>
                                {product.types.map((v, i) => (
                                    <span 
                                        key={`typ-${i}`} 
                                        className={v.weight === selectedType?.weight ? styles['active'] : ""}
                                        onClick={() => setSelectedType(v)}
                                    >
                                        {v.weight}
                                    </span>
                                ))}
                            </div>
                            <div className={styles['actions']}>
                                <div className={styles["product-quantity"]}>
                                    <div className={styles["pro-qty"]}>
                                        <span 
                                            className={styles["qtybtn"]}
                                            onClick={() => handleQuantityClick("desc")}
                                        >-</span>
                                        <input 
                                            type="text" 
                                            value={quantity} 
                                            onChange={e => setQuantity(Number(e.target.value))} 
                                        />
                                        <span 
                                            className={styles["qtybtn"]}
                                            onClick={() => handleQuantityClick("incr")}
                                        >+</span>
                                    </div>
                                </div>
                                <a href="#" onClick={() => onAddToCart()} className={`${styles["primary-btn"]} ${styles["pc-btn"]}`}>
                                    Add to cart
                                </a>
                            </div>
                            <p>{product.description}</p>
                            <ul className={styles["tags"]}>
                                <li><span>Danh mục :</span> {product.product_collection.name}</li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Detail;