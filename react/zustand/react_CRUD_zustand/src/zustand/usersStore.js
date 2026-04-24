import { create } from "zustand";
import { getAlldata } from "../services/get";
import { devtools } from "zustand/middleware";

const useUsersStore = create(
  devtools((set) => ({
    //states
    users: [],
    message: "",
    isLoading: false,
    error: null,

    fetchUsers: async () => {
      set({ isLoading: true });
      try {
        const userList = await getAlldata();
        set({ users: userList, isLoading: false });
      } catch (e) {
        set({ error: e?.message });
      }
    },

    updateUsers: (newUserList) => set({ users: newUserList }),

    addNewUser: (newUser) =>
      set((state) => ({ users: [...state.users, newUser] })),

    // updateMessage: (newMessage) =>
    //   set({
    //     message: newMessage,
    //   }),
    //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    //   removeAllBears: () => set({ bears: 0 }),
    //   updateBears: (newBears) => set({ bears: newBears }),
  })),
);

export default useUsersStore;
