// Crea una función llamada `swap()` que reciba un array y dos parametros 
// que sean indices del array. La función deberá intercambiar la posición 
// de los valores de los indices que hayamos enviado como parametro. Retorna 
// el array resultante.

// Sugerencia de array:

let arr=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(arr,idx1,idx2){
    let item1=arr[idx1];
    let item2=arr[idx2]
    arr.splice(idx2,1,item1)
    arr.splice(idx1,1,item2)
    console.log(arr)
}
swap(arr,0,1)