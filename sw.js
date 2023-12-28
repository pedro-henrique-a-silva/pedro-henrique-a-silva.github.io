self.addEventListener('push', function(event) {
  const body = event.data ? event.data.text() : 'No payload'
  event.waitUntil(
    self.registration.showNotification('Notificação', {
      body
    })
  )
  // console.log('Received a push message', event)
})