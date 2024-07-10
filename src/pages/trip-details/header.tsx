import { MapPin, Calendar, Settings2 } from "lucide-react";

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
        <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 size={20} />
        </button>
      </div>
    </div>
  );
}