import "./login.css"

export default function Login() {
    return (
        <>
            <div className="login__container">
                <div className="login__sidenav">
                    <div className="login__logo">
                        <img src={process.env.PUBLIC_URL + '/ey_logo.png'} alt="logo" />
                    </div>
                    <div className="login__sub">
                        <h3>EY PowerChain</h3>
                    </div>
                </div>
                <div className="login__form">
                <form>
                    <div className="form__control">
                        <label for="email">Email</label>
                        <input placeholder="Label (required)" type="email" id="email" name="email" required/>
                    </div>
                    <div className="form__control">
                        <label for="password">Password</label>
                        <input placeholder="Label (required)" type="password" id="password" name="password" required/>
                    </div>
                    <button className="login__button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}