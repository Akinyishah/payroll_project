// let num1 =Number(document.getElementById("num1").innerHTML)
// let num2=Number(document.getElementById("num2").innerText)
// document.getElementById("result").innerText = num1 + num2


document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault()

    //Gross Salary
    function calculate_gross(basic, benefits) {
        return basic + benefits

    }
    let basic = Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)

    let gross = calculate_gross(basic, benefits)
    document.getElementById("gross").innerHTML = gross;

    //NHIF
    let nhif = calc_nhif(gross);
    document.getElementById("nhif").innerHTML = nhif;

    //NSSF
    let nssf = calc_nssf(gross);
    document.getElementById("nssf").innerHTML = nssf;

    //NHDF
    let nhdf = calc_nhdf(gross);
    document.getElementById("nhdf").innerHTML = nhdf;

    //Taxable income
    let taxable = calc_taxable_income(gross, nhif, nssf, ndhf);
    document.getElementById("income").innerHTML = taxable;

    //Payee
    let payee = calc_payee(taxable);
    document.getElementById("payee").innerHTML = payee
})
//NHIF
function calc_nhif(gross) {
    let nhif_contribution;
    if (gross <= 5999) {
        nhif_contribution = 150;
    } else if (gross >= 6000 && gross <= 7999) {
        nhif_contribution = 300;
    } else if (gross >= 8000 && gross <= 11999) {
        nhif_contribution = 400;
    } else if (gross >= 12000 && gross <= 14999) {
        nhif_contribution = 500;
    } else if (gross >= 15000 && gross <= 19999) {
        nhif_contribution = 600;
    } else if (gross >= 20000 && gross <= 24999) {
        nhif_contribution = 750;
    } else if (gross >= 25000 && gross <= 29999) {
        nhif_contribution = 850;
    } else if (gross >= 30000 && gross <= 34999) {
        nhif_contribution = 900;
    } else if (gross >= 35000 && gross <= 39999) {
        nhif_contribution = 950;
    } else if (gross >= 40000 && gross <= 44999) {
        nhif_contribution = 1000;
    } else if (gross >= 45000 && gross <= 49999) {
        nhif_contribution = 1100;
    } else if (gross >= 50000 && gross <= 59999) {
        nhif_contribution = 1200;
    } else if (gross >= 60000 && gross <= 69999) {
        nhif_contribution = 1300;
    } else if (gross >= 70000 && gross <= 79999) {
        nhif_contribution = 1400;
    } else if (gross >= 80000 && gross <= 89999) {
        nhif_contribution = 1500;
    } else if (gross >= 90000 && gross <= 99999) {
        nhif_contribution = 1600;
    } else {
        nhif_contribution = 1700
    }
    return nhif_contribution
}

// NSSF
function calc_nssf(gross, nssf_rate = 0.06) {
    return gross * nssf_rate;
}

//NHDF
function calc_nhdf(gross, nhdf_rate = 0.015) {
    return gross * nhdf_rate;
}

//Taxable Income
function calc_taxable_income(gross,nssf,nhdf,nhif){
    return gross-(nssf + nhdf + nhif)
}

//PAYE
function calc_paye(income){
    let paye=0;
    if (income <=24000){
        paye=0;
    } else if(income<=32333){
        paye=(24000 * 0.1) + ((income-24000) * 0.25) -2400;
    } else if(income<=50000){
        paye=(24000 * 0.1) + (8333 *0.25) + ((income-32333) *0.3)-2400;
    } else if (income<=80000){
        paye=(24000 * 0.1) + (8333 * 0.25) +((467667*0.3)) + ((income-50000)*0.325)-2400;
    } else{
        paye=(24000 * 0.1) +(8333*0.25) +(467667 * 0.3) +(300000*0.325) +((income-800000)*0.35)-2400
    }
    return paye;
}
//Calculations
let gross_salary=gross_salary(basic_salary,benefits);
let nhif =calc_nhif(gross_salary);
let nssf=calc_nssf(gross_salary);
let ndhf=calc_nhdf(gross_salary);
let taxable_income=taxable_income(gross_salary,nssf,nhif,ndhf)
let payee=calc_paye(taxable_income)
