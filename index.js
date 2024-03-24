const researchElements = document.querySelectorAll('.research');
const researchDetails = {
    "Research": "This phase involves conducting research to gather data and insights.",
    "External": "Research conducted externally from the organization.",
    "Internal": "Research conducted internally from the organization.",
    "B2C": "Research focused on understanding consumer behavior.",
    "Online": "Research conducted online.",
    "Public": "Research involving publicly available data.",
    "Public Data": "Research focused on public data sources.",
    "Health": "Research related to health and healthcare.",
};

function displayResearchDetails(event) {
    const researchName = event.target.textContent.trim();
    const researchDetail = researchDetails[researchName];
    if (researchDetail) {
        const researchDetailsContainer = document.getElementById('researchDetails');
        researchDetailsContainer.textContent = researchDetail;
        researchDetailsContainer.style.display = 'block';
        researchDetailsContainer.style.left = `${event.clientX}px`;
        researchDetailsContainer.style.top = `${event.clientY}px`;
    }
}

function hideResearchDetails() {
    const researchDetailsContainer = document.getElementById('researchDetails');
    researchDetailsContainer.style.display = 'none';
}

researchElements.forEach(researchElement => {
    researchElement.addEventListener('mouseover', displayResearchDetails);
    researchElement.addEventListener('mouseout', hideResearchDetails);
});