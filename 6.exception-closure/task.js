function parseCount (isNamber) {
    let errorOut;
    
    if(!(Number.parseInt(isNamber))) {
        errorOut = new Error('Невалидное значение');
        return errorOut;
    }
    else return Number.parseInt(isNamber);
}

function validateCount (isNamber) {
    let isNamberValidate;
    isNamberValidate = parseCount (isNamber);
    
    if(isNamberValidate) {
        return isNamberValidate;
    }
    else {
        return parseCount (isNamber);
    }
}

function triangleExists(a,b,c) {
    if(!((a < (b + c)) && (b < (a + c)) && (c < (b + a)))) {
        return new Error('Треугольник с такими сторонами не существует');
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter (a,b,c) {
        if (triangleExists(a,b,c)){
            return triangleExists(a,b,c);
        }
        else {
            return this.a + this.b + this.c;}
    }

    getArea (a,b,c) {
        if (triangleExists(a,b,c)){
            return triangleExists(a,b,c);
        }
        else {
            let p;
            p = this.getPerimeter(a,b,c) / 2;
            return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
        }
    }
}

function getTriangle(a,b,c) {
    const newTriangle = new Triangle(a,b,c);

    newTriangle.getPerimeter (a,b,c);
    newTriangle.getArea (a,b,c);
    
    return newTriangle;
}

//console.log(getTriangle(2,5,5));
