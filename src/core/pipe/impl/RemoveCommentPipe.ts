import { Pipe, IPipe } from "@core/pipe/Pipe";

export class RemoveCommentPipe extends Pipe implements IPipe {
  protected processImpl(input: string): string {
    const output = input.replaceAll(
      /((\/\/[\s\S]+?$)|(\/\*[\s\S]+?\*\/))/gm,
      ""
    );
    return this.formatCode(output);
  }
}
