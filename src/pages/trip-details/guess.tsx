import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import { Button } from "../../componentes/button";

export function Guess() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-xl">
          Convidados
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col flex-1 gap-1.5">
              <span className="text-zinc-100 font-medium">Lucas Antunes</span>
              <span className="text-zinc-400 text-xs truncate">
                lucas.antunes@epicora.com.br
              </span>
            </div>
            <CircleDashed size={20} className="text-zinc-400" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col flex-1 gap-1.5">
              <span className="text-zinc-100 font-medium">Gabriel Oss</span>
              <span className="text-zinc-400 text-xs truncate">
                gabriel.oss@epicora.com.br
              </span>
            </div>
            <CircleCheck size={20} className="text-lime-300" />
          </div>
        </div>
        <Button variant="secondary" size="full">
          <UserCog size={20} />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  );
}