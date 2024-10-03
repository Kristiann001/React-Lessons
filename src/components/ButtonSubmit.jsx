//onSubmit
function ButtonSubmit() {

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.firstName.value)
        console.log(e.target.lastName.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="firstName"
                placeholder="First Name"
                />
                <input 
                name="lastName"
                placeholder="Last Name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ButtonSubmit
