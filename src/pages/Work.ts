export function Work(): HTMLElement {
  const el = document.createElement("div");
  el.className = "container py-5 text-light";

  el.innerHTML = `
    <section class="mb-5">
      <h1 class="display-5 fw-bold mb-4 text-center">WORK</h1>
      <p class="lead text-center mx-auto" style="max-width: 800px;">
        In my two years of studying frontend development, I have built a strong foundation in web technologies,
        user experience, and modern development workflows. I’m skilled in HTML, CSS, and JavaScript, and have expanded
        my knowledge with frameworks like React and tools such as Tailwind CSS and Bootstrap. My coursework has covered
        industry best practices, project management, development platforms, and efficient workflows. I have also gained
        experience in API integration and working with CMS platforms. With a strong focus on both design and
        functionality, I’m ready to create responsive, user-friendly, and dynamic web applications.
      </p>
    </section>

    <section>
      <h2 class="text-center fw-bold mb-5 text-secondary">LATEST WORK</h2>

      <div class="row g-5">

        <!-- Holidaze -->
        <div class="col-lg-4 col-md-6">
          <div class="card bg-dark border-secondary h-100 shadow-sm">
            <img src="/portfolio/images/holidaze.png" alt="Screenshot of Holidaze project">
            <div class="card-body">
              <h3 class="card-title text-light">Holidaze</h3>
              <p class="text-secondary">Project Exam 2</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span class="badge bg-secondary">HTML</span>
                <span class="badge bg-secondary">React</span>
                <span class="badge bg-secondary">Bootstrap</span>
                <span class="badge bg-secondary">API</span>
              </div>
              <p class="card-text small">
                A modern and responsive booking platform that allows users to search, book, and manage accommodations.
                Includes an admin panel for venue managers and integrates with a RESTful API for real-time functionality.
              </p>
            </div>
            <div class="card-footer bg-transparent border-0 text-center">
              <a href="https://shimmering-malasada-8271cd.netlify.app/" class="btn btn-outline-light btn-sm me-2" target="_blank">LIVE</a>
              <a href="https://github.com/FredrikMohag/noroff-fed-pe2" class="btn btn-outline-secondary btn-sm" target="_blank">GITHUB</a>
            </div>
          </div>
        </div>

        <!-- SHOP4LIFE -->
        <div class="col-lg-4 col-md-6">
          <div class="card bg-dark border-secondary h-100 shadow-sm">
            <img src="/portfolio/images/shop4life.png" class="card-img-top" alt="Screenshot of Shop4Life project">
            <div class="card-body">
              <h3 class="card-title text-light">SHOP4LIFE</h3>
              <p class="text-secondary">JavaScript Frameworks</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span class="badge bg-secondary">HTML</span>
                <span class="badge bg-secondary">React</span>
                <span class="badge bg-secondary">Tailwind</span>
                <span class="badge bg-secondary">API</span>
              </div>
              <p class="card-text small">
                A responsive auction platform where users can list items, place bids, and manage credits.
                Built with React, Bootstrap, and the Noroff Auction API for dynamic real-time updates.
              </p>
            </div>
            <div class="card-footer bg-transparent border-0 text-center">
              <a href="https://shop-fed.netlify.app/" class="btn btn-outline-light btn-sm me-2" target="_blank">LIVE</a>
              <a href="https://github.com/FredrikMohag/Front-end-Frameworks" class="btn btn-outline-secondary btn-sm" target="_blank">GITHUB</a>
            </div>
          </div>
        </div>

        <!-- Auction -->
        <div class="col-lg-4 col-md-6">
          <div class="card bg-dark border-secondary h-100 shadow-sm">
            <img src="/portfolio/images/auction.png" class="card-img-top" alt="Screenshot of Auction project">
            <div class="card-body">
              <h3 class="card-title text-light">Auction</h3>
              <p class="text-secondary">Semester Project 2</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span class="badge bg-secondary">HTML</span>
                <span class="badge bg-secondary">Bootstrap</span>
                <span class="badge bg-secondary">JavaScript</span>
                <span class="badge bg-secondary">API</span>
              </div>
              <p class="card-text small">
                A user-friendly auction website where users can create listings, place bids, and earn credits.
                Features authentication, avatars, and real-time bidding — built with Bootstrap and vanilla JS.
              </p>
            </div>
            <div class="card-footer bg-transparent border-0 text-center">
              <a href="https://statuesque-kitten-2df27a.netlify.app/" class="btn btn-outline-light btn-sm me-2" target="_blank">LIVE</a>
              <a href="https://github.com/FredrikMohag/Semester-project-2.git" class="btn btn-outline-secondary btn-sm" target="_blank">GITHUB</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;

  return el;
}
