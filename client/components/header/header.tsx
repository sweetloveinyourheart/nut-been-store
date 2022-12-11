import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from './header.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetPageCollectionData, GET_PAGE_COLLECTIONS } from "../../graphql/queries/collection";
import Link from "next/link";
import { useAppSelector } from "../../redux/hooks";

interface HeaderProps {

}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    return scrollDirection;
};


const Header: FunctionComponent<HeaderProps> = () => {

    const { items } = useAppSelector(state => state.cart)
    const router = useRouter()
    const { data } = useQuery<GetPageCollectionData>(GET_PAGE_COLLECTIONS)
    const scrollDirection = useScrollDirection();

    const collections = data?.collections

    return (
        <header className={styles['header-area']}>
            <Navbar className={`${styles["header"]} ${scrollDirection === "up" ? styles['header--fixed'] : ""}`} expand="lg">
                <Container>
                    <Navbar.Brand className={styles['logo']} href="#" onClick={() => router.push('/')}>Eira Been</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="mx-2" href="#" onClick={() => router.push('/')}>Trang chủ</Nav.Link>
                            <NavDropdown className=" mx-2" title="Sản phẩm" id="basic-nav-dropdown">
                                {collections
                                    ? (
                                        collections.map((collection, index) => (
                                            <NavDropdown.Item
                                                onClick={() => router.push(`/collections/${collection.short_link}`)}
                                                href={'#'}
                                                key={index}
                                            >
                                                {collection.name}
                                            </NavDropdown.Item>
                                        ))
                                    )
                                    : null
                                }
                            </NavDropdown>
                            <Nav.Link className="mx-2" href="#link">Liên hệ</Nav.Link>
                        </Nav>
                        <Button variant="light" onClick={() => router.push("/cart")} className={styles['cart']}>
                            <div className={styles['cart-counter']}>{items.length}</div>
                            <FiShoppingCart />
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;