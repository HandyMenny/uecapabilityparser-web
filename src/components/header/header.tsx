import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { StatusHelper } from '~/helpers/status';

export default component$(() => {
  const getUrlFromVersion = (version: string) => {
    const url = import.meta.env.PUBLIC_REPO_URL;
    if (version.startsWith('nightly-')) {
      return url + 'releases/tag/' + version;
    }
    if (version.startsWith('commit@')) {
      return url + 'commit/' + version.split('@')[1];
    }
    if (version.match(/\d+.\d+.\d+/)) {
      return url + 'releases/tag/v' + version;
    }
    return url;
  };

  const getShortVersion = (version: string) => {
    if (version.startsWith('nightly-')) {
      return version.substring(8).replace(/-/g, '');
    }
    if (version.startsWith('commit@')) {
      return version.substring(7);
    }

    return version;
  };

  const version = useSignal<string | undefined>(undefined);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async () => {
      version.value = await StatusHelper.getVersion();
    },
    { strategy: 'document-ready' },
  );

  const credit = import.meta.env.PUBLIC_CREDIT;
  const creditUrl = import.meta.env.PUBLIC_CREDIT_URL;

  return (
    <header class="flex justify-between bg-black px-5 py-2">
      <div>
        <Link
          class="text-xl text-white hover:underline active:underline"
          href="/"
          title="UE Capability Parser"
        >
          UE Capability Parser
        </Link>
        {version.value !== undefined && (
          <a
            class="ml-0.5 align-[super] text-sm text-gray-300 hover:underline active:underline"
            target="_blank"
            href={getUrlFromVersion(version.value)}
          >
            {getShortVersion(version.value)}
          </a>
        )}
      </div>
      <a
        class="text-xl text-white hover:underline active:underline"
        href={creditUrl}
        target="_blank"
      >
        {credit}
      </a>
    </header>
  );
});
