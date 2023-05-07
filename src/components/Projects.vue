<template>
    <div class="flex justify-center items-center">
        <div
        class="w-full flex flex-col md:flex-row justify-between px-4 md:min-h-screen items-center container space-x-0 md:space-x-28 bg-gray-50">
        <div class="w-full md:w-1/2 m-4">
            <p class="hidden md:flex">
                <img src="../assets/projects.svg" alt="" />
            </p>
            <p class="text-4xl md:text-5xl font-sans font-bold md:ml-12">
                My Latest Creative Endeavors
            </p>
            <p class="text-xl font-serif py-6 md:ml-12">
                These are my recent case study of clients work and some inspirations I create.
            </p>
            <span class="w-full flex space-x-4 items-center md:ml-12 pb-8">
                <p class="font-medium text-2xl font-sans">Next</p>
                <img src="../assets/arrow.svg" alt="" />
                <p class="font-medium text-primary">Uber Case Study</p>
            </span>
            <div class="bg-gray-100 rounded-lg w-full flex items-center p-6 md:ml-12">
                <div class="bg-gray-400 rounded-lg w-40 h-40 mr-4 hidden md:flex ">
                    <img src="../assets/Project.png" class="object-cover rounded-xl shadow-lg h-full" />
                </div>
                <div class="">
                    <p class="font-bold text-2xl pb-4">Starbucks Case Study</p>
                    <div class="">
                        <p class="text-gray-700 font-bold text-xl pb-4">Inspiration</p>
                        <div class="progresbar">
                            <svg width="100%" height="7" viewBox="0 0 272 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.811279" width="272" height="6" rx="3" fill="#F4D6FF" />
                                <rect y="0.811279" width="212" height="6" rx="3" fill="#BB6BD9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 h-1/2 md:h-screen mt-4 md:mt-0 hidden md:flex">
            <img src="../assets/projects.png" class="w-full h-full object-cover" />
        </div>
    </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style></style>
