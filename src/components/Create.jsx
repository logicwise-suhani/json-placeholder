import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Create({ users, setUsers, nextId, setNextId }) {
    const navigate = useNavigate();
    const { editId } = useParams();

    const [data, setData] = useState({
        title: "",
        body: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUsers = {
            ...data,
            userId: nextId,
            id: nextId
        };

        setUsers([...users, newUsers]);
        setNextId(prev => prev + 1);
        navigate("/page");
    }

    return (
        <>
            <h3>This is create page</h3>
            <form onSubmit={handleSubmit}>
                <label>Title: {" "}</label>
                <input placeholder="Create title" name="title" value={data.title} onChange={handleChange} />
                <br /> <br />
                <label>Body: {" "}</label>
                <textarea placeholder="Create body" name="body" value={data.body} onChange={handleChange}
                    style={{ height: "200px", width: "300px" }} />
                <br /> <br />
                <button>Create</button>
            </form>
        </>
    )
}

export default Create;