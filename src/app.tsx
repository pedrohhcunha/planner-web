import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from "lucide-react"
import { useState, type FormEvent } from "react"

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const removeEmailToInvite = (email: string) => {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  };

  const openGuestsInput = () => {
    setIsGuestsInputOpen(true);
  };

  const closeGuestsInput = () => {
    setIsGuestsInputOpen(false);
  };

  const openGuestsModal = () => {
    setIsGuestsModalOpen(true);
  };

  const closeGuestssModal = () => {
    setIsGuestsModalOpen(false);
  };

  const addEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString().trim();

    if (!email) return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex flex-1 items-center gap-2">
              <MapPin size={20} className="text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-zinc-400" />
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            {isGuestsInputOpen ? (
              <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Alterar local/data
                <Settings2 size={20} />
              </button>
            ) : (
              <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Adicionar amigos
                <ArrowRight size={20} />
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button onClick={openGuestsModal} type="button" className="flex flex-1 items-center gap-2">
                <UserRoundPlus size={20} className="text-zinc-400" />
                <span className="text-lg text-zinc-400">
                  {emailsToInvite.length > 0 ? 'Quem estará na viagem?' : `${emailsToInvite.length} pessoa(s) convidada(s)`}
                </span>
              </button>
              <div className="w-px h-6 bg-zinc-800" />
              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">política de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
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
              <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400 flex items-center gap-2">
                Convidar
                <Plus size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}