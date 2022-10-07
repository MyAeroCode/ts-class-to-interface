import { IPipe, TPipe } from "@core/pipe/Pipe";

export interface IPipeLine {
  execute: (input: string) => string;
}

export interface TPipeLine {
  new (pipeTypes: TPipe[]): IPipeLine;
}

export class PipeLine implements IPipeLine {
  private readonly pipes: IPipe[];

  constructor(pipes: TPipe[]) {
    this.pipes = pipes.map((p) => new p());
  }

  execute(input: string): string {
    let output: string = input;

    for (const pipe of this.pipes) {
      output = pipe.process(output);
    }

    return output;
  }
}
