document.querySelectorAll(".buttons button:first-child").forEach(btn => {
    btn.addEventListener("click", () => {
        const divBombeiro = btn.closest(".div-bombeiro");
        const input = divBombeiro.querySelector("input");
        input.disabled = false;
        input.focus();

         input.addEventListener("blur", () => {
            input.disabled = true;
        }, { once: true }); 
    });
});

document.querySelectorAll(".buttons button:nth-child(2)").forEach(btn => {
    btn.addEventListener("click", () => {
        const divBombeiro = btn.closest(".div-bombeiro");
        const input = divBombeiro.querySelector("input");
        input.value = ''; 
    });
});