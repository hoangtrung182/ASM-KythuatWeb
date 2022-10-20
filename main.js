const services = [
    {
        id: 1,
        name: "Web Design",
        img: "./photos/1.png 2x",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }, // service
    {
        id: 2,
        name: "UI/UX Design",
        img: "./photos/2.png 2x",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        name: "Graphics design",
        img: "./photos/3.png 2x",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        name: "SEO Marketing",
        img: "./photos/4.png 2x",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];


const servicesElement = document.getElementById('services');

// console.log(servicesElement)


const showServices = (services) => {
	let result = '';
	services.forEach((service) => {
		result += `
				<div class="service-item">
					<div class="service-img">
						<img srcset="${service.img}" alt="">
					</div>
					<div class="service-info">
						<h3 class="service-name">${service.name}</h3>
						<p class="service-desc mx10">${service.desc}</p>
					</div>
				</div>`
	});
	return result;
};
// servicesElement.innerHTML = showServices(services)




const menuBtn = document.getElementById('menu-btn');
// console.log(menuBtn);

