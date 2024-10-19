import { generateId } from "./generateId";

describe("generateId", () => {
  it("should return a string", () => {
    const id = generateId();
    expect(typeof id).toBe("string");
  });

  it("should return a unique id each time", () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});
