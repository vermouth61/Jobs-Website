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

  <div dir="rtl" class="relative px-[20px] lg:px-[100px] py-[40px] lg:py-[200px] w-fit mx-auto">
   
       <h1 class="text-white text-[32px] mb-[16px] lg:text-[64px] font-[700]">الموقع رقم 1 للوظائف في مصر</h1>
       <p class="text-white mb-[24px] text-[16px] lg:text-[24px] lg:w-[765px]">
         معلمين هتوصلك بوظائف خالية وفرص عمل في أكبر شركات مصر، مهما كانت مهاراتك،
         خبراتك أو مستوى تعليمك.
       </p>

   
    <div class="flex w-full">
        <MyInput @keyup.enter="searchHandler" type="text" extraClass="h-[60px] flex-2 border-none focus:outline-none rounded-l-none" v-model="search" placeholder="مثال : سباك"/>
        <Button @clickButton="searchHandler" extraClass="h-[60px] flex-1 rounded-r-none" buttonType="primary">بحث وظائف خالية</Button>
    </div>
    <p class="text-white text-[18px] font-[500] mt-1">“2804” وظيفة خالية</p>
  </div>
</div>
</template>
