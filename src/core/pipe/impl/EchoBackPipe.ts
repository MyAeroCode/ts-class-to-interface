import { Pipe, IPipe } from "@core/pipe/Pipe";

export class EchoBackPipe extends Pipe implements IPipe {
  process(input: string): string {
    return input;
  }
}
