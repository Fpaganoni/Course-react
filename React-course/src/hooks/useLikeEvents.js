import { useState } from "react";
import { LIKED_EVENTS_STORAGE_KEY } from "../utils/constants";

const checkIsEventsLiked = (eventId) => {
  const likedEvents =
    JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
  // console.log(likedEvents);

  return likedEvents.includes(eventId);
};

const useLikeEvents = (eventId) => {
  const [isEventLiked, setIsEventLiked] = useState(checkIsEventsLiked(eventId));

  const toggleEventLike = () => {
    const likedEvents =
      JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    const eventIndex = likedEvents.indexOf(eventId);

    if (eventIndex !== -1) {
      likedEvents.splice(eventIndex, 1);
      setIsEventLiked(false);
    } else {
      likedEvents.push(eventId);
      setIsEventLiked(true);
    }

    localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
  };

  return {
    isEventLiked,
    toggleEventLike,
  };
};

export default useLikeEvents;
