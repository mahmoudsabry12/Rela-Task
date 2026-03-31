import{Response ,Request} from "express"

export const getSupplierA = (req:Request,res:Response) => {
    res.json({data: [
                        {
                            "hotelId": "A-101",
                            "name": "Grand Istanbul Hotel",
                            "city": "Istanbul",
                            "price": 120,
                            "currency": "USD",
                            "stars": 5,
                            "available": true
                        },
                        {
                            "hotelId": "A-102",
                            "name": "Blue Sea Hotel",
                            "city": "Antalya",
                            "price": 80,
                            "currency": "USD",
                            "stars": 4,
                            "available": false
                        }
]})

}