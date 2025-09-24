import { TypeIcon } from "lucide-react";

const GetElements = <T extends HTMLElement>(selector:string): T => { 
 const el = document.getElementById(selector)
     if (!el) throw new Error(`Element not found: ${selector}`);
 return el as T
}
const shapeTypeSelect = GetElements<HTMLSelectElement>('shapeType');
const propertyGroups = {
    circle: GetElements<HTMLElement>('circleProps'),
    rectangle: GetElements<HTMLElement>('rectangleProps'),
    triangle: GetElements<HTMLElement>('triangleProps')
};

const propertyInputs = {
    radius: GetElements<HTMLInputElement>('radius'),
    width: GetElements<HTMLInputElement>('width'),
    height: GetElements<HTMLInputElement>('height'),
    base: GetElements<HTMLInputElement>('base'),
    triangleHeight: GetElements<HTMLInputElement>('triangleHeight')
};
const resultCard = GetElements<HTMLElement>('resultCard');
const resultName = GetElements<HTMLElement>('resultName');
const resultType = GetElements<HTMLElement>('resultType');
const resultDetails = GetElements<HTMLElement>('resultDetails');
const resultArea = GetElements<HTMLElement>('resultArea');
const resultIconContainer = GetElements<HTMLElement>('resultIconContainer');
const resultIcon = GetElements<HTMLElement>('resultIcon');


const hideElement =  ()=> { 

}
const showElement = () => { 

}
const chooseShape = (shapeType:string) => { 
    console.log(shapeType)
   
      Object.entries(propertyGroups).forEach(([name, group]) => { 
        if(name === shapeType){ 
          group.classList.remove("hidden")
        }else{ 
          group.classList.add("hidden")
        }
      })
    
    
}
const calculateShape = (shapeTypeSelect:string) => { 
const type = shapeTypeSelect 
}


shapeTypeSelect.onchange = (e:Event) => { 
    e.preventDefault()
    const Val = e.currentTarget as HTMLSelectElement
    if(!Val){ 
    return "target value not found"
    }

    chooseShape(Val.value) 
}

  const handleInput =(e:Event) =>{ 
    const input = e.target as HTMLInputElement
    console.log("curretn value", input.value)
 }

  for (const [, input] of Object.entries(propertyInputs)) {
  input.oninput = handleInput;
}
