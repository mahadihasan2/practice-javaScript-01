const firstName = prompt("Enter Your First Name")
const lastName = prompt('Enter Your Last Name')
const FullName = firstName + " "+ "  " + lastName
const fullNameTo = FullName.toUpperCase()
const fullNameToSlice = fullNameTo.slice(0,7)
document.write(fullNameToSlice)