// Write your solution in this file!
const employee = {
    name: "John Smith",
    streetAddress: "123 main st."
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee};
      newObj[key]=value;
      return newObj;
        //Code to return new, updated menu object goes here
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmp = { ...employee};
    delete newEmp[key];
    return newEmp;

}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}