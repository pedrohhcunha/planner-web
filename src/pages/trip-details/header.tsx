import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../componentes/button";

export function Header() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-zinc-400 flex-1">
        <MapPin size={20} />
        Florianópolis, Brasil
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-zinc-400 flex-1">
          <Calendar size={20} />
          17 a 23 de Agosto
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      </div>
    </div>
  );
}