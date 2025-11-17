import { useEffect, useState } from "react";
import Nav from "./Nav.jsx";
const host = import.meta.env.VITE_HOST;
function AssignTask() {
  const [members, setMembers] = useState([]);
  const [task, setTask] = useState({
    member_id: "",
    title: "",
    description: ""
  });

  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(`http://${host}/get-members`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        if (data.length > 0) {
          setTask((prev) => ({ ...prev, member_id: data[0].id }));
        }
      })
      .catch(() => setMembers([]));
  }, [token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: name === "member_id" ? Number(value) : value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://${host}/assign-task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(task)
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to assign task.");
    }
  };

  return (
    <div>
      <Nav />
      <h2>Assign Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Assign to:</label>
        <select
          name="member_id"
          value={task.member_id}
          onChange={handleChange}
          required
        >
          {Array.isArray(members) && members.length > 0 ? (
            members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.email}
              </option>
            ))
          ) : (
            <option disabled>No members found</option>
          )}
        </select>

        <label>Task Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={task.title}
          onChange={handleChange}
          required
        />

        <label>Task Description:</label>
        <textarea
          name="description"
          placeholder="Task description"
          value={task.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Assign</button>
      </form>
    </div>
  );
}

export default AssignTask;
