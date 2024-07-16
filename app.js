const endDate = "19 March 2024 11:37 AM"
document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll('input')

function clock() {

    const end = new Date(endDate)
    const now = new Date()

    const diff = (end - now) / 1000

    if (diff < 0) return

    //converting to days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //converting to Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //converting to Minutes
    inputs[2].value = Math.floor(diff / 60 % 60)
    //converting to seconds
    inputs[3].value = Math.floor(diff % 60)

}


setInterval(() => {
    clock()
}, 1000);

