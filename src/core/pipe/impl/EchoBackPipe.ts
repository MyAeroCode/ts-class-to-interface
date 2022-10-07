import { Pipe, IPipe } from "@core/pipe/Pipe";

export class EchoBackPipe extends Pipe implements IPipe {
  protected processImpl(input: string): string {
    return input;
  }
}
