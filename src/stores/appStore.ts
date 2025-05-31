import { FilterType, IndexType } from "@/lib/types";
import { create } from "zustand";


interface AppState {
  selectedMatchId: number;
  filters: {
    team: IndexType | null;
    player: IndexType | null;
    map: IndexType | null;
  };

  setSelectedMatchId: (matchId: number) => void;
  setFilter: (type: FilterType, key: string, value: number[]) => void;
  removeFilter: (type: FilterType, key: string) => void;
  clearFilters: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  selectedMatchId: 0,
  filters: {
    team: null,
    player: null,
    map: null,
  },
  setSelectedMatchId: (matchId) => set((state) => {
    if (matchId !== state.selectedMatchId) {
      return { selectedMatchId: matchId };
    }
    return state;
  }),
  setFilter: (type, key, value) => set((state) => {
    const current = state.filters[type] || {};
    return {
      filters: {
        ...state.filters,
        [type]: {
          ...current,
          [key]: value,
        },
      }
    }
  }),
  removeFilter: (type, key) => set((state) => {
    const current = state.filters[type] || {};
    if(!current[key] || !(key in current)) {
      return state;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [key]: _, ...rest } = current;
    return {
      filters: {
        ...state.filters,
        [type]:  Object.keys(rest).length > 0 ? rest : null,
      }
    }
  }),

  clearFilters: () => set(()=> {
    return {
      filters: {
        team: null,
        player: null,
        map: null,
      }
    };
  })
}));
