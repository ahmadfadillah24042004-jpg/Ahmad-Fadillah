// EDIT HERE: titles, texts, covers and links. Texts below are placeholders.
// "folder" = a folder inside images/. New photos in that folder appear automatically.
window.PROJECTS = [
  { id: "campaign", title: "Campaign", category: "Graphic design",
    intro: "Campaign visuals built around one clear idea, from concept to final layout.",
    cover: { folder: "cover", name: "cover campaign" }, layout: "editorial",
    sections: [{ folder: "campaign" }] },

  { id: "photography", title: "Photography", category: "Portrait and product",
    intro: "Portraits and product photography, shot with attention to light and detail.",
    cover: { folder: "cover", name: "cover photography" }, layout: "phone",
    sections: [
      { title: "Portrait", folder: "photography/portrait" },
      { title: "Product", folder: "photography/product" } ] },

  { id: "video", title: "Video Editing", category: "Video and creative direction",
    intro: "A collection of video projects showcasing my skills in creative direction, video production, and post-production. From developing visual concepts and directing shoots to video editing and colour grading, I handle each stage to create engaging visual stories with a cohesive cinematic look.",
    cover: { folder: "cover", name: "cover video" }, layout: "editorial",
    links: [
      { label: "Brand Campaign", url: "https://youtu.be/iRKehQaFzrw?si=aR-zZ_tOGCJJsn3Q" 
        cover: { folder: "cover", name: "none" } },
      { label: "Reels Product", url: "https://www.instagram.com/reel/DewRFsxtQnC/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" 
        cover: { folder: "cover", name: "reels product" } ratio: "9/16"},
      { label: "Social Media", url: "https://www.instagram.com/reel/DdL7PhTSlqm/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==" 
        cover: { folder: "cover", name: "social media" } ratio: "9/16"},
    sections: [] },

  { id: "branding", title: "Branding", category: "Visual identity", layout: "stack",
    intro: "Brand identities developed as complete systems: logo, color, type and applications.",
    cover: { folder: "cover", name: "cover branding" },
    sections: [
      { title: "Dailydose.club", text: "A complete brand development project, from initial concept and logo design to brand identity and social media management. I led the creative direction and produced visual content, including product photography, videos, and marketing campaigns to build a consistent brand presence.", folder: "branding/Dailydose.club" },
      { title: "Ecliptic.co", text: "A complete branding project for a contemporary fashion label, from brand strategy and concept development to logo design and visual identity. I developed the brand's identity, values, and visual direction, combining modern streetwear, subculture, and local cultural influences into a distinctive and cohesive brand experience.", folder: "branding/Ecliptic.co" } ] }
];
