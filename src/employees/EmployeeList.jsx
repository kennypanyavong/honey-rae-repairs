import { useEffect, useState } from "react"
import "./Employees.css"
import { getStaffUsers } from "../services/userService.jsx"
import { User } from "../users/User.jsx"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray)
    })
  }, [])

  return (
    <div>
      {employees.map((employeeObj) => {
        return <User user={employeeObj} />
      })}
    </div>
  )
}
