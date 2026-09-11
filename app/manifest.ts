import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ababeel Key Trading LLC – Dubai Locksmith",
    short_name: "Ababeel Keys",
    description:
      "24-hour locksmith and key cutting service in Dubai. Emergency lockouts, car key programming, lock repair. Call +971 52 642 6161.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
