//your JS code here. If required.
function manipulateArray() {
            return new Promise((res,rej)=>{
				setTimeout(()=>{
					res([1,2,3,4])
				},3000)
			})
	.then((arr)=>{
		return new Promise((res,rej)=>{
			setTimeout(()=>{
				let evenArr = arr.filter((i)=>i%2==0)
					document.getElementById('output').textContent = evenArr.join(",")
					res(evenArr)
				},1000)
		})
	})
	.then((evenArr)=>{
		return new Promise((res,rej)=>{
			setTimeout(()=>{
				let doubleArr = evenArr.map((i)=>i*2)
				document.getElementById('output').textContent = doubleArr.join(",")
					res(doubleArr)
				},2000)
		})
	})
        }

        manipulateArray();