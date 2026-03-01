import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit({ users, setUsers }) {
    const navigate = useNavigate();
    const { editId } = useParams();
    const [data, setData] = useState({
        title: "",
        body: ""
    });

    useEffect(() => {
        const user = users.find(u => u.id === Number(editId));
        if (user) {
            setData(user);
        }
    }, [editId, users]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUsers = users.map(key => (
            key.id === Number(editId) ? { ...key, ...data } : key
        ))
        setUsers(updatedUsers);
        console.log(updatedUsers);
        navigate("/page");
    }

    return (
        <>
            <h2>Edit page</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: {" "}</label>
                <input placeholder="Edit title" name="title" value={data.title} onChange={handleChange} />
                <br /> <br />
                <label>Body: {" "}</label>
                <textarea placeholder="Edit body" name="body" value={data.body} onChange={handleChange}
                    style={{ height: "200px", width: "300px" }} />
                <br /> <br />
                <button>Update</button>
            </form>
        </>
    );
}

export default Edit;
