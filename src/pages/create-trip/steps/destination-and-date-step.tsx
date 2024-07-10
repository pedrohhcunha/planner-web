import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../componentes/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin size={20} className="text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={20} className="text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} type="submit" variant="secondary" size="default">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary" size="default">
          Adicionar amigos
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
}