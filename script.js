window.addEventListener("keydown", showEvent);

function showEvent(e) {
    document.getElementById("insert").innerHTML = 
    ` 
        <div class="key">
            ${e.key === " " ? "Space" : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `;
    //Conditional (Ternary) operator used in the first div
}