export default async function sendMail(name, email, phone, business, message) {
    fetch("https://formspree.io/f/xvgzqjvl", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            interest: message,
            BusinessWebsite: business,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    return {"done":"code run complete"}
}
