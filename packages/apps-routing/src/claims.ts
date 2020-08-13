// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Icon from '@polkadot/apps-config/ui/icons/star.svg';
import Component, { useCounter } from '@polkadot/app-claims';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component,
    display: {
      needsAccounts: true,
      needsApi: [
        'query.claims.claims'
      ]
    },
    icon: Icon as string,
    name: 'claims',
    text: t<string>('nav.claims', 'Claim Tokens', { ns: 'apps-routing' }),
    useCounter
  };
}
