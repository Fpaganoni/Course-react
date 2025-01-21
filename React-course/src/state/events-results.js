/* Aca vamos a usar un manejador de estados como zustand (podria ser redux tmb) */

import { create } from "zustand";

/* ESTE HOOK SE ENCARGA DE GUARDAR VALORES DE FORMA GLOBAL */
const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  fetchEvents: async (params) => {
    const link = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
      import.meta.env.VITE_TICKETMASTER_API_KEY
    }&countryCode=US${params?.length ? params : ""}`;

    try {
      set(() => ({ isLoading: true }));

      const response = await fetch(link);
      const data = await response.json();

      await set(() => ({ data, isLoading: false }));
    } catch (error) {
      await set(() => ({ error }));
    }
  },
}));

export default useEventsResults;
