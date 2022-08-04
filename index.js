function clickNum(number) {
    alr_text = document.getElementById("enter_calc_num").innerText
    document.getElementById("enter_calc_num").textContent = alr_text + ' ' + number
}

function clearCalc() {
    document.getElementById("enter_calc_num").textContent = ''
}