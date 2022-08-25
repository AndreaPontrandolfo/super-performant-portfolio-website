import Swup from "swup";
// import "flowbite";

const swup = new Swup();

const dropdown = document.getElementById("dropdownNavbar");
const navbar = document.getElementById("navbar-sticky");

const hamburger = window.document.querySelector(
  '[data-collapse-toggle="navbar-sticky"]'
);

hamburger.addEventListener("click", (e) => {
  console.log(
    "🚀 ~ file: app.js ~ line 17 ~ hamburger.addEventListener ~ e",
    e
  );
  navbar.classList.toggle("hidden");

  if (!dropdown.classList.contains("closed")) {
    dropdown.classList.add("closed");
  }
});

dropdown.addEventListener("mouseenter", (e) => {
  console.log("🚀 ~ file: app.js ~ line 11 ~ dropdown.addEventListener ~ e", e);
  if (e.target.classList.contains("closed")) {
    e.target.classList.remove("closed");
  }
});

dropdown.addEventListener("mouseleave", (e) => {
  if (!e.target.classList.contains("closed")) {
    e.target.classList.add("closed");
  }
});

// const btn1 = document.getElementById("Paintings");
// const btn2 = document.getElementById("Venice Series");
// const btn3 = document.getElementById("Turin Series");

swup.on("clickLink", (e) => {
  dropdown.classList.add("closed");
  navbar.classList.add("hidden");
});

// btn1.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 74 ~ btn1.addEventListener ~ event",
//     event
//   );
//   dropdown.classList.add("closed");
// });
// btn2.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 81 ~ btn2.addEventListener ~ event",
//     event
//   );
//   dropdown.classList.add("closed");
// });
// btn3.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 88 ~ btn3.addEventListener ~ event",
//     event
//   );
//   dropdown.classList.add("closed");
// });

// dropdownToggleButton.addEventListener("mouseenter", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 73 ~ dropdownToggleButton.addEventListener ~ event",
//     event
//   );
//   const dropdown = document.getElementById("dropdownNavbar");
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 77 ~ dropdownToggleButton.addEventListener ~ dropdown",
//     dropdown
//   );
//   dropdown.classList.remove("hidden");
//   dropdown.classList.add("block");
// });

// dropdownToggleButton.addEventListener("mouseleave", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 73 ~ dropdownToggleButton.addEventListener ~ event",
//     event
//   );
//   const dropdown = document.getElementById("dropdownNavbar");
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 77 ~ dropdownToggleButton.addEventListener ~ dropdown",
//     dropdown
//   );
//   dropdown.classList.remove("block");
//   dropdown.classList.add("hidden");
// });

// function init() {
//   dropdownToggleButton.addEventListener("mouseover", (event) => {
//     console.log(
//       "🚀 ~ file: Layout.astro ~ line 73 ~ dropdownToggleButton.addEventListener ~ event",
//       event
//     );
//     dropdown.classList.add("block");
//   });
// btn1.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 74 ~ btn1.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
// btn2.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 81 ~ btn2.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
// btn3.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 88 ~ btn3.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
// }

// run once
// init();

// // this event runs for every page view after initial load
// swup.on("contentReplaced", init);
// const dropdown = document.getElementById("dropdownNavbar");
// const dropdownToggleButton = document.getElementById("dropdownNavbarLink");
// const btn1 = document.getElementById("Paintings");
// const btn2 = document.getElementById("Venice Series");
// const btn3 = document.getElementById("Turin Series");
// btn1.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 74 ~ btn1.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
// btn2.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 81 ~ btn2.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
// btn3.addEventListener("click", (event) => {
//   console.log(
//     "🚀 ~ file: Layout.astro ~ line 88 ~ btn3.addEventListener ~ event",
//     event
//   );
//   if (dropdown.classList.contains("block")) {
//     dropdown.classList.remove("block");
//     dropdown.classList.add("hidden");
//   }
// });
