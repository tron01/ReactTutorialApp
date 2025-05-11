
const LoginBtn = () => {

    const HandleClick=()=>{
        alert("clicked");
    }

    return (
        <>
            <button onClick={HandleClick} className="btn btn-primary text-center p-3 m-2"> Login Btn </button>
        </>
    )
}

export default LoginBtn;