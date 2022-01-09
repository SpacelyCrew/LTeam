import * as React from 'react';
import createPersistedState from 'use-persisted-state';

import { RecentSummoner } from '../interfaces/summoner.interface';

const useSummonersState = createPersistedState('favorite-summoners');

export const useFavoriteSummoners = () => {
  const [summoners, setSummoners] = useSummonersState<RecentSummoner[]>([]);

  const addSummoner = React.useCallback((newSummoner: RecentSummoner) => {
    if (summoners.some((summoner) => summoner.id === newSummoner.id)) return;

    setSummoners((prevSummoners) => [
      newSummoner,
      ...prevSummoners,
    ]);
  }, [summoners, setSummoners]);

  const deleteSummoner = React.useCallback((deletedSummoner: RecentSummoner) => {
    const filtredRecentSummoners = summoners.filter((summoner) => summoner.id !== deletedSummoner.id);
    setSummoners(filtredRecentSummoners);
  }, [summoners, setSummoners]);

  return [summoners, addSummoner, deleteSummoner] as const;
};
