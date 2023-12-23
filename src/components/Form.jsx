

const Form = ({ handleOnSubmit, handleOnChangeName, nameValue, handleOnChangeEmail, emailValue }) => {
    return <>
        <form action="" onSubmit={handleOnSubmit}>
            <label >Name:     </label>
            <input value={nameValue} type="text" name="username" onChange={handleOnChangeName}/>
            <label >Email: </label>
            <input value={emailValue} type="text" name="Email" onChange={handleOnChangeEmail}/>
            <button>Submit</button>
        </form>
    </>
}

export default Form;

