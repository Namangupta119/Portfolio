const sideMenu = document.querySelector("#sideMenu")
const navBar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
    }
})

//--------------------------------------------light mode and dark mode ---------------------------------------
 
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}

function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light'
    }
}



    const webSkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git", "MySQL"];
    const problemPlatforms = [
        { name: "LeetCode", link: "https://leetcode.com/u/namangupta123/" },
        { name: "Geeks for Geeks", link: "https://www.geeksforgeeks.org/user/guptanam5je8/" },
        { name: "HackerRank", link: "https://www.hackerrank.com/profile/guptanamang119" }
    ];

    function openModal(type) {
        const modal = document.getElementById('modal');
        const title = document.getElementById('modal-title');
        const content = document.getElementById('modal-content');
        content.innerHTML = ""; // clear previous content

        if(type === 'web') {
            title.textContent = "Web Development Skills";
            webSkills.forEach(skill => {
                const div = document.createElement('div');
                // div.className = "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-2 text-center";
                div.className = "bg-transparent dark:bg-transparent dark:border text-gray-800 dark:text-white rounded-lg p-2 text-center hover:bg-white dark:hover:bg-white dark:hover:text-black";
                div.textContent = skill;
                content.appendChild(div);
            });
        } else if(type === 'problem') {
            title.textContent = "Problem Solving Platforms";
            problemPlatforms.forEach(platform => {
                const a = document.createElement('a');
                a.href = platform.link;
                a.target = "_blank";
                a.rel = "noopener noreferrer";
                a.className = "bg-transparent dark:bg-transparent dark:border text-gray-800 dark:text-white rounded-lg p-2 text-center hover:bg-white dark:hover:bg-white dark:hover:text-black";
                a.textContent = platform.name;
                content.appendChild(a);
            });
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
