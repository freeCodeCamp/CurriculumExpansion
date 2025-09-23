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
    radius: GetElements<HTMLElement>('radius'),
    width: GetElements<HTMLElement>('width'),
    height: GetElements<HTMLElement>('height'),
    base: GetElements<HTMLElement>('base'),
    triangleHeight: GetElements<HTMLElement>('triangleHeight')
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
    if(shapeType == "circle"){ 
      Object.entries(propertyGroups).forEach(value => { 
        if(value[0] != "circle"){ 
         value[1].classList.add("hidden")
        }
        if(value[0] == "circle"){ 
              value[1].classList.remove("hidden")
        }
      })
    }else if(shapeType == "triangle"){ 
    Object.entries(propertyGroups).forEach(value => { 
        if(value[0] != "triangle"){ 
         value[1].classList.add("hidden")
        }
        if(value[0] == "triangle"){ 
              value[1].classList.remove("hidden")
        }
      })


    }else if (shapeType == "rectangle"){ 
       Object.entries(propertyGroups).forEach(value => { 
        if(value[0] != "rectangle"){ 
         value[1].classList.add("hidden")
        }
        if(value[0] == "rectanble"){ 
              value[1].classList.remove("hidden")
        }
      })
    }
}
const calculateShape = () => { 

}



shapeTypeSelect.onchange = (e:Event) => { 
    e.preventDefault()
    const Val = e.currentTarget as HTMLSelectElement
    if(!Val){ 
    return "target value not found"
    }

    chooseShape(Val.value) 
}

