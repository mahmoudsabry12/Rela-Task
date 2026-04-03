import { SupplierConfig } from "../types/hotel.types";

export const SUPPLIERS: SupplierConfig[] = [
  {
    name: "A",
    url: process.env.SUPLIER_A_URL || "http://localhost:4001/supplier-a/hotels",
    normalize: (data: any) =>
      data.map((h: any) => ({
        supplier: "A",
        supplierHotelId: h.hotelId,
        name: h.name,
        city: h.city,
        price: {
          amount: h.price,
          currency: h.currency,
        },
        stars: h.stars,
        available: h.available,
      })),
  },
  {
    name: "B",
    url: process.env.SUPLIER_B_URL || "http://localhost:4002/supplier-b/list",
    normalize: (data: any) =>
      data.map((h: any) => ({
        supplier: "B",
        supplierHotelId: h.id,
        name: h.hotel_name,
        city: h.location.cityName,
        price: {
          amount: h.pricing.amount,
          currency: h.pricing.currencyCode,
        },
        stars: h.rating,
        available: h.isAvailable,
      })),
  },
  
];