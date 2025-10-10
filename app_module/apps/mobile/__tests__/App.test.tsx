import { greet } from "@project/core";

test("greet from core works in React Native context", () => {
  expect(greet("RN")).toBe("Hello, RN!");
});