// Verified against the foundation website and the supplied SKSM Text.txt.
export const FOUNDATION = {
  name: "Shri Krishnam Sharnam Mamah Foundation",
  nameHi: "श्री कृष्ण शरणम् ममः फाउंडेशन",
  shortName: "SKSM Foundation",
  url: "https://shrikrishnamsharnammamah.com",
  phone: "+91 8750508506",
  phoneHref: "tel:+918750508506",
  email: "sksmfoundation@gmail.com",
  address: "D-6/1, 2nd Floor, Pocket D, Okhla Phase II, New Delhi, Delhi 110020",
  whatsapp: "https://wa.me/918750508506",
  instagram: "https://www.instagram.com/sksm_foundation/",
  facebook: "https://www.facebook.com/profile.php?id=61590876478362",
  youtube: "https://www.youtube.com/@SKSMFoundation01",
  bank: { name: "IDFC FIRST BANK", account: "68750508504", ifsc: "IDFB0020107", branch: "OKHLA BRANCH" },
} as const;

export const asset = (file: string) => (file.startsWith("/") ? file : `/sksm/${file}`);
export const NAVIGATION = [
  ["/", "Home", "मुख्य पृष्ठ"],
  ["/about", "About", "परिचय"],
  ["/initiatives", "Initiatives", "सेवा कार्य"],
  ["/projects", "Temple project", "मंदिर निर्माण"],
  ["/founder", "Leadership", "नेतृत्व"],
  ["/gallery", "Gallery", "गैलरी"],
  ["/contact", "Contact", "संपर्क"],
] as const;

export const INITIATIVES = [
  { en: "Shri Banke Bihari Ji Seva", hi: "श्री बांके बिहारी जी सेवा", text: "A shared commitment to Krishna bhakti, worship and the sacred traditions of Braj.", textHi: "श्रीकृष्ण भक्ति, पूजा-अर्चना और ब्रज की पावन परंपराओं के प्रति समर्पण।" },
  { en: "Braj culture & heritage", hi: "ब्रज संस्कृति एवं विरासत", text: "Keeping Braj’s stories, devotional arts and cultural traditions alive for the next generation.", textHi: "ब्रज की लीलाओं, भक्ति कलाओं और सांस्कृतिक परंपराओं को आने वाली पीढ़ियों तक पहुँचाना।" },
  { en: "Spiritual gatherings", hi: "आध्यात्मिक एवं धार्मिक कार्यक्रम", text: "Katha, spiritual learning and gatherings that bring the teachings of Shri Krishna into everyday life.", textHi: "कथा, आध्यात्मिक शिक्षा और धार्मिक आयोजनों द्वारा श्रीकृष्ण की शिक्षाओं को जीवन से जोड़ना।" },
  { en: "Bhajan & kirtan", hi: "भजन, कीर्तन एवं भक्ति समारोह", text: "Coming together in devotion through music, festivals and community celebrations.", textHi: "भक्ति संगीत, उत्सव और सांस्कृतिक समारोहों के माध्यम से भक्तों को जोड़ना।" },
  { en: "Community welfare", hi: "समाज सेवा एवं जन कल्याण", text: "Seva rooted in compassion: care for people, respect for elders and concern for our environment.", textHi: "करुणा से प्रेरित सेवा: समाज कल्याण, वरिष्ठ नागरिकों का सम्मान और पर्यावरण संरक्षण।" },
] as const;

export const GALLERY = [
  ["1.jpg", "Shri Krishna devotion", "श्रीकृष्ण भक्ति"],
  ["/images/krishna.jpg", "Shri Krishna Bhakti & Braj Heritage", "श्रीकृष्ण भक्ति एवं ब्रज विरासत"],
  ["/images/vedic-gurukul-hd.jpg", "Vedic Gurukul & Sanskar", "वैदिक गुरुकुल एवं संस्कार"],
  ["/images/card-seva-rect.webp", "Community & Annadanam Seva", "समाज सेवा एवं अन्नदान"],
  ["/images/card-thought-rect.webp", "Sacred Ghats & Evening Aarti", "पावन घाट एवं संध्या आरती"],
  ["/images/membership-hero-unity.jpg", "Bhakti Sankirtan & Community", "भक्ति संकीर्तन एवं समाज"],
  ["7.jpg", "Shri Banke Bihari temple vision", "श्री बांके बिहारी मंदिर का संकल्प"],
  ["8.jpg", "Temple campus & proposed services", "मंदिर परिसर एवं प्रस्तावित सेवाएँ"],
  ["9.jpg", "Our spiritual & cultural vision", "हमारा आध्यात्मिक एवं सांस्कृतिक संकल्प"],
  ["10.png", "Temple inspiration", "मंदिर की प्रेरणा"],
  ["2.jpg", "About the foundation", "संस्था का परिचय"],
  ["/images/pillar-women.jpg", "Women Empowerment & Seva", "महिला सशक्तिकरण एवं सेवा"],
  ["/images/pillar-youth.webp", "Youth Empowerment & Education", "युवा सशक्तिकरण एवं शिक्षा"],
  ["/images/pillar-farmer.jpg", "Farmer Welfare & Rural Seva", "किसान कल्याण एवं ग्राम सेवा"],
] as const;
