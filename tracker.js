function doMath() {
    var name = document.querySelector("name").value;
    var datepicker = document.querySelector("datepicker").value;
    var amount = document.querySelector("amount").value;

    let sum = parseInt(name) + parseInt(datepicker) + parseInt(amount);
    document.write(sum);
}