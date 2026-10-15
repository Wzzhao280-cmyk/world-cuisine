// 年份
document.getElementById("year").textContent = new Date().getFullYear();

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 卡片进入视口时的轻微高亮（可选增强）
const cards = document.querySelectorAll(".glass-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => observer.observe(card));
