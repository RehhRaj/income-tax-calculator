import { calculateTaxDetails } from "./taxEngine.js";

export function updateUI() {
    const gross = parseFloat(document.getElementById("grossSalary").value) || 0;
    const paid = parseFloat(document.getElementById("taxPaid").value) || 0;

    const result = calculateTaxDetails(gross, paid);

    document.getElementById("taxableIncome").value = result.taxableIncome.toFixed(0);
    document.getElementById("incomeTax").value = result.tax.toFixed(2);
    document.getElementById("cess").value = result.cess.toFixed(2);
    document.getElementById("totalTax").value = result.totalTax.toFixed(2);
    document.getElementById("balanceTax").value = result.balance.toFixed(2);
}
