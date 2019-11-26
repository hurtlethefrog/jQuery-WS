let socket = io()

$('form').on('submit', () => {
    let text = $('#message').val()
    socket.emit('message', text)
    $('#message').val('')
    return false
})

socket.on('message', () => $('<li>').text(msg).appendTo('#history'))