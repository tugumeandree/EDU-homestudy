
const baseUrl = 'https://pelard-n.herokuapp.com';
const secret = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';

const getToken = async ({ secret, _id }) => {
	const response = await fetch(`${baseUrl}/token/generate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ secret, _id })
	});

	const json = await response.json();
	console.log(json);
	return json.data.token;
};

export const userRegistration = async (data) => {
	console.log(data);
	try {
		const token = await getToken({ secret });
		const response = await fetch(`${baseUrl}/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			},
			body: JSON.stringify(data)
		});

		const json = await response.json();
		console.log('Registration');
		console.log(json);
	} catch (errors) {
		console.log(errors);
	}
};
export const userRegistration = async (data) => {
	console.log(data);
	try {
		const token = await getToken({ secret });
		const response = await fetch(`${baseUrl}/user/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			},
			body: JSON.stringify(data)
		});

		const json = await response.json();
		console.log('Registration');
		console.log(json);
	} catch (errors) {
		console.log(errors);
	}
};



  //INTEGRATION WITH API
  const firstName =document.getElementById('firstName').value;
  const lastName =document.getElementById('lastName').value;
  const userName =document.getElementById('userName').value;
  const password =document.getElementById('password').value;
  const phoneNumber =document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;
  
  const baseUrl = 'https://pelard-n.herokuapp.com';
  const secret = '2cfb9e9a-34a9-4843-961f-6e2639c41856-b10445eb-a0e8-4fa2-b636-015b2f1e3660';
  
  document.getElementById('create-group-button').addEventListener('click',registerUser);
  
  function getToken({secret,_id}){
  
	fetch(`${baseUrl}/token/generate`,{
	  method:'POST',
	   headers:{
  'Accept':'application/json,text/plain,*/*',
  'content-type':'application/json',
	   },
	  body:JSON.stringify({
		secret:secret,
		_id:_id
	  })
	  })
	.then((res) => res.json())
	.then((json)=>{
	  return json.data.token;
	})
  }
  
  
  
  
  
  
  function registerUser(){
	const token = getToken({ secret });
  
	fetch(`${baseUrl}/user/register`,{
	  method:'POST',
	   headers:{
  'Accept':'application/json,text/plain,*/*',
  'content-type':'application/json',
  'Authorization':token
	   },
	  body:JSON.stringify({
		firstName: firstName,
		lastName: lastName,
		userName: userName,
		password: password,
		phoneNumber: phoneNumber,
		email: email
	  })
	  })
	.then((res) => res.json())
	.then((data)=>{
  console.log(data);
	})
  }