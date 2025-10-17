interface Shape {
  type: string;
}

interface Circle extends Shape {
  type: "circle";
  radius: number;
}
interface Rectangle extends Shape {
  type: "rectangle";
  width: number;
  height: number;
}

interface Triangle extends Shape {
  type: "triangle";
  base: number;
  height: number;
}
type Shapes = Circle | Triangle | Rectangle;

document.addEventListener("DOMContentLoaded", () => {
  const GetElements = <T extends HTMLElement>(selector: string): T => {
    const el = document.getElementById(selector);
    if (!el) throw new Error(`Element not found: ${selector}`);
    return el as T;
  };

  const shapeTypeSelect = GetElements<HTMLSelectElement>("shape-type");
  const propertyGroups = {
    circle: GetElements<HTMLElement>("circle-props"),
    rectangle: GetElements<HTMLElement>("rectangle-props"),
    triangle: GetElements<HTMLElement>("triangle-props"),
  };

  const propertyInputs = {
    radius: GetElements<HTMLInputElement>("radius"),
    width: GetElements<HTMLInputElement>("width"),
    height: GetElements<HTMLInputElement>("height"),
    base: GetElements<HTMLInputElement>("base"),
    triangleHeight: GetElements<HTMLInputElement>("triangle-height"),
  };

  const resultText = GetElements<HTMLElement>("result-text");
  const resultCard = GetElements<HTMLElement>("result-card");

  const chooseShape = (shapeType: string) => {
    Object.entries(propertyGroups).forEach(([name, group]) => {
      if (name === shapeType) {
        group.classList.remove("hidden");
      } else {
        group.classList.add("hidden");
      }
    });
  };

  const toggleResultCard = (show: boolean) => {
    if (show) {
      resultCard.classList.add("visible");
    } else {
      resultCard.classList.remove("visible");
    }
  };

  const CalculateArea = (shape: Shapes): string => {
    switch (shape.type) {
      case "circle":
        return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
      case "rectangle":
        return `Area of Rectangle: ${shape.width * shape.height}`;
      case "triangle":
        return `Area of Triangle: ${0.5 * shape.base * shape.height}`;
      default:
        const _nonExistant: never = shape;
        return _nonExistant;
    }
  };

  const clearInput = () => {
    // clear inputs when shape type change
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  };

  function updateResult() {
    const shape = shapeTypeSelect.value;

    let result: string = "";
    if (shape === "circle") {
      result = CalculateArea({
        type: "circle",
        radius: Number(propertyInputs.radius.value),
      });
    } else if (shape === "rectangle") {
      result = CalculateArea({
        type: "rectangle",
        width: Number(propertyInputs.width.value),
        height: Number(propertyInputs.height.value),
      });
    } else if (shape === "triangle") {
      result = CalculateArea({
        type: "triangle",
        base: Number(propertyInputs.base.value),
        height: Number(propertyInputs.triangleHeight.value),
      });
    }
    resultText.textContent = result;
  }

  shapeTypeSelect.oninput = (e: Event) => {
    e.preventDefault();
    // clear inputs when shape type change
    clearInput();
    const Val = e.currentTarget as HTMLSelectElement;
    if (!Val) {
      return "target value not found";
    }
    // show/hide the result card depending on whether a shape is selected
    const hasSelection = Boolean(Val.value && Val.value !== "");
    toggleResultCard(hasSelection);
    chooseShape(Val.value);
    updateResult();
  };
  const handleInput = (e: Event) => {
    const value = Number((e.target as HTMLInputElement).value);
    if (value < 0) {
      alert("Negative values are not allowed.");
      clearInput();
    }
    updateResult();
  };

  for (const [, input] of Object.entries(propertyInputs)) {
    input.oninput = handleInput;
  }
});
