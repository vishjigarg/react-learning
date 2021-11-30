const DisplayAlert = ({type, message}) => {
    console.log(type)
    if (type == 'success') {
        return (
            <div class="alert alert-success" role="alert">
                {message}
            </div>
        )
    }

    if (type == 'error') {
        return (
            <div class="alert alert-danger" role="alert">
                { message}
            </div>
        )
    }
    return ""
}


export default DisplayAlert;