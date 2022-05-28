import { BackButton } from './BackButton';

export function Header() {
  return (
    <header className="h-20 w-full bg-white drop-shadow-md flex items-center pl-14">
      <BackButton />
    </header>
  );
}
