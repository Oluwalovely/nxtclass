

export type ComplexProducts = {
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "tags": string[]
    "brand": string,
    "sku": string,
    "weight": number,
    "dimensions": {
        "width": number,
        "height": number,
        "depth": number
    },
    "warrantyInformation": string,
    "shippingInformation": string,
    "availabilityStatus": string,
    "reviews": RatingsDeets[],

    "returnPolicy": string,
    "minimumOrderQuantity": number,
    "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string,
    },
    "thumbnail": string,
    "images": Array<string>,// or we can also write string[]
}


type RatingsDeets = {

    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": string

}


export type Posts = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: {
        "likes": number,
        "dislikes": number
    },
    views: number,
    userId: number
}

export type User = {
    _id?: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}