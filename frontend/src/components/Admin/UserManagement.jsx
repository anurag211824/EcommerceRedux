import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "admin",
    },
    {
      _id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "customer",
    },
    {
      _id: 3,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      role: "customer",
    },
  ];

  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //Default
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...fromData, [name]: value });
    console.log(fromData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };
  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, role: newRole });
  };
  const handleDeleteuser = (userId)=>{
   if(window.confirm("Are you sure you want to delete this user ?"))
    console.log("deleting user with userId",userId);
  }
  return (
    <div className="max-w-[1000px] mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Mangement</h2>
      {/* Add New user Form */}
      <div className="p-6 mb-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={fromData.name}
              onChange={handleChange}
              className="w-[80%] p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="name"
              value={fromData.email}
              onChange={handleChange}
              className="w-[80%] p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="name"
              value={fromData.password}
              onChange={handleChange}
              className="w-[80%] p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={fromData.role}
              id="role"
              onChange={handleChange}
              className="w-[80%] p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>
      {/* User List Management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b hover:bg-gray-50" key={user.id}>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    name=""
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    id=""
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600" onClick={() => handleDeleteuser(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
