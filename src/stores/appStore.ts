import { create } from "zustand";

interface AppState {
  selectedMatchId: number;
  filters?: {
    //TODO filtering functionality not implemented yet. Review later.
    teamName?: string;
    playerName?: string;
    mapName?: string;
  };

  setSelectedMatchId: (matchId: number) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  selectedMatchId: 1,
  setSelectedMatchId: (matchId) => set((state) => {
    if (matchId !== state.selectedMatchId) {
      return { selectedMatchId: matchId };
    }
    return state;
  }),
}));
