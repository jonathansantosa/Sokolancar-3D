const works = {
  "toy-story": {
    chip: "Landmark Breakthrough",
    title: "Toy Story",
    subhead: "Pixar Animation Studios • 1995",
    image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
    alt: "Toy Story theatrical poster",
    body:
      "The first fully computer-animated feature film proved that digital characters could carry a complete emotional story, not just a technology showcase.",
    impact:
      "It changed CG from an experiment into the foundation of modern feature animation and reset the industry's expectations overnight.",
    craft:
      "Simple, highly readable shapes and expressive pose-to-pose acting made the digital world feel appealing instead of cold.",
    link: "https://www.pixar.com/feature-films/toy-story",
    linkLabel: "Official feature page",
    tagline: "A starting gun for the CG era."
  },
  shrek: {
    chip: "Comedy Reinvention",
    title: "Shrek",
    subhead: "DreamWorks Animation • 2001",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Shrek_%282001_animated_feature_film%29.jpg/500px-Shrek_%282001_animated_feature_film%29.jpg",
    alt: "Shrek theatrical poster",
    body:
      "Shrek showed that 3D animation could be messy, irreverent, and aggressively comedic without losing character warmth or blockbuster scale.",
    impact:
      "It widened the emotional and tonal range of CG features, making room for sarcasm, parody, and pop-driven performance.",
    craft:
      "Broad facial animation, elastic staging, and character-specific timing made every joke feel performance-led rather than mechanically animated.",
    link: "https://www.dreamworks.com/movies/shrek",
    linkLabel: "Official feature page",
    tagline: "CG grew a mischievous grin."
  },
  "finding-nemo": {
    chip: "Worldbuilding Leap",
    title: "Finding Nemo",
    subhead: "Pixar Animation Studios • 2003",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Finding_Nemo.jpg/500px-Finding_Nemo.jpg",
    alt: "Finding Nemo theatrical poster",
    body:
      "Finding Nemo turned the ocean into a luminous, believable performance space filled with depth, drift, particles, and wonder.",
    impact:
      "It proved that environmental simulation and lighting could become emotional storytelling tools instead of mere spectacle.",
    craft:
      "Caustics, suspended particulate matter, and carefully softened underwater motion sold a world that felt both stylized and alive.",
    link: "https://www.pixar.com/feature-films/finding-nemo",
    linkLabel: "Official feature page",
    tagline: "The digital ocean finally felt infinite."
  },
  "wall-e": {
    chip: "Acting Masterclass",
    title: "WALL-E",
    subhead: "Pixar Animation Studios • 2008",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/WALL-E_poster.jpg/500px-WALL-E_poster.jpg",
    alt: "WALL-E theatrical poster",
    body:
      "With minimal dialogue and an almost live-action sense of camera language, WALL-E pushed 3D animation into pure visual performance.",
    impact:
      "It proved that digital characters could communicate longing, curiosity, and loneliness with extraordinary restraint.",
    craft:
      "Tiny shifts in lensing, body tilt, and eye direction created a robot performance with more humanity than many human-led films.",
    link: "https://www.pixar.com/feature-films/walle",
    linkLabel: "Official feature page",
    tagline: "Mechanical design became soulful acting."
  },
  frozen: {
    chip: "FX Spectacle",
    title: "Frozen",
    subhead: "Walt Disney Animation Studios • 2013",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Frozen_%282013_film%29_poster.jpg/500px-Frozen_%282013_film%29_poster.jpg",
    alt: "Frozen theatrical poster",
    body:
      "Frozen fused Broadway emotion with large-scale CG effects, making ice, snow, cloth, and hair central to its identity and appeal.",
    impact:
      "It showed how effects-heavy sequences could still feel character-first, musical, and globally accessible.",
    craft:
      "Snow behavior, crystalline effects, and costume motion turned elemental simulation into part of the storytelling language.",
    link: "https://movies.disney.com/frozen",
    linkLabel: "Official feature page",
    tagline: "The medium learned how to sing in snow."
  },
  "spider-verse": {
    chip: "Style Revolution",
    title: "Spider-Man: Into the Spider-Verse",
    subhead: "Sony Pictures Animation • 2018",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png/500px-Spider-Man_Into_the_Spider-Verse_poster.png",
    alt: "Spider-Man: Into the Spider-Verse theatrical poster",
    body:
      "Spider-Verse rejected glossy sameness and used CG to mimic comic printing, halftones, stepped animation, and explosive graphic design.",
    impact:
      "It gave studios permission to chase authored style again, influencing films, games, and commercials across the animation world.",
    craft:
      "Deliberately stylized frame cadence, printed-texture color, and dimensional comic language made every shot instantly recognizable.",
    link: "https://www.sonypictures.com/movies/spidermanintothespiderverse",
    linkLabel: "Official feature page",
    tagline: "3D animation remembered it could look handmade."
  }
};

const panelElements = {
  chip: document.getElementById("panel-chip"),
  title: document.getElementById("panel-title"),
  subhead: document.getElementById("panel-subhead"),
  image: document.getElementById("panel-image"),
  body: document.getElementById("panel-body"),
  impact: document.getElementById("panel-impact"),
  craft: document.getElementById("panel-craft"),
  link: document.getElementById("panel-link"),
  tagline: document.getElementById("panel-tagline")
};

const spotlightItems = document.querySelectorAll(".spotlight-item");

function setActiveWork(key) {
  const work = works[key];
  if (!work) {
    return;
  }

  panelElements.chip.textContent = work.chip;
  panelElements.title.textContent = work.title;
  panelElements.subhead.textContent = work.subhead;
  panelElements.image.src = work.image;
  panelElements.image.alt = work.alt;
  panelElements.body.textContent = work.body;
  panelElements.impact.textContent = work.impact;
  panelElements.craft.textContent = work.craft;
  panelElements.link.href = work.link;
  panelElements.link.textContent = work.linkLabel;
  panelElements.tagline.textContent = work.tagline;

  spotlightItems.forEach((item) => {
    const isActive = item.dataset.key === key;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
}

spotlightItems.forEach((item) => {
  item.addEventListener("click", () => setActiveWork(item.dataset.key));
  item.addEventListener("mouseenter", () => setActiveWork(item.dataset.key));
  item.addEventListener("focus", () => setActiveWork(item.dataset.key));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
