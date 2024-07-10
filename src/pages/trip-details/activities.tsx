import { Plus, CircleCheck } from "lucide-react";
import { CreateActivityModal } from "./create-activity-modal";
import { useState } from "react";
import { Button } from "../../componentes/button";

export function Activities() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState<boolean>(false);

  const openActivityModal = () => setIsCreateActivityModalOpen(true);
  const closeActivityModal = () => setIsCreateActivityModalOpen(false);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>
        <Button onClick={openActivityModal} variant="primary" size="default">
          <Plus size={20} />
          Adicionar atividade
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
            <span className="text-xs text-zinc-500">Sábado</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Nenhuma atividade cadastrada nesta data.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between gap-3">
              <CircleCheck size={20} className="text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:00</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between gap-3">
              <CircleCheck size={20} className="text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:00</span>
            </div>
          </div>
        </div>
      </div>
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeActivityModal={closeActivityModal}
        />
      )}
    </div>
  );
}
