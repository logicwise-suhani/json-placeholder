import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return(
        <>
        <h3>Home page</h3>
        <button onClick={() => navigate("/page")}>Go to Page</button>
        </>
    )
}

export default Home;