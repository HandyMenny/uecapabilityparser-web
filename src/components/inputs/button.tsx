import { component$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';
interface Props {
  label?: string;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick$?: PropFunction<any>;
}

export default component$((props: Props) => {
  const { label, type, disabled, onClick$ } = props;
  return (
    <div class="flex flex-grow flex-col">
      <button
        type={type}
        class="my-2 w-full flex-grow bg-black p-2 text-lg text-white focus:outline-none focus:ring focus:ring-gray-400
        disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-70"
        disabled={disabled}
        onClick$={onClick$}
        preventdefault:click={onClick$ != null}
      >
        {label}
      </button>
    </div>
  );
});
