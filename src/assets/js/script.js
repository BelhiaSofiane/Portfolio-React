document.addEventListener("DOMContentLoaded", () => {
  const html = document.getElementById("html-tag");
  const toggle = document.getElementById("theme-toggle");

  // Icon element references
  const iconElements = {
    theme: document.getElementById("theme-icon"),
    terminal: document.getElementById("terminal-icon"),
    database: document.getElementById("database-icon"),
    computer: document.getElementById("computer-icon"),
    responsive: document.getElementById("responsive-icon"),
  };

  const icons = {
    theme: {
      light: `<svg style="fill:black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>`,
      dark: `<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>`,
    },
    terminal: {
      light: `<svg style="fill:black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>`,
      dark: `<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>`,
    },
    database: {
      light: `<svg style="fill:black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>`,
      dark: `<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>`,
    },
    computer: {
      light: `<svg style="fill:black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>`,
      dark: `<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>`,
    },
    responsive: {
      light: `<svg style="fill:black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-520h200v-200h520v720H120Zm520-80h120v-560H400v120h240v440Zm-240 0h160v-360H400v360Zm-200 0h120v-360H200v360Zm440-440v80-80Zm-320 80Zm240 0Zm80-80Z"/></svg>`,
      dark: `<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-120v-520h200v-200h520v720H120Zm520-80h120v-560H400v120h240v440Zm-240 0h160v-360H400v360Zm-200 0h120v-360H200v360Zm440-440v80-80Zm-320 80Zm240 0Zm80-80Z"/></svg>`,
    },
  };

  // Utility to set icon content
  function setIcon(mode, element, type) {
    if (icons[type] && element) {
      element.innerHTML = icons[type][mode];
    }
  }

  // Sync theme with Flask
  const syncThemeWithFlask = (theme) => {
    fetch("/set-theme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme }),
    });
  };

  // Determine theme
  const saved = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const isDarkInit = saved === "dark" || (!saved && systemPrefersDark);

  // Apply initial theme
  const mode = isDarkInit ? "dark" : "light";
  html.classList.toggle("dark", isDarkInit);
  Object.entries(iconElements).forEach(([type, el]) => setIcon(mode, el, type));
  syncThemeWithFlask(mode);

  // Toggle theme on click
  toggle.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    const newMode = isDark ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    Object.entries(iconElements).forEach(([type, el]) =>
      setIcon(newMode, el, type)
    );
    syncThemeWithFlask(newMode);
  });
});

// This function handles the chat logic, responding to user queries
function handleChat() {
  const query = this.userInput.toLowerCase().trim();
  this.messages.push({ text: this.userInput, from: "user" });

  let response = "I'm not sure how to answer that.";
  if (query.includes("name") || query.includes("who")) {
    response = "I'm Sofiane Belhia, a web developer from Algeria.";
  } else if (query.includes("skills") || query.includes("tech")) {
    response =
      "I work with HTML, CSS, JavaScript, React, Flask, SQLite, and Tailwind CSS.";
  } else if (query.includes("projects")) {
    response =
      "You can find my portfolio, CS50x final project, and other frontend apps in the Projects section.";
  } else if (query.includes("email") || query.includes("contact")) {
    response =
      "You can email me at belhiasofiane150@gmail.com or reach out via the contact page.";
  } else if (query.includes("education") || query.includes("learn")) {
    response =
      "I completed CS50x from Harvard and the Scrimba Frontend Career Path.";
  }

  this.messages.push({ text: response, from: "bot" });
  this.userInput = "";
  setTimeout(() => {
    const box = document.getElementById("chat-box");
    box.scrollTop = box.scrollHeight;
  }, 50);
}

document.addEventListener("alpine:init", () => {
  Alpine.data("chat", () => ({
    open: false,
    userInput: "",
    messages: [],
    handleChat,
  }));
});
