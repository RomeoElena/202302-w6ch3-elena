import React from "react";
import { screen, render } from "@testing-library/react";
import { Keyboard } from "./keyboard";

describe("Given a Keyboard component", () => {
  describe("When it is rendered", () => {
    test("then it should appear in the document", () => {
      render(<Keyboard />);
      const element = screen.getAllByRole("button");
      const elementCount = 11;
      expect(element.length).toBe(elementCount);
    });
  });
});
