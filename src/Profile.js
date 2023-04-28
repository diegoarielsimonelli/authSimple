import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Cargando...</div>
    }
    return (
        isAuthenticated && (
            <>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Nickname:{user.nickname}</p>
            </>
        )
    )
}

export default Profile