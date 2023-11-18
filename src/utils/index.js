export function changeTheme(initial) {
  const themes = ["winter", "dim"];
  if (initial === "winter") {
    document.querySelector("html").dataset.theme = "dim";
  } else if (initial === "dim") {
    document.querySelector("html").dataset.theme = "winter";
  }
}
