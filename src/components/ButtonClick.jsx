//onClick
function ButtonClick() {

    const money = 2000; 

    function handleClick(){
        alert(`You have received ${money} Ksh`)
    }

    return (
        <div>
            <button onClick={handleClick}>Click Now!</button>
        </div>
    )
}

export default ButtonClick
