<script setup>
import { ref, watch } from "vue";
import Button from "./ui/button.vue";
import MyInput from "./ui/MyInput.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "submit"]);
const wName = ref("");
const nameError = ref("");
const wDesc = ref("");
const descError = ref("");
const wImg = ref(null);
const imgError = ref("");
const previewUrl = ref("");

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  wImg.value = file;
  previewUrl.value = URL.createObjectURL(file);
};

const handleSubmit = () => {
  if (wName.value && wDesc.value && wImg.value) {
    emit("submit", {
      wName: wName.value,
      wDesc: wDesc.value,
      wImg: wImg.value,
    });
  }
  if (!wName.value.trim()) {
    nameError.value = "اسم العمل مطلوب";
  } else if (wName.value.length < 3) {
    nameError.value = "اسم العمل يجب ان يكون اكثر من 3 حروف";
  }
  if (!wDesc.value.trim()) {
    descError.value = "وصف العمل مطلوب";
  } else if (wDesc.value.length < 3) {
    descError.value = "وصف العمل يجب ان يكون اكثر من 3 حروف";
  } else if (wDesc.value.length > 70) {
    descError.value = "وصف العمل يجب ان يكون اقل من 70 حروف";
  }
  if (!wImg.value) {
    imgError.value = "صورة العمل مطلوبة";
  }
};
watch(wName, () => {
  nameError.value = "";
});
watch(wDesc, () => {
  descError.value = "";
});
watch(wImg, () => {
  imgError.value = "";
});
const closeModal = () => {
  emit("close");
  wName.value = "";
  wDesc.value = "";
  wImg.value = null;
  previewUrl.value = "";
  nameError.value = "";
  descError.value = "";
  imgError.value = "";
};

// Close modal when clicking outside
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

// Close modal with Escape key
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

// Add event listener for escape key
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }
  }
);
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    @click="handleBackdropClick"
  >
    <div
      dir="rtl"
      class="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <!-- Header with close button -->
      <div
        class="flex justify-between items-center p-6 border-b border-gray-200"
      >
        <h2 class="text-2xl font-bold text-[#246BFD]">إضافة عمل جديد</h2>
        <Button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </Button>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="flex flex-col mb-[12px] gap-[4px]">
          <label class="text-[16px] font-[600]" for="title">اسم العمل</label>
          <MyInput
            v-model="wName"
            class="outline-none hover:outline-none border-[1px] border-[#DFE1E7] focus:border-[#246BFD]"
            type="text"
            id="title"
            placeholder="اكتب اسم العمل هنا .."
          />
          <p class="text-[12px] text-red-600">{{ nameError }}</p>
        </div>
        <div class="flex flex-col mb-[12px] gap-[4px]">
          <label class="text-[16px] font-[600]" for="description"
            >وصف بسيط للعمل</label
          >
          <MyInput
            v-model="wDesc"
            class="outline-none hover:outline-none border-[1px] border-[#DFE1E7] focus:border-[#246BFD]"
            type="text"
            id="description"
            placeholder="اوصف العمل بجملة صغيرة ...."
          />
          <p class="text-[12px] text-red-600">{{ descError }}</p>
        </div>
        <label for="file">
          <div
            class="w-full cursor-pointer text-center rounded-lg p-[24px] bg-[#ECEFF3] border-[1px] border-dashed border-[#666D80] hover:border-[#246BFD] hover:bg-[#ecf2ff] duration-300"
          >
            <div v-if="!wImg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="mx-auto mb-[4px]"
              >
                <path
                  d="M12.75 20.25V15.75H15.75L12 11.25L8.25 15.75H11.25V20.25H7.5V20.2125C7.374 20.22 7.254 20.25 7.125 20.25C5.63316 20.25 4.20242 19.6574 3.14752 18.6025C2.09263 17.5476 1.5 16.1168 1.5 14.625C1.5 11.739 3.6825 9.387 6.483 9.0645C6.72854 7.78094 7.41368 6.62306 8.42057 5.79001C9.42746 4.95696 10.6932 4.5008 12 4.5C13.307 4.50072 14.5729 4.95682 15.5801 5.78985C16.5872 6.62289 17.2727 7.78081 17.5185 9.0645C20.319 9.387 22.4985 11.739 22.4985 14.625C22.4985 16.1168 21.9059 17.5476 20.851 18.6025C19.7961 19.6574 18.3653 20.25 16.8735 20.25C16.7475 20.25 16.626 20.22 16.4985 20.2125V20.25H12.75Z"
                  fill="#666D80"
                />
              </svg>
              <h3 class="text-[18px] mb-[8px] font-bold">ارفاق صورة للعمل</h3>
              <p class="text-[#666D80] text-[16px]">
                اسحب وأفلت الصورة هنا أو انقر للاختيار
              </p>
            </div>
            <img
              v-else
              :src="previewUrl"
              class="w-[200px] mx-auto lg:w-[250px]"
              alt="portfolio"
            />
          </div>
        </label>
        <p class="text-[12px] mt-[4px] text-red-600">{{ imgError }}</p>
        <input
          @change="handleFileUpload"
          type="file"
          id="file"
          accept="image/*"
          class="hidden"
        />
        <div>
          <Button
            @clickButton="handleSubmit"
            class="w-full mt-[24px]"
            buttonType="primary"
            >أضف العمل</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
