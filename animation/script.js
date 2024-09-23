function loadingAnimation() {
  // Function to create a letter-by-letter animation effect for a given element
function clutterAnimation(element) {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Splitting the text content into individual letters and wrapping each in a span with a class
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Updating the HTML content of the element with the animated spans
  htmlTag.innerHTML = clutter;
}

// Applying letter-by-letter animation to the h1 element with class "l-text"
clutterAnimation(".l-text>h1");

// Creating a GSAP timeline for the loader animation
const tl = gsap.timeline();

// Animation for the letter-by-letter movement of the h1 element

tl.from(
  ".l-text>h1>span",
  {
    y: 150,
    stagger: {
      amount: -1.5,
      from: "center",
    },
  },
  "a"
);

// Loader animation timeline
tl.from(
  ".loader-img",
  {
    height: "0",
    width: "0",
    delay: 0.3,
  },
  "a"
);

// Expanding loader dimensions
tl.to(
  ".loader-img",
  {
    width: "65vh",
    height: "40vh",
  },
  "b"
);

// Fading in additional images and adjusting loader dimensions
tl.to(
  ".l-img2",
  {
    opacity: 1,
  },
  "b"
);

tl.to(
  ".loader-img",
  {
    width: "35vh",
    height: "45vh",
    delay: 0.3,
  },
  "c"
);

tl.to(
  ".l-img3",
  {
    opacity: 1,
    delay: 0.2,
  },
  "c"
);

// Adjusting loader dimensions and revealing overlay
tl.to(
  ".loader-img",
  {
    height: "55vh",
    width: "45vh",
    delay: 0.3,
  },
  "d"
);

tl.to(
  ".loader-overlay",
  {
    opacity: 1,
    delay: 0.3,
  },
  "d"
);

// Fading out loader-related elements and revealing main image
tl.to(
  ".loader-overlay,.l-img3,.l-img2,.l-img1",
  {
    opacity: 0,
    delay: -0.2,
    duration: 0.2,
  },
  "e"
);

tl.to(
  ".main-img",
  {
    opacity: 1,
  },
  "e"
);

// Expanding loader to cover the screen
tl.to(
  ".loader-img",
  {
    height: "100vh",
    width: "100%",
  },
  "f"
);

// Moving the h1 letters upward and fading out loader elements
tl.to(
  ".l-text>h1>span",
  {
    y: -170,
    stagger: {
      amount: -0.1,
      from: "center",
    },
  },
  "f"
);
tl.to(".loader-img", {
  opacity: 0,
});

// Fading out the loader container
tl.to(
  ".loader",
  {
    opacity: 0,
    delay: 0.4,
  },
  "f"
);

// Applying letter-by-letter animation to the text1 and text2 elements
clutterAnimation(".text1");
clutterAnimation(".text2");

// Additional animations for the text1 and text2 elements
tl.from(
  ".text1>span",
  {
    y: "150",
    stagger: {
      amount: ".8",
    },
    delay: 0.1,
  },
  "h"
);

tl.from(
  ".text2>span",
  {
    y: "150",
    stagger: {
      amount: "-.8",
    },
    delay: 0.2,
  }, 
  "h"
);

// THANK YOU FOR EVERYTHING BHAIYA
}

loadingAnimation()


// setInterval(() => {
//   clearInterval(loadingAnimation())
// }, 8000);