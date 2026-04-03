import { SUPPLIERS } from "../config/suppliers.config";
import { fetchSupplierData } from "./supplier.service";
import { Hotel } from "../types/hotel.types";



export const fetchHotels = async (city?: string): Promise<{ success: boolean; data: Hotel[]; meta: any }> => {
  const warnings: string[] = [];

  const responses = await Promise.allSettled(
    SUPPLIERS.map(async (supplier) => {
      const data = await fetchSupplierData(supplier.url, { city });
      return {
        supplier,
        data,
      };
    })
  );

  const results: Hotel[] = [];

 responses.forEach((res, index) => {
  if (res.status === "fulfilled") {
    const { supplier, data } = res.value;
    const normalized = supplier.normalize(data);
    results.push(...normalized);
  } else {
    warnings.push(`Supplier ${SUPPLIERS[index].name} is unavailable`);
    console.error(`Error fetching ${SUPPLIERS[index].name}:`, res.reason);
  }
});

  return {
    success: true,
    data: results,
    meta: {
      count: results.length,
      warnings: warnings.length ? warnings : undefined,
    },
  };
};