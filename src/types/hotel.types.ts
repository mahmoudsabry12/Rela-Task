// Define the structure for a hotel
export type Hotel = {
  supplier: string;
  supplierHotelId: string;
  name: string;
  city: string;
  price: {
    amount: number;
    currency: string;
  };
  stars: number;
  available: boolean;
};

export type SupplierConfig = {
  name: string;
  url: string;
  normalize: (data: any) => Hotel[];
};