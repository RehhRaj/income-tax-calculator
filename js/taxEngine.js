export function calculateTaxDetails(grossSalary, taxPaid) {
    const STANDARD_DEDUCTION = 75000;
    let taxableIncome = Math.max(0, grossSalary - STANDARD_DEDUCTION);

    let tax = 0;

    if (taxableIncome > 400000)
        tax += Math.min(taxableIncome - 400000, 400000) * 0.05;
    if (taxableIncome > 800000)
        tax += Math.min(taxableIncome - 800000, 400000) * 0.10;
    if (taxableIncome > 1200000)
        tax += Math.min(taxableIncome - 1200000, 400000) * 0.15;
    if (taxableIncome > 1600000)
        tax += Math.min(taxableIncome - 1600000, 400000) * 0.20;
    if (taxableIncome > 2000000)
        tax += Math.min(taxableIncome - 2000000, 400000) * 0.25;
    if (taxableIncome > 2400000)
        tax += (taxableIncome - 2400000) * 0.30;

    // Rebate
    if (taxableIncome <= 1200000) {
        tax = Math.max(0, tax - 60000);
    }

    // Marginal Relief
    if (taxableIncome > 1200000) {
        const excess = taxableIncome - 1200000;
        if (tax > excess) tax = excess;
    }

    const cess = tax * 0.04;
    const totalTax = tax + cess;
    const balance = totalTax - taxPaid;

    return {
        taxableIncome,
        tax,
        cess,
        totalTax,
        balance
    };
}
