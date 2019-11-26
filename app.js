$('form').on('submit', () => {
    let text = $('#message').val()
    alert(text)
    return false
})