// let num1 =Number(document.getElementById("num1").innerHTML)
// let num2=Number(document.getElementById("num2").innerText)
// document.getElementById("result").innerText = num1 + num2


document.getElementById("form").addEventListener('submit',function(event){
    event.preventDefault()

    function calculate_gross(basic, benefits){
    return basic + benefits

}
    let basic=Number(document.getElementById("basic_salary").value)
    let benefits=Number(document.getElementById("benefits").value)

    let gross= calculate_gross(basic,benefits)
    document.getElementById("gross").innerHTML= gross
})





// function calc_gross_salary(basic,benefits){
//     let gross =basic+benefits
//     return gross
// };
//     let basic_salary=parseFloat(prompt('enter basic salary: '))
//     let benefits=parseFloat(prompt('enter benefits: '))
//     let gross_salary=calc_gross_salary(basic_salary,benefits)
//     console.log(gross_salary)   
// calc_gross_salary()