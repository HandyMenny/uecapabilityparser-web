import { component$, useSignal } from '@builder.io/qwik';
import Button from '../inputs/button';
import NumberInput from '../inputs/number-input';
import ComboSearch from './combo-search';

interface Props {
  label: string;
  suffix: string;
  lte: boolean;
  nr: boolean;
  nrDc: boolean;
}

export default component$((props: Props) => {
  const { suffix, lte, nr, nrDc, label } = props;
  const count = useSignal(1);

  return (
    <div class="flex flex-col">
      <label for={`multi-combo-${suffix}`} aria-label={label} class={`my-2`}>
        {label}
      </label>
      <div
        class={'border-2 border-solid border-gray-500 px-4'}
        id={`multi-combo-${suffix}`}
      >
        <NumberInput
          name={`value-${suffix}`}
          value={count.value}
          hidden={true}
        />
        {[...Array(count.value).keys()].map((value) => (
          <div
            key={`multi-combo-${suffix}-${value}`}
            //class="flex flex-row flex-wrap justify-between gap-x-5"
          >
            <ComboSearch
              suffix={`${suffix}-${value}`}
              lte={lte}
              nr={nr}
              nrDc={nrDc}
              label="Components"
            />
          </div>
        ))}
        <div class="flex flex-wrap gap-x-4">
          <Button
            type="button"
            label="Remove"
            hidden={count.value < 2}
            onClick$={async () => {
              if (count.value > 1) {
                count.value--;
              }
            }}
          />
          <Button
            type="button"
            label="Add"
            onClick$={async () => {
              count.value++;
            }}
          />
        </div>
      </div>
    </div>
  );
});
