<script setup>
import Button from '../../components/ui/button.vue';
import { useRouter } from 'vue-router';


const router = useRouter();


const goToProfile = () => {
  router.push("/worker-account");
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>

<template>
  <div class="flex flex-col w-full items-center gap-10">
    <div class="flex flex-row  gap-2  w-full">
      <div class="flex flex-col gap-4">

        <div class="flex flex-col  py-5 px-8 bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-lg xl:h-[130px] gap-5 ">
          <div class="flex items-center justify-between  flex-wrap gap-2">
            <h2 class="text-xl font-bold">لحام آلات معدنية</h2>
            <div class="flex gap-2">
              <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">مشروع بالاتفاق</span>
              <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">مبتدئ</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center  text-gray-600 text-sm justify-between">
            <div class="flex items-center gap-1">
              <img src="../../assets/application/streamline-flex_screwdriver-wrench-solid.png">
              <span>لحام المعادن</span>
            </div>
            <div class="flex items-center gap-1">
              <img src="../../assets/application/Buildings 3.png">

              <span>ورشة الديمباطي</span>
            </div>
            <div class="flex items-center gap-1">
              <img src="../../assets/application/Map Point Wave.png">

              <span>الدقهلية</span>
            </div>
            <div class="flex items-center gap-1">
              <img src="../../assets/application/iconoir_money-square-solid.png">

              <span>800 يومياً</span>
            </div>
          </div>
        </div>
        <div
          class=" flex flex-col  py-5 px-8 bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-lg xl:h-[220px]  gap-5 ">
          <h3 class="font-bold text-lg mb-2">تفاصيل العمل</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            أبحث عن لحام محترف في الأرجون والكهرباء لإنجاز مشروع يتطلب مهارة عالية ودقة في العمل المعدني.
            الهدف من هذا العمل هو تنفيذ الأعمال بدقة وجودة عالية حسب المواصفات المطلوبة، مع ضمان السلامة وجودة التشطيب
            النهائي.
            يجب أن يكون المتقدم لديه خبرة عملية سابقة ويجيد التعامل مع معدات اللحام المختلفة، خاصة لحام الأرجون (TIG)
            واللحام الكهربائي (MMA/ARC)،
            وفرا أدوات اللحام المتخصصة (مثل أجهزة TIG و ARC).
          </p>
        </div>

      </div>
      <div class="flex flex-col  py-5 px-8 bg-[#F6F8FA] border-[1px] border-[#B8BCC7] rounded-lg  gap-5 ">
        <h3 class="font-bold text-lg  mb-4">المهارات المطلوبة</h3>
        <p class=" text-gray-700 ">
          القدرة على استخدام معدات اللحام مثل : MIG, TIG, Arc welding
          ضبط زوايا اللحام وقياسات القطع بدقة
          استخدام أدوات القطع والصنفرة
          الالتزام بإجراءات السلامة المهنية
        </p>

        <h3 class="font-bold text-lg  mt-2">مميزات العمل</h3>
        <div class="grid grid-cols-2 gap-y-2 text-gray-700 ">
          <span>بدل مواصلات</span>
          <span>تأمين صحي</span>
          <span>بدل طعام</span>
          <span>أجازات مدفوعة</span>
          <span>توفر سكن مجاني</span>
          <span>مكافآت الأعياد</span>
        </div>
      </div>
    </div>

    <div class="w-full flex-col flex gap-3">
      <h3 class="text-4xl">المتقدمين للعمل :2</h3>
      <div class="flex flex-col  w-full  py-5 px-8 bg-[#F6F8FA] border-[1px] border-[#B8BCC7] gap-12 rounded-lg">
        <div class="flex items-center gap-4">
          <img src="../../assets/application/Rectangle 12.png" alt="Profile"
            class="w-16 h-16  object-cover rounded-lg" />
          <div>
            <h2 class="text-lg ">أحمد محمد الشرقاوي</h2>
            <p class="text-blue-500 font-medium">نجار</p>
          </div>
        </div>
        <div>
          <h3 class="text-lg mb-2">لماذا أنت مناسب لهذه الوظيفة؟</h3>
          <p class="bg-white border border-[#B8BCC7] rounded-md p-3 leading-relaxed text-gray-700">أنا مناسب للوظيفة دي
            لأن عندي خبرة 5 سنين في تصنيع الأثاث والديكورات الخشبية، وأعرف أشتغل على أدوات زي المنشار والمخرطة بكفاءة ،
            بقدر أقرا الرسومات الهندسية وأنفذها بدقة، وكمان عندي مهارة في تركيب الأبواب والنوافذ الخشبية بسرعة ونظافة.
            حريص على العمل الجماعي مع الفريق، ومستعد أتعلم تقنيات جديدة زي استخدام الـ CNC لو محتاجين، عشان أساعد الورشة
            تطلع شغل أحسن.</p>
        </div>

        <div class="grid grid-cols-2 gap-4 ">
          <div>
            <label class="block text-lg text-bold  mb-1">الراتب المتوقع</label>
            <input type="text" value="500 يومياً" readonly class="w-full bg-white border rounded-md p-2" />
          </div>
          <div>
            <label class="block  text-lg text-bold  mb-1">تاريخ البدء</label>
            <input type="text" value="05/05/2026" readonly class="w-full  bg-white border rounded-md p-2" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-lg ">الأعمال السابقة</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="border rounded-lg border-[#B8BCC7] p-4 bg-white">
              <img src="../../assets/application/img.png" alt="" class=" w-full rounded-lg " />
              <div class="p-3">
                <h4 class="font-semibold">بوابات حديدية</h4>
                <p class="text-sm text-gray-500">عمل فني - 2023</p>
              </div>
            </div>
            <div class="border rounded-lg  border-[#B8BCC7] p-4 bg-white">
              <img src="../../assets/application/md.png" alt="" class=" w-full rounded-lg" />
              <div class="p-3">
                <h4 class="font-semibold">إصلاح المعدات الثقيلة</h4>
                <p class="text-sm text-gray-500">صيانة صناعية - 2023</p>
              </div>
            </div>
            <div class="border rounded-lg border-[#B8BCC7] p-4 bg-white">
              <img src="../../assets/application/th.png" alt="" class=" w-full rounded-lg" />
              <div class="p-3">
                <h4 class="font-semibold">تصنيع معدني مخصص</h4>
                <p class="text-sm text-gray-500">ورشة متخصصة - 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button buttonType="primary" extraClass="  flex  items-center text-[16px]"  @clickButton="goToProfile">
            شوف صفحتي
          </Button>
        </div>

      </div>
    </div>
    <div class="flex flex-col  w-full  py-5 px-8 bg-[#F6F8FA] border-[1px] border-[#B8BCC7] gap-12 rounded-lg">
      <div class="flex items-center gap-4">
        <img src="../../assets/application/Rectangle 12.png" alt="Profile" class="w-16 h-16  object-cover rounded-lg" />
        <div>
          <h2 class="text-lg ">أحمد محمد الشرقاوي</h2>
          <p class="text-blue-500 font-medium">نجار</p>
        </div>
      </div>
      <div>
        <h3 class="text-lg mb-2">لماذا أنت مناسب لهذه الوظيفة؟</h3>
        <p class="bg-white border border-[#B8BCC7] rounded-md p-3 leading-relaxed text-gray-700">أنا مناسب للوظيفة دي
          لأن عندي خبرة 5 سنين في تصنيع الأثاث والديكورات الخشبية، وأعرف أشتغل على أدوات زي المنشار والمخرطة بكفاءة ،
          بقدر أقرا الرسومات الهندسية وأنفذها بدقة، وكمان عندي مهارة في تركيب الأبواب والنوافذ الخشبية بسرعة ونظافة.
          حريص على العمل الجماعي مع الفريق، ومستعد أتعلم تقنيات جديدة زي استخدام الـ CNC لو محتاجين، عشان أساعد الورشة
          تطلع شغل أحسن.</p>
      </div>

      <div class="grid grid-cols-2 gap-4 ">
        <div>
          <label class="block text-lg text-bold  mb-1">الراتب المتوقع</label>
          <input type="text" value="500 يومياً" readonly class="w-full bg-white border rounded-md p-2" />
        </div>
        <div>
          <label class="block  text-lg text-bold  mb-1">تاريخ البدء</label>
          <input type="text" value="05/05/2026" readonly class="w-full  bg-white border rounded-md p-2" />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-lg ">الأعمال السابقة</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="border rounded-lg border-[#B8BCC7] p-4 bg-white">
            <img src="../../assets/application/img.png" alt="" class=" w-full rounded-lg " />
            <div class="p-3">
              <h4 class="font-semibold">بوابات حديدية</h4>
              <p class="text-sm text-gray-500">عمل فني - 2023</p>
            </div>
          </div>
          <div class="border rounded-lg  border-[#B8BCC7] p-4 bg-white">
            <img src="../../assets/application/md.png" alt="" class=" w-full rounded-lg" />
            <div class="p-3">
              <h4 class="font-semibold">إصلاح المعدات الثقيلة</h4>
              <p class="text-sm text-gray-500">صيانة صناعية - 2023</p>
            </div>
          </div>
          <div class="border rounded-lg border-[#B8BCC7] p-4 bg-white">
            <img src="../../assets/application/th.png" alt="" class=" w-full rounded-lg" />
            <div class="p-3">
              <h4 class="font-semibold">تصنيع معدني مخصص</h4>
              <p class="text-sm text-gray-500">ورشة متخصصة - 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
        <Button buttonType="primary" extraClass="  flex  items-center text-[16px]" @clickButton="goToProfile">
          شوف صفحتي
        </Button>
      </div>

    </div>
  </div>
</template>
