// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Icon from '@polkadot/apps-config/ui/icons/poll.svg';
import Component from '@polkadot/app-poll';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'tx.poll.vote'
      ]
    },
    icon: Icon as string,
    name: 'poll',
    text: t<string>('nav.poll', 'Token poll', { ns: 'apps-routing' })
  };
}
