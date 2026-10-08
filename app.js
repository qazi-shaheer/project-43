function showBox() {
    document.getElementById("hidebox").classList.add("show")
}

let student = document.getElementById("friends");
let changeStudents = student.getElementsByTagName("p");
console.log(changeStudents);

let table = document.getElementsByTagName("td");
for (let i = 0; i < table.length; i++) {
    table[i].style.backgroundColor = "blue";
    table[i].style.color = "white";
}

function changeImage() {
    document.getElementById("myImage").classList.add("imageEffect");
}

function resetImage() {
    document.getElementById("myImage").classList.remove("imageEffect");
}