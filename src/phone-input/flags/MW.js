/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMW(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MWa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MWb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="MWc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E42038" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="MWd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#47B849" />
          <stop offset="100%" stopColor="#399E3B" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MWa)" d="M0 0h21v15H0z" />
        <path fill="url(#MWb)" d="M0 0h21v5H0z" />
        <circle cx="10.5" cy="5.5" r="3.5" fill="url(#MWc)" />
        <path fill="url(#MWc)" d="M0 5h21v5H0z" />
        <path fill="url(#MWd)" d="M0 10h21v5H0z" />
      </g>
    </svg>
  );
}