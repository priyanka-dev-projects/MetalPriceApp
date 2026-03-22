export const fetchMetalPrice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;

      if (success) {
        const price =
          Math.floor(Math.random() * 1000) + 50000;

        resolve({
          price,
          time: new Date().toLocaleTimeString(),
        });
      } else {
        reject('API Error');
      }
    }, 1500);
  });
};
