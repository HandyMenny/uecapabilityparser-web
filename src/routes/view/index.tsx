import {
  $,
  component$,
  useSignal,
  useVisibleTask$,
  useResource$,
  Resource,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import type { Capabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import MulticapabilityView from '~/components/viewer/multicapability-view';
import CircleSpinner from '~/components/spinner/circle-spinner';
import Title from '~/components/header/title';
import { Endpoints } from '~/helpers/endpoints';
import { AlertException, markdownToHtml } from '~/helpers/alert';
import Alert from '~/components/modal/alert';

export default component$(() => {
  const location = useLocation();
  const id = useSignal<string | undefined>(undefined);

  const getCapabilities = $(async (id: string) => {
    const url = Endpoints.STORE;
    const outputUrl = url + 'getOutput';
    try {
      const result = await axios.get(outputUrl, { params: { id: id } });
      return result.data as Capabilities;
    } catch (err: any) {
      throw new AlertException(err);
    }
  });

  const resultData = useResource$(({ track }) => {
    const capId = track(() => id.value);
    if (capId == undefined) {
      return undefined;
    } else {
      return getCapabilities(capId);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      id.value =
        location.url.searchParams.get('id') ??
        new URLSearchParams(window?.location.search).get('id') ??
        '';
    },
    { strategy: 'document-ready' },
  );

  const spinner = <CircleSpinner centered={true} />;
  const showAlert = useSignal<boolean>(false);
  const alertMessage = useSignal<string>('');

  return (
    <>
      <Title text="View" />
      <div class={'flex flex-1 flex-col'}>
        <Resource
          value={resultData}
          onPending={() => spinner}
          onResolved={(data) => {
            if (data == null) {
              return spinner;
            } else {
              return <MulticapabilityView capabilitiesList={[data]} />;
            }
          }}
          onRejected={(error) => {
            showAlert.value = true;
            alertMessage.value = markdownToHtml(error.message);
            return <></>;
          }}
        />
        <Alert title="Error" show={showAlert}>
          <p dangerouslySetInnerHTML={alertMessage.value} />
        </Alert>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'View - UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'View - UE Capability Parser Web',
    },
  ],
};
