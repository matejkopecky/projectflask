const symbols = ["🍒", "🍋", "🍉", "⭐", "💎", "🔔"];
    let spinning = false;

    function randomSymbol() {
      return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function spin() {
      if (spinning) return;
      spinning = true;

      const reels = [
        document.getElementById("r1"),
        document.getElementById("r2"),
        document.getElementById("r3")
      ];

      const button = document.getElementById("spinButton");
      const result = document.getElementById("result");

      button.disabled = true;
      result.textContent = "Točíme...";

      // Animace otáčení
      const animation = setInterval(() => {
        reels.forEach(reel => {
          reel.textContent = randomSymbol();
        });
      }, 80);

      // Zastavení po 1,5 sekundě
      setTimeout(() => {
        clearInterval(animation);

        const a = randomSymbol();
        const b = randomSymbol();
        const c = randomSymbol();

        reels[0].textContent = a;
        reels[1].textContent = b;
        reels[2].textContent = c;

        if (a === b && b === c) {
          result.textContent = "🎉 JACKPOT! 🎉";
        } else if (a === b || b === c || a === c) {
          result.textContent = "✨ Dva stejné symboly!";
        } else {
          result.textContent = "Zkus to znovu!";
        }

        spinning = false;
        button.disabled = false;
      }, 1500);
    }