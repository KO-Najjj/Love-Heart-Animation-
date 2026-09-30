const ui = document.getElementById("ui");

const totalItems = 60;

for (let i = 1; i <= totalItems; i++) {
    const love = document.createElement("div");

    love.className = "love";

    // Give each "I love you" a different number
    // so CSS can stagger the animation timing
    love.style.setProperty("--i", i);

    love.innerHTML = `
        <div class="love_horizontal">
            <div class="love_vertical">
                <div class="love_word">I love you</div>
            </div>
        </div>
    `;

    ui.appendChild(love);
}
