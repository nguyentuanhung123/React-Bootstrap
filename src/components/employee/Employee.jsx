import EditEmployee from "./EditEmployee";

const Employee = (props) => {

    const { employee } = props;

    return (
        <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.date_of_birth}</td>
            <td>{employee.age}</td>
            <td className="d-flex">
                <EditEmployee fname={employee.first_name} lname={employee.last_name} age={employee.age} />
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default Employee;