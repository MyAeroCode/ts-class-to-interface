import { helloWorld } from "@core/hello";

describe("hello", () => {
  it("should return hello", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
