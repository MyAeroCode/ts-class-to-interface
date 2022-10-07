import prettier from "prettier";

import { Pipe, IPipe } from "@core/pipe/Pipe";

export class RemoveCommentPipe extends Pipe implements IPipe {
  process(input: string): string {
    const output = input.replaceAll(
      /((\/\/[\s\S]+?$)|(\/\*[\s\S]+?\*\/))/gm,
      ""
    );
    return prettier.format(output);
  }
}
