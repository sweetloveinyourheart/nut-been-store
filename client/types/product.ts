export interface ProductType {
    price: number
    weight: string
}

export interface Product {
    _id: string
    name: string
    types: ProductType[]
    images: string[]
    product_collection: {
        name: string
        short_link: string
    }
    short_link: string
    description: string
}