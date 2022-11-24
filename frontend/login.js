function fetchData(InputEmail, InputPassword) {

    fetch('http://localhost:1200/login', {
            method: 'POST',
            body: JSON.stringify({
                email: InputEmail,
                password: InputPassword,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

const button = document.getElementById('loginform')
button.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('clicked')
    const InputEmail = document.getElementById('exampleInputEmail1')
    const InputPassword = document.getElementById('exampleInputPassword1')
    fetchData(InputEmail, InputPassword)
})