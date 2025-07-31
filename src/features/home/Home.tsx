import HeroSection from "./HeroSection";
import NeedSection from "./NeedSection";
import SolutionSection from "./SolutionSection";
import InvitationSection from "./InvitationSection";

function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <NeedSection />
      <SolutionSection />
      <InvitationSection />
    </main>
  );
}

export default Home;
