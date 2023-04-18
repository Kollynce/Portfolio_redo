<template>
  <section class="bg-gray-50 mt-20 py-8 p-4">
    <div class="container mx-auto">
      <div class="flex flex-wrap md:flex-nowrap items-stretch">
        <!-- Picture part -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0 min-h-[400px] relative">
          <img src="/kreation.jpg" alt="About Picture"
            class="absolute inset-0 object-cover w-full h-full rounded-xl" />
        </div>
        <!-- Content part -->
        <div class="w-full md:w-1/2 pl-0 md:pl-10 py-5">
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-primary">Who am I?</h2>
            <h6 class="text-3xl font-medium">
              I'm Collins Odeny (<span class="text-primary">Collins Kreation</span>), a visual UX/UI Designer and Web
              Developer
            </h6>
            <p class="text-xl text-gray-500">
              Hi! I'm Collins Odeny, a UI/UX designer with a passion for crafting intuitive, visually appealing digital
              experiences to help your business thrive. My unique background as a full-stack developer for 5 years,
              working on Vue and Laravel projects, allows me to design functional and easy-to-use solutions tailored to
              your needs.
              <br>
              By collaborating with me, you'll benefit from my design and development expertise, ensuring a seamless
              integration and an end product that exceeds your customers' expectations. I encourage you to explore my
              portfolio to see the projects I've worked on and discover how my skills can elevate your business. Let's
              join forces to create outstanding digital experiences that captivate your audience.
            </p>
            <hr class="">
            <div class="grid grid-cols-2 gap-4 text-xl">
              <div>
                <span class="font-medium">Name: </span>
                <span class="text-gray-500">Collins Odeny</span>
              </div>
              <div>
                <span class="font-medium">Email: </span>
                <span><a href="mailto:hello@collinskration.com"
                    class="text-primary font-medium">hello@collinskration.com</a></span>
              </div>
              <div>
                <span class="font-medium">Slill: </span>
                <span class="text-gray-500">UI/UX Designer</span>
              </div>
              <div>
                <span class="font-medium">From: </span>
                <span class="text-gray-500">Nairobi, Kenya</span>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <a href="#" class="btn btn-primary py-4 px-12 bg-primary text-white rounded-full">Download CV</a>
              <div class="flex items-center md:ml-4">
                <img class="w-32 h-8 mr-4" src="../assets/arrow.svg" alt="" />
                <a href="https://dribbble.com/Kryme" target="_blank"
                  class="p-4 rounded-full shadow-lg hover:shadow-purple-200">
                  <img src="../assets/dribbble.svg" alt="" />
                </a>
                <a href="https://www.behance.net/collinskreation" target="_blank"
                  class="p-4 ml-2 rounded-full shadow-lg hover:shadow-purple-200">
                  <img src="../assets/behance.svg" alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCR95dEic6Il-bRZUyTBGsng" target="_blank"
                  class="p-4 ml-2 rounded-full shadow-lg hover:shadow-purple-200">
                  <img src="../assets/youtube.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/collins-odeny-844449159/" target="_blank"
                  class="p-4 ml-2 rounded-full shadow-lg hover:shadow-purple-200">
                  <img src="../assets/linkedin.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>.about-image {
  object-fit: cover;
}</style>
