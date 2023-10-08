
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  const animatedElements = document.querySelectorAll('.animated');
  const qrCodeElement = document.querySelector('#qr-code');
  const openBtnElement = document.querySelector('#open-qr-btn');
  const closeBtnElement = document.querySelector('#close-qr-btn');

  for (let i = 0; i < animatedElements.length; i++) {
    setInterval(() => {
      restartAnimation(animatedElements[i]);
    }, +animatedElements[i].getAttribute('data-duration'));
  }

  function restartAnimation(element) {
    if (element.classList.contains('animated')) {
      element.src = `assets/${element.getAttribute('data-name')}.svg?dummy=${Math.random()}`;
    }
  }

  if (closeBtnElement) {
    closeBtnElement.addEventListener('click', () => {
      qrCodeElement.classList.remove('is-open');
      qrCodeElement.classList.add('is-closed');
      openBtnElement.classList.add('shown');
    });
  }

  if (openBtnElement) {
    openBtnElement.addEventListener('click', () => {
      qrCodeElement.classList.remove('is-closed');
      openBtnElement.classList.remove('shown');
      qrCodeElement.classList.add('is-open');
    });
  }

})();
