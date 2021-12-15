import Swal from 'sweetalert2';

function sendErrorAlert(html) {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html,
        timer: 2500,
    });
}

function sendSuccessAlert(html) {
    return Swal.fire({
        title: 'Beleza!',
        html,
        icon: 'success',
        timer: 2500,
    });
}

function sendConfirmAlert(title, buttonText) {
    return Swal.fire({
        title,
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: 'Cancelar',
    });
}

function sendWarningAlert(html) {
    return Swal.fire({
        title: 'Atençao!',
        html,
        icon: 'warning',
        timer: 4500,
    });
}

export {
    sendErrorAlert,
    sendSuccessAlert,
    sendConfirmAlert,
    sendWarningAlert,
};
