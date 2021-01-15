import { Diff } from "./diff.js";
import assert from "assert"; 
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
let currentDir = dirname(fileURLToPath(import.meta.url));
let text = String(fs.readFileSync(`${currentDir}/diff.test.1.txt`));
let diff = Diff(text);
describe("Diff tests", () => {
    it("Can identify hunk range information lines", () => {
        let hunks = diff.hunks;
        assert.strictEqual(hunks.length, 2, "Should contains 2 hunks");
    });
    it("Can identify added lines", () => {
        let added
    });
});