import { useState } from "react";

const AdminLogin = ({ onLogin }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="dark:bg-black dark:text-white max-w-md mx-auto mt-20 p-8 border rounded-xl">

      <h2 className="text-3xl font-bold mb-8">
        Admin Login
      </h2>

      <form onSubmit={submit} className="space-y-4">

        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="w-full p-3 rounded border"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-3 rounded border"
        />

        <button className="w-full py-3 bg-indigo-600 rounded">
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;