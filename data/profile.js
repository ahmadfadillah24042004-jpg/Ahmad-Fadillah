// EDIT HERE: everything about you. Empty social "url" = that link is hidden automatically.
// Profile photo: upload it as images/profile/profile.jpg (the gallery action converts it).
window.PROFILE = {
  title: "Who is me?",
  photo: { folder: "profile", name: "profile" },
  photoPos: "50% 30%",
  initials: "AF",
  // Each line = one paragraph. Replace the placeholder lines.
  bio: [
    "Ahmad Fadillah",
    "I am a creative professional with a strong interest in graphic design, photography, videography, visual branding, and creative direction.",
    "Driven by curiosity and a constant desire to learn, I strive to turn ideas into meaningful visual experiences."
  ],
  // Rows with an empty value are hidden.
  facts: [
    { label: "Based in",   value: "Cirebon, West Java, Indonesia" },
    { label: "Education",  value: "[Edit] School or program" },
    { label: "Experience", value: "[Edit] Years, roles or notable clients" },
    { label: "Tools",      value: "[Edit] e.g. Photoshop, Illustrator, Premiere Pro" }
  ],
  skills: ["Creative direction", "Graphic design", "Branding", "Campaign visuals", "Photography", "Videography", "Visual storytelling"],
  socials: [
    { label: "Instagram", url: "" },   // e.g. "https://instagram.com/yourname"
    { label: "LinkedIn",  url: "" },
    { label: "Behance",   url: "" },
    { label: "YouTube",   url: "" },
    { label: "WhatsApp",  url: "" }    // e.g. "https://wa.me/62xxxxxxxxxx"
  ]
};
