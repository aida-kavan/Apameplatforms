let items = document.querySelectorAll(".item");

items.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});

const steps = document.querySelectorAll(".step");
const stepDescription = document.querySelector(".stepDescreption");
const descriptions = [
    "در مرحله اول، به طراحی و توسعه‌ی پلتفرم‌های اصلی پرداخته می‌شود. این گام به‌عنوان آغازگر هر پروژه نرم‌افزاری و سیستم صنعتی شناخته می‌شود و در آن تلاش می‌شود تا بستری نرم‌افزاری ایجاد شود که قادر به پشتیبانی از تغییرات آینده و همچنین رشد سیستم‌ها در طول زمان باشد. در این مرحله، تیم فنی ابتدا با تحلیل دقیق نیازهای بازار و مشتریان، معماری کلی سیستم را طراحی می‌کند و سپس به استفاده از بهترین و به‌روزترین زبان‌های برنامه‌نویسی مانند Python، Java، و JavaScript و فریم‌ورک‌های مدرن پرداخته می‌شود. فرآیند طراحی به گونه‌ای انجام می‌شود که سیستم ایجاد شده قابلیت مقیاس‌پذیری داشته باشد، یعنی در صورت نیاز به گسترش سیستم، این امکان فراهم باشد. علاوه بر این، به امنیت و حفظ حریم خصوصی داده‌ها نیز توجه ویژه‌ای می‌شود تا سیستم از هرگونه تهدیدات امنیتی محافظت شده و اطلاعات حساس به‌درستی نگهداری شوند. هدف از این گام، ایجاد یک پلتفرم مستحکم و انعطاف‌پذیر است که برای پذیرش ویژگی‌ها و نیازهای آینده آمادگی داشته باشد. در نهایت، این پلتفرم‌ها به‌گونه‌ای طراحی می‌شوند که در آینده قابلیت به‌روزرسانی، ارتقاء و افزودن ویژگی‌های جدید را به سادگی داشته باشند.",
    
    "پس از تکمیل طراحی و برنامه‌نویسی اولیه پلتفرم، در این مرحله، پلتفرم‌ها برای هر صنعت یا بخش خاص به‌طور دقیق و کاربردی شخصی‌سازی می‌شوند. این اختصاصی‌سازی شامل تحلیل عمیق فرآیندهای کاری موجود در هر صنعت و شبیه‌سازی آن‌ها در بستر دیجیتال است. تیم فنی با همکاری نزدیک با کارشناسان صنعتی، نیازهای خاص هر بخش را شناسایی کرده و به طراحی و پیاده‌سازی ماژول‌های اختصاصی می‌پردازد که بتواند بهترین عملکرد را در زمینه‌های مختلف از جمله تولید، پشتیبانی، فروش، بازاریابی و مدیریت منابع انسانی ارائه دهد. اختصاصی‌سازی نه تنها شامل اضافه کردن ویژگی‌های جدید و خاص به پلتفرم است، بلکه به بهینه‌سازی عملکرد سیستم برای یکپارچگی بیشتر با سایر ابزارها و سیستم‌های موجود در سازمان می‌پردازد. در این فرایند، بررسی می‌شود که پلتفرم چگونه می‌تواند با سیستم‌های داخلی مانند ERP، CRM و سایر نرم‌افزارهای مدیریتی همگام شده و تجربه کاربری یکپارچه‌ای را ایجاد کند. در نتیجه، پلتفرم‌ها به‌طور دقیق به نیازهای عملیاتی هر صنعت پاسخ می‌دهند.",
    
    "در این گام، تحول دیجیتال در فرآیندهای تبلیغات و بازاریابی آغاز می‌شود. هدف این مرحله طراحی و اجرای استراتژی‌های تبلیغاتی است که با بهره‌گیری از ابزارهای دیجیتال و داده‌های تحلیلی، شرکت‌ها می‌توانند به‌طور مؤثر برند و خدمات خود را به مخاطبان هدف معرفی کنند. این فرایند شامل ایجاد کمپین‌های تبلیغاتی آنلاین از جمله SEO (بهینه‌سازی موتور جستجو)، تبلیغات در شبکه‌های اجتماعی، بازاریابی محتوایی و تبلیغات PPC (پرداخت به ازای کلیک) می‌شود. علاوه بر این، با استفاده از داده‌های بزرگ (Big Data) و تحلیل رفتار مصرف‌کنندگان، استراتژی‌های بازاریابی شخصی‌سازی‌شده طراحی می‌شود که موجب بهینه‌سازی تبلیغات و افزایش تعامل با مشتریان می‌شود. این مرحله با هدف افزایش دیده‌شدن برند، توسعه روابط بلندمدت با مشتریان و رشد فروش صورت می‌گیرد. در این فرایند، استفاده از الگوریتم‌های هوش مصنوعی به تحلیل دقیق‌تر داده‌ها و پیش‌بینی رفتار مشتریان کمک می‌کند تا بازاریابی با دقت بیشتری صورت گیرد.",
    
    "در این مرحله، پلتفرم‌های کاربردی برای بهینه‌سازی فرآیندهای کاری و افزایش بهره‌وری در صنایع مختلف طراحی و توسعه می‌شوند. این پلتفرم‌ها به‌گونه‌ای طراحی می‌شوند که با توجه به نیازهای خاص هر صنعت، ابزارهای دیجیتال عملیاتی ایجاد شود که عملکرد را بهبود دهند. این مرحله شامل طراحی ماژول‌های تخصصی برای داده‌کاوی، تحلیل داده‌ها، مدیریت منابع، پیگیری لحظه‌ای فرآیندها و ارائه گزارش‌های جامع می‌باشد. هدف این است که فرآیندهای کاری به‌طور خودکار و بهینه مدیریت شوند تا میزان خطا کاهش یابد و کارایی افزایش یابد. همچنین، این پلتفرم‌ها باید به‌گونه‌ای طراحی شوند که با سایر سیستم‌های نرم‌افزاری موجود در سازمان‌ها مانند سیستم‌های مالی، انبارداری و منابع انسانی یکپارچه شوند و تجربه کاربری یکپارچه‌ای را ایجاد کنند. توجه ویژه‌ای به توسعه رابط کاربری (UI) و تجربه کاربری (UX) در این مرحله می‌شود تا کاربران بتوانند به‌راحتی از تمامی امکانات بهره‌برداری کنند. در نهایت، هدف این است که پلتفرم‌ها نه تنها نیازهای فعلی صنعت را پاسخ دهند، بلکه قابلیت گسترش و به‌روزرسانی برای انطباق با تغییرات آینده را نیز داشته باشند."
  ];
  
  

function selectStep(index) {
  steps.forEach((step, i) => {
    step.style.borderColor = "";
    step.querySelector("h1").style.fontWeight = "";
  });

  const selectedStep = steps[index];
  selectedStep.style.borderColor = "white"; // تغییر رنگ مرز به سفید
  selectedStep.querySelector("h1").style.fontWeight = "bold"; // بولد کردن عنوان

  // به‌روز رسانی و نمایش توضیحات
  stepDescription.innerHTML = descriptions[index]; // افزودن توضیحات متناسب با گام
  stepDescription.style.display = "flex"; // نمایش بخش توضیحات
  stepDescription.style.color = "white";

  // انیمیشن جابجایی
  stepDescription.style.transform = "translateY(20px)";
  stepDescription.style.opacity = "0";

  setTimeout(() => {
    stepDescription.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    stepDescription.style.transform = "translateY(0)";
    stepDescription.style.opacity = "1";
  }, 100);
}

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    selectStep(index);
  });
});