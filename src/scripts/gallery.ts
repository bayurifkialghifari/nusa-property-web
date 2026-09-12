function enhanceGallery(): void {
  const dialog = document.querySelector<HTMLDialogElement>("#gallery-dialog");
  const image = dialog?.querySelector<HTMLImageElement>("[data-dialog-image]");
  const title = dialog?.querySelector<HTMLElement>("#gallery-dialog-title");
  const closeButton = dialog?.querySelector<HTMLButtonElement>("[data-dialog-close]");
  const originalLink = dialog?.querySelector<HTMLAnchorElement>("[data-dialog-original]");

  if (
    !dialog ||
    typeof dialog.showModal !== "function" ||
    !image ||
    !title ||
    !closeButton ||
    !originalLink
  )
    return;

  let trigger: HTMLAnchorElement | null = null;
  let startedOnBackdrop = false;

  for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-gallery-link]")) {
    link.addEventListener("click", (event: MouseEvent): void => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      const thumbnail = link.querySelector<HTMLImageElement>("img");
      const label = link.getAttribute("data-title");
      if (!thumbnail || !label) return;

      event.preventDefault();
      trigger = link;
      title.textContent = label;
      image.alt = thumbnail.alt;
      image.setAttribute("width", thumbnail.getAttribute("width") ?? "1200");
      image.setAttribute("height", thumbnail.getAttribute("height") ?? "675");
      image.src = link.href;
      image.loading = "eager";
      originalLink.href = link.href;
      dialog.showModal();
      closeButton.focus({ preventScroll: true });
    });
  }

  closeButton.addEventListener("click", (): void => dialog.close());
  dialog.addEventListener("close", (): void => {
    trigger?.focus({ preventScroll: true });
    trigger = null;
  });

  function isBackdrop(event: MouseEvent): boolean {
    if (event.target !== dialog || !dialog) return false;
    const bounds = dialog.getBoundingClientRect();
    return (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    );
  }

  dialog.addEventListener("pointerdown", (event: PointerEvent): void => {
    startedOnBackdrop = isBackdrop(event);
  });
  dialog.addEventListener("click", (event: MouseEvent): void => {
    if (startedOnBackdrop && isBackdrop(event)) dialog.close();
    startedOnBackdrop = false;
  });

  dialog.addEventListener("keydown", (event: KeyboardEvent): void => {
    if (event.key !== "Tab") return;
    if (event.shiftKey && document.activeElement === closeButton) {
      event.preventDefault();
      originalLink.focus();
    } else if (!event.shiftKey && document.activeElement === originalLink) {
      event.preventDefault();
      closeButton.focus();
    }
  });
}

enhanceGallery();
