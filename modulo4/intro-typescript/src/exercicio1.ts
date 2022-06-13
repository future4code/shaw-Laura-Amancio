function checaTriangulo(a: Number, b: Number, c: Number): String {
    if(a !== b && b !== c) {
        return "Escaleno";
    }else if(a === b && b === c) {
        return "Equilátero";
    }else{
        return "Isóceles"
    }
}

console.log(checaTriangulo(4, 5, 6))