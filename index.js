function clickNum(number) {
    alrText = document.getElementById("enter_calc_num").innerText
    document.getElementById("enter_calc_num").textContent = alrText + ' ' + number
}

function clearCalc() {
    document.getElementById("enter_calc_num").textContent = ''
}