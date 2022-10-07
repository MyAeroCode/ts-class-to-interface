import * as path from "path";
import * as fs from "fs";

import { RemoveCommentPipe } from "@core/pipe/impl/RemoveCommentPipe";

describe("RemoveCommentPipe", () => {
  let pipe: RemoveCommentPipe;

  beforeAll(() => {
    pipe = new RemoveCommentPipe();
  });

  describe("process", () => {
    it("should delete all comments", async () => {
      const input = fs
        .readFileSync(path.resolve(__dirname, "input.ts"))
        .toString();

      const expected = fs
        .readFileSync(path.resolve(__dirname, "expected.ts"))
        .toString();

      const actual = pipe.process(input);

      expect(actual).toBe(expected);
    });
  });
});
