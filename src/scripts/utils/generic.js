export function setImgSrc(elem, src) {
  elem.src = src;
}

export function showElem(elem) {
  elem.classList.remove('d-none');
}

export function hideElem(elem) {
  elem.classList.add('d-none');
}

export function setSpinner(isVisible) {
  return isVisible ? document.querySelector('.spinner').classList.remove('d-none') : document.querySelector('.spinner').classList.add('d-none');
}
