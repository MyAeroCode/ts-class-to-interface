export interface IPipe {
  process: (input: string) => string;
}

export interface TPipe {
  new (): IPipe;
}

export abstract class Pipe {
  abstract process(input: string): string;
}
