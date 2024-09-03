// import { FaUserEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

const Employee = () => {
  return (
    <main className="h-screen w-screen bg-black flex items-start justify-center pt-20">
      <div className="flex items-center justify-center flex-col gap-10 capitalize">
        <div className="flex items-center justify-center gap-8">
          <input
            className="h-8 w-32 rounded-md p-1 text-lg outline-none"
            type="number"
            placeholder="Employee Id"
            name="employeeId"
          />
          <input
            className="h-8 w-52 rounded-md p-1 text-lg outline-none"
            type="text"
            placeholder="First Name"
            name="firstname"
          />
          <input
            className="h-8 w-52 rounded-md p-1 text-lg outline-none"
            type="text"
            placeholder="Last Name"
            name="lastname"
          />
          <input
            className="h-8 w-52 rounded-md p-1 text-lg outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex items-center justify-center gap-8">
          <input
            className="h-8 w-52 rounded-md p-1 text-lg outline-none"
            type="text"
            placeholder="Position"
            name="position"
          />
          <input
            className="h-8 w-52 rounded-md p-1 text-lg outline-none"
            type="text"
            placeholder="Department"
            name="department"
          />
          <input
            className="h-8 w-40 rounded-md p-1 text-lg outline-none"
            type="date"
            placeholder="Hire Date"
            name="hiredate"
          />
        </div>
        <button className="h-8 w-16 bg-red-600 rounded-md text-lg font-medium">
          Add
        </button>
      </div>
    </main>
  );
};

export default Employee;
