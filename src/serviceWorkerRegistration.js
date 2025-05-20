// Este arquivo registra o service worker para criar um PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] é o endereço IPv6 do localhost.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 são os endereços IPv4 do localhost.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // Se estiver rodando local, verifica se o service worker está funcionando
      checkValidServiceWorker(swUrl, config);
    } else {
      // Caso contrário, apenas registra
      registerValidSW(swUrl, config);
    }
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) return;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Novo conteúdo disponível; recarregar para atualizar
              console.log('Novo conteúdo disponível; recarregue a página.');
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Conteúdo armazenado em cache pela primeira vez
              console.log('Conteúdo armazenado para uso offline.');
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Erro ao registrar o service worker:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Service worker não encontrado. Provavelmente foi removido.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker encontrado
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('Sem conexão com a internet. App está rodando no modo offline.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
