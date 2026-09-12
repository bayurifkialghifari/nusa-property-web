const contactBar = document.querySelector<HTMLElement>("[data-mobile-contact]");

if (contactBar) {
  const reserveSpace = (): void => {
    const height = Math.ceil(contactBar.getBoundingClientRect().height);
    if (height > 0) {
      document.documentElement.style.setProperty(
        "--sticky-reserve",
        `calc(${height}px + var(--space-4))`,
      );
    } else {
      document.documentElement.style.removeProperty("--sticky-reserve");
    }
  };

  reserveSpace();
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(reserveSpace).observe(contactBar);
  else window.addEventListener("resize", reserveSpace);

  document.addEventListener("focusin", (event: FocusEvent): void => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || contactBar.contains(target) || target.closest("dialog"))
      return;
    requestAnimationFrame((): void => {
      const bar = contactBar.getBoundingClientRect();
      if (bar.height === 0) return;
      const bottom = target.getBoundingClientRect().bottom;
      const gap = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--space-4"),
      );
      if (bottom > bar.top - gap)
        window.scrollBy({ top: bottom - bar.top + gap, behavior: "instant" });
    });
  });
}
