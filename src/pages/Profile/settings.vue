<template>
  <div class="w-full p-6">
  
    <div class="flex flex-col lg:flex-row items-center gap-6   rounded-2xl p-6">
     
      <div class="flex flex-col items-center">
        <img
          src="../../assets/application/123.png"
          alt="صورة"
          class="w-32 h-32 rounded-lg "
        />
        
      </div>

    
      <div class="flex flex-col gap-4 flex-1">
        <div class="flex items-center justify-between  border-[1px] border-[#B8BCC7] w-[400px] rounded-lg  bg-gray-100">
          <div class="px-4  flex flex-col ">
          <span class="text-center" >صورة البطاقة</span>
          <span class="text-[hsla(220,9%,46%,1)]" >Ahmed_ID_2024.pdf</span>

          </div>
          <input type="file" class="hidden" id="idFile" />
          <div class=" bg-blue-500 px-4 py-4 w-50 gap-2 justify-center rounded-e-lg flex">
            <img src="./../../assets/application/Vector.png" >
          <label
            for="idFile"
            class="cursor-pointer text-white  "
          >
            غير البطاقة
          </label>
          </div>
        </div>

        <div class="flex items-center justify-between border-[1px] border-[#B8BCC7] w-[400px] rounded-lg  bg-gray-100">
          <div class="px-4 flex flex-col ">
          <span class="text-center" >السيرة الذاتية</span>
          <span class=" text-[hsla(220,9%,46%,1)]">Ahmed_CV_2024.pdf</span>

          </div>
          <input type="file" class="hidden" id="cvFile" />
          <div class=" bg-blue-500 px-4 py-4 w-50 gap-2 justify-center rounded-e-lg flex">
            <img src="./../../assets/application/Vector.png" >
          <label
            for="idFile"
            class="cursor-pointer text-white  "
          >
            غير السيرة الذاتية
          </label>
          </div>
        </div>
      </div>
    </div>

   
    <div class=" mx-auto bg-white  p-6">
    <h2 class="text-xl font-semibold text-blue-600 mb-6">المعلومات الشخصية</h2>
    
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">الإسم الأول</label>
        <input 
          type="text" 
          v-model="form.firstName"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

     
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">الإسم الأخير</label>
        <input 
          type="text" 
          v-model="form.lastName"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">البريد الإلكتروني</label>
        <input 
          type="email" 
          v-model="form.email"
          disabled
          class="border border-[#B8BCC7] rounded-lg p-4 bg-gray-100 text-gray-600"
        />
      </div>

      
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">رقم الهاتف</label>
        <input 
          type="text" 
          v-model="form.phone"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

     

      
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">المهنة</label>
        <input 
          type="text" 
          v-model="form.job"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">المحافظة</label>
        <input 
          type="text" 
          v-model="form.city"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    

    
      <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">الخبرة</label>
        <select v-model="form.experience" class=" border border-[#B8BCC7] rounded-lg p-4 ">
          <option value="مبتدئ">مبتدئ</option>
          <option value="متوسط">متوسط</option>
          <option value="خبير">خبير</option>
        </select>
      </div>
        
        <div class="flex flex-col">
        <label class="mb-1 text-gray-700 font-medium">تاريخ الميلاد</label>
        <input 
          type="text" 
          v-model="form.birthdate"
          class=" border border-[#B8BCC7] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </form>
  </div>
    
    <div class="  p-6 mt-6">
      <h2 class="text-xl font-bold text-blue-700 mb-4">المهارات</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-3">
          <span class="text-gray-500 ">نبذة شخصية </span>
        <textarea
          
          class="w-full border rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
          v-model="form.personal"
        ></textarea>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-gray-500 ">مهارات</span>
        <textarea
          v-model="form.skills"
          
          class="w-full border rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"

        ></textarea>
        </div>
      </div>
    </div>

   
   <div class=" bg-white  rounded-2xl p-6" dir="rtl">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-blue-600">الخبرة المهنية</h2>
      <button 
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        @click="addJob"
      >
        إضافة وظيفة
      </button>
    </div>

  
    <div v-for="(job, index) in jobs" :key="index" class="border rounded-xl bg-[#F6F8FA]  border-[#B8BCC7] p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      
        <div class="flex flex-col">
          <label class="mb-1 text-gray-700 font-medium">المصنع / الشركة</label>
          <input 
            v-model="job.company"
            class="border bg-white border-[#B8BCC7] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

       
        <div class="flex flex-col">
          <label class="mb-1 text-gray-700 font-medium">طبيعة العمل</label>
          <input 
            v-model="job.role"
            class="border rounded-lg p-2 focus:outline-none border-[#B8BCC7] bg-white focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="flex flex-col">
          <label class="mb-1 text-gray-700 font-medium">الفترة من</label>
          <select v-model="job.from" class="border border-[#B8BCC7] bg-white rounded-lg p-2">
            <option value="1/4/2017">1/4/2017</option>
            <option value="1/6/2018">1/6/2018</option>
            <option value="1/6/2021">1/6/2021</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="mb-1 text-gray-700 font-medium">إلى</label>
          <select v-model="job.to" class="border border-[#B8BCC7] bg-white rounded-lg p-2">
            <option value="1/4/2018">1/4/2018</option>
            <option value="1/6/2020">1/6/2020</option>
            <option value="الآن">الآن</option>
          </select>
        </div>
      </div>

      
      <div class="flex flex-col mb-4">
        <label class="mb-1 text-gray-700 font-medium">وصف العمل</label>
        <textarea 
          v-model="job.description"
          rows="3"
          class="border rounded-lg p-2 focus:outline-none focus:ring-2 border-[#B8BCC7] bg-white focus:ring-blue-400"
        ></textarea>
      </div>

      
      <button 
        class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        @click="deleteJob(index)"
      >
        حذف الوظيفة
      </button>
    </div>

    
    <div class="flex justify-center">
      <button 
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        @click="saveJobs"
      >
        حفظ التغييرات
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const jobs = ref([

]);
const form = ref({
  firstName: "أحمد",
  lastName: "محمد",
  email: "ahmed.mohamed@email.com",
  phone: "+20-1094830184",
  city: "المنوفية",
  job: "لحام أرجون",
  birthdate: "1994-06-01",
  experience: "مبتدئ",
  personal:"نجار محترف بخبرة تزيد عن ٨ سنوات في أعمال النجارة باستخدام الآلات المختلفة ، أتمتع بدقة عالية في تنفيذ الأثاث المنزلي وصناعة جميع الديكورات الحديثة ، يمكنني تنفيذ كل ما تريد بدقة ووضوح ومتابعة العمل معك خطوة بخطوة .",
  skills:"لحام TIG و MIG لحام الأنابيب والخزانات معدات القطع والتجهيز الالتزام بمعايير السلامة",
});





onMounted(() => {
  const storedJobs = localStorage.getItem("jobs");
  if (storedJobs) {
    jobs.value = JSON.parse(storedJobs);
  } else {
   
    jobs.value = [
      {
        company: "شركة النصر للصناعة - القاهرة",
        role: "في لحام أرجون وكهرباء",
        from: "1/6/2021",
        to: "الآن",
        description: "لحام أنابيب بتقنية ستانلس وألومنيوم باستخدام أرجون بجودة عالية..."
      },
      {
        company: "مجمع العرب الصناعية - العاشر من رمضان",
        role: "فني لحام",
        from: "1/6/2018",
        to: "1/6/2020",
        description: "أعمال لحام كبيرة تشمل توظيف في معدات المصانع وتجميع هياكل معدنية..."
      },
      {
        company: "شركة المتحدة للبلاستيك - المنوفية",
        role: "مساعد لحام مبتدئ",
        from: "1/4/2017",
        to: "1/4/2018",
        description: "مساعدة في أعمال اللحام الثقيلة وتجميع وحدات صناعية تحت إشراف مهندسين مختصين."
      }
    ];
  }
});


const addJob = () => {
  jobs.value.push({
    company: "",
    role: "",
    from: "",
    to: "",
    description: ""
  });
};

const deleteJob = (index) => {
  jobs.value.splice(index, 1);
};

const saveJobs = () => {
  localStorage.setItem("jobs", JSON.stringify(jobs.value));
  alert("تم حفظ التغييرات بنجاح ✅");
};

</script>
