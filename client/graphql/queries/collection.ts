import { gql } from "@apollo/client";
import { Collection } from "../../types/collection";

export interface GetPageCollectionData {
    collections: {
        name: string
        short_link: string
        description: string
    }[]
}

const GET_PAGE_COLLECTIONS = gql`
    query {
        collections: GetPageCollection {
            name
            short_link
        }
    }
`

export interface GetCollectionDescData {
    collection: Collection
}

export interface GetCollectionDescVars {
    short_link: string
}

const GET_COLLECTIONS_DESCRIPTION = gql`
    query Collections($short_link: String!) {
        collection: GetCollectionByShortLink(short_link: $short_link) {
            name
            description
        }
    }
`

export {
    GET_PAGE_COLLECTIONS,
    GET_COLLECTIONS_DESCRIPTION
}