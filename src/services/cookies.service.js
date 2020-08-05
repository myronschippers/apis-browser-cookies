const getCookie = (cookieName) => {
  const rawCookie = document.cookie;
  console.log(rawCookie);
  const cookieValue = RegExp(`${cookieName}[^;]+`).exec(rawCookie);
  console.log(cookieValue);
  return decodeURIComponent(!!cookieValue ? cookieValue.toString().replace(/^[^=]+./, '') : '');
}

const setCookie = (cookieName, cookieValue) => {
  document.cookie = `${cookieName}=${cookieValue}`;
}

export {
  setCookie,
  getCookie,
};