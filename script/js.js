document.addEventListener("DOMContentLoaded", function () {
  const problemSelect = document.getElementById("problemSelect");
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");

  const responses = {
    1: `🌟 স্বাগতম আপনাকে বাংলাদেশের অন্যতম বিশ্বস্ত বেটিং সাইট Wicket71 এ 🌟<br><br>
Wicket71 অনলাইন গেমে আপনারা বেটিং করতে পারবেন এবং গেমপ্লে করে টাকা জিততে পারবেন। এটি হল বাংলাদেশের বিশ্বস্ত অনলাইন বেটিং সাইট। এখানে আপনি নিজের আইডি ওপেন করে গেমে বেট করতে পারবেন। এখানে স্পোর্টস গেম, স্লট গেম, লাইভ ক্যাসিনো গেম, কার্ড গেম এই গেমগুলো আপনি খেলতে পারবেন।<br><br>
◻️ প্রথম ডিপোজিট এ আপনি পেয়ে যাচ্ছেন ওয়েলকাম বোনাস ১৭১%, আরো রয়েছে সাপ্তাহিক লাস বোনাস<br>
◻️ স্পোর্টস এ প্রতিদিন রিলোড বোনাস, স্লটে প্রতিদিন রিলোড বোনাস, লাইভ ক্যাসিনোতে প্রতিদিন রিলোড বোনাস পেয়ে যাচ্ছেন।<br>
📍 আপনাকে আমি একটা লিঙ্ক প্রদান করছি এই লিংকে ক্লিক করে আপনি আপনার নতুন একাউন্ট ওপেন করে নিতে পারবেন আমাদের সাইটে এবং গেমপ্লে করতে পারবেন।<br><br>
✔ অ্যাকাউন্ট খুলুন: <a href="https://esi74.wicket71bd.com/register.html" target="_blank">https://esi74.wicket71bd.com/register.html</a> <br><br>
একাউন্ট খোলার ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a> <br><br>
`,

    2: '🚀স্যার, আপনাকে আমি একটা লিংক দিচ্ছি, এই লিংকে প্রবেশ করে আপনি নতুন অ্যাকাউন্ট খুলতে পারবেন আর আমাদের সাইটে গেমপ্লে করতে পারবেন।<br>একাউন্ট খুলুন: <a href="https://www.wicket71bd.com" target="_blank">https://www.wicket71bd.com</a><br><br>স্যার, একাউন্ট তৈরি করার সময় যদি কোন সমস্যা হয়, অবশ্যই আমাকে জানাবেন। আমরা সর্বদা প্রস্তুত আপনাকে সহযোগিতা করার জন্য।<br><br> একাউন্ট খোলার ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a> ',

    3: {
      question: "নিচে থেকে সিলেক্ট করুন আপনার কোন সমস্যাটি হচ্ছে 👇",
      options: {
        1: "আমি অনেক্ষণ আগে ডিপোজিট করেছি এখনো টাকা আসেনি।",
        2: "ডিপোজিট কিভাবে করতে হয় আমি জানি না , আমাকে একটা ভিডিও দিন।",
        3: "ডিপোজিট হচ্ছে না কেন দেখুন তো",
        main: "Main Menu",
      },

      answers: {
        1: 'অনুগ্রহ করে দ্রুত আমাদের লাইভচ্যাটে যোগাযোগ করুন স্যার <br><br> আমাদের সাথে সরাসরি কথা বলুন স্যার : <a href="https://direct.lc.chat/18160839/" target="_blank">সরাসরি কথা বলুন</a>',
        2: `🚀উইকেট ৭১ এ আপনি বিকাশ, নগদ, রকেট এগুলো দিয়ে ডিপোজিট করতে পারেন।<br><br> কখনো আমাদদের নাম্বার গুলো সেভ করবেন না, আমাদের নাম্বার পরিবর্তন হয়। আমাদের এখানে ক্যাশ আউট করবেন সবসময়।<br><br> ডিপোজিট ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a> `,
        3: 'অনুগ্রহ করে দ্রুত আমাদের লাইভচ্যাটে যোগাযোগ করুন স্যার <br><br> আমাদের সাথে সরাসরি কথা বলুন স্যার : <a href="https://direct.lc.chat/18160839/" target="_blank">সরাসরি কথা বলুন</a>',
        main: "Main Menu",
      },
    },

    4: {
      question: "নিচে থেকে সিলেক্ট করুন আপনার কোন সমস্যাটি হচ্ছে 👇",
      options: {
        1: "আমি অনেক্ষণ আগে উত্তোলন করেছি এখনো টাকা আসেনি।",
        2: "উত্তোলন কিভাবে করতে হয় আমি জানি না , আমাকে একটা ভিডিও দিন উত্তোলনের।",
        3: "উত্তোলন দিয়েছি কিন্তু বাতিল হয়ে যাচ্ছে কেন?",
        main: "Main Menu",
      },

      answers: {
        2: '🚀 স্যার, কিভাবে উইকেট ৭১ এ উত্তোলন (Withdraw) করবেন, ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a> <br><br>◻️ উত্তোলন (Withdraw) করতে কোন রকম সমস্যা হলে, অবশ্যই আমাদের সাথে যোগাযোগ করবেন।<br><br>🎳 স্যার, আমি কি আর অন্য কোন তথ্য দিয়ে সহায়তা করতে পারি আপনাকে?<br><br> ',

        3: `উত্তোলন দেওয়ার পরেও যদি বাতিল হয়ে যায় তার মানে হল আপনার টান ওভার পূরণ হয়নি।  অনুগ্রহ করে আপনি আপনার টার্ন ওভার পূরণ করে নেন তারপরে উত্তোলন দিন। <br/> <br/> উত্তোলনের ওখান থেকে ডিপোজিট টার্নওভার দেখে আপনি চেক করতে পারবেন। <br><br> উত্তোলন ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a> <br><br>অথবা, আমাদের সাথে সরাসরি কথা বলুন স্যার : <a href="https://direct.lc.chat/18160839/" target="_blank">সরাসরি কথা বলুন</a>`,
        main: "Main Menu",
      },

      followUps: {
        1: {
          question: "নিচে থেকে সিলেক্ট করুন আপনি কত সময় আগে উত্তোলন দিয়েছেন 👇",
          options: {
            1: "এই মাত্র বা ৫ মিনিট আগে উত্তোলন দিয়েছি আমি।",
            2: "প্রায় ২০ মিনিট হয়েছে উত্তোলন দিয়েছি আমি ।",
            main: "Main Menu",
          },
          answers: {
            1: "আসলে উত্তোলন হতে সাধারনত ১০/২০ মিনিট সময় লাগতে পারে , অনুগ্রহ করে কিছুটা সময় দিন স্যার । আশা করি আপনার উত্তোলনের টাকা অ্যাড হয়ে যাবে।",
            2: 'যদি ২০ মিনিট হয়ে যাই তবে অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">সরাসরি কথা বলুন</a>',
            main: "Main Menu",
          },
        },
      },
    },

    5: ` 🚀 Wicket71 এর এজেন্ট হয়ে পান কমিশন, পার্টনারশিপ করুন আমাদের সাথে। আপনার মেম্বার সপ্তাহের মধ্যে ন্যূনতম জমা 1,000 টাকা ও টার্নওভার 4,000 টাকা থাকলেই হবে।<br><br>১ জন আপনার মেম্বার থাকলে পাবেন ১০% কমিশন<br>৫ জনের উপরে মেম্বার থাকলে পাবেন ৪০% কমিশন<br>২০ জনের উপরে মেম্বার থাকলে পাবেন ৫০% কমিশন<br><br>🔊 আপনার কমপক্ষে 1 জন এক্টিভ প্লেয়ার থাকতে হবে এবং অ্যাফিলিয়েট কমিশন প্রতি মঙ্গলবার সন্ধ্যা 6 টার আগে (GMT+6) প্রকাশ করা হবে। যোগদান করতে এখনই আমাদের জানান, আমরা আপনাকে খুলে দেবো আফিলিয়েট এজেন্ট একাউন্ট। আপনার একাউন্টটা আপডেট করলেই হয়ে যাবে অথবা নতুন মেম্বার একাউন্ট খুলে সেটা আমাদের দিন, আমরা এজেন্ট একাউন্টে রূপান্তরিত করে দেবো।<br><br>কিভাবে এজেন্ট সদস্য যোগ করবেন: প্রথমে [ সদস্য ] > [ এজেন্ট কেন্দ্র ] > [ রেজিস্ট্রেশন ] > [ লিঙ্ক পরিচালনা ] এ ক্লিক করুন, খেলোয়াড়কে Wicket71-এ যোগ দিতে আমন্ত্রণ জানাতে আপনার অনুমোদিত লিঙ্ক / QR কোড শেয়ার করুন।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br>এই লিংকে আমাদের সাথে কথা বলে আমাদের আফিলিয়েট এজেন্ট হন: <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন </a><br><br> আফিলিয়েট এজেন্ট কিভাবে হবে ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>`,

    6: {
      question: "নিচে থেকে সিলেক্ট করুন কোন বোনাস টা সম্পর্কে জানতে চান 👇",
      options: {
        1: "ফ্রি বোনাস ৳১,৮৮৮ সম্পর্কে বিস্তারিত জানতে চাই",
        2: "App ডাউনলোডে ফ্রি ৳৫৮ টাকা বোনাস সম্পর্কে জানতে চাই ",
        3: "প্রথম ডিপোজিট ৩০০ টাকা স্বাগত্বম বোনাস সম্পর্কে জানতে চাই",
        4: "স্পর্ট এ প্রথম ডিপোজিট ৭১% রিফান্ড বোনাস সম্পর্কে জানতে চাই ",
        5: "১৭১% স্বাগতম বোনাস সম্পর্কে জানতে চাই",
        6: "রেফার বোনাস সম্পর্কে জানতে চাই ",
        7: " সাপ্তাহিক লস বোনাস সম্পর্কে জানতে চাই",
        8: "রিলোড বোনাস গুলি সম্পর্কে জানতে চাই",
        9: "আমি বোনাস সিলেক্ট করেছিলাম ডিপোজিট এর সময় কিন্তু অ্যাড হয়নি বোনাসটা",
        10: "আমি App ডাউনলোড করেছি তবে বোনাস ১০০ টাকা পায়নি এখনও",
        11: "আমি কিভাবে টেলিগ্রামে জয়েন করে ফ্রি বোনাস পাব ?",
        main: "Main Menu",
      },
      answers: {
        1: '🚀 Wicket71 এ নতুন একাউন্ট রেজিস্টার করলে মোবাইল নাম্বার ভেরিফাই এবং হোয়াটসঅ্যাপ নাম্বার যোগ করলে আপনি সুযোগ পাবেন ফ্রি ১৮৮৮ টাকা জেতার।<br><br>স্যার, আপনি আপনার নাম্বার ভেরিফিকেশন কমপ্লিট করুন এবং হোয়াটসঅ্যাপ নাম্বারটি অ্যাড করুন। এ দুটো স্টেপ কমপ্লিট করলে, খেলা করার পেজের নীচের ডান দিকে ডিম দেখতে পারবেন। ডিমটা ভাঙলে, মানে ডিম ক্লেম করলে, আপনি সর্বোচ্চ সাইন আপ বোনাস একদম ফ্রি ১ থেকে ১,৮৮৮ টাকা পর্যন্ত পেতে পারেন।<br><br>স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>দেখুন কিভাবে ৳১,৮৮৮  নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        2: 'স্যার আপনি app এর ম্যাধমে একাউন্ট খুললে ৩/৪ ঘন্টা পর ফ্রি বোনাস পাবেন অটো । মনে রাখবেন অবশ্যই আপনাকে app এর মাধ্যমে রেজিস্টার করতে হবে আপনার  Wicket71 একাউন্ট। স্যার আপনি আপনার নাম্বার ভেরিফিকেশন কমপ্লিট করুন এবং হোয়াটসঅ্যাপ নাম্বারটি অ্যাড করুন।  এ দুটো স্টেপ কমপ্লিট করলে তাহলে আপনি পেয়ে যাবেন অ্যাপ ডাউনলোড ৫৮ টাকা ফ্রি বোনাস । মনে রাখবেন আপনি এই বোনাস টা একবার নিতে পারবেন , ধন্যবাদ। <br><br>অ্যাপ লিংক: <a href="https://www.wicket71bd.com/" target="_blank">https://www.wicket71bd.com/</a><br><br>',

        3: '🚀 %customer-name% স্যার, প্রতিদিন আপনি ফ্রি ৩০০ টাকা পর্যন্ত বোনাস নিতে পারবেন। আমাদের এই বোনাসের বিস্তারিত নিচে দেওয়া হল:<br><br>🔊 ৩০০ টাকা ডিপোজিট করলে আপনি ১০০ টাকা বোনাস পাবেন, ১০০০ টাকা ডিপোজিটে ২০০ টাকা, এবং ২৫০০ টাকা ডিপোজিটে ৩০০ টাকা বোনাস পাবেন।<br>প্রতিদিন একবার করে নেওয়া যায় এই বোনাসটি, তাই আপনি আপনার মনমতো ডিপোজিট করে বোনাস নিতে পারবেন। বোনাসটি দিয়ে শুধুমাত্র স্লট এবং এভিয়েটর খেলা করা যাবে। এই বোনাস দিয়ে জিলির গেম খেলা করা যাবে না। এই বোনাসের টার্নওভার মাত্র ৬x।<br>স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br>  কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        4: '🚀 %customer-name% স্যার, আপনি যদি প্রথম ডিপোজিট মিনিমাম ৫০০ টাকা করেন এবং স্পোর্টস এর ভেতরে খেলা করেন, তবে আপনি হেরে গেলেও ৭১ শতাংশ টাকা আপনাকে ফেরত দেওয়া হবে। অর্থাৎ মনে করুন আপনি ১০০০ টাকা ডিপোজিট করলেন এবং স্পোর্টসে গিয়ে খেলা করে হেরে গেলেন, তাহলে আপনি ৭১০ টাকা ফেরত পেয়ে যাবেন।<br><br>🔊 এই বোনাসটা নিলে আপনি ২০ গুণ টার্নওভার করবেন এবং সর্বোচ্চ ৫০০০ টাকা পর্যন্ত নিতে পারবেন। শুধুমাত্র স্পোর্টস খেলতে পারবেন এই বোনাস নিয়ে।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        5: '🚀 %customer-name% স্যার, আপনি যদি আমাদের নতুন সদস্য হন, তবে প্রথম ডিপোজিটে ২১ শতাংশ, তারপরের ডিপোজিটে ৫০ শতাংশ এবং তারপরে ডিপোজিটে ১০০% বোনাস অর্থাৎ মোট ১৭১ শতাংশ বোনাস নিতে পারবেন।<br><br>🔊 এই বোনাস নিতে কমপক্ষে ৫০০ টাকার ডিপোজিট করতে হবে এবং এই বোনাসের টার্নওভার প্রথমে 6x, তারপর ২৫x এবং শেষে ৩৫x হবে। স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        6: '🚀 প্রথমে আপনার প্রোফাইলে যাবেন এবং সেখানে "রেফারাল কোড" নামে একটি অপশন দেখতে পাবেন। সেখানে থেকে আপনার রেফার লিঙ্ক কপি করে আপনার বন্ধুদের সাথে শেয়ার করুন। যতজন ওই লিঙ্ক দিয়ে একাউন্ট খুলবে, ততজনের থেকে আপনি রেফার বোনাস পাবেন।<br><br>Wicket71-এ রেফার করার শর্তাবলী:<br>◻️ Wicket71-এ রেফারেল বোনাস সমস্ত সদস্য নিতে পারবেন।<br>◻️ আপনার রেফারেল লিঙ্কের মাধ্যমে আপনার বন্ধুকে আমন্ত্রণ জানাবেন।<br>◻️ বন্ধুকে রেফার করলে, তাকে মিনিমাম ২০০০ টাকা ডিপোজিট ও ১২,০০০ টাকা টার্নওভার করতে হবে। তখন আপনি ৫০০ টাকা বোনাস পেয়ে যাবেন অটো।<br>◻️ প্রতি রেফারে আপনি ৫০০ টাকা এবং ৫ টি করে লয়ালিটি পয়েন্ট পাবেন, যাকে রেফার করবেন সে যখন ডিপোজিট ও টার্নওভার পূরণ করবেন।<br>◻️ ক্লেমের কোন লিমিট নেই, আপনি যত ইচ্ছা রেফার করতে পারবেন এবং প্রতিবার রেফার তার শর্ত পূরণ রেফার করবেন <br><br>  কিভাবে রেফার করবেন ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        7: 'আপনি যদি লস করেন, তাহলে আমরা দেব সাপ্তাহিক লস বোনাস। এটা আপনার লস এর উপর নির্ভর করে বোনাস হিসাব করা হবে। অবশ্যই আপনাকে লস বোনাস ক্লেম করে নিতে হবে প্রোফাইলে ক্লিক করে রিওয়ার্ড সেন্টার থেকে। মনে রাখবেন, এই লস বোনাস দেয়া হয় ভিআইপি সিলভার থেকে। 5x টার্নওভার করতে হবে। এই বোনাসটি দেওয়া হয় প্রতি সপ্তাহের সোমবার সন্ধ্যা 6 টার পর।<br><br>📣 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br>',

        main: "Main Menu",

        9: 'অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন</a>',

        10: 'আন্তরিকভাবে দুঃখিত আপনার সমস্যাটির জন্য,  মনে রাখবেন অ্যাপ ডাউনলোড করার সাথে সাথে একাউন্টে টাকা জমা হয় না এটা জমা হতে কমপক্ষে দুই থেকে চার ঘণ্টা সময় লাগে তবে অবশ্যই আপনার মোবাইল নাম্বারটি ভেরিফাই করা থাকতে হবে এবং অ্যাপ ডাউনলোড করে সেখানে লগইন করতে হবে তারপরে আপনি বোনাস পাবেন <br><br>  আপনি অ্যাপ ডাউনলোড করেছেন তারপরে মোবাইল নাম্বার ভেরিফাই করেছেন এবং এসব গুলো করার পরেও আপনি যদি  বোনাস না পান  তবে তার অনেকগুলি কারণ থাকতে পারে। যেমন : <br><br>১) আপনি ইতিমধ্যে অন্য একটা একাউন্ট দিয়ে বোনাসটি নিয়েছেন, তাহলে আর ওই বোনাস নিতে পারবেন না কারণ প্রত্যেকে একবার করে এই বোনাস টি নিতে পারে<br><br>২) আপনি আপনার মোবাইল নাম্বারটি হয়তো এখনো ভেরিফাই করেননি<br><br>৩) আপনি অ্যাপের ভেতরে লগইন করেননি<br><br>৪) আপনার আইপিতে কোনরকম সমস্যা আছে<br><br><br> এই সমস্ত বিভিন্ন কারণে আপনার একাউন্টে ১০০ টাকা বোনাস অ্যাড নাও হতে পারে তবে সবকিছু ঠিকঠাক থাকলে আপনি অবশ্যই পাবেন ধন্যবাদ।',

        11: 'স্যার আপনি যদি  Wicket71 একাউন্ট খুলে থাকেন এবং আমাদের  টেলিগ্রাম গ্রুপে থাকা গুগল ফর্ম টি সঠিকভাবে ফিলাপ করে থাকেন তাহলে বোনাস টি পেয়ে যাবেন। আপনি যেদিন ফর্ম পূরণ করবেন তার পরের দিন রাত ৮ টার ভিতর বোনাস পেয়ে যাবেন।<br><br>যদি টেলিগ্রাম গ্রুপে জয়েন না করে থাকেন তাহলে আমি নিচে টেলিগ্রাম গ্রুপের লিংক দিয়ে দিচ্ছি এখানে ক্লিক করে আমাদের টেলিগ্রাম চ্যানেলে জয়েন করুন এবং উপরের দিকে যান দেখবেন একটা গুগল ফর্ম আছে,  তার সাথে একটা লিঙ্ক দেওয়া আছে ওই লিংকে ক্লিক করে গুগল  ফর্মে চলে যান এবং সেটা সঠিকভাবে পূরণ করে দিন।<br><br>লিংক : <a href="https://t.me/wicket71bdt " target="_blank">https://t.me/wicket71bdt </a>',
      },

      followUps: {
        8: {
          question:
            "নিচে থেকে সিলেক্ট করুন আপনি কোন রিলোড বোনাস টা সম্পর্কে জানতে চান 👇",
          options: {
            1: "Aviator রিলোড বোনাস",
            2: "Live casino রিলোড বোনাস",
            3: "Slot রিলোড বোনাস",
            4: "Sport  রিলোড বোনাস",
            main: "Main Menu",
          },
          answers: {
            1: `🚀 আপনি যদি কমপক্ষে ৫০০ টাকা ডিপোজিট করেন, তাহলে অভিয়াটর রিলোড বোনাস পাবেন। আপনার ভিআইপি লেভেল অনুযায়ী আপনি এই বোনাস নিতে পারবেন। প্রতিদিন এই বোনাসটি একবার করে নিতে পারবেন ৮x টার্নওভারে। স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>`,

            2: '🚀 আপনি যদি কমপক্ষে ৫০০ টাকা ডিপোজিট করেন, তাহলে লাইভ ক্যাসিনো রিলোড বোনাস পাবেন। আপনার ভিআইপি লেভেল অনুযায়ী আপনি এই বোনাস নিতে পারবেন। প্রতিদিন এই বোনাসটি একবার করে নিতে পারবেন ২০x টার্নওভারে। স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

            3: '🚀 আপনি যদি কমপক্ষে ৫০০ টাকা ডিপোজিট করেন, তাহলে স্লটে রিলোড বোনাস পাবেন। আপনার ভিআইপি লেভেল অনুযায়ী আপনি এই বোনাস নিতে পারবেন। প্রতিদিন এই বোনাসটি একবার করে নিতে পারবেন ৫x টার্নওভারে। স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

            4: '🚀 আপনি যদি কমপক্ষে ৫০০ টাকা ডিপোজিট করেন, তাহলে স্পোর্ট রিলোড বোনাস পাবেন। আপনার ভিআইপি লেভেল অনুযায়ী আপনি এই বোনাস নিতে পারবেন। প্রতিদিন এই বোনাসটি একবার করে নিতে পারবেন ১২x টার্নওভারে। স্যার, আপনাকে বোনাস নেওয়ার জন্য ফোন নাম্বার ভেরিফাই এবং আপনার ব্যাংক একাউন্ট যুক্ত থাকা লাগবে অবশ্যই।<br><br>📍 আরো জানতে: <a href="https://www.wicket71bd.com/promotions" target="_blank">https://www.wicket71bd.com/promotions</a><br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

            main: "Main Menu",

          },
        },
      },
    },

    7: 'আপনি যদি আপনার পাসওয়ার্ড ভুলে যান তবে অনুগ্রহ করে আমাদের হোয়াটসআপ এ যোগাযোগ করুন <br><br><a href="https://wa.me/+855964424886" target="_blank">https://wa.me/+855964424886</a><br><br> অথবা এই নাম্বারটি সেভ করে WhatsApp এ যোগাযোগ করুন +855964424886',

    9: {
      question: "নিচে থেকে সিলেক্ট করুন আপনি কি জানতে চান👇",
      options: {
        1: "আপনাদের অফিস কোথায় ?",
        2: "আমি কি এখানে send মানি করতে পারব ? ",
        3: "ডিপোজিট / উত্তোলনে কতক্ষণ সময় লাগে ? ",
        4: "আমি কি ডিপোজিট ছাড়া বোনাস নিতে পারব? ",
        5: "এজেন্ট অ্যাকাউন্ট নিতে কি টাকা লাগে?",
        6: "আমি ৩০০ টাকার নিচে ডিপোজিট করে ফেলেছি এখন কি করতে পারি?",
        7: "আমি একজনকে রেফার করেছি কিন্তু এখনো রেফার কমিশন পাইনি ",
        8: "আমার একাউন্ট থেকে টাকা কেটে গেছে",
        9: "আমার টার্নওভার নিয়ে সমস্যা হচ্ছে",
        10: "আমার উত্তোলন সফল হয়েছে তবে সেটা আমার একাউন্ট এ আসেনি",
        11: "আমি কোনো গেমের ভিতর ঢুকতে পারছি না",
        12: "আমার ইউসার নেম ভুলে গেছি",
        13: "আমার উত্তোলন পিন ভুলে গেছি",
        main: "Main Menu",
      },
      answers: {
        1: "আমাদের অফিস ঢাকা গুলশান ২ তে অবস্থিত।",

        2: 'আমাদের এখানে বিভিন্ন পেমেন্ট গেটওয়ে আছে , আপনি যে পেমেন্ট গেটওয়ে ব্যবহার করে ডিপোজিট করবেন সেখান থেকে দেখতে পারবেন ক্যাশআউট না সেন্ড মানি করতে হবে । তবে সাধারনত আমাদের এখানে ক্যাশ আউট করতে হয় ।<br><br>  কিভাবে ডিপোজিট করবেন ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        3: "সাধারণত ক্যাশ আউট করার পরে আমাদের এখানে সাবমিট যদি করেন তাহলে সেই ডিপোজিট হতে ১০ থেকে ২০ সেকেন্ড সময় লাগে।  আর উত্তোলন হতে সাধারণত ১০ থেকে ২০ মিনিট লাগে।   তবে যদি নেটওয়ার্ক ইস্যু অথবা অনেক ডিপোজিট উত্তোলনের চাপ থাকে তাহলে সেই ক্ষেত্রে কিছুটা বেশি সবাই লেগে যায়।",

        4: 'বোনাস নিতে গেলে আপনাকে অবশ্যই ডিপোজিট করতে হবে এবং তারপরে ডিপোজিট এর ওখানেই দেখতে পাবেন বিভিন্য ধরনের বোনাস আছে , আপনি যে বোনাস টি নিতে চান সেটা সিলেক্ট করে নেবেন আর তারপর সাবমিট করে এগিয়ে যাবেন।<br><br> কিভাবে বোনাস নিতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        5: 'আমাদের এখানে এজেন্ট বা এফিলিয়েট একাউন্ট সম্পন্ন বিনামূল্যে খুলতে পারবেন কোনরকম টাকা দিতে হবে না , আপনি এজেন্ট হয়ে আরো প্রতি সপ্তাহে সোমবারে কমিশন পাবেন। <be><br> আফিলিয়েতট এজেন্ট কিভাবে হবেন ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        6: 'যেহেতু আমাদের এখানে নিয়ম কমপক্ষে ৩০০ টাকার ডিপোজিট করতে হবে কিন্তু আপনি ৩০০ টাকার কম ডিপোজিট করে ফেলেছেন। এক্ষেত্রে আমাদের কিছুই করার নেই , অনুগ্রহ করে আপনি আবার ডিপোজিট করুন স্যার ৩০০ টাকার উপরে আর আমাদের খেলা উপভোগ করুন <br><br>ডিপোজিট ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>',

        7: `🚀 প্রথমে আপনার প্রোফাইলে যাবেন এবং সেখানে "রেফারাল কোড" নামে একটি অপশন দেখতে পাবেন। সেখানে থেকে আপনার রেফার লিঙ্ক কপি করে আপনার বন্ধুদের সাথে শেয়ার করুন। যতজন ওই লিঙ্ক দিয়ে একাউন্ট খুলবে, ততজনের থেকে আপনি রেফার বোনাস পাবেন।<br><br>Wicket71-এ রেফার করার শর্তাবলী:<br>◻️ Wicket71-এ রেফারেল বোনাস সমস্ত সদস্য নিতে পারবেন।<br>◻️ আপনার রেফারেল লিঙ্কের মাধ্যমে আপনার বন্ধুকে আমন্ত্রণ জানাবেন।<br>◻️ বন্ধুকে রেফার করলে, তাকে মিনিমাম ২০০০ টাকা ডিপোজিট ও ১২,০০০ টাকা টার্নওভার করতে হবে। তখন আপনি ৫০০ টাকা বোনাস পেয়ে যাবেন অটো।<br>◻️ প্রতি রেফারে আপনি ৫০০ টাকা এবং ৫ টি করে লয়ালিটি পয়েন্ট পাবেন, যাকে রেফার করবেন সে যখন ডিপোজিট ও টার্নওভার পূরণ করবেন।<br>◻️ ক্লেমের কোন লিমিট নেই, আপনি যত ইচ্ছা রেফার করতে পারবেন এবং প্রতিবার রেফার তার শর্ত পূরণ করলে আপনি বোনাস পেয়ে যাবেন।<br>◻️ রেফার বোনাসের জন্য ৮x টার্নওভার পূরণ করতে হয়।<br><br>আরো জানতে: <a href="https://t.ly/47nJi" target="_blank">https://t.ly/47nJi</a><br><br> কিভাবে রেফার করতে হয় ভিডিও দেখতে: <a href="https://wicket71.info/" target="_blank">এখানে ক্লিক করুন</a>`,


        8: 'অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন</a>',
        9: 'অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন</a>',
        10: 'অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন</a>',
        11: 'অনুগ্রহ করে আমাদের সাথে সরাসরি কথা বলুন স্যার <a href="https://direct.lc.chat/18160839/" target="_blank">এখানে ক্লিক করুন</a>',
        12: 'অনুগ্রহ করে আমাদের হোয়াটসআপ এ যোগাযোগ করুন <br><br><a href="https://wa.me/+855964424886" target="_blank">https://wa.me/+855964424886</a><br><br> অথবা এই নাম্বারটি সেভ করে WhatsApp এ যোগাযোগ করুন +855964424886',
        13: 'অনুগ্রহ করে আমাদের হোয়াটসআপ এ যোগাযোগ করুন <br><br><a href="https://wa.me/+855964424886" target="_blank">https://wa.me/+855964424886</a><br><br> অথবা এই নাম্বারটি সেভ করে WhatsApp এ যোগাযোগ করুন +855964424886',
        main: "Main Menu",
      },
    },
  };

  function appendMessage(content, type) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${type}`;
    messageDiv.innerHTML = `<p>${content}</p>`; // Make sure HTML is rendered
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }

  function displayOptions(options, callback) {
    const select = document.createElement("select");
    select.id = "dynamicSelect";
    select.innerHTML =
      '<option value="" disabled selected>অনুগ্রহ করে বাছুন</option>';
    for (const [value, text] of Object.entries(options)) {
      // Set background color for the "Main Menu" option
      const option = document.createElement("option");
      option.value = value;
      option.text = text;
      if (value === "main") {
        //option.style.backgroundColor = "#f0f0f0"; // Change this color as needed
      }
      select.appendChild(option);
    }
    userInput.innerHTML = "";
    userInput.appendChild(select);

    select.addEventListener("change", function () {
      const selectedValue = select.value;
      if (selectedValue === "main") {
        // Refresh the page when "Main Menu" is selected
        location.reload();
      } else {
        appendMessage(select.options[select.selectedIndex].text, "user"); // Display the user's choice
        callback(selectedValue);
      }
    });
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "typing-indicator";
    typingDiv.innerHTML =
      '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    return typingDiv;
  }

  function hideTypingIndicator(typingDiv) {
    chatBox.removeChild(typingDiv);
  }

  function handleSelection(selection) {
    const response = responses[selection];
    if (typeof response === "string") {
      const typingDiv = showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator(typingDiv);
        appendMessage(response, "bot");
      }, 1000); // Simulate delay for bot response
    } else {
      const typingDiv = showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator(typingDiv);
        appendMessage(response.question, "bot");
        displayOptions(response.options, function (option) {
          const followUp = response.followUps
            ? response.followUps[option]
            : null;
          const answer = response.answers ? response.answers[option] : null;

          if (followUp) {
            const typingDivFollowUp = showTypingIndicator();
            setTimeout(() => {
              hideTypingIndicator(typingDivFollowUp);
              appendMessage(followUp.question, "bot");
              displayOptions(followUp.options, function (subOption) {
                const finalAnswer = followUp.answers[subOption];
                const typingDivFinal = showTypingIndicator();
                setTimeout(() => {
                  hideTypingIndicator(typingDivFinal);
                  appendMessage(
                    finalAnswer || "Sorry, I did not understand that.",
                    "bot"
                  );
                }, 1000); // Simulate delay for bot response
              });
            }, 1000); // Simulate delay for bot response
          } else {
            const typingDivAnswer = showTypingIndicator();
            setTimeout(() => {
              hideTypingIndicator(typingDivAnswer);
              appendMessage(
                answer || "Sorry, I did not understand that.",
                "bot"
              );
            }, 1000); // Simulate delay for bot response
          }
        });
      }, 1000); // Simulate delay for bot response
    }
  }

  problemSelect.addEventListener("change", function () {
    const selectedValue = problemSelect.value;
    if (selectedValue) {
      appendMessage(
        problemSelect.options[problemSelect.selectedIndex].text,
        "user"
      );
      setTimeout(() => {
        handleSelection(selectedValue);
      }, 1000); // Simulate delay for bot response
    }
  });

  // Refresh the page
  document
    .getElementById("refreshLink")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      var refreshLink = document.getElementById("refreshLink");

      // Add the rotate class
      refreshLink.classList.add("rotate");

      // Remove the class after the animation ends to allow it to play again
      setTimeout(function () {
        refreshLink.classList.remove("rotate");
        // Refresh the page after the animation ends
        location.reload();
      }, 500); // Match this duration with the CSS animation duration
    });
});


// idenhi ivdi balvisi likki 10 arba 

var clickCount = 0;
var clickDiv = document.getElementById("clickDiv");
var hiddenDiv = document.getElementById("hdn");

if (!clickDiv || !hiddenDiv) {
  console.error("Could not find clickDiv or hiddenDiv");
} else {
  clickDiv.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 5) {
      hiddenDiv.style.display = "block";
    }
  });
}
