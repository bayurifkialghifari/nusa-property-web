const navigation = document.querySelector<HTMLDetailsElement>("[data-mobile-nav]");

if (navigation) {
  const summary = navigation.querySelector("summary");
  const desktop = window.matchMedia("(min-width: 768px)");

  navigation.addEventListener("click", (event: MouseEvent): void => {
    if (event.target instanceof Element && event.target.closest("a")) {
      navigation.open = false;
    }
  });

  document.addEventListener("keydown", (event: KeyboardEvent): void => {
    if (event.key === "Escape" && navigation.open) {
      navigation.open = false;
      summary?.focus();
    }
  });

  desktop.addEventListener("change", (event: MediaQueryListEvent): void => {
    if (event.matches) navigation.open = false;
  });
}
