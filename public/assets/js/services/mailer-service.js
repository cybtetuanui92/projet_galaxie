// console.log('assets/js/mailer-service.js chargé ✅');

/**	
 * Envoi d'un email via le service EmailJS
 * @param {Object} infoContact 
 * objet contenant les informations soumises du formulaire {name : String, email : String, message : String}
 */
// function sendMail(infoContact) {
// 	console.log(infoContact);
// 	// TODO: Appel du service EmailJS pour envoyer un email::::::::::::::::::::::::::::::::::::::::
// 	// avec les informations soumises du formulaire
// 	// en paramètre

// 	// Créer un compte sur https://www.emailjs.com/
// 	// Créer des identifiants pour le service EmailJS SMTP
// 	// Reporter les identifiants dans le code ci-dessous
// 	// L'envoie d'email peut se vérifier dans l'interface d'EmailJS
// 	return Email.send({
// 		Host : "smtp.elasticemail.com",
// 		Username : "cyb92.cybanui@hotmail.com",
// 		Password : "8FC11B7D64CFDD30F008414DBE0F35E2D427",
// 		To: 'contact@gmail.com',
// 		From: "les-gardiens-dela-galaxie@gmail.com",
// 		Subject: "Une demande de contact depuis le site Space Tour",
// 		Body: "Une demande de contact a été envoyée depuis le site Space Tour. TODO: Envoyer les informations soumises du formulaire."
// 	}).then(
// 		// si l'email est envoyé, afficher une alerte de succès
// 	  message => alert(message)
// 	).catch(
// 		// si une erreur survient lors de l'envoi de l'email, afficher une alerte d'erreur
// 		error => alert(error, "Une erreur est survenue lors de l'envoi de votre message.")
// 	);

// }



// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::: TESTS ::::::::::::::::::::::::::::

function sendMail(infoContact) {
    // Remplacez ces valeurs par vos véritables identifiants EmailJS
    // const emailjsConfig = {
    //     Host: "smtp.elasticemail.com",
    //     Username: "cybanui92",
    //     Password: "8FC11B7D64CFDD30F008414DBE0F35E2D427",
    // };

	const emailjsConfig = {
		Host: "smtp.elasticemail.com",
		Username: "cybanui92",
		APIKey: "4DF885D64FC239881F89A1B9F109A82B8F953F61A71C4B28F69A4C36ECF9D46367F1A3712279F4891BAEE0AA80231FAC",
	};
	

    // Remplacez ces valeurs par les véritables informations du formulaire
    const emailContent = {
        To: '${infoContact.email}',
        From: "cyb92.cybanui@hotmail.com",
        Subject: "Une demande de contact depuis le site Space Tour",
        Body: `Une demande de contact a été envoyée depuis le site Space Tour.\n\nNom: ${infoContact.name}\nEmail: ${infoContact.email}\nMessage: ${infoContact.message}`
    };

    // Utilisez EmailJS pour envoyer l'e-mail
    return Email.send(emailjsConfig, emailContent)
        .then(
            // Si l'e-mail est envoyé avec succès, affichez une alerte de réussite
            message => alert("Votre message a bien été envoyé !", message)
        )
        .catch(
            // Si une erreur survient lors de l'envoi de l'e-mail, affichez une alerte d'erreur
            error => alert("Une erreur est survenue lors de l'envoi de votre message.", error)
        );
}
