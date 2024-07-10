import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState<boolean>(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const openGuestsInput = () => setIsGuestsInputOpen(true);
  const closeGuestsInput = () => setIsGuestsInputOpen(false);

  const openGuestsModal = () => setIsGuestsModalOpen(true);
  const closeGuestssModal = () => setIsGuestsModalOpen(false);

  const openConfirmTripModal = () => setIsConfirmTripModalOpen(true);
  const closeConfirmTripModal = () => setIsConfirmTripModalOpen(false);

  const removeEmailToInvite = (email: string) => {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
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

  const confirmTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();

    if (!name || !email) return;

    console.log({ name, email });

    navigate('/trips/123');

    closeConfirmTripModal();
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
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
          />
          {isGuestsInputOpen && (
            <InviteGuestsStep
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
            />
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">política de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          removeEmailToInvite={removeEmailToInvite}
          addEmailToInvite={addEmailToInvite}
          closeGuestssModal={closeGuestssModal}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          confirmTrip={confirmTrip}
        />
      )}
    </div>
  )
}