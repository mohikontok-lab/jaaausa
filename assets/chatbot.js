/* Jabian USA (JAAA) — FAQ chatbot widget.
   Pure client-side: no backend, no tracking, no data leaves the page.
   Answers come only from the knowledge base below — real JAAA facts:
   Queens, NY 501(c)(3); jalumni.usa@gmail.com; Pohela Boishakh Sat May 8,
   2027 at Jamaica Performing Arts Center; Himel Hawar annual winter
   festival (last Nov 14, 2026, Angan Party Hall); Projonmo children's
   programs; President Meghna Pal 732-487-0211; General Secretary
   Prashant Mallik Ayon 929-236-8155.
   To add or change an answer, edit the KB array and bump the ?v= on the
   script tag in each page. */
(function () {
  "use strict";

  var REGISTER_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdGEvBsisllbgRDXZlVw_mWVpLDCVcmX1eiS67mip1i99S1SQ/viewform";
  var ATTENDANCE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSegErYw8_ZFdfwN2-7aN8pGs_i6nJmBtyUCets3FcpV9SJi8Q/viewform";
  var STORY_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScvK1eGPNobo5eehYEo3-QmMf5qNeePJHyinru_-ptIFzzwzA/viewform";
  var UPLOAD_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScpEyHycUD8OrWxnjEzZmbCNcft4vWP8wcNj6pNXQDsb3hUGA/viewform";
  var FB_GROUP = "https://www.facebook.com/groups/729815047103024/";
  var INSTAGRAM = "https://www.instagram.com/jaaa_usa/";
  var YOUTUBE = "https://www.youtube.com/@JAAAUSA";
  var MAIL = "mailto:jalumni.usa@gmail.com";
  var NEWS_PAGE = "himel-hawar-weekly-bangalee-2026-11-21.html";

  var KB = [
    {
      id: "greeting",
      keys: ["hello", "hi", "hey", "salam", "assalam", "namaskar", "good morning", "good afternoon", "good evening", "নমস্কার", "হ্যালো", "সালাম", "আসসালাম"],
      en: "Hello! I\u2019m the Jabian USA assistant. Ask me about membership, events, sharing your story, or contact \u2014 or tap a button below.",
      bn: "নমস্কার! আমি জাবিয়ান ইউএসএ-এর সহকারী। সদস্যপদ, ইভেন্ট, গল্প শেয়ার বা যোগাযোগ সম্পর্কে জিজ্ঞেস করুন \u2014 অথবা নিচের বোতামে চাপ দিন।"
    },
    {
      id: "thanks",
      keys: ["thank", "thanks", "thx", "ধন্যবাদ"],
      en: "You\u2019re welcome! Anything else \u2014 membership, events, stories?",
      bn: "আপনাকে স্বাগতম! আর কিছু জানতে চান \u2014 সদস্যপদ, ইভেন্ট, গল্প?"
    },
    {
      id: "about",
      keys: ["about", "who are you", "what is jaaa", "what is jabian", "jaaa", "jabian", "organization", "nonprofit", "501", "সম্পর্কে", "জাবিয়ান"],
      en: "Jabian USA (JAAA) is the Jahangirnagar Alumni Association of America \u2014 the alumni network of Jahangirnagar University graduates living in the United States. Based in Queens, New York, we\u2019re a 501(c)(3) nonprofit. Our motto: \u201cLets Join To Build The Better World Together.\u201d",
      bn: "জাবিয়ান ইউএসএ (JAAA) \u2014 জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের সংগঠন, যুক্তরাষ্ট্রে। কুইন্স, নিউ ইয়র্কভিত্তিক ৫০১(c)(3) অলাভজনক সংস্থা। আমাদের মূলমন্ত্র: \u201cLets Join To Build The Better World Together।\u201d"
    },
    {
      id: "membership",
      keys: ["member", "membership", "join", "register", "registration", "sign up", "signup", "become a member", "সদস্য", "যোগ দিন", "নিবন্ধন"],
      en: "Membership is open to Jahangirnagar University alumni living in the United States. Join the network, hear about events first, and help build the community \u2014 fill out the Member Registration form.",
      bn: "সদস্যপদ যুক্তরাষ্ট্রে বসবাসরত জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের প্রাক্তন শিক্ষার্থীদের জন্য উন্মুক্ত। নেটওয়ার্কে যোগ দিন, ইভেন্টের খবর সবার আগে পান \u2014 সদস্য নিবন্ধন ফরমটি পূরণ করুন।",
      action: { en: "Member Registration form", bn: "সদস্য নিবন্ধন ফরম", href: REGISTER_FORM }
    },
    {
      id: "events",
      keys: ["event", "events", "upcoming", "program", "programs", "gathering", "celebration", "ইভেন্ট", "অনুষ্ঠান"],
      en: "Our next big event is Pohela Boishakh \u2014 Saturday, May 8, 2027, at the Jamaica Performing Arts Center. Our annual winter festival, Himel Hawar Gaan o Adda, was last held November 14, 2026 at Angan Party Hall in Jamaica.",
      bn: "পরবর্তী বড় ইভেন্ট: পহেলা বৈশাখ \u2014 শনিবার, ৮ মে, ২০২৭, জামাইকা পারফর্মিং আর্টস সেন্টার। আমাদের বার্ষিক শীতকালীন উৎসব হিমেল হাওয়ার গান ও আড্ডা সর্বশেষ অনুষ্ঠিত হয় ১৪ নভেম্বর, ২০২৬, জামাইকার আঙ্গান পার্টি হলে।"
    },
    {
      id: "pohela",
      keys: ["pohela", "boishakh", "baishakh", "bengali new year", "bangla new year", "পহেলা", "বৈশাখ", "নববর্ষ"],
      en: "Pohela Boishakh \u2014 Saturday, May 8, 2027, Jamaica Performing Arts Center. Our Bangla New Year celebration.",
      bn: "পহেলা বৈশাখ \u2014 শনিবার, ৮ মে, ২০২৭, জামাইকা পারফর্মিং আর্টস সেন্টার। আমাদের বাংলা নববর্ষ উদযাপন।"
    },
    {
      id: "himel",
      keys: ["himel", "hawar", "gaan o adda", "winter festival", "winter", "হিমেল", "হাওয়া"],
      en: "Himel Hawar Gaan o Adda is JAAA\u2019s annual winter festival of songs, memories, and togetherness. It was last held Saturday, November 14, 2026, 4\u201310 PM at Angan Party Hall, 89-16 175 Street, Suite CF2, Jamaica, NY 11432 \u2014 with a children\u2019s photography exhibition, 41 rare posters from Akhtar Ahmed Rasha\u2019s collection, and an evening cultural program.",
      bn: "হিমেল হাওয়ার গান ও আড্ডা \u2014 JAAA-র বার্ষিক শীতকালীন উৎসব: গান, স্মৃতি ও একত্রিত হওয়ার সন্ধ্যা। সর্বশেষ অনুষ্ঠিত হয় শনিবার, ১৪ নভেম্বর, ২০২৬, বিকেল ৪টা\u2013রাত ১০টা, আঙ্গান পার্টি হল, 89-16 175 Street, Suite CF2, Jamaica, NY 11432 \u2014 শিশুদের ফটোগ্রাফি প্রদর্শনী, আখতার আহমেদ রাশার সংগ্রহের ৪১টি দুর্লভ পোস্টার ও সান্ধ্য সাংস্কৃতিক অনুষ্ঠান ছিল।"
    },
    {
      id: "projonmo",
      keys: ["projonmo", "children", "kids", "youth", "photography competition", "art competition", "workshop", "প্রজন্ম", "শিশু", "শিশুদের"],
      en: "Projonmo is JAAA\u2019s children\u2019s program \u2014 mobile photography competitions, art competitions, and device-free youth art workshops that engage the next generation through art and culture.",
      bn: "প্রজন্ম \u2014 JAAA-র শিশুদের অনুষ্ঠান: মোবাইল ফটোগ্রাফি প্রতিযোগিতা, আর্ট প্রতিযোগিতা ও ডিভাইস-মুক্ত শিল্প কর্মশালা \u2014 শিল্প ও সংস্কৃতির মাধ্যমে পরবর্তী প্রজন্মকে যুক্ত করা।"
    },
    {
      id: "story",
      keys: ["story", "stories", "share your story", "alumni story", "my story", "গল্প", "স্মৃতি"],
      en: "Share your JAAA story \u2014 a few sentences is enough. Tell us why you joined, a favorite memory, or what the community means to you. If you\u2019d like a photo with your story, email it to jalumni.usa@gmail.com after submitting.",
      bn: "আপনার গল্প শেয়ার করুন \u2014 কয়েক লাইনই যথেষ্ট। কেন যোগ দিলেন, প্রিয় কোনো স্মৃতি, বা এই কমিউনিটি আপনার কাছে কী \u2014 লিখুন। ছবি থাকলে ফরম জমা দেওয়ার পর jalumni.usa@gmail.com-এ ইমেইল করুন।",
      action: { en: "Share Your JAAA Story", bn: "গল্প শেয়ার করুন", href: STORY_FORM }
    },
    {
      id: "upload",
      keys: ["upload", "photo", "photos", "video", "videos", "picture", "pictures", "share photo", "ছবি", "ভিডিও", "আপলোড"],
      en: "Were you at a JAAA event? Share your raw photos and videos \u2014 we\u2019ll feature the best ones on the Activities page. Uploading needs a Google account, and please only share photos and videos you took yourself or have permission to share. Video: 1 file up to 1 GB. Photos: up to 10 files, 10 MB each.",
      bn: "JAAA ইভেন্টে ছিলেন? আপনার তোলা ছবি ও ভিডিও শেয়ার করুন \u2014 সেরাগুলো Activities পেজে দেখানো হবে। আপলোড করতে Google অ্যাকাউন্ট লাগবে; শুধু নিজের তোলা বা অনুমতি পাওয়া ছবি-ভিডিও শেয়ার করুন। ভিডিও: ১টি ফাইল, সর্বোচ্চ ১ GB। ছবি: সর্বোচ্চ ১০টি, প্রতিটি ১০ MB।",
      action: { en: "Upload Photos & Videos", bn: "ছবি ও ভিডিও আপলোড করুন", href: UPLOAD_FORM }
    },
    {
      id: "attendance",
      keys: ["attend", "attendance", "coming", "rsvp", "confirm", "seat", "seating", "উপস্থিতি", "আসছি"],
      en: "Coming to a JAAA event? Let us know you\u2019re attending \u2014 it helps us plan seating and refreshments.",
      bn: "JAAA ইভেন্টে আসছেন? উপস্থিতি নিশ্চিত করুন \u2014 বসা ও আপ্যায়নের পরিকল্পনায় সাহায্য হয়।",
      action: { en: "Confirm Your Attendance", bn: "উপস্থিতি নিশ্চিত করুন", href: ATTENDANCE_FORM }
    },
    {
      id: "volunteer",
      keys: ["volunteer", "help", "web team", "contribute", "স্বেচ্ছাসেবক", "সাহায্য"],
      en: "The JAAA Web Team is looking for a volunteer to help improve this website \u2014 updating pages, adding event photos and alumni stories. Basic web skills are enough; a good eye and a willing heart matter most. Write to jalumni.usa@gmail.com.",
      bn: "JAAA ওয়েব টিম স্বেচ্ছাসেবক খুঁজছে \u2014 পেজ আপডেট, ইভেন্টের ছবি ও প্রাক্তন শিক্ষার্থীদের গল্প যোগ করা। প্রাথমিক ওয়েব দক্ষতাই যথেষ্ট; ভালো চোখ ও আগ্রহী মনই আসল। আগ্রহী হলে jalumni.usa@gmail.com-এ লিখুন।",
      action: { en: "Volunteer — Email Us", bn: "স্বেচ্ছাসেবক হতে লিখুন", href: MAIL }
    },
    {
      id: "contact",
      keys: ["contact", "email", "phone", "call", "reach", "talk", "president", "secretary", "meghna", "ayon", "যোগাযোগ", "ইমেইল", "ফোন"],
      en: "For official communication: jalumni.usa@gmail.com. President Meghna Pal \u2014 732-487-0211. General Secretary Prashant Mallik Ayon \u2014 929-236-8155.",
      bn: "অফিসিয়াল যোগাযোগ: jalumni.usa@gmail.com। সভাপতি মেঘনা পাল \u2014 732-487-0211; সাধারণ সম্পাদক প্রশান্ত মল্লিক অয়ন \u2014 929-236-8155।",
      action: { en: "Email JAAA", bn: "ইমেইল করুন", href: MAIL }
    },
    {
      id: "social",
      keys: ["facebook", "instagram", "youtube", "social", "follow", "group", "ফেসবুক", "ইনস্টাগ্রাম", "ইউটিউব"],
      en: "Find us on Facebook (JAAA group), Instagram @jaaa_usa, and YouTube @JAAAUSA.",
      bn: "আমাদের ফেসবুক গ্রুপ, ইনস্টাগ্রাম @jaaa_usa ও ইউটিউব @JAAAUSA-তে খুঁজে নিন।",
      action: { en: "Facebook group", bn: "ফেসবুক গ্রুপ", href: FB_GROUP }
    },
    {
      id: "news",
      keys: ["news", "weekly bangalee", "article", "coverage", "press", "খবর", "সংবাদ"],
      en: "Latest news: Weekly Bangalee covered our Himel Hawar Gaan o Adda festival on November 21, 2026 \u2014 the children\u2019s photography exhibition, Rasha\u2019s 41 rare posters, and the evening cultural program.",
      bn: "সর্বশেষ খবর: Weekly Bangalee (২১ নভেম্বর, ২০২৬) হিমেল হাওয়ার গান ও আড্ডা নিয়ে লিখেছে \u2014 শিশুদের ফটোগ্রাফি প্রদর্শনী ও রাশার ৪১টি দুর্লভ পোস্টার।",
      action: { en: "Read the story", bn: "খবরটি পড়ুন", href: NEWS_PAGE }
    }
  ];

  var FALLBACK = {
    en: "I can help with membership, events, Projonmo, sharing your story, uploading photos and videos, volunteering, and contact details. Try one of the buttons below \u2014 or write to jalumni.usa@gmail.com.",
    bn: "আমি সদস্যপদ, ইভেন্ট, প্রজন্ম, গল্প শেয়ার, ছবি আপলোড, স্বেচ্ছাসেবা ও যোগাযোগের বিষয়ে সাহায্য করতে পারি। নিচের বোতামগুলোর একটি চাপ দিন \u2014 অথবা লিখুন jalumni.usa@gmail.com-এ।"
  };

  var CHIPS = {
    en: ["Join JAAA", "Events", "Share your story", "Contact"],
    bn: ["যোগ দিন", "ইভেন্ট", "গল্প শেয়ার করুন", "যোগাযোগ"]
  };

  var UI = {
    en: { title: "Jabian USA Assistant", subtitle: "Membership, events & stories", placeholder: "Ask about JAAA\u2026", send: "Send", langBtn: "বাংলা", close: "Close chat", open: "Open chat" },
    bn: { title: "জাবিয়ান ইউএসএ সহকারী", subtitle: "সদস্যপদ, ইভেন্ট ও গল্প", placeholder: "JAAA সম্পর্কে জিজ্ঞেস করুন\u2026", send: "পাঠান", langBtn: "EN", close: "চ্যাট বন্ধ করুন", open: "চ্যাট খুলুন" }
  };

  var BENGALI_RE = /[\u0980-\u09FF]/;

  function normalize(s) { return (s || "").toLowerCase().replace(/\s+/g, " ").trim(); }

  function findAnswer(text) {
    var norm = normalize(text);
    var best = null, bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var score = 0;
      for (var j = 0; j < KB[i].keys.length; j++) {
        if (norm.indexOf(KB[i].keys[j]) !== -1) score++;
      }
      if (score > bestScore) { bestScore = score; best = KB[i]; }
    }
    return best;
  }

  function build() {
    var launcher = document.createElement("button");
    launcher.className = "jaaa-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", UI.en.open);
    launcher.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.7 1.4 5.1 3.7 6.6L5 21l3.2-1.5c1.2.3 2.5.5 3.8.5 5.5 0 10-3.9 10-8.7S17.5 3 12 3z"/></svg>';

    var panel = document.createElement("div");
    panel.className = "jaaa-chat-panel";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Jabian USA Assistant chat");

    var header = document.createElement("div");
    header.className = "jaaa-chat-header";
    header.innerHTML = '<div class="jaaa-chat-avatar" aria-hidden="true">J</div>' +
      '<div><div class="jaaa-chat-title"></div><div class="jaaa-chat-subtitle"></div></div>' +
      '<div class="jaaa-chat-spacer"></div>';
    var langBtn = document.createElement("button");
    langBtn.className = "jaaa-chat-lang";
    langBtn.type = "button";
    var closeBtn = document.createElement("button");
    closeBtn.className = "jaaa-chat-close";
    closeBtn.type = "button";
    closeBtn.textContent = "\u2715";
    header.appendChild(langBtn);
    header.appendChild(closeBtn);

    var messages = document.createElement("div");
    messages.className = "jaaa-chat-messages";
    messages.setAttribute("aria-live", "polite");

    var chips = document.createElement("div");
    chips.className = "jaaa-chat-chips";

    var inputRow = document.createElement("div");
    inputRow.className = "jaaa-chat-input-row";
    var input = document.createElement("input");
    input.className = "jaaa-chat-input";
    input.type = "text";
    input.setAttribute("autocomplete", "off");
    var sendBtn = document.createElement("button");
    sendBtn.className = "jaaa-chat-send";
    sendBtn.type = "button";
    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(chips);
    panel.appendChild(inputRow);
    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    var lang = "en";
    var greeted = false;

    function applyLang() {
      var ui = UI[lang];
      panel.querySelector(".jaaa-chat-title").textContent = ui.title;
      panel.querySelector(".jaaa-chat-subtitle").textContent = ui.subtitle;
      input.placeholder = ui.placeholder;
      sendBtn.textContent = ui.send;
      langBtn.textContent = ui.langBtn;
      closeBtn.setAttribute("aria-label", ui.close);
      launcher.setAttribute("aria-label", ui.open);
      renderChips();
    }

    function renderChips() {
      chips.innerHTML = "";
      CHIPS[lang].forEach(function (label) {
        var b = document.createElement("button");
        b.className = "jaaa-chat-chip";
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", function () { handleUser(label); });
        chips.appendChild(b);
      });
    }

    function addMsg(text, who, action) {
      var div = document.createElement("div");
      div.className = "jaaa-chat-msg jaaa-chat-msg-" + who;
      if (who === "user") {
        div.textContent = text;
      } else {
        var p = document.createElement("p");
        p.textContent = text;
        div.appendChild(p);
        if (action) {
          var a = document.createElement("a");
          a.className = "jaaa-chat-action";
          a.href = action.href;
          a.target = "_blank";
          a.rel = "noopener";
          a.textContent = action.label;
          div.appendChild(a);
        }
      }
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function botReply(userText) {
      var typing = document.createElement("div");
      typing.className = "jaaa-chat-msg jaaa-chat-msg-bot jaaa-chat-typing";
      typing.textContent = "\u2026";
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
      setTimeout(function () {
        if (typing.parentNode) typing.parentNode.removeChild(typing);
        var topic = findAnswer(userText);
        if (topic) {
          addMsg(topic[lang], "bot", topic.action ? { label: topic.action[lang], href: topic.action.href } : null);
        } else {
          addMsg(FALLBACK[lang], "bot", null);
        }
      }, 600);
    }

    function handleUser(text) {
      var clean = (text || "").trim();
      if (!clean) return;
      if (BENGALI_RE.test(clean)) lang = "bn"; else if (/^[a-z]/i.test(clean) && lang === "bn" && !BENGALI_RE.test(clean)) lang = "en";
      applyLang();
      addMsg(clean, "user", null);
      input.value = "";
      botReply(clean);
      input.focus();
    }

    function openPanel() {
      panel.hidden = false;
      launcher.innerHTML = "\u2715";
      launcher.setAttribute("aria-label", UI[lang].close);
      if (!greeted) {
        greeted = true;
        addMsg(KB[0][lang], "bot", null);
      }
      input.focus();
    }
    function closePanel() {
      panel.hidden = true;
      launcher.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.7 1.4 5.1 3.7 6.6L5 21l3.2-1.5c1.2.3 2.5.5 3.8.5 5.5 0 10-3.9 10-8.7S17.5 3 12 3z"/></svg>';
      launcher.setAttribute("aria-label", UI[lang].open);
      launcher.focus();
    }

    launcher.addEventListener("click", function () { panel.hidden ? openPanel() : closePanel(); });
    closeBtn.addEventListener("click", closePanel);
    langBtn.addEventListener("click", function () { lang = lang === "en" ? "bn" : "en"; applyLang(); });
    sendBtn.addEventListener("click", function () { handleUser(input.value); });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") handleUser(input.value); });
    panel.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });

    applyLang();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
