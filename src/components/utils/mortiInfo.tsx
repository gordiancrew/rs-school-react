import React from 'react';
import { IMorti } from 'types/i-morti';
import '../../styles/morti-info.css';
interface IMortiProps {
  value: IMorti | undefined;
}
export default function MortiInfo(props: IMortiProps) {
  return (
    <div className="info-card">
      <div className="info-photo-block">
        <div className="info-photo-frame">
          <img className="info-photo" src={props.value?.image} />
        </div>
        <div className="info-desc">
          <h2>{props.value?.name}</h2>
        </div>
      </div>
      <div className="info-profile">
        <div className="info-item">
          <span className="info-category">GENDER:</span>
          {' ' + props.value?.gender}
        </div>
        <div className="info-item">
          <span className="info-category">SPECIES:</span>
          {' ' + props.value?.species}
        </div>
        <div className="info-item">
          <span className="info-category">STATUS:</span>
          {' ' + props.value?.status}
        </div>
        <div className="info-item">
          <span className="info-category">CREATED:</span>
          {' ' + props.value?.created}
        </div>
        <div className="info-item">
          <span className="info-category">LOCATION:</span>
          {' ' + props.value?.location.name}
        </div>

        <div className="info-item">{props.value?.type ? 'TYPE: ' + props.value?.type : ''}</div>
      </div>
      {/* <h1>{props.value?.name}</h1> */}
    </div>
  );
}
