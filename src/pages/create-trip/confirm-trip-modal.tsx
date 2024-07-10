import { X, User, AtSign } from "lucide-react";
import type { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  confirmTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  confirmTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button onClick={closeConfirmTripModal} className="text-zinc-400 hover:text-zinc-300">
              <X size={24} />
            </button>
          </div>
          <p className="text-zinc-500 text-sm">
            Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>
        <form onSubmit={confirmTrip} className="flex flex-col gap-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User size={20} className="text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <AtSign size={20} className="text-zinc-400" />
            <input
              type="text"
              name="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <button type="submit" className="w-full h-11 justify-center bg-lime-300 text-lime-950 rounded-lg px-5 font-medium hover:bg-lime-400 flex items-center gap-2">
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}