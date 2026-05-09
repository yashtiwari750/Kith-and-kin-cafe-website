import { createFileRoute } from "@tanstack/react-router";
import { KithAndKinHome } from "@/components/site/KithAndKinHome";
import { SmoothScroll } from "@/lib/smooth-scroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kith & Kin · Specialty Cafe · Coffee & More" },
      {
        name: "description",
        content:
          "Kith & Kin is a warm, modern specialty cafe serving slow coffee, crafted mocktails and wood-fired pizzas. Coffee & More, served with kinship.",
      },
      { property: "og:title", content: "Kith & Kin · Coffee & More" },
      {
        property: "og:description",
        content:
          "A warm corner where every cup and every conversation feels like coming home.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <>
      <SmoothScroll />
      <KithAndKinHome />
    </>
  );
}
