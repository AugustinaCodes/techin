import { create } from "zustand";
import { getAllRequests } from "../src/services/getRequests";
import { devtools } from "zustand/middleware";

const useRequestsStore = create(
  devtools((set) => ({
    requests: [],
    message: "",
    isLoading: false,
    error: null,

    fetchRequests: async () => {
      set({ isLoading: true });
      try {
        const requestsList = await getAllRequests();
        set({ requests: requestsList, isLoading: false });
      } catch (e) {
        set({ error: e?.message });
      }
    },

    updateRequests: (newRequestList) => set({ requests: newRequestList }),

    addNewUser: (newRequest) =>
      set((state) => ({ users: [...state.requests, newRequest] })),
  })),
);

export default useRequestsStore;
