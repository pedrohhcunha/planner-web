import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../componentes/button";

interface InviteGuestsModal {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  openGuestsModal,
  openConfirmTripModal,
  emailsToInvite,
}: InviteGuestsModal) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button onClick={openGuestsModal} type="button" className="flex flex-1 items-center gap-2">
        <UserRoundPlus size={20} className="text-zinc-400" />
        <span className="text-lg text-zinc-400">
          {emailsToInvite.length === 0 ? 'Quem estará na viagem?' : `${emailsToInvite.length} pessoa(s) convidada(s)`}
        </span>
      </button>
      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openConfirmTripModal} variant="primary" size="default">
        Confirmar viagem
        <ArrowRight size={20} />
      </Button>
    </div>
  );
}