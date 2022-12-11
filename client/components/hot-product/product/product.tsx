import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Product } from "../../../types/product";
import styles from '../hot-product.module.css'

interface ProductProps {
    product: Product
}

const Product: FunctionComponent<ProductProps> = ({ product }) => {
    return (
        <div className={styles["single-product-item"]}>
            <figure>
                <Link href={`/products/${product.short_link}`}>
                    <Image width={300} height={300} src={product.images[0]} alt="" />
                </Link>
            </figure>
            <div className={styles["product-text"]}>
                <h6>{product.name}</h6>
                <p>Từ {Intl.NumberFormat().format(product.types[0].price || 0)}đ</p>
            </div>
        </div>
    );
}

export default Product;