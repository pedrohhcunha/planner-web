import { Link2, Plus } from "lucide-react";
import { Button } from "../../componentes/button";

export function ImportantLinks() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-semibold text-xl">
        Links importantes
      </h2>
      <div className="flex flex-col gap-5">
        <a
          href="https://www.airbnb.com.br/rooms/123"
          className="flex items-center justify-between gap-4 hover:underline hover:text-zinc-100"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex flex-col flex-1 gap-1.5">
            <span className="text-zinc-100 font-medium">Reserva do AirBnb</span>
            <span className="text-zinc-400 text-xs truncate">
              https://www.airbnb.com.br/rooms/123
            </span>
          </div>
          <Link2 size={20} className="text-zinc-400" />
        </a>
        <a
          href="https://www.airbnb.com.br/rooms/123"
          className="flex items-center justify-between gap-4 hover:underline hover:text-zinc-100"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex flex-col flex-1 gap-1.5">
            <span className="text-zinc-100 font-medium">Reserva do AirBnb</span>
            <span className="text-zinc-400 text-xs truncate">
              https://www.airbnb.com.br/rooms/123
            </span>
          </div>
          <Link2 size={20} className="text-zinc-400" />
        </a>
      </div>
      <Button variant="secondary" size="full">
        <Plus size={20} />
        Cadastrar novo link
      </Button>
    </div>
  );
}