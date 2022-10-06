

fetch('/weather?address=philadephia').then((response) => {
    response.json().then((data) => {
        if (data.error){
            console.log(data.error) 
            } else {
                console.log(data.location)
                console.log(data.forecast)
        }
    })
})