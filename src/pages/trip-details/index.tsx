import { Guess } from "./guess";
import { ImportantLinks } from "./importante-links";
import { Activities } from "./activities";
import { Header } from "./header";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto flex flex-col gap-8">
      <Header />
      <main className="flex gap-16 px-6">
        <Activities />
        <div className="w-80 flex flex-col gap-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guess />
        </div>
      </main>
    </div>
  );
}