<script setup>
import { ref } from "vue";
import MyInput from "../../components/ui/MyInput.vue";
import Button from "../../components/ui/button.vue";
import { useRouter } from "vue-router";

const search=ref('')
const router = useRouter();
const searchHandler=()=>{
    if(search.value.trim()){
      router.push({name:'Jobs',query:{search:search.value}})
    }
    else{
      router.push({name:'Jobs'})
    }
}

</script>
<template>
 <div class="relative lg:w-full lg:h-full overflow-hidden">
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute lg:w-full lg:h-full object-cover z-[-2]"
    src="../../assets/Hero video/7492602-uhd_4096_2160_25fps.mp4"
  ></video>

  
  <div class="absolute z-[-1] lg:w-full lg:h-full bg-black opacity-30"></div>

  <div dir="rtl" class="relative px-[8px] lg:px-[100px] py-[16px] sm:px-[20px] sm:py-[20px] lg:py-[200px] w-full sm:w-fit mx-auto">
   
       <h1 class="text-white text-[20px] md:text-[32px] lg:mb-[16px] lg:text-[64px] font-[700]">مِعلمــين، الثقة اللي تحتاجها في التوظيف</h1>
       <p class="text-white mb-[16px] md:mb-[24px] text-[14px] md:text-[18px] lg:text-[24px] lg:w-[765px]">
         معلمين هتوصلك بوظائف خالية وفرص عمل في أكبر شركات مصر، مهما كانت مهاراتك،
         خبراتك أو مستوى تعليمك.
       </p>

   
    <div class="flex w-full">
        <MyInput @keyup.enter="searchHandler" type="text" extraClass="h-[48px] md:h-[60px] w-full border-none focus:outline-none rounded-l-none" v-model="search" placeholder="مثال : سباك"/>
        <Button @clickButton="searchHandler" extraClass="h-[48px] md:h-[60px] w-[210px] md:w-[300px] text-[14px] md:text-[18px]  rounded-r-none" buttonType="primary">بحث وظائف خالية</Button>
    </div>
    <p class="text-white text-[14px] md:text-[18px] font-[500] mt-1">“2804” وظيفة خالية</p>
  </div>
</div>
</template>
