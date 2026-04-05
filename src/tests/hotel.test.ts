import request from "supertest";
import app from "../app";

describe("Hotels Status API", () => {

  it("should return hotel data and handle supplier warnings", async () => {
    const res = await request(app).get("/api/hotel");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    expect(Array.isArray(res.body.data)).toBe(true);

    res.body.data.forEach((hotel: any) => {
      expect(hotel).toHaveProperty("supplier");
      expect(hotel).toHaveProperty("supplierHotelId");
      expect(hotel).toHaveProperty("name");
      expect(hotel).toHaveProperty("city");
      expect(hotel).toHaveProperty("price");
      expect(hotel.price).toHaveProperty("amount");
      expect(hotel.price).toHaveProperty("currency");
      expect(hotel).toHaveProperty("stars");
      expect(hotel).toHaveProperty("available");
    });

    expect(res.body.meta).toHaveProperty("count");
    expect(res.body.meta).toHaveProperty("warnings");
    expect(Array.isArray(res.body.meta.warnings)).toBe(true);

    if (res.body.meta.warnings.length > 0) {
      res.body.meta.warnings.forEach((warning :any) => {
        expect(typeof warning).toBe("string");
      });
    }

    expect(res.body.meta.count).toBe(res.body.data.length);
  });

});


