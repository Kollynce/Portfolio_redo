<template>
    <div class="w-full flex flex-col md:flex-row justify-between p-4 md:min-h-screen items-center container md:space-x-28">
        <div class="w-full md:w-1/2 m-4">
            <p class="hidden md:flex">
                <img src="../assets/footer.svg" alt="" />
            </p>
            <p class="text-4xl md:text-5xl font-sans font-bold md:ml-12 pb-6">
                Lets work together!
            </p>
            <div class="flex items-center md:ml-12">
                <div class="w-14 h-14 mr-4 bg-primary rounded-md flex justify-center items-center">
                    <p class="text-2xl font-bold text-white text-center">
                        <img src="../assets/email.svg" alt="" />
                    </p>
                </div>
                <div class="flex-1">
                    <p class="text-gray-500 font-medium text-xl pb-2">Email</p>
                    <p class="font-medium text-xl">hello.collinskreation.com</p>
                </div>
            </div>
            <hr class="my-4 w-2/3 h-2 text-gray-500 md:ml-12">
            <div class="flex items-center md:ml-12">
                <div class="w-14 h-14 mr-4 bg-primary rounded-md flex justify-center items-center">
                    <p class="text-2xl font-bold text-white text-center">
                        <img src="../assets/location.svg" alt="" />
                    </p>
                </div>
                <div class="flex-1">
                    <p class="text-gray-500 font-medium text-xl pb-2">Location</p>
                    <p class="font-medium text-xl">Nairobi, Kenya</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <img src="../assets/cartoon-me.jpeg"
                class="w-3/4 md:w-auto object-cover rounded-xl shadow-lg shadow-purple-300" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>
