
const randomArr = (arr) => {
    //es para calcular un numero aleatorio, numero random
    const index =  Math.floor(Math.random() * arr.length)

    return arr[index]  
}

export default randomArr