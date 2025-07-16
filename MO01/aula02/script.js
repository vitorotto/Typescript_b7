const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const btnCalc = document.getElementById("calc");
const res = document.getElementById("resultado");

const somar = (n1, n2) => {
    if (typeof n1 == 'number' && typeof n2 == 'number') 
        return n1 + n2;
    else {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
};

btnCalc.addEventListener('click', () => {
    res.innerHTML = somar(n1.value, n2.value);
});