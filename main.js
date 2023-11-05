document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos los servicios y sus descripciones
    const services = [
        { name: "Web Design", description: "Professional web design services." },
        { name: "App Development", description: "Custom mobile app development." },
        { name: "Graphic Design", description: "Creative graphic design solutions." },
    ];

    // Creamos elementos para mostrar los servicios
    const servicesContainer = document.getElementById("services-container");

    services.forEach((service) => {
        const serviceItem = document.createElement("div");
        serviceItem.className = "service-item";
        serviceItem.innerHTML = `
            <img src="service-${service.name.replace(" ", "-").toLowerCase()}.jpg" alt="${service.name}">
            <h3>${service.name}</h3>
        `;
        serviceItem.addEventListener("click", () => {
            const clientName = prompt("Enter your name:");
            const clientEmail = prompt("Enter your email:");
            if (clientName && clientEmail) {
                const serviceRequest = {
                    serviceName: service.name,
                    clientName,
                    clientEmail,
                };
                localStorage.setItem("serviceRequest", JSON.stringify(serviceRequest));
                alert("Service requested. We will contact you soon.");
            }
        });

        servicesContainer.appendChild(serviceItem);
    });

    // Footer
    const footer = document.createElement("footer");
    footer.textContent = "SWG derechos reservados";
    document.body.appendChild(footer);
});
