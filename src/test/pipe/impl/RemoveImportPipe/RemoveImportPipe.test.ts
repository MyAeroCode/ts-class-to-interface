import * as path from "path";
import * as fs from "fs";

import { RemoveImportPipe } from "@core/pipe/impl/RemoveImportPipe";

describe("RemoveCommentPipe", () => {
  let pipe: RemoveImportPipe;

  beforeAll(() => {
    pipe = new RemoveImportPipe();
  });

  describe("process", () => {
    it("should delete all import statements", async () => {
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
