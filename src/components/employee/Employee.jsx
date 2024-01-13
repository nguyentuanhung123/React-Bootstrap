import EditEmployee from "./EditEmployee";

const Employee = ({ employee }) => {
    return (
        <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.date_of_birth}</td>
            <td>{employee.age}</td>
            <td className="d-flex">
                <EditEmployee />
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default Employee;