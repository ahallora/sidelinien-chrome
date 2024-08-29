const STYLE_ID = "sidelinien-css-overrides";

const addStyles = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("styles.css");
  link.id = STYLE_ID;
  document.body.appendChild(link);

  console.log("Styles injected 💅");
};

const init = () => {
  const basicStyles = document.createElement("basicStyles");
  basicStyles.rel = "stylesheet";
  basicStyles.type = "text/css";
  basicStyles.href = chrome.runtime.getURL("basic.css");
  document.head.appendChild(basicStyles);

  // Toggler doesn't work for now - CBA

  // const toggler = document.createElement("button");
  // toggler.id = "sidelinien-override-toggle";
  // toggler.addEventListener("click", () => {
  //   const existingNode = document.getElementById(STYLE_ID);

  //   if (existingNode) {
  //     existingNode.parentNode.removeChild(existingNode);
  //     console.log("removed")
  //     return;
  //   }

  //   addStyles();
  // });
  // document.body.appendChild(toggler);
};

init();

console.log("Sidelinien Chatter started 😎");
