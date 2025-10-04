export async function fetchImageMetadata() {
  // For demo keep a static template tile source
  return {
    id: "andromeda-demo",
    title: "Andromeda (reduced-res sample)",
    // You can pre-generate DZI or use IIIF. For a quick demo we'll use a single large image (not tiled) if needed.
    tileSource: {
      type: "image",
      url: "/sample/andromeda_reduced.jpg",
    },
    // OR a DZI url: tileSource: '/tiles/andromeda.dzi'
  };
}

export async function fetchLabels(imageId?: string) {
  try {
    const res = await fetch(
      "/api/labels?imageId=" + encodeURIComponent(imageId || "")
    );
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    return [];
  }
}

export async function postLabel(label: any) {
  await fetch("/api/labels", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(label),
  });
}
