/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import Datepicker from './datepicker.js';
import type {StatefulDatepickerPropsT, DatepickerPropsT} from './types.js';

function StatefulComponent(props: StatefulDatepickerPropsT<DatepickerPropsT>) {
  return (
    <StatefulContainer {...props}>
      {extendedProps => <Datepicker {...extendedProps} />}
    </StatefulContainer>
  );
}

StatefulComponent.defaultProps = {
  initialState: {value: null},
  stateReducer: (type, nextState) => nextState,
  onChange: () => {},
};

export default StatefulComponent;
