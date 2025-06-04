// let num1 =Number(document.getElementById("num1").innerHTML)
// let num2=Number(document.getElementById("num2").innerText)
// document.getElementById("result").innerText = num1 + num2


document.getElementById("taxform").addEventListener('submit', function (event) {
    event.preventDefault()

    let basic = Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)

    //Gross Salary
    function calculate_gross(basic, benefits) {
        return basic + benefits
    }

    let gross = calculate_gross(basic, benefits)
    document.getElementById("gross").innerHTML = gross;

    //NHIF
    let nhif = calc_nhif(gross);
    document.getElementById("nhif").innerHTML = nhif.toFixed(2);

    //NSSF
    let nssf = calc_nssf(gross);
    document.getElementById("nssf").innerHTML = nssf.toFixed(2);

    //NHDF
    let ndhf = calc_ndhf(gross);
    document.getElementById("ndhf").innerHTML = ndhf.toFixed(2);

    //Taxable income
    let taxable = calc_taxable_income(gross, nhif, nssf, ndhf);
    document.getElementById("taxable").innerHTML = taxable.toFixed(2);

    //Paye
    let paye = calc_paye(taxable);
    document.getElementById("paye").innerHTML = paye.toFixed(2)

    // Net Slary
    let net = calc_netsalary(gross,nhif, nssf, ndhf, paye)
    document.getElementById("net").innerHTML = net.toFixed(2)
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
    let nssf=gross*nssf_rate
    if (gross<=18000){
        gross*nssf_rate
    } else {
        nssf=18000*nssf_rate
    }
    return nssf
}

//NHDF
function calc_ndhf(gross, ndhf_rate = 0.015) {
    let ndhf = gross * ndhf_rate;
    return ndhf;
}

//Taxable Income
function calc_taxable_income(gross,nhif,nssf,ndhf){
    let income = gross - (nhif + nssf + ndhf)
    return income;
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

//NET SALARY
function calc_netsalary(gross,nhif, nssf, ndhf, paye){
    let net_salary = gross -(nhif + nssf + ndhf + paye)
    return net_salary;
}
 