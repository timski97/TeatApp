export const getScreens = (page=1) => {
  const accessToken = 'EYTD7xnl2aU2w-c5m1r-HuJ7LlE5jhxP8xbanfh_cp4';
  const apiUrl = `https://api.unsplash.com/photos?page=${page}`
  return new Promise(function (resolve, reject) {
    fetch(apiUrl, {
      method: 'GET',
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${accessToken}`,
      },
    })
      .then(response => {
        response.json().then(data => {
          // console.warn( JSON.stringify(data.notifications));
          if (data) {
            resolve({data, page});
            // console.log(data)
          } else {
            reject(data.error);
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  });
};
