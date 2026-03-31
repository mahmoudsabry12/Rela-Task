import{Response ,Request} from "express"

export const getSupplierB = (req:Request,res:Response) => {
    res.json({data:[
                    {
                        "id": "B-9001",
                        "hotel_name": "Grand Istanbul Hotel",
                        "location": {
                        "cityName": "Istanbul"
                        },
                        "pricing": {
                        "amount": 118,
                        "currencyCode": "USD"
                        },
                        "rating": 5,
                        "isAvailable": true
                    },
                    {
                        "id": "B-9002",
                        "hotel_name": "Lara Beach Resort",
                        "location": {
                        "cityName": "Antalya"
                        },
                        "pricing": {
                        "amount": 95,
                        "currencyCode": "USD"
                        },
                        "rating": 4,
                        "isAvailable": true
                    }
]})

}