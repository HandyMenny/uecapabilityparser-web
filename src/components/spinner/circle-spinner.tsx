import { component$ } from '@builder.io/qwik';

export default component$(({ centered }: { centered?: boolean }) => {
  const spinner = (
    <div class="h-64 w-64 animate-spin rounded-full border-[12px] border-solid border-gray-100 border-t-gray-800"></div>
  );

  return centered ? <div class="m-auto p-12">{spinner}</div> : spinner;
});
