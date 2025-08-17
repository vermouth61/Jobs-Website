<script setup>
    import { ref, watch } from 'vue';
    import Button from '../components/ui/button.vue';
    import MyInput from '../components/ui/MyInput.vue';
    import Select from '../components/ui/select.vue';
    import { fields, governorates, jobFutures, jobTypes, levels, salaryTypes } from '../data';
import { toast } from 'vue3-toastify';

    const jobTitle = ref('');
    const jobField = ref('');
    const jobType = ref('');
    const factoryName = ref('');
    const governorate = ref('');
    const experienceLevel = ref('');
    const salaryType = ref('');
    const salaryValue = ref('');
    const jobDetails = ref('');
    const requiredSkills = ref('');

    const jobTitleError = ref(false);
    const jobFieldError = ref(false);
    const jobTypeError = ref(false);
    const factoryNameError = ref(false);
    const governorateError = ref(false);
    const experienceLevelError = ref(false);
    const salaryTypeError = ref(false);
    const salaryValueError = ref(false);
    const jobDetailsError = ref(false);
    const requiredSkillsError = ref(false);

    const validation = () => {
        jobTitleError.value = !jobTitle.value;
        jobFieldError.value = !jobField.value;
        jobTypeError.value = !jobType.value;
        factoryNameError.value = !factoryName.value;
        governorateError.value = !governorate.value;
        experienceLevelError.value = !experienceLevel.value;
        salaryTypeError.value = !salaryType.value;
        salaryValueError.value = !salaryValue.value;
        jobDetailsError.value = !jobDetails.value;
        requiredSkillsError.value = !requiredSkills.value;

        if (jobTitleError.value || jobFieldError.value || jobTypeError.value || factoryNameError.value || governorateError.value || experienceLevelError.value || salaryTypeError.value || salaryValueError.value || jobDetailsError.value || requiredSkillsError.value) {
            console.log(jobDetailsError,jobFieldError,jobTitleError,jobTypeError,salaryTypeError,salaryValueError,governorateError,factoryNameError,requiredSkillsError,experienceLevelError)
            toast('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.', {
                theme: "colored",
                type: "error",
                position: "top-center",
                transition: "slide",
                autoClose: 2000
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return false;
        }
    };
    const addJob = () => {
        validation();
        
        
        if (!jobTitleError.value && !jobFieldError.value && !jobTypeError.value && !factoryNameError.value && !governorateError.value && !experienceLevelError.value && !salaryTypeError.value && !salaryValueError.value && !jobDetailsError.value && !requiredSkillsError.value) {
            const jobData = {
                title: jobTitle.value,
                field: jobField.value,
                type: jobType.value,
                factory: factoryName.value,
                governorate: governorate.value,
                experience: experienceLevel.value,
                salary: {
                    type: salaryType.value,
                    value: salaryValue.value
                },
                details: jobDetails.value,
                skills: requiredSkills.value
            };
            toast('!تم إضافة الوظيفة بنجاح', {
                theme: "colored",
                type: "success",
                position: "top-center",
                transition: "slide",
                autoClose: 2000
            });
            jobTitle.value = '';
            jobField.value = '';
            jobType.value = '';
            factoryName.value = '';
            governorate.value = '';
            experienceLevel.value = '';
            salaryType.value = '';
            salaryValue.value = '';
            jobDetails.value = '';
            requiredSkills.value = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('Job Data:', jobData);
        }
        
    }
    
    watch(jobTitle, () => {
        jobTitleError.value = !jobTitle.value;
    })
    watch(jobField, () => {
        jobFieldError.value = !jobField.value;
    })
    watch(jobType, () => {
        jobTypeError.value = !jobType.value;
    })
    watch(factoryName, () => {
        factoryNameError.value = !factoryName.value;
    })
    watch(governorate, () => {
        governorateError.value = !governorate.value;
    })
    watch(experienceLevel, () => {
        experienceLevelError.value = !experienceLevel.value;
    })
    watch(salaryType, () => {
        salaryTypeError.value = !salaryType.value;
    })
    watch(salaryValue, () => {
        salaryValueError.value = !salaryValue.value;
    })
    watch(jobDetails, () => {
        jobDetailsError.value = !jobDetails.value;
    })
    watch(requiredSkills, () => {
        requiredSkillsError.value = !requiredSkills.value;
    })
</script>

<template>
    <div dir="rtl" class="w-full bg-[#F6F8FA] border-[1px] border-[#B8BCC7] p-[24px] rounded-lg items-center flex flex-col gap-[32px]">
        <h1 class="text-[#246BFD] text-[32px] font-[600]">حدد تفاصيل الوظيفة</h1>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobTitle" class="text-[16px] font-[600] text-[#36394A]">طبيعية العمل</label>
                <MyInput v-model="jobTitle" :type="'text'" placeholder="مثال : سباك" :extraClass="`bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px] ${jobTitleError ? 'border-red-500 border-2' : ''}`"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobField" class="text-[16px] font-[600] text-[#36394A]">مجال العمل</label>
                <Select v-model="jobField" defaultSelected="مثال : سباكة" :options="fields" :extraClass="`bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1 ${jobFieldError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobType" class="text-[16px] font-[600] text-[#36394A]">نوع العمل</label>
                <Select v-model="jobType" defaultSelected="مثال : دوام كلي" :options="jobTypes" :extraClass="`bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1 ${jobTypeError ? 'border-red-500 border-2' : ''}`"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="factoryName" class="text-[16px] font-[600] text-[#36394A]">اسم المصنع / الورشة</label>
                <MyInput v-model="factoryName" :type="'text'" placeholder="مثال : المقاولون العرب" :extraClass="`bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px] ${factoryNameError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="governorate" class="text-[16px] font-[600] text-[#36394A]">المحافظة</label>
                <Select v-model="governorate" defaultSelected="مثال : المنوفية" :options="governorates" :extraClass="`bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1 ${governorateError ? 'border-red-500 border-2' : ''}`"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="experienceLevel" class="text-[16px] font-[600] text-[#36394A]">مستوى الخبرة</label>
                <Select v-model="experienceLevel" defaultSelected="مثال : مبتدئ" :options="levels" :extraClass="`bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1 ${experienceLevelError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="salaryType" class="text-[16px] font-[600] text-[#36394A]">نوع المرتب</label>
                <Select v-model="salaryType" defaultSelected="مثال : شهري" :options="salaryTypes" :extraClass="`bg-white h-[60px] border-[#7D889D] focus:border-[#246BFD] focus:ring-1 ${salaryTypeError ? 'border-red-500 border-2' : ''}`"/>
            </div>
            <div class="w-full flex flex-col gap-[8px]">
                <label for="salaryValue" class="text-[16px] font-[600] text-[#36394A]">قيمة المرتب ( بالجنيه )</label>
                <MyInput v-model="salaryValue" :type="'text'" placeholder="مثال :  12,000" :extraClass="`bg-white h-[60px] outline-none focus:border-[#246BFD] focus:border-[2px] ${salaryValueError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="jobDetails" class="text-[16px] font-[600] text-[#36394A]">اكتب تفاصيل العمل</label>
                <textarea v-model="jobDetails" class="p-[16px] w-full placeholder:text-[#666D80] bg-white rounded-lg border-[1px] border-[#7D889D] outline-none focus:ring-[1px] focus:ring-[#246BFD] focus:border-[#246BFD] " placeholder="تفاصيل العمل" rows="4" :class="`${jobDetailsError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-[16px]">
            <div class="w-full flex flex-col gap-[8px]">
                <label for="requiredSkills" class="text-[16px] font-[600] text-[#36394A]">مهارات العمل المطلوبة</label>
                <textarea v-model="requiredSkills" class="p-[16px] w-full placeholder:text-[#666D80] bg-white rounded-lg border-[1px] border-[#7D889D] outline-none focus:ring-[1px] focus:ring-[#246BFD] focus:border-[#246BFD] " placeholder="المهارات المطلوبة" rows="3" :class="`${requiredSkillsError ? 'border-red-500 border-2' : ''}`"/>
            </div>
        </div>
        <div class="flex flex-col gap-[16px] w-full">
            <label for="jobFuture" class="text-[16px] font-[600] text-[#36394A]">مهارات العمل المطلوبة</label>
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:justify-center gap-[16px]">
            <div  v-for="jobFuture in jobFutures" :key="jobFuture.id" class="w-full flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" v-model="selectedJobFutures" :value="jobFuture" class="w-4 h-4 text-blue-600 bg-[#B8BCC7] border-gray-300 rounded-sm focus:ring-blue-500">
                <label for="default-checkbox" class="ms-[8px] text-[16px] font-[500px] text-[#0D2559]">{{ jobFuture }}</label>
            </div>
        </div>
        </div>
        <div class="w-full flex justify-center">
            <Button @clickButton="addJob" buttonType="primary" extraClass="w-full h-[52px] text-[16px] font-[600]">
                أضف الوظيفة
            </Button>
        </div>
    </div>
</template>