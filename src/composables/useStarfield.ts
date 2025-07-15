import { onMounted } from "vue";

export function useStarfield(canvasId = "starfield") {
  onMounted(() => {
    const canvas = document.getElementById(
      canvasId
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.2 + 0.05,
    }));

    const draw = () => {
      // ✅ ctx و canvas در این بلاک حتماً مقدار دارند
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = () => {
      for (const star of stars) {
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();
  });
}
