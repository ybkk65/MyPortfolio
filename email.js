

emailjs.init('m_crtBicjurJb5uYP');

const templateId = "template_6xybo2h";
const servicesId = "service_k9nvyit";

function sendFeedback(serviceId, templateId, params) {
    emailjs.send(serviceId, templateId, params)
        .then(function (response) {
            alert('Message envoyé avec succès!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('Échec de l\'envoi du message. Veuillez réessayer.');
        });
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const params = {
        name: document.querySelector("#name").value,
        message: document.querySelector("#message").value,
        email: document.querySelector('#email').value
    };

    
    sendFeedback(servicesId, templateId, params);
});


