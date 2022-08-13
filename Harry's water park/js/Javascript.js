const primaryNav = document.querySelector(".prim-navi");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click",() => {
	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility === "false"){
		primaryNav.setAttribute("data-visible", "true");
		navToggle.setAttribute("aria-expanded", "true");
	} else if (visibility === "true"){
		primaryNav.setAttribute("data-visible", "false");
		navToggle.setAttribute("aria-expanded", "false");
	}
});

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
		<script>
		const swiper = new Swiper('.swiper', {
    
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});
		</script>