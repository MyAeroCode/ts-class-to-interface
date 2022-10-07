import prettier from "prettier";

export interface IPipe {
  process: (input: string) => string;
}

export interface TPipe {
  new (): IPipe;
}

export abstract class Pipe {
  protected abstract processImpl(input: string): string;

  protected formatCode(input: string): string {
    return prettier.format(input, {});
  }

  process(input: string): string {
    return this.processImpl(input);
  }
}
