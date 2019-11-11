let foo = (text) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let t = typeof text;
			if(t === 'string' || t === 'number')
				resolve(`promise: ${text}`)
			else
				reject(Error("failed: not string or number"))
		},3000)
	});
}

Promise.all([
	foo("Nice"),
	foo(2),
	foo("meet u"),
]).then((res)=>{
	res.forEach(t => console.log(t))
})
