import { PipeLine } from "@core/pipeline/PipeLine";
import { IPipe, Pipe, TPipe } from "@core/pipe/Pipe";

function createAppendPipeClass(postfix: string): TPipe {
  return class AppendPipe extends Pipe implements IPipe {
    protected processImpl(input: string): string {
      return input + postfix;
    }
  };
}

describe("PipeLine", () => {
  describe("process", () => {
    it("should call each pipe", async () => {
      const pipeLine = new PipeLine([
        createAppendPipeClass("A"),
        createAppendPipeClass("B"),
      ]);
      const input = "";
      const output = pipeLine.execute(input);

      expect(output).toBe("AB");
    });

    it("should echo back when pipes is empty", async () => {
      const pipeLine = new PipeLine([]);
      const input = "Hello, World!";
      const output = pipeLine.execute(input);

      expect(output).toBe(input);
    });
  });
});
