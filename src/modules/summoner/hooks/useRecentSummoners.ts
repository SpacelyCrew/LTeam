import * as React from 'react';
import createPersistedState from 'use-persisted-state';

import { RecentSummoner } from '../interfaces/summoner.interface';

const useSummonersState = createPersistedState('recent-summoners');

export const useRecentSummoners = () => {
  const [summoners, setSummoners] = useSummonersState<RecentSummoner[]>([]);

  const addSummoner = React.useCallback((newSummoner: RecentSummoner) => {
    if (summoners.some((summoner) => summoner.id === newSummoner.id)) return;

    setSummoners((prevSummoners) => [
      newSummoner,
      ...(prevSummoners.length > 5
        ? prevSummoners.slice(0, prevSummoners.length - 1)
        : prevSummoners
      ),
    ]);
  }, [summoners, setSummoners]);

  return [summoners, addSummoner] as const;
};