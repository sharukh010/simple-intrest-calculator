window.addEventListener("load", () => {

    const calculate = document.getElementsByClassName("calculate")[0];
    const Intrest = document.getElementsByClassName("Intrest")[0];
    console.log(Intrest);
    console.log(calculate);
    calculate.addEventListener("click", async () => {
        const principle = document.getElementsByClassName("principle")[0].value;
        const rate = document.getElementsByClassName("rate")[0].value;
        const time = document.getElementsByClassName("time")[0].value;
        const response = await fetch(`http://localhost:3001/?principle=${principle}&rate=${rate}&time=${time}`);
        const data = await response.text();
        document.getElementsByClassName("Intrest")[0].innerText = data;
    });
});