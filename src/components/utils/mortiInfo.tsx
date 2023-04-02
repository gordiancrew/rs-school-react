import React from 'react';
import { IMorti } from 'types/i-morti';
interface IMortiProps {
  value: IMorti | undefined;
}
export default function MortiInfo(props: IMortiProps) {
  return (
    <div>
      <h1>{props.value?.name}</h1>
    </div>
  );
}
