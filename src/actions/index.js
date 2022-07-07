export const selectSong = (song) => {
  // Return an anction

  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
