// companyName, description, finishYear, position, startYear
fetch("https://zany-skitter-caper.glitch.me/experiences")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		renderData(data);
		getSkills();
	})
	.catch((error) => {
		console.error(error);
	});

const renderData = (data) => {
	createMainContainer();
	createProfile();
	createExpSkillsContainer();
	createExpDiv();
	createH2();
	createTable();

	data.forEach((exp) => {
		createRows(exp);
	});
};

const createMainContainer = () => {
	const mainContainer = document.createElement("div");
	mainContainer.setAttribute("class", "main-container");
	document.body.prepend(mainContainer);
};

const createProfile = () => {
	const mainContainer = document.querySelector(".main-container");
	const profile = document.createElement("div");
	const profilePhoto = document.createElement("div");
	const img = document.createElement("img");
	const h1 = document.createElement("h1");
	const h5 = document.createElement("h5");
	const p = document.createElement("p");

	profile.setAttribute("class", "profile");
	profilePhoto.setAttribute("class", "profile-photo");
	h1.setAttribute("class", "fullname");
	h5.setAttribute("class", "profession");
	p.setAttribute("class", "copyright");

	img.src =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1";
	img.alt = "profile photo";

	h1.textContent = "Alex Smith";
	h5.textContent = "Web Designer";
	p.textContent = `\u00A9 2022. All rights reserved.`;

	profilePhoto.append(img);
	profile.append(profilePhoto, h1, h5, p);
	mainContainer.append(profile);
};

const createExpSkillsContainer = () => {
	const mainContainer = document.querySelector(".main-container");
	const containerExpSkills = document.createElement("div");
	containerExpSkills.setAttribute("class", "exp-skills");
	mainContainer.append(containerExpSkills);
};

const createExpDiv = () => {
	const divExpSkills = document.querySelector(".exp-skills");
	const divExp = document.createElement("div");
	divExp.setAttribute("class", "exp");
	divExpSkills.append(divExp);
};

const createH2 = () => {
	const divExp = document.querySelector(".exp");
	const h2Node = document.createElement("h2");
	h2Node.textContent = "Experience";
	divExp.append(h2Node);
};

const createTable = () => {
	const divExp = document.querySelector(".exp");
	const tableNode = document.createElement("table");
	tableNode.setAttribute("id", "table");
	divExp.append(tableNode);
};

const createRows = (exp) => {
	const tableNode = document.getElementById("table");
	const trForThNode = document.createElement("tr");
	const thForYearNode = document.createElement("th");
	const thForPositionNode = document.createElement("th");
	const trSecondNode = document.createElement("tr");
	const tdForCompanyNode = document.createElement("td");
	const tdForDescriptionNode = document.createElement("td");

	thForYearNode.textContent = `${exp.startYear} - ${exp.finishYear}`;
	thForPositionNode.textContent = `${exp.position}`;
	tdForCompanyNode.textContent = `${exp.companyName}`;
	tdForDescriptionNode.textContent = `${exp.description}`;

	trForThNode.append(thForYearNode, thForPositionNode);
	trSecondNode.append(tdForCompanyNode, tdForDescriptionNode);
	tableNode.append(trForThNode, trSecondNode);
};

const getSkills = () => {
	fetch("https://zany-skitter-caper.glitch.me/skills")
		.then((response) => response.json())
		.then((skills) => {
			console.log(skills);
			skillsInit(skills);
		});
};

const skillsInit = (skills) => {
	const divExpSkills = document.querySelector(".exp-skills");

	const divSkills = document.createElement("div");
	const h2 = document.createElement("h2");
	const span = document.createElement("span");

	divSkills.setAttribute("class", "skills");

	h2.textContent = "Coding ";
	span.textContent = "Skills";

	h2.append(span);
	divSkills.append(h2);
	divExpSkills.append(divSkills);

	skills.forEach((skill) => {
		const divSkills = document.querySelector(".skills");
		const divTitlePercent = document.createElement("div");
		const pTitle = document.createElement("p");
		pTitle.textContent = skill.title;
		const pPercent = document.createElement("p");
		pPercent.textContent = skill.level;

		const divOuter = document.createElement("div");
		divOuter.setAttribute("class", "outer");
		const divInner = document.createElement("div");
		divInner.setAttribute("class", "inner");
		divInner.style.width = `${skill.level}%`;

		divTitlePercent.append(pTitle, pPercent);
		divOuter.append(divInner);
		divSkills.append(divTitlePercent, divOuter);
	});
};
