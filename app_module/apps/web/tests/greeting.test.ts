import { describe, it, expect } from "vitest";
import { greet } from "@project/core";

describe("greet()", () => {
    it("says hello world by default", () => {
        expect(greet()).toBe("Hello, world!");
    })
    it("greets by name", ()=> {
        expect(greet("David")).toBe("Hello, David!");
    })
})