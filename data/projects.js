// EDIT HERE: titles, texts, covers and links. Texts below are placeholders.
// "folder" = a folder inside images/. New photos in that folder appear automatically.
window.PROJECTS = [
  { id: "campaign", title: "Campaign", category: "Graphic design",
    intro: "Campaign visuals built around one clear idea, from concept to final layout.",
    cover: { folder: "campaign", name: "campaign-01" }, layout: "editorial",
    sections: [{ folder: "campaign" }] },

  { id: "photography", title: "Photography", category: "Portrait and product",
    intro: "Portraits and product photography, shot with attention to light and detail.",
    cover: { folder: "photography/portrait", name: "9-DSC09966", pos: "50% 30%" }, layout: "phone",
    sections: [
      { title: "Portrait", folder: "photography/portrait" },
      { title: "Product", folder: "photography/product" } ] },

  { id: "video", title: "Video Editing", category: "Video and creative direction",
    intro: "Video projects and edits. Watch links will be added here.",
    cover: null,
    links: [ /* { label: "Watch on YouTube", url: "https://..." } */ ],
    sections: [] },

  { id: "branding", title: "Branding", category: "Visual identity", layout: "stack",
    intro: "Brand identities developed as complete systems: logo, color, type and applications.",
    cover: { folder: "branding/Ecliptic.co", name: "Artboard 5", pos: "0% 50%" },
    sections: [
      { title: "Dailydose.club", text: "Short description of this brand project.", folder: "branding/Dailydose.club" },
      { title: "Ecliptic.co", text: "Short description of this brand project.", folder: "branding/Ecliptic.co" } ] }
];
