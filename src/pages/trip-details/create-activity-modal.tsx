import { X, Tag, Calendar } from "lucide-react";

interface CreateActivityModalProps {
  closeActivityModal: () => void;
}

export function CreateActivityModal({
  closeActivityModal
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button onClick={closeActivityModal} className="text-zinc-400 hover:text-zinc-300">
              <X size={24} />
            </button>
          </div>
          <p className="text-zinc-500 text-sm">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag size={20} className="text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar size={20} className="text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <button type="submit" className="w-full h-11 justify-center bg-lime-300 text-lime-950 rounded-lg px-5 font-medium hover:bg-lime-400 flex items-center gap-2">
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  );
}