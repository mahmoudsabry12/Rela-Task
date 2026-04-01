export const fetchSupplierData = async (url: string, params?: any) => {
  try {
    const queryParams = params
      ? "?" + new URLSearchParams(params).toString()
      : "";
    const response = await fetch(url + queryParams, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
};