export const useFormat = () => {
  const formatTimestamp = (timestamp: number): string => {
    const formattedTimestamp = new Date(timestamp * 1000);
    return formattedTimestamp.toLocaleString("pt-BR", {
      weekday: "long",
    });
  };

  return { formatTimestamp };
};
