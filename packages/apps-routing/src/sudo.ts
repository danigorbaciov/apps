// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Icon from '@polkadot/apps-config/ui/icons/unlock.svg';
import Component from '@polkadot/app-sudo';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'tx.sudo.setKey'
      ],
      needsSudo: true
    },
    icon: Icon as string,
    name: 'sudo',
    text: t<string>('nav.sudo', 'Sudo', { ns: 'apps-routing' })
  };
}
