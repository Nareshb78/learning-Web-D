// import express from 'express'
// const app = express()
// const port = 3000

// app.get('/',(req,res)=>{
//     res.send('Hii')
// })
// app.get('/home',(req,res)=>{
//     res.send('At home yoo')
// })

// app.listen(port,()=>{
//     console.log(`Your port is ${port}`)
// })

const url = 'https://weatherapi-com.p.rapidapi.com/alerts.json?q=london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}