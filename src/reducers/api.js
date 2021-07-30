export const fetchData = async (movie) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    );
    const data = await response.toJson();
    return data;
  } catch (e) {
    console.log(e);
  }
};
