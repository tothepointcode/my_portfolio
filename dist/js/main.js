// Select DOM Items

$(()=>{
    const menuBtn = $('.menu-btn');
    const menu = $('.menu');
    const menuNav = $('.menu-nav');
    const menuBranding = $('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    //Set initial state of menu
    let showMenu = false;

    menuBtn.on('click', toggleMenu);

    function toggleMenu(){
        if(!showMenu) {
            menuBtn.addClass('close');
            menu.addClass('show');
            menuNav.addClass('show');
            menuBranding.addClass('show');
            navItems.forEach((item)=>{
                $(item).addClass('show');
            });

            // Set menu state
            showMenu = true;
        } else {
            menuBtn.removeClass('close');
            menu.removeClass('show');
            menuNav.removeClass('show');
            menuBranding.removeClass('show');
            navItems.forEach((item)=>{
                $(item).removeClass('show');
            });

            // Set menu state
            showMenu = false;
        }
    }
});
