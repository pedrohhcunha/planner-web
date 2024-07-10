import { X, AtSign, Plus } from "lucide-react";
import type { FormEvent } from "react";
import { Button } from "../../componentes/button";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  removeEmailToInvite: (email: string) => void;
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  closeGuestssModal: () => void;
}

export function InviteGuestsModal({
  emailsToInvite,
  removeEmailToInvite,
  addEmailToInvite,
  closeGuestssModal,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestssModal} className="text-zinc-400 hover:text-zinc-300">
              <X size={24} />
            </button>
          </div>
          <p className="text-zinc-500 text-sm">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
        </div>
        {emailsToInvite.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                  <span className="text-zinc-300">{email}</span>
                  <button onClick={() => removeEmailToInvite(email)} className="text-zinc-400 hover:text-zinc-300">
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-zinc-800" />
          </>
        )}
        <form onSubmit={addEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign size={20} className="text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button type="submit" variant="primary" size="default">
            Convidar
            <Plus size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}