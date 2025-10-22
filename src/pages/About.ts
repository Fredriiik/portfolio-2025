export function About(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container py-5 text-light";

  el.innerHTML = `
    <div class="row align-items-center">
      <!-- Text Column -->
      <div class="col-lg-7 mb-5 mb-lg-0">
        <h1 class="display-5 fw-bold mb-4">ABOUT</h1>
        <h2 class="h4 text-secondary mb-4">I'm Fred. A frontend developer in the making.</h2>

        <p class="mb-3">
          Originally from Sweden, I've found my way to the vibrant streets of Oslo. For nearly a decade,
          I immersed myself in the dynamic world of retail, navigating through the ever-changing landscape
          of consumer trends and customer experiences. But one day, I felt the stirring of a new chapter
          beckoning me — a desire to delve into the realms of technology and digital creativity.
        </p>

        <p class="mb-3">
          In 2023, I took a leap of faith and embarked on a journey of self-discovery at Noroff School of
          Technology and Digital Media. It was here that I found my passion for frontend development,
          unlocking the doors to a world where pixels and code merge to create digital marvels.
        </p>

        <p class="mb-3">
          Beyond my love for all things tech, I find solace and joy in the simple pleasures of life.
          Movies have always been my escape, transporting me to distant lands and weaving tales of
          adventure and romance. Concerts, with their pulsating rhythms and electrifying energy, hold
          a special place in my heart. And amidst the bustle of daily life, I find serenity in tending
          to my cherished collection of plants.
        </p>

        <p class="mb-3">
          Life is a tapestry woven from countless threads of experiences and passions, and I'm committed
          to embracing every moment with curiosity and enthusiasm. So whether I'm crafting lines of code
          or lost in the melodies of a live performance, I'm always eager to explore, learn, and create.
        </p>

        <p class="text-secondary">
          Join me on this journey as we navigate the digital landscape and embrace the beauty of life's
          little wonders together.
        </p>
      </div>

      <!-- Image Column -->
      <div class="col-lg-5 text-center">
        <img
          src="/portfolio/images/portrait.jpg"
          alt="Portrait of Fredrik Mohag Håkansson"
          class="img-fluid rounded shadow-lg border border-secondary"
          style="max-width: 350px;"
        />
      </div>
    </div>
  `;

  return el;
}
