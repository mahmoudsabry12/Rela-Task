import { SUPPLIERS } from "../config/suppliers.config";
import { fetchSupplierData } from "./supplier.service";
import { Hotel } from "../types/hotel.types";



export const fetchHotels = async (city?: string): Promise<{ success: boolean; data: Hotel[]; meta: any }> => {
  const results: Hotel[] = [];
  const warnings: string[] = [];

  await Promise.all(
    SUPPLIERS.map(async (supplier) => {
      try {
        const data = await fetchSupplierData(supplier.url, { city });
        const normalizedData = supplier.normalize(data);
        results.push(...normalizedData);
      } catch (error) {
        warnings.push(`Supplier ${supplier.name} is unavailable`);
      }
    })
  );

  return {
    success: true,
    data: results,
    meta: {
      count: results.length,
      warnings: warnings.length > 0 ? warnings : undefined,
    },
  };
};