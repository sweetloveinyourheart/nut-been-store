import { gql } from "@apollo/client";
import { Product } from "../../types/product";

export interface GetProductByCollectionData {
  products: Product
}

export interface GetProductByCollectionVars {
  collection: string
}

const GET_PRODUCT_BY_COLLECTION = gql`
query Products($collection: String!){
    products: GetProductByCollection(collection: $collection) {
      _id
      name
      types {
        price
      }
      images
      short_link
    }
  }
`

export interface GetProductByShortLinkData {
  product: Product
}

export interface GetProductByShortLinkVars {
  short_link: string
}

const GET_PRODUCT_BY_SHORT_LINK = gql`
query Product($short_link: String!) {
  product: GetProductByShortLink(short_link: $short_link) {
    name
    _id
    types {
      weight
      price
    }
    images
		description    
    product_collection { 
      name
      short_link
    }
  }
}
`

export {
  GET_PRODUCT_BY_COLLECTION,
  GET_PRODUCT_BY_SHORT_LINK
}