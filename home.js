const buttons = document.querySelectorAll(".snake, .click, .pong, .gograv, .minis, .f2048, .eyes, .idk, .dox");

buttons.forEach(button => {
    let isSpinning = false;
    
    button.addEventListener("mouseenter", function() {
        if (isSpinning) return;
        
        isSpinning = true;
        
        button.classList.remove("spin");
        void button.offWidth;
        button.classList.add("spin")
    });
    
    button.addEventListener("animationend", function(event){
        if (event.animationName !== "spin") return;
        
        isSpinning = false;
        button.classList.remove("spin");

    });
});