document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    // Function to generate a random Nigerian name
    function generateRandomName() {
        const names = [
         "Olamide"
        ,"Adewale",
        "Bolaji",
        "Temitope",
        "Oluwafemi",
        "Ifeoma",
        "Osagie",
        "Ebere",
        "Olufemi",
        "Chisom",
        "Emeka",
        "Olumide",
        "Abimbola",
        "Nneka",
        "Uchenna",
        "Adebayo",
        "Ifeanyi",
        "Chiemeka",
        "Folake",
        "Oluwaseun",
        "Oluwatobi",
        "Adesola",
        "Ijeoma",
        "Obioma",
        "Olusegun",
        "Olubunmi",
        "Chike",
        "Chinonso",
        "Olawale",
        "Adanma",
        "Adam",
        "Eve",
        "Noah",
        "Abraham",
        "Sarah",
        "Isaac",
        "Rebecca",
        "Jacob",
        "Leah",
        "gift",
        "Rachel",
        "Joseph",
        "John",
        "Matthew",
        "Mark",
        "Paul",
        "Peter",
        "James",
        "David",
        "Solomon",
        "Samuel",
        "alamin",
        "Daniel",
        "Esther",
        "Ruth",
        "Deborah",
        "Joshua",
        "Caleb",
        "Timothy",
        "Emily",
        "Alexander",
        "Charlotte",
        "Benjamin",
        "Olivia"];
        return names[Math.floor(Math.random() * names.length)];
    }

    // Function to display the modal with the generated name and message
    function displayModal() {
        const randomName = generateRandomName();
        modalContent.innerHTML = `<strong>${randomName}</strong> item deliverd <span class="gold-star">★</span>`;
        modal.style.display = "block";
        // Close the modal after 3 seconds
        setTimeout(() => {
            modal.style.display = "none";
        }, 2000);
    }

    // Trigger the modal popup every 30 seconds
    setInterval(displayModal, 30000);
});
