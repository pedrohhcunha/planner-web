import { AtSign, Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, User, UserCog, X } from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState<boolean>(false);

  const openActivityModal = () => setIsCreateActivityModalOpen(true);
  const closeActivityModal = () => setIsCreateActivityModalOpen(false);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto flex flex-col gap-8">
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
      <main className="flex gap-16 px-6">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              <Plus size={20} />
              Adicionar atividade
            </button>
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
        </div>
        <div className="w-80 flex flex-col gap-6">
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
            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
              <Plus size={20} />
              Cadastrar novo link
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800" />
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
              <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
                <UserCog size={20} />
                Gerenciar convidados
              </button>
            </div>
          </div>
        </div>
      </main>
      {isCreateActivityModalOpen && (
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
      )}
    </div>
  );
}