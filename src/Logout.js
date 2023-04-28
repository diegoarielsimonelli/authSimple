import { useAuth0 } from "@auth0/auth0-react"

const Loginout = () => {
    const { Loginout } = useAuth0();
    return (
        <button onClick={() => Loginout({ returnTo: window.location.origin })}>Login</button>
    )
}

export default Loginout