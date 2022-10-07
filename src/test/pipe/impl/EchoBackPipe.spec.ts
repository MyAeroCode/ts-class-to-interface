import { EchoBackPipe } from "@core/pipe/impl/EchoBackPipe";

describe("EchoBackPipe", () => {
  let echoBackPipe: EchoBackPipe;

  beforeAll(() => {
    echoBackPipe = new EchoBackPipe();
  });

  describe("process", () => {
    it("should echo back given value", async () => {
      expect(echoBackPipe.process("Hello, World!")).toBe("Hello, World!");
    });
  });
});
