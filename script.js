// console.log("Javascrit")
// // random name generator
// let random = Math.random();
// let first,second,third;
// if(random < 0.33){
//     first = "Super";
// }
// else if(random>0.33 && random<0.66){
//     first = "Attack";
// }
// else{
//     first = "One";
// }

// random = Math.random();
// if(random < 0.33){
//     second = "Truck";
// }
// else if(random>0.33 && random<0.66){
//     second = "Bus";
// }
// else{
//     second = "Bike";
// }

// random = Math.random();
// if(random < 0.33){
//     third = "Red";
// }
// else if(random>0.33 && random<0.66){
//     third = "Black";
// }
// else{
//     third = "Black";
// }

// console.log(first , second , third);

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr.length);

// console.log(arr.splice(1,3));
// let arr2=[200,300];
// let arr3 = [400,500];
// console.log(arr.concat(arr2,arr3));

const laptop = {
    name:"MSI",
    screenSize : 16,
    keyboard: "SteelSeries",
    mouse :{
        name:"Cosmic Byte",
        dpi:1600
    },
    change: function(newdpi){
       this.mouse.dpi= newdpi;
    }
};

let content = `
    <main>
        <h2>Laptop</h2>
        <div ><ul class="container">
            <li class="first">Name : ${laptop.name}</li>
            <li>ScreenSize : ${laptop.screenSize}</li>
            <li>Keyboard : ${laptop.keyboard}</li>
            <li>Mouse Name : ${laptop.mouse.name}</li>
            <li>Mouse DPI : ${laptop.mouse.dpi}</li>
        </ul></div>
    </main>
`;
document.body.innerHTML = content;

