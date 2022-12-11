import supertest from "supertest";
import {app} from "../app";


const request = supertest(app);

describe("test 'word' end point response", () => {
  it("descripe endpoint response", async () => {
    const response = await request.get("/words");
    expect(response.status).toBe(200);
  });
});
describe("test 'rank' end point response", () => {
  it("descripe endpoint response", async () => {
    const response = await request.get("/words");
    expect(response.status).toBe(200);
  });
});

describe("test wordsList equal to 10 not more or less", () => {
  it("descripe endpoint response", async () => {
    const response = await request.get("/words");
    expect(response.body.length).toEqual(10)
  });
});
