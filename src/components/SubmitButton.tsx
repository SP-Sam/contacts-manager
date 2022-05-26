import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isDisabled: boolean;
}

export function SubmitButton({ children, isDisabled }: Props) {
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className="bg-primary-dark text-white rounded-lg h-14 mt-4 lg:mt-12 hover:bg-[#051840] transition duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
