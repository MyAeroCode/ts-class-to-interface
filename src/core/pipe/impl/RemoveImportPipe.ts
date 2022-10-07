import { Pipe, IPipe } from "@core/pipe/Pipe";

export class RemoveImportPipe extends Pipe implements IPipe {
  protected processImpl(input: string): string {
    const output = input.replaceAll(/^import([^;]+);$/gm, "");
    return this.formatCode(output);
  }
}
