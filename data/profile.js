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
    { label: "Education",  value: "High School" },
    { label: "Experience", value: "4 years in creative industry" },
    { label: "Tools",      value: "Photoshop, Illustrator, Lightroom, Capcut, Premiere Pro" }
  ],
  skills: ["Creative direction", "Graphic design", "Branding", "Campaign visuals", "Photography", "Videography", "Visual storytelling"],
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/synthesisart_" },   // e.g. "https://instagram.com/yourname"
    { label: "LinkedIn",  url: "" },
    { label: "Behance",   url: "" },
    { label: "YouTube",   url: "" },
    { label: "WhatsApp",  url: "https://wa.me/6285794286412" }    // e.g. "https://wa.me/62xxxxxxxxxx"
  ]
};
