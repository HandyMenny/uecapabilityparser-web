import { component$, useSignal } from '@builder.io/qwik';
import SelectInput from '~/components/inputs/select-input';
import TextArea from '~/components/inputs/text-area';
import InputFile from '~/components/inputs/input-file';
import TextInput from '~/components/inputs/text-input';
import type { Signal } from '@builder.io/qwik';
import { type LogType } from '~/@types/uecapabilityparser';

interface Props {
  submitting: Signal<boolean>;
  prefix: string;
  multiparse?: boolean;
  supportedLogs?: LogType[];
}

export default component$((props: Props) => {
  const prefix = props.prefix;
  const submitting = props.submitting;
  const defaultType = 'H';
  const type = useSignal(defaultType);
  let options = [
    { label: 'UE Capability Info hexdump', value: 'H' },
    { label: 'UE Capability Info from Wireshark', value: 'W' },
    { label: 'UE Capability Info from Qtrun NSG/Airscreen', value: 'N' },
    { label: 'UE Capability Info from Osix', value: 'O' },
    { label: 'UE Capability Info from Qualcomm Tools', value: 'QC' },
    { label: 'UE Capability Info from TEMS', value: 'T' },
    { label: 'UE Capability Info from Amarisoft', value: 'A' },
    { label: '0xB0CD - LTE RRC Supported CA Combos hexdump', value: 'QLTE' },
    { label: '0xB826 - NR5G RRC Supported CA Combos hexdump', value: 'QNR' },
    { label: '0xB0CD - LTE RRC Supported CA Combos (text)', value: 'Q' },
    { label: 'Qct Modem Capabilities (LTE CA Combos)', value: 'RF' },
    { label: 'Qualcomm LTE Carrier policy', value: 'C' },
    { label: 'Qualcomm NR Cap Prune', value: 'CNR' },
    { label: '28874 nvitem binary', value: 'E' },
    { label: 'Mediatek CA_COMB_INFO (text)', value: 'M' },
    { label: 'Shannon NR UE cap config', value: 'SHNR' },
    { label: 'DLF Baseband Log', value: 'DLF' },
    { label: 'QMDL Baseband Log', value: 'QMDL' },
    { label: 'HDF Baseband Log', value: 'HDF' },
    { label: 'SDM Baseband Log', value: 'SDM' },
    { label: 'PCAP', value: 'P' },
  ];

  const supLogs = props.supportedLogs ?? [];
  if (supLogs.length > 0) {
    options = options.filter((it) => supLogs.includes(it.value as LogType));
  } else {
    const unsupLogs = props.multiparse
      ? ['DLF', 'QMDL', 'HDF', 'SDM']
      : ['SHNR', 'P', 'DLF', 'QMDL', 'HDF', 'SDM'];
    options = options.filter((it) => !unsupLogs.includes(it.value as LogType));
  }

  return (
    <>
      <SelectInput
        label="Log Type"
        options={options}
        name={`${prefix}type`}
        disabled={submitting.value}
        onInput$={async (value) => {
          type.value = value;
        }}
      />
      <TextInput
        label="Description"
        placeholder="Enter a description. The description will be saved if store is enabled"
        name={`${prefix}description`}
      />
      <InputFile
        label={(() => {
          switch (type.value) {
            case 'C':
              return 'Attach files containing LTE carrier policy combos';
            case 'CNR':
              return 'Attach files containing NR Cap prune combos';
            case 'E':
              return 'Attach an NVItem 28874';
            case 'Q':
              return 'Attach files containing 0xB0CD items as text';
            case 'QLTE':
              return 'Attach files containing 0xB0CD hexdumps';
            case 'QNR':
              return 'Attach files containing 0xB826 hexdumps';
            case 'M':
              return 'Attach files containing CA_COMB_INFO logs as text';
            case 'H':
              return 'Attach a file containing the UE Capability Information or UE EUTRA Capability hexdump';
            case 'RF':
              return 'Attach a file containing CA COMBOS from Qct Modem Capabilities';
            case 'SHNR':
              return 'Attach a Shannon NR UE cap config protobuf (.binarypb)';
            case 'P':
              return 'Attach a PCAP file (.pcap)';
            case 'DLF':
            case 'QMDL':
            case 'HDF':
            case 'SDM':
              return 'Attach a diag log';
            default:
              return 'Attach files representing a unique set of UE Capability Information';
          }
        })()}
        name={`${prefix}inputFile`}
        multiple={
          !['E', 'H', 'SHNR', 'P', 'DLF', 'QMDL', 'HDF', 'SDM'].includes(
            type.value,
          )
        }
        disabled={submitting.value}
      />
      <TextArea
        label={(() => {
          switch (type.value) {
            case 'C':
            case 'CNR':
            case 'Q':
            case 'QNR':
            case 'QLTE':
            case 'M':
              return 'Or paste them below';
            case 'E':
            case 'SHNR':
            case 'P':
            case 'DLF':
            case 'QMDL':
            case 'HDF':
            case 'SDM':
              return 'Or paste its hexdump below';
            default:
              return 'Or paste it below';
          }
        })()}
        placeholder="Paste the log content"
        name={`${prefix}inputText`}
        halfHeight={type.value == 'H'}
        disabled={submitting.value}
      />
      <InputFile
        label="Attach a file containing the UE MRDC Capability hexdump"
        name={`${prefix}inputENDCFile`}
        disabled={submitting.value}
        hidden={type.value != 'H'}
      />
      <TextArea
        label="Or paste it below"
        placeholder="Paste the log content"
        name={`${prefix}inputENDCText`}
        disabled={submitting.value}
        halfHeight={true}
        hidden={type.value != 'H'}
      />
      <InputFile
        label="Attach a file containing the UE NR Capability hexdump"
        name={`${prefix}inputNRFile`}
        disabled={submitting.value}
        hidden={type.value != 'H'}
      />
      <TextArea
        label="Or paste it below"
        placeholder="Paste the log content"
        name={`${prefix}inputNRText`}
        disabled={submitting.value}
        halfHeight={true}
        hidden={type.value != 'H'}
      />
    </>
  );
});
