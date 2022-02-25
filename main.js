

  //#2

let checkAge= (age >= 18)
console.log(checkAge)
let qwe= confirm('Родители Разрешили?')

let age = +prompt('Возраст?')
function checkAge(age){
	return (age >= 18) ? true : confirm('Родители Разрешили?')	
}
console.log(checkAge(age))
// // -------------------
let age = +prompt('Возраст?')
function checkAge(age){
	return (age >= 18) || confirm('Родители Разрешили?')
}
console.log(checkAge(age))

   //#3

alert( 1.35.toFixed(1) ); // 1.4  насколько я понял 
alert( 2.35.toFixed(1));
alert( 3.35.toFixed(1));
alert( 4.35.toFixed(1));
alert( 5.35.toFixed(1));
alert( 6.35.toFixed(1));
alert( 7.35.toFixed(1));
alert( 8.35.toFixed(1));
alert( 9.35.toFixed(1));   //по моим "исследованиям" если х.у1 если х <= y то округляет в большую сторону ес х > у то в меньшую сторону


// Math

//#1

console.log(Math.min( 4, -2, 5, 19, -130, 0, 10))
console.log(Math.max( 4, -2, 5, 19, -130, 0, 10))

			let arr = [  4, -2, 5, 19, -130, 0, 10]

			let min = arr[0]
			let max = arr[0]
				for ( let i = 1; i < arr.length; i++){
					if ( arr[i] < min) min=arr[i]
				
					if ( arr[i] > max) max = arr[i] 
				}
				console.log(min)
				console.log(max)


		//Random
	console.log(Math.round(Math.random()*100 ))

	//#3



let arr = [10];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.round(Math.random()*100 );
  console.log(arr[i]);
}

//To sting
const arr = [ 1,2,3,4,5];
let text = arr.toString();
console.log(text)



