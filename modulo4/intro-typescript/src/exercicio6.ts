function matematicaBasica (num1: number, num2: number) : any {
    const som: number = num1 + num2
    const sub: number = num1 - num2
    const multi: number = num1 * num2
    
    function qualMaior (): any {
        if(num1 > num2){
            return num1
        }else if (num2 > num1) {
            return num2
        }else{
            return "São iguais"
        }
    }

    console.log(som, sub, multi, qualMaior())
}

matematicaBasica(10, 10)