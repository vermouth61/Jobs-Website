import { GiValve } from 'vue-icons-plus/gi';
import { Fa6Hammer, Fa6Trowel } from 'vue-icons-plus/fa6';
import { IpHammerAndAnvil } from 'vue-icons-plus/ip';
import { BsFillPlugFill } from 'vue-icons-plus/bs';
import { BiSolidWrench } from 'vue-icons-plus/bi';

// function to get image URL and avoid getting error when importing images
const getImageUrl = (img) => (typeof img === 'string' ? img : img?.default);

export const jobFieldsArray = [
  {
    id: 1,
    field: 'السباكة',
    description:
      'شغل في تركيب وصيانة أنظمة المياه والصرف في المباني السكنية والتجارية والمواقع',
    icon: GiValve,
  },
  {
    id: 2,
    field: 'النجارة',
    description:
      'شغل في تصنيع الأثاث، الديكورات الخشبية، أو أعمال النجارة في المشاريع السكنية والتجارية.',
    icon: Fa6Hammer,
  },
  {
    id: 3,
    field: 'المقاولات و البناء',
    description:
      'شغل في بناء المباني السكنية والتجارية بجودة ممتازة وإدارة مشاريع البناء بأدوات حديثة',
    icon: Fa6Trowel,
  },
  {
    id: 4,
    field: 'تشكيل المعادن',
    description:
      'لحام وتشكيل المعادن للمشاريع الصناعية والإنشائية وتنفيذ هياكل معدنية بكفاءة عالية.',
    icon: IpHammerAndAnvil,
  },
  {
    id: 5,
    field: 'الكهرباء',
    description:
      'تركيب وصيانة الأنظمة الكهربائية للمباني والمصانع وتنفيذ أعمال كهرباء آمنة',
    icon: BsFillPlugFill,
  },
  {
    id: 6,
    field: 'صيانة الآلات',
    description:
      'إصلاح و صيانة الآلات الصناعية و المعدات الثقيلة و تحسين أداء الورش بدعم فنيين ممتازين',
    icon: BiSolidWrench,
  },
];
export const faqsArray = [
  {
    title: 'لماذا معلمين ؟ ',
    description:
      'لأن "معلمين" مش مجرد منصة، دي حل عملي حقيقي لكل اللي بيدور على شغل أو خدمة يدوية يقدر يثق فيها. إحنا بنوفّر تجربة استخدام سهلة وآمنة للطرفين – الحرفي يقدر يعرض شغله ويوصل لعملاء جدد، والعميل يقدر يلاقي الحرفي الصح بدون لف ولا دوخة.',
    open: true,
  },
  {
    title: 'هل التسجيل على "معلمين" مجاني؟',
    description:
      'آه، التسجيل مجاني تمامًا. تقدر تبدأ ببروفايل مجاني وتعرض شغلك أو تدور على خدمات.',
    open: false,
  },
  {
    title: 'هل في طريقة أتأكد بيها إن الحرفيين موثوقين؟',
    description:
      'كل بروفايل بيعدى على مراجعة يدوية، وكمان تقدر تشوف تقييمات وآراء العملاء السابقين ',
    open: false,
  },
  {
    title: 'إزاي أطلب خدمة معينة؟',
    description:
      'ببساطة، سجل كعميل، وانشر طلب فيه تفاصيل الشغل اللي محتاجه، وهتوصلك عروض من الحرفيين',
    open: false,
  },
  {
    title: 'هل في عمولة على الشغل؟',
    description:
      'حاليًا المنصة مجانية بدون أي عمولة. في المستقبل ممكن يكون في نظام اشتراك اختياري.',
    open: false,
  },
  {
    title: 'هل لازم يكون عندي خبرة تقنية علشان أستخدم الموقع؟',
    description:
      'لا خالص، المنصة مصممة بطريقة بسيطة وسهلة لأي حد يستخدمها من أول مرة',
    open: false,
  },
  {
    title: 'هل أقدر أطلب أكتر من خدمة في نفس الوقت؟',
    description:
      'طبعًا، تقدر تنشر أكتر من طلب شغل حسب احتياجك، وكل طلب بيكون منفصل',
    open: false,
  },
  {
    title: 'ممكن أشتغل كحرفي وكمان أطلب خدمات؟',
    description: 'أكيد! تقدر تسجل حساب واحد وتستخدمه في الحالتين لو محتاج',
    open: false,
  },
  {
    title: 'هل متاح في كل المحافظات؟',
    description:
      'بنغطي حاليًا عدد كبير من المحافظات، وبنشتغل على التوسع في الباقي',
    open: false,
  },
];

export const workerExperienceArray = [
  {
    companyName: 'شركة النور الصناعية – القاهرة',
    jobTitle: 'فني لحام أرجون وكهرباء',
    description:
      'لحام أنابيب وأنظمة ستانلس وألومنيوم باستخدام أرجون بدقة عالية، مع تنفيذ مشروعات مصانع ومراكز طبية. ',
    duration: '2021 - حتى الآن',
  },
  {
    companyName: 'شركة الأمل للمقاولات – الجيزة',
    jobTitle: 'فني لحام',
    description:
      'أعمال لحام كهرباء ثقيل وخفيف في معدات المصانع، وتجميع هياكل معدنية للمخازن والورش.',
    duration: '2019 - 2021',
  },
  {
    companyName: 'شركة السلام للصناعات المعدنية – الإسكندرية',
    jobTitle: 'مساعد لحام مبتدئ',
    description:
      'مساعدة في لحام الصاج الثقيل وتجميع وحدات صناعية تحت إشراف مهندسين متخصصين.',
    duration: '2017 - 2019',
  },
];

const images = import.meta.glob('../assets/portfolio/*.png', { eager: true });
export const workerPortfolioArray = [
  {
    id: 1,
    title: 'شبابيك حديدية مزخرفة',
    description: 'شبابيك أمان بنقوش إسلامية جميلة',
    image: getImageUrl(images['../assets/portfolio/c1.png']),
  },
  {
    id: 2,
    title: 'معدات المطابخ',
    description: 'ستيل مقاوم للصدأ - 2023',
    image: getImageUrl(images['../assets/portfolio/c2.png']),
  },
  {
    id: 3,
    title: 'درابزين سلالم معدني',
    description: 'تصنيع وتركيب درابزين سلالم بتصميم عصري',
    image: getImageUrl(images['../assets/portfolio/c3.png']),
  },
  {
    id: 4,
    title: 'هيكل الألمنيوم',
    description: 'مشروع إنشائي - 2024',
    image: getImageUrl(images['../assets/portfolio/c4.png']),
  },
  {
    id: 5,
    title: 'بوابات حديدية',
    description: 'عمل فني - 2023',
    image: getImageUrl(images['../assets/portfolio/c5.png']),
  },
  {
    id: 6,
    title: 'إصلاح المعدات الثقيلة',
    description: 'صيانة صناعية - 2023',
    image: getImageUrl(images['../assets/portfolio/c6.png']),
  },
  {
    id: 7,
    title: 'تصنيع معدني مخصص',
    description: 'ورشة متخصصة - 2022',
    image: getImageUrl(images['../assets/portfolio/c7.png']),
  },
  {
    id: 8,
    title: 'أثاث معدني مخصص',
    description: 'تصميم وتنفيذ طاولات وكراسي معدنية فنية',
    image: getImageUrl(images['../assets/portfolio/c8.png']),
  },
  {
    id: 9,
    title: 'هيكل معدني للحدائق',
    description: 'بناء هيكل معدني للمساحات الخارجية',
    image: getImageUrl(images['../assets/portfolio/c9.png']),
  },
  {
    id: 10,
    title: 'هيكل معدني للمباني',
    description: 'تنفيذ هيكل معدني لمبنى تجاري',
    image: getImageUrl(images['../assets/portfolio/c10.png']),
  },
  {
    id: 11,
    title: 'لحام أنابيب الصلب',
    description: 'مشروع صناعي - 2024',
    image: getImageUrl(images['../assets/portfolio/c11.png']),
  },
  {
    id: 12,
    title: 'بوابة حديدية فنية',
    description: 'تصميم وتنفيذ بوابة حديدية بنقوش عربية تراثية',
    image: getImageUrl(images['../assets/portfolio/c12.png']),
  },
];

const workshopImages = import.meta.glob('../assets/workShops/*.jpg', {
  eager: true,
});

export const workshopsData = [
  {
    id: 1,
    title: 'نجارة الموبيليا',
    englishTitle: 'Furniture Carpentry',
    description:
      'تصميم الأثاث الخشبي البسيط باستخدام الأدوات التقليدية والحديثة',
    detailedDescription:
      'هتتعلم في الورشة تصميم وتصنيع الأثاث الخشبي البسيط باستخدام الأدوات التقليدية والحديثة مع التركيز على الجودة والدقة في التنفيذ. ورشة النجارة بيساعدك تتقن مهارات النجارة للمشاريع المنزلية من خلال تمارين عملية على الأخشاب المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-1.jpg']),
    category: 'نجارة',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 2,
    title: 'الحدادة التقليدية',
    englishTitle: 'Traditional Blacksmithing',
    description:
      'تعلم تشكيل الحديد وتصنيع الأبواب والنوافذ بأدوات الحدادة الحديثة',
    detailedDescription:
      'هتتعلم في الورشة اللحام بالأرجون (TIG) بتديلك تدريب على اللحام الدقيق بتقنية الأرجون مع التركيز على السلامة وتنفيذ الحامات قوية. ورشة اللحام الكهربائي (ARC (MMA) بيساعدك تتقن اللحام الكهربائي للمشاريع الصناعية من خلال تمارين عملية على قطع حديد محلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-2.jpg']),
    category: 'حدادة',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 3,
    title: 'النقاشة والدهانات',
    englishTitle: 'Painting and Decorating',
    description: 'فن الدهان وتزيين الجدران بالألوان والتقنيات الحديثة',
    detailedDescription:
      'هتتعلم في الورشة فن الدهان وتزيين الجدران بالألوان والتقنيات الحديثة مع التركيز على الجودة والدقة في التنفيذ. ورشة النقاشة بيساعدك تتقن مهارات الدهان للمشاريع المنزلية من خلال تمارين عملية على الجدران المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-3.jpg']),
    category: 'دهان',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 4,
    title: 'السباكة العملية',
    englishTitle: 'Practical Plumbing',
    description: 'تعلم السباكة من الصفر، تركيب الأنابيب وإصلاح التسريبات',
    detailedDescription:
      'هتتعلم في الورشة السباكة من الصفر، تركيب الأنابيب وإصلاح التسريبات مع التركيز على السلامة والدقة في التنفيذ. ورشة السباكة بيساعدك تتقن مهارات السباكة للمشاريع المنزلية من خلال تمارين عملية على الأنابيب المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-4.jpg']),
    category: 'سباكة',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 5,
    title: 'تركيب السيراميك',
    englishTitle: 'Ceramic Installation',
    description: 'إتقان قص وتركيب السيراميك والبلاط للأرضيات والجدران',
    detailedDescription:
      'هتتعلم في الورشة إتقان قص وتركيب السيراميك والبلاط للأرضيات والجدران مع التركيز على الجودة والدقة في التنفيذ. ورشة السيراميك بيساعدك تتقن مهارات التركيب للمشاريع المنزلية من خلال تمارين عملية على البلاط المحلي.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-5.jpg']),
    category: 'تركيب',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 6,
    title: 'تركيب الجبس بورد',
    englishTitle: 'Gypsum Board Installation',
    description: 'تصميم أسقف الجبس بورد التزيينية، القص الدقيق والتركيب',
    detailedDescription:
      'هتتعلم في الورشة تصميم أسقف الجبس بورد التزيينية، القص الدقيق والتركيب مع التركيز على الجودة والدقة في التنفيذ. ورشة الجبس بورد بيساعدك تتقن مهارات التركيب للمشاريع المنزلية من خلال تمارين عملية على الجبس المحلي.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-6.jpg']),
    category: 'تركيب',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 7,
    title: 'البناء والطوب',
    englishTitle: 'Building and Bricks',
    description:
      'بناء جدران الطوب الأحمر، خلط المونة واستخدام المسطرين للإنهاء القوي',
    detailedDescription:
      'هتتعلم في الورشة بناء جدران الطوب الأحمر، خلط المونة واستخدام المسطرين للإنهاء القوي مع التركيز على الجودة والدقة في التنفيذ. ورشة البناء بيساعدك تتقن مهارات البناء للمشاريع المنزلية من خلال تمارين عملية على الطوب المحلي.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-7.jpg']),
    category: 'بناء',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 8,
    title: 'طبخ الأكلات الشعبية المصرية',
    englishTitle: 'Cooking Egyptian Popular Dishes',
    description:
      'تعلم تحضير الوصفات المصرية التقليدية مثل الكشري والملوخية، خبرة احترافية',
    detailedDescription:
      'هتتعلم في الورشة تحضير الوصفات المصرية التقليدية مثل الكشري والملوخية، خبرة احترافية مع التركيز على الجودة والدقة في التنفيذ. ورشة الطبخ بيساعدك تتقن مهارات الطبخ للمشاريع المنزلية من خلال تمارين عملية على المكونات المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-8.jpg']),
    category: 'طبخ',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 9,
    title: 'تنجيد الأثاث',
    englishTitle: 'Furniture Upholstery',
    description:
      'تنجيد الكنبات، اختيار الأقمشة واستخدام الدباسة لتجديد الأثاث الحديث',
    detailedDescription:
      'هتتعلم في الورشة تنجيد الكنبات، اختيار الأقمشة واستخدام الدباسة لتجديد الأثاث الحديث مع التركيز على الجودة والدقة في التنفيذ. ورشة التنجيد بيساعدك تتقن مهارات التنجيد للمشاريع المنزلية من خلال تمارين عملية على الأقمشة المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-9.jpg']),
    category: 'تنجيد',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 10,
    title: 'تصليح الأجهزة المنزلية',
    englishTitle: 'Home Appliance Repair',
    description: 'إصلاح الغسالات والثلاجات، تشخيص الأعطال واستبدال القطع',
    detailedDescription:
      'هتتعلم في الورشة إصلاح الغسالات والثلاجات، تشخيص الأعطال واستبدال القطع مع التركيز على الجودة والدقة في التنفيذ. ورشة الإصلاح بيساعدك تتقن مهارات الإصلاح للمشاريع المنزلية من خلال تمارين عملية على الأجهزة المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-10.jpg']),
    category: 'إصلاح',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 11,
    title: 'اللحام الكهربائي',
    englishTitle: 'Electric Welding',
    description:
      'إتقان لحام المعادن بماكينة اللحام الكهربائي وإنشاء الهياكل القوية',
    detailedDescription:
      'هتتعلم في الورشة إتقان لحام المعادن بماكينة اللحام الكهربائي وإنشاء الهياكل القوية مع التركيز على السلامة والدقة في التنفيذ. ورشة اللحام بيساعدك تتقن مهارات اللحام للمشاريع الصناعية من خلال تمارين عملية على المعادن المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-11.jpg']),
    category: 'لحام',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
  {
    id: 12,
    title: 'صيانة التكييف',
    englishTitle: 'AC Maintenance',
    description: 'صيانة التكييف، تنظيف الفلاتر وشحن الفريون وتركيب الوحدات',
    detailedDescription:
      'هتتعلم في الورشة صيانة التكييف، تنظيف الفلاتر وشحن الفريون وتركيب الوحدات مع التركيز على الجودة والدقة في التنفيذ. ورشة الصيانة بيساعدك تتقن مهارات الصيانة للمشاريع المنزلية من خلال تمارين عملية على أجهزة التكييف المحلية.',
    image: getImageUrl(workshopImages['../assets/workShops/WS-12.jpg']),
    category: 'صيانة',
    location:
      'محافظة المنوفية / مركز قويسنا / قرية شبرا بخوم / ورشة الأسطى فوزي الدباغ',
    startDate: '01/01/2026',
    endDate: '01/04/2026',
    duration: '3 شهور',
    cost: '1000 جنيه مصري',
  },
];
const peopleImages = import.meta.glob('../assets/peoples/*.jpg', {
  eager: true,
});

export const workerRatingArray = [
  {
    name: 'محمد ياسر',
    rating: 4.5,
    comment:
      'خبرة ممتازة في اللحام والحدادة. نفذ مشروع الهيكل المعدني لمصنعي بجودة عالية ومهنية كبيرة.',
    image: getImageUrl(peopleImages['../assets/peoples/p1.jpg']),
  },
  {
    name: 'مرزوق الخولي',
    rating: 5,
    comment:
      'عمل متقن ودقيق جداً. أحمد نفذ لي بوابة منزلي بشكل رائع والتزم بالموعد المحدد. أنصح به بشدة',
    image: getImageUrl(peopleImages['../assets/peoples/p2.jpg']),
  },
  {
    name: 'عبد الرحمن شبل',
    rating: 4,
    comment:
      'أسعار معقولة وعمل نظيف ، صنع لي شبابيك حديدية  جميلة جداً ومتينة راضي تماماً عن النتيجة',
    image: getImageUrl(peopleImages['../assets/peoples/p3.jpg']),
  },
  {
    name: 'وهدان ممدوح',
    rating: 5,
    comment:
      'خبرة ممتازة في اللحام والحدادة. نفذ مشروع الهيكل المعدني لمصنعي بجودة عالية ومهنية كبيرة.',
    image: getImageUrl(peopleImages['../assets/peoples/p4.jpg']),
  },
];

export const fields = [
  'سباكة',
  'لحام',
  'ميكانيكا',
  'كهرباء',
  'نجارة',
  'صيانة',
  'تشطيبات',
];
export const levels = ['مبتدئ', 'خبرة متوسطة', 'خبرة عالية'];
export const salaries = ['100-400', '400-800', '800-1200'];
export const salaryTypes = ['شهري', 'يومي', 'يتم مناقشته لاحقاً'];
export const jobTypes = ['دوام كلي', 'دوام جزئي', 'مشروع بالإتفاق'];
export const governorates = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الدقهلية',
  'البحر الأحمر',
  'البحيرة',
  'الفيوم',
  'الغربية',
  'الإسماعيلية',
  'المنوفية',
  'المنيا',
  'القليوبية',
  'الوادي الجديد',
  'السويس',
  'أسوان',
  'أسيوط',
  'بني سويف',
  'بورسعيد',
  'دمياط',
  'الشرقية',
  'جنوب سيناء',
  'كفر الشيخ',
  'مطروح',
  'الأقصر',
  'قنا',
  'شمال سيناء',
  'سوهاج',
];
