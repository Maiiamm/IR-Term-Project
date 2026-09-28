export type Recipe = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  time: number;
  difficulty: "ง่าย" | "กลาง";
  servings: number;
  calories: number;
  rating: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  accent: string;
  searchable: string;
};

export type RecipeFilters = {
  diet?: string;
  time?: string;
  sort?: "match" | "fast" | "rating";
};

export type RecipeSearchResult = Recipe & {
  score: number;
  matchPercent: number;
  matchedIngredients: string[];
  reason: string;
};

const image = {
  basil: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/JorFXWuMZ85cjga6CKM47W.jpg",
  wok: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/PLBuMAxe4FzYi6mKaQKAtC.jpg",
  bowl: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/Sy8K59t2T2HP6thhJKWRne.jpg",
  curry: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/9bnavJVZkSa63LnJA2tK3n.jpg",
  nourish: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/dRciLF5H5WodkqjF6RxS4K.jpg",
  pork: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/cTifvEKywhZjU5ZtKCbpwi.jpg",
  garlicPork: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/mbRqRePMVuM6QspXHmQwSb.jpg",
  tomYum: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/yoHAfbm9FNBbC3szk8hWxC.jpg",
  omelette: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/aotGko6oXwSrXX2KfXJobc.jpg",
  somTam: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/pogThv6PNa4FwQtzndnTAA.jpg",
  panang: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/JnnKL5xpZxKx62u86Yxs73.jpg",
  cashew: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/x9kDANBxYby4bPHxrBHn93.jpg",
  padThai: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/eojDcKEw9R2tJiFxTaxoZ5.jpg",
  greenCurry: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/ghYUPsfVqkCqE5YaMBdZuK.jpg",
  massaman: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/uQ5PYpXDmpd6AvUTKd6YeR.jpg",
  clearSoup: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/bt8iTRpH3BsQ2prptXp9HU.webp",
  boatNoodles: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/H5yuvKqUQvXbS4HQv64sgZ.webp",
  larb: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/UbQcSsoC6FQ6rfvschDgMP.webp",
  garlicChicken: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/NMRhb8hVEfkeJNVtmQCPu6.jpg",
  crabRice: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/PpS6sXbNvH6GDr4jgr5sCh.jpg",
  mooPing: "https://files.manuscdn.com/search-media/310519663983200325/31jNN6NIvRCfZ5BYAY2nou/NDrRjF6vHDpcH3SRchgRHL.jpg",
};

export const recipeCorpus: Recipe[] = [
  {
    id: "pad-krapao-gai",
    title: "กะเพราไก่ไข่ดาว",
    subtitle: "เมนูสิ้นคิดที่คิดมาแล้วว่าอร่อย",
    description: "ไก่สับผัดกับกระเทียม พริก และใบกะเพราให้หอมฟุ้ง เสิร์ฟพร้อมไข่ดาวขอบกรอบ",
    image: image.basil,
    time: 15,
    difficulty: "ง่าย",
    servings: 2,
    calories: 540,
    rating: 4.9,
    tags: ["quick", "halal", "keto", "ไทย"],
    ingredients: ["เนื้อไก่สับ", "กระเทียม", "พริกขี้หนู", "ใบกะเพรา", "น้ำปลา", "ซีอิ๊วขาว", "ไข่ไก่"],
    steps: ["โขลกกระเทียมกับพริกพอหยาบ", "ผัดเครื่องโขลกให้หอม ใส่ไก่สับและปรุงรส", "เร่งไฟใส่ใบกะเพรา ผัดเร็ว ๆ แล้วเสิร์ฟกับไข่ดาว"],
    accent: "#f07c35",
    searchable: "กะเพรา ผัด ไก่ ไข่ดาว กระเทียม พริก ใบกะเพรา ไทย อาหารจานเดียว",
  },
  {
    id: "garlic-chicken-wok",
    title: "ไก่กระเทียมพริกไทย",
    subtitle: "หอมกระเทียม กินง่ายทั้งบ้าน",
    description: "ไก่หมักนุ่มผัดจนเคลือบซอสกระเทียมพริกไทย เสิร์ฟกับข้าวร้อน ๆ หรือผักลวก",
    image: image.garlicChicken,
    time: 20,
    difficulty: "ง่าย",
    servings: 2,
    calories: 430,
    rating: 4.8,
    tags: ["quick", "halal", "ไทย"],
    ingredients: ["เนื้อไก่หั่นชิ้น", "กระเทียม", "พริกไทย", "รากผักชี", "ซอสหอยนางรม", "ซีอิ๊วขาว"],
    steps: ["หมักไก่กับซีอิ๊วขาวและพริกไทย 10 นาที", "เจียวกระเทียมให้เหลืองหอมแล้วพักไว้", "ผัดไก่กับซอส โรยกระเทียมเจียวก่อนเสิร์ฟ"],
    accent: "#e4a14a",
    searchable: "ไก่ กระเทียม พริกไทย ผัด ซอส อาหารไทย เมนูเร็ว",
  },
  {
    id: "lemongrass-chicken-bowl",
    title: "ข้าวไก่ตะไคร้สมุนไพร",
    subtitle: "สดชื่น หอมสมุนไพร ในชามเดียว",
    description: "ไก่ย่างหอมตะไคร้ เสิร์ฟบนข้าวสวยกับแตงกวาและสมุนไพรสด เป็นมื้อเบา ๆ ที่ครบเครื่อง",
    image: image.bowl,
    time: 25,
    difficulty: "ง่าย",
    servings: 2,
    calories: 485,
    rating: 4.7,
    tags: ["halal", "ไทย", "balanced"],
    ingredients: ["อกไก่", "ตะไคร้", "กระเทียม", "น้ำมะนาว", "น้ำปลา", "แตงกวา", "ผักชี"],
    steps: ["หมักไก่กับตะไคร้ กระเทียม น้ำปลา และมะนาว", "ย่างไก่จนสุกหอม หั่นเป็นชิ้นพอดีคำ", "จัดลงชามกับข้าว แตงกวา และผักชี"],
    accent: "#8da56b",
    searchable: "ข้าว ไก่ ตะไคร้ สมุนไพร กระเทียม มะนาว แตงกวา ไทย ชาม",
  },
  {
    id: "coconut-curry-noodles",
    title: "ขนมจีนน้ำยากะทิไก่",
    subtitle: "เข้มข้น นัวกะทิ แบบทำเองได้",
    description: "น้ำยากะทิเนื้อเนียนจากพริกแกงและสมุนไพร เสิร์ฟกับขนมจีนและผักสดหลากสี",
    image: image.curry,
    time: 35,
    difficulty: "กลาง",
    servings: 4,
    calories: 620,
    rating: 4.8,
    tags: ["halal", "ไทย", "comfort"],
    ingredients: ["เนื้อไก่", "กะทิ", "พริกแกงแดง", "กระเทียม", "ตะไคร้", "ขนมจีน", "ถั่วฝักยาว"],
    steps: ["เคี่ยวกะทิกับพริกแกงให้แตกมันและหอม", "ใส่ไก่ฉีก ต้มจนเดือดและปรุงรส", "ราดบนขนมจีน เสิร์ฟกับผักสด"],
    accent: "#d99a55",
    searchable: "ขนมจีน น้ำยา กะทิ ไก่ พริกแกง กระเทียม ตะไคร้ ผัก ไทย",
  },
  {
    id: "tofu-thai-nourish-bowl",
    title: "ชามเต้าหู้ผักรวมซอสถั่ว",
    subtitle: "มังสวิรัติ กินเบาแต่ไม่เบาความอร่อย",
    description: "เต้าหู้กรอบกับผักสดสีสวย ราดซอสถั่วลิสงรสเปรี้ยวหวาน เป็นมื้อ plant-based ที่ทำง่าย",
    image: image.nourish,
    time: 15,
    difficulty: "ง่าย",
    servings: 2,
    calories: 390,
    rating: 4.6,
    tags: ["vegetarian", "quick", "healthy"],
    ingredients: ["เต้าหู้", "กะหล่ำม่วง", "แตงกวา", "แครอท", "ถั่วลิสง", "มะนาว", "ซีอิ๊วขาว"],
    steps: ["ซับเต้าหู้ให้แห้ง หั่นเต๋าแล้วทอดหรืออบจนกรอบ", "ผสมซอสถั่วกับมะนาวและซีอิ๊วขาว", "จัดผัก เต้าหู้ และราดซอสก่อนเสิร์ฟ"],
    accent: "#b5a55d",
    searchable: "มังสวิรัติ เต้าหู้ ผักรวม ชาม ถั่วลิสง มะนาว แตงกวา แครอท สุขภาพ",
  },
  {
    id: "garlic-pork-rice",
    title: "ข้าวหมูกระเทียมพริกไทย",
    subtitle: "เมนูบ้าน ๆ ที่หอมไปทั้งครัว",
    description: "หมูนุ่มหมักกระเทียมพริกไทย ผัดจนฉ่ำ เสิร์ฟกับข้าวสวยและแตงกวากรอบ ๆ",
    image: image.garlicPork,
    time: 18,
    difficulty: "ง่าย",
    servings: 2,
    calories: 575,
    rating: 4.7,
    tags: ["quick", "ไทย"],
    ingredients: ["หมูสันนอก", "กระเทียม", "พริกไทย", "ซีอิ๊วขาว", "น้ำตาลทราย", "แตงกวา"],
    steps: ["หมักหมูกับกระเทียม พริกไทย และซีอิ๊วขาว", "ผัดหมูด้วยไฟกลางจนสุกและซอสเคลือบ", "เสิร์ฟบนข้าวร้อน ๆ คู่แตงกวา"],
    accent: "#c77e48",
    searchable: "ข้าว หมู กระเทียม พริกไทย ผัด ไทย เมนูเร็ว",
  },
  {
    id: "tom-yum-shrimp",
    title: "ต้มยำกุ้งน้ำใส",
    subtitle: "แซ่บ เปรี้ยว หอมสมุนไพร",
    description: "ต้มยำน้ำใสกุ้งเด้งกับเห็ดและสมุนไพรไทย รสเปรี้ยวเผ็ดสดชื่น ทำง่ายในหม้อเดียว",
    image: image.tomYum,
    time: 25,
    difficulty: "ง่าย",
    servings: 2,
    calories: 280,
    rating: 4.8,
    tags: ["ไทย", "seafood", "spicy"],
    ingredients: ["กุ้ง", "เห็ดฟาง", "ตะไคร้", "ข่า", "ใบมะกรูด", "พริก", "น้ำมะนาว"],
    steps: ["ต้มน้ำกับตะไคร้ ข่า และใบมะกรูดให้หอม", "ใส่เห็ดและกุ้ง ต้มจนกุ้งสุก", "ปิดไฟ ปรุงด้วยน้ำมะนาวและพริก"],
    accent: "#e26c46",
    searchable: "ต้มยำ กุ้ง น้ำใส เห็ด ตะไคร้ ข่า ใบมะกรูด พริก มะนาว ไทย อาหารทะเล",
  },
  {
    id: "thai-omelette",
    title: "ไข่เจียวหมูสับ",
    subtitle: "ฟูกรอบ กินกับข้าวร้อน ๆ",
    description: "ไข่เจียวฟูนุ่มขอบกรอบใส่หมูสับ ปรุงรสกลมกล่อม เป็นเมนูเร็วที่ทุกคนชอบ",
    image: image.omelette,
    time: 10,
    difficulty: "ง่าย",
    servings: 2,
    calories: 410,
    rating: 4.7,
    tags: ["quick", "ไทย"],
    ingredients: ["ไข่ไก่", "หมูสับ", "น้ำปลา", "พริกไทย", "ต้นหอม", "น้ำมัน"],
    steps: ["ตีไข่กับหมูสับ น้ำปลา และพริกไทย", "ตั้งน้ำมันให้ร้อน เทไข่ลงทอด", "กลับด้านให้สุกฟู แล้วเสิร์ฟกับข้าว"],
    accent: "#efb44f",
    searchable: "ไข่เจียว ไข่ หมูสับ ต้นหอม พริกไทย เมนูเร็ว อาหารไทย",
  },
  {
    id: "pad-thai",
    title: "ผัดไทยกุ้งสด",
    subtitle: "เส้นเหนียวนุ่ม ซอสเข้มข้น",
    description: "ผัดไทยเส้นจันท์กับกุ้งสด เต้าหู้ และถั่วงอก ครบรสเปรี้ยวหวานเค็มแบบไทย",
    image: image.padThai,
    time: 30,
    difficulty: "กลาง",
    servings: 2,
    calories: 560,
    rating: 4.9,
    tags: ["ไทย", "seafood", "comfort"],
    ingredients: ["เส้นจันท์", "กุ้ง", "เต้าหู้", "ไข่ไก่", "ถั่วงอก", "น้ำมะขาม", "ถั่วลิสง"],
    steps: ["แช่เส้นให้นุ่มและผสมซอสผัดไทย", "ผัดกุ้ง เต้าหู้ และไข่ให้สุก", "ใส่เส้นกับซอส ผัดให้เข้ากัน โรยถั่วลิสง"],
    accent: "#d47a43",
    searchable: "ผัดไทย กุ้ง เส้นจันท์ เต้าหู้ ไข่ ถั่วงอก มะขาม ไทย",
  },
  {
    id: "green-curry-chicken",
    title: "แกงเขียวหวานไก่",
    subtitle: "หอมกะทิ นุ่มละมุน",
    description: "แกงเขียวหวานไก่รสเข้มข้น หอมใบโหระพาและมะเขือ เสิร์ฟคู่ข้าวสวยหรือขนมจีน",
    image: image.greenCurry,
    time: 35,
    difficulty: "กลาง",
    servings: 4,
    calories: 590,
    rating: 4.8,
    tags: ["ไทย", "halal", "comfort"],
    ingredients: ["เนื้อไก่", "กะทิ", "พริกแกงเขียวหวาน", "มะเขือ", "ใบโหระพา", "น้ำปลา"],
    steps: ["เคี่ยวหัวกะทิกับพริกแกงจนหอม", "ใส่ไก่และหางกะทิ ต้มจนไก่สุก", "ใส่มะเขือและโหระพา ปรุงรสแล้วเสิร์ฟ"],
    accent: "#7f9c62",
    searchable: "แกงเขียวหวาน ไก่ กะทิ พริกแกง มะเขือ โหระพา ไทย",
  },
  {
    id: "massaman-beef",
    title: "มัสมั่นเนื้อ",
    subtitle: "เครื่องเทศหอม นุ่มละลายในปาก",
    description: "แกงมัสมั่นเนื้อเคี่ยวช้า ๆ กับมันฝรั่งและถั่วลิสง น้ำแกงเข้มข้นหอมเครื่องเทศ",
    image: image.massaman,
    time: 70,
    difficulty: "กลาง",
    servings: 4,
    calories: 680,
    rating: 4.7,
    tags: ["ไทย", "comfort"],
    ingredients: ["เนื้อวัว", "กะทิ", "พริกแกงมัสมั่น", "มันฝรั่ง", "หอมใหญ่", "ถั่วลิสง", "อบเชย"],
    steps: ["ผัดพริกแกงกับหัวกะทิให้หอม", "ใส่เนื้อและเคี่ยวกับหางกะทิจนนุ่ม", "ใส่มันฝรั่ง หอมใหญ่ และปรุงรส"],
    accent: "#b9794c",
    searchable: "มัสมั่น เนื้อ กะทิ มันฝรั่ง หอมใหญ่ ถั่วลิสง เครื่องเทศ ไทย",
  },
  {
    id: "som-tam-thai",
    title: "ส้มตำไทย",
    subtitle: "กรอบ แซ่บ สดชื่น",
    description: "มะละกอเส้นกรอบคลุกน้ำส้มตำรสเปรี้ยวหวาน ใส่ถั่วลิสงและกุ้งแห้งแบบต้นตำรับ",
    image: image.somTam,
    time: 15,
    difficulty: "ง่าย",
    servings: 2,
    calories: 220,
    rating: 4.8,
    tags: ["quick", "ไทย", "spicy"],
    ingredients: ["มะละกอดิบ", "มะเขือเทศ", "ถั่วฝักยาว", "พริก", "กระเทียม", "น้ำมะนาว", "ถั่วลิสง"],
    steps: ["โขลกกระเทียมและพริกพอแตก", "ปรุงด้วยน้ำมะนาว น้ำปลา และน้ำตาล", "ใส่มะละกอ ถั่วฝักยาว และมะเขือเทศ ตำคลุกเบา ๆ"],
    accent: "#9ab45e",
    searchable: "ส้มตำ มะละกอ พริก กระเทียม มะนาว ถั่วฝักยาว ไทย แซ่บ",
  },
  {
    id: "larb-chicken",
    title: "ลาบไก่คั่ว",
    subtitle: "หอมข้าวคั่ว สมุนไพรแน่น",
    description: "ลาบไก่รสจัดจ้าน คลุกข้าวคั่ว หอมแดง และสมุนไพรสด กินคู่ผักสดอร่อยมาก",
    image: image.larb,
    time: 20,
    difficulty: "ง่าย",
    servings: 2,
    calories: 330,
    rating: 4.7,
    tags: ["quick", "ไทย", "halal", "spicy"],
    ingredients: ["ไก่สับ", "ข้าวคั่ว", "พริกป่น", "น้ำมะนาว", "น้ำปลา", "หอมแดง", "ผักชีฝรั่ง"],
    steps: ["รวนไก่สับกับน้ำเล็กน้อยจนสุก", "ปรุงด้วยน้ำปลา น้ำมะนาว และพริกป่น", "ใส่ข้าวคั่ว หอมแดง และผักชีฝรั่ง คลุกให้เข้ากัน"],
    accent: "#cf7950",
    searchable: "ลาบ ไก่ ข้าวคั่ว พริกป่น มะนาว หอมแดง ผักชีฝรั่ง ไทย อีสาน",
  },
  {
    id: "thai-bbq-pork",
    title: "หมูปิ้งนมสด",
    subtitle: "นุ่มหอม กินเพลินเหมือนหน้าปากซอย",
    description: "หมูหมักนมสดและรากผักชี ย่างจนหอมควัน เสิร์ฟกับข้าวเหนียวร้อน ๆ",
    image: image.mooPing,
    time: 30,
    difficulty: "กลาง",
    servings: 3,
    calories: 470,
    rating: 4.8,
    tags: ["ไทย", "street-food"],
    ingredients: ["หมูสันคอ", "นมสด", "กระเทียม", "รากผักชี", "พริกไทย", "น้ำตาลปี๊บ", "ข้าวเหนียว"],
    steps: ["หมักหมูกับนมสดและเครื่องหมักอย่างน้อย 30 นาที", "เสียบไม้แล้วทาด้วยน้ำหมัก", "ย่างไฟกลางจนสุกหอม เสิร์ฟกับข้าวเหนียว"],
    accent: "#d48654",
    searchable: "หมูปิ้ง หมู นมสด รากผักชี กระเทียม พริกไทย ข้าวเหนียว ไทย",
  },
  {
    id: "fried-rice-crab",
    title: "ข้าวผัดปู",
    subtitle: "เม็ดร่วน หอมกระทะ เนื้อปูเต็มคำ",
    description: "ข้าวผัดปูแบบร้านอาหาร ใช้ข้าวเย็นเม็ดร่วน ผัดไฟแรงกับไข่และต้นหอม",
    image: image.crabRice,
    time: 18,
    difficulty: "ง่าย",
    servings: 2,
    calories: 510,
    rating: 4.6,
    tags: ["quick", "seafood", "ไทย"],
    ingredients: ["ข้าวสวยเย็น", "เนื้อปู", "ไข่ไก่", "กระเทียม", "ต้นหอม", "ซีอิ๊วขาว", "พริกไทย"],
    steps: ["เจียวกระเทียมและผัดไข่ให้พอสุก", "ใส่ข้าว ผัดไฟแรงให้เม็ดร่วน", "ใส่เนื้อปู ปรุงรส และโรยต้นหอม"],
    accent: "#e1a34e",
    searchable: "ข้าวผัด ปู ข้าว ไข่ กระเทียม ต้นหอม อาหารทะเล ไทย เมนูเร็ว",
  },
  {
    id: "thai-noodle-soup",
    title: "ก๋วยเตี๋ยวน้ำตกหมู",
    subtitle: "น้ำซุปเข้มข้น หอมเครื่องเทศ",
    description: "ก๋วยเตี๋ยวน้ำตกหมูชามโปรด น้ำซุปเข้มข้นหอมอบเชย โป๊ยกั๊ก และเลือดหมู",
    image: image.boatNoodles,
    time: 45,
    difficulty: "กลาง",
    servings: 3,
    calories: 520,
    rating: 4.7,
    tags: ["ไทย", "comfort"],
    ingredients: ["เส้นเล็ก", "หมูสไลซ์", "ลูกชิ้นหมู", "อบเชย", "โป๊ยกั๊ก", "ถั่วงอก", "ผักบุ้ง"],
    steps: ["ต้มน้ำซุปกับเครื่องเทศและกระดูกหมู", "ลวกเส้น ผัก และหมูใส่ชาม", "ตักน้ำซุปเดือดราด ปรุงด้วยพริกและน้ำส้ม"],
    accent: "#b97950",
    searchable: "ก๋วยเตี๋ยว น้ำตก หมู เส้นเล็ก ลูกชิ้น ถั่วงอก ผักบุ้ง ไทย",
  },
  {
    id: "chicken-cashew",
    title: "ไก่ผัดเม็ดมะม่วง",
    subtitle: "กรุบกรอบ หวานเค็มกำลังดี",
    description: "ไก่ทอดนุ่มผัดกับเม็ดมะม่วงหิมพานต์ พริกแห้ง และผักสามสี ซอสเคลือบฉ่ำ ๆ",
    image: image.cashew,
    time: 25,
    difficulty: "กลาง",
    servings: 2,
    calories: 545,
    rating: 4.6,
    tags: ["quick", "ไทย", "halal"],
    ingredients: ["อกไก่", "เม็ดมะม่วงหิมพานต์", "พริกแห้ง", "หอมใหญ่", "พริกหวาน", "ซอสหอยนางรม"],
    steps: ["คลุกไก่กับแป้งบาง ๆ แล้วทอดหรือผัดจนสุก", "ผัดหอมใหญ่ พริกหวาน และพริกแห้ง", "ใส่ไก่กับซอส ผัดให้เคลือบ แล้วโรยเม็ดมะม่วง"],
    accent: "#d19a4f",
    searchable: "ไก่ ผัด เม็ดมะม่วง พริกแห้ง หอมใหญ่ พริกหวาน ไทย",
  },
  {
    id: "basil-pork",
    title: "กะเพราหมูสับ",
    subtitle: "เผ็ดหอม ทำไวใน 15 นาที",
    description: "หมูสับผัดกระเทียมพริกและใบกะเพรา เมนูจานเดียวที่จับคู่กับไข่ดาวแล้วลงตัว",
    image: image.basil,
    time: 15,
    difficulty: "ง่าย",
    servings: 2,
    calories: 530,
    rating: 4.8,
    tags: ["quick", "keto", "ไทย"],
    ingredients: ["หมูสับ", "กระเทียม", "พริกขี้หนู", "ใบกะเพรา", "น้ำปลา", "ซีอิ๊วดำ", "ไข่ไก่"],
    steps: ["โขลกกระเทียมและพริกพอหยาบ", "ผัดให้หอม ใส่หมูสับและปรุงรส", "ใส่ใบกะเพรา ผัดเร็ว ๆ แล้วเสิร์ฟกับไข่ดาว"],
    accent: "#df7640",
    searchable: "กะเพรา หมูสับ หมู กระเทียม พริก ใบกะเพรา ไข่ดาว ไทย เมนูเร็ว",
  },
  {
    id: "clear-soup-tofu",
    title: "แกงจืดเต้าหู้หมูสับ",
    subtitle: "ซุปร้อน ๆ สบายท้อง",
    description: "แกงจืดน้ำใสกลมกล่อมใส่เต้าหู้ หมูสับ และสาหร่าย เหมาะกับมื้อเบา ๆ ของทั้งครอบครัว",
    image: image.clearSoup,
    time: 25,
    difficulty: "ง่าย",
    servings: 3,
    calories: 260,
    rating: 4.5,
    tags: ["ไทย", "healthy", "comfort"],
    ingredients: ["เต้าหู้ไข่", "หมูสับ", "สาหร่าย", "ผักกาดขาว", "กระเทียมเจียว", "ต้นหอม", "พริกไทย"],
    steps: ["ปรุงหมูสับด้วยซีอิ๊วขาวและพริกไทย ปั้นเป็นก้อน", "ต้มน้ำซุป ใส่หมูและผักกาดขาว", "ใส่เต้าหู้และสาหร่าย โรยต้นหอมกระเทียมเจียว"],
    accent: "#8f9c68",
    searchable: "แกงจืด เต้าหู้ หมูสับ สาหร่าย ผักกาดขาว ซุป อาหารไทย สุขภาพ",
  },
  {
    id: "panang-chicken",
    title: "พะแนงไก่",
    subtitle: "หอมถั่วลิสง น้ำแกงข้นนัว",
    description: "พะแนงไก่รสหวานเค็มเผ็ดนิด ๆ หอมใบมะกรูดและพริกแกง เสิร์ฟกับข้าวสวย",
    image: image.panang,
    time: 30,
    difficulty: "กลาง",
    servings: 3,
    calories: 570,
    rating: 4.7,
    tags: ["ไทย", "halal", "comfort"],
    ingredients: ["เนื้อไก่", "กะทิ", "พริกแกงพะแนง", "ถั่วลิสงบด", "ใบมะกรูด", "น้ำปลา", "น้ำตาลปี๊บ"],
    steps: ["ผัดพริกแกงกับหัวกะทิให้หอม", "ใส่ไก่และกะทิที่เหลือ เคี่ยวจนสุก", "ปรุงรส ใส่ถั่วลิสงและใบมะกรูดซอย"],
    accent: "#c88755",
    searchable: "พะแนง ไก่ กะทิ พริกแกง ถั่วลิสง ใบมะกรูด ไทย",
  },
];

const synonymMap: Record<string, string[]> = {
  ไก่: ["ไก่", "อกไก่", "เนื้อไก่"],
  หมู: ["หมู", "หมูสันนอก"],
  กระเทียม: ["กระเทียม"],
  ผัก: ["ผัก", "กะหล่ำ", "แตงกวา", "แครอท"],
  มังสวิรัติ: ["มังสวิรัติ", "เต้าหู้", "ผัก"],
};

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/[\s,，、]+/g, " ");
}

function tokenize(value: string) {
  const normalized = normalize(value);
  const tokens = normalized.split(/\s+/).filter(Boolean);
  return tokens.flatMap((token) => synonymMap[token] ?? [token]);
}

export function searchRecipes(query: string, pantry: string[], filters: RecipeFilters = {}) {
  const queryTokens = tokenize(query);
  const pantryTokens = pantry.flatMap(tokenize);
  const combinedTokens = Array.from(new Set([...queryTokens, ...pantryTokens]));

  let filtered = recipeCorpus.filter((recipe) => {
    if (filters.diet === "vegetarian" && !recipe.tags.includes("vegetarian")) return false;
    if (filters.diet === "keto" && !recipe.tags.includes("keto")) return false;
    if (filters.diet === "halal" && !recipe.tags.includes("halal")) return false;
    if (filters.time === "15" && recipe.time > 15) return false;
    return true;
  });

  const scored: RecipeSearchResult[] = filtered.map((recipe) => {
    const searchable = normalize(`${recipe.title} ${recipe.subtitle} ${recipe.searchable} ${recipe.ingredients.join(" ")}`);
    const ingredientText = normalize(recipe.ingredients.join(" "));
    let score = 0;
    const hits = new Set<string>();

    queryTokens.forEach((token) => {
      if (searchable.includes(normalize(token))) score += recipe.title.includes(token) ? 8 : 3;
    });
    pantryTokens.forEach((token) => {
      if (ingredientText.includes(normalize(token))) {
        score += 4;
        hits.add(token);
      }
    });
    if (!queryTokens.length && !pantryTokens.length) score += 1;
    if (recipe.tags.includes("quick") && filters.time === "15") score += 1;

    const matchPercent = combinedTokens.length
      ? Math.min(99, Math.round((combinedTokens.filter((token) => searchable.includes(normalize(token))).length / combinedTokens.length) * 100))
      : 100;
    const reason = hits.size
      ? `ใช้ ${Array.from(hits).slice(0, 2).join(" + ")} ที่มีอยู่แล้ว`
      : queryTokens.length
        ? "ตรงกับคำค้นของคุณ"
        : "เมนูยอดนิยมสำหรับเริ่มต้น";

    return {
      ...recipe,
      score,
      matchPercent,
      matchedIngredients: Array.from(hits),
      reason,
    };
  });

  scored.sort((a, b) => {
    if (filters.sort === "fast") return a.time - b.time || b.score - a.score;
    if (filters.sort === "rating") return b.rating - a.rating || b.score - a.score;
    return b.score - a.score || b.rating - a.rating;
  });

  return {
    results: scored,
    retrieval: {
      method: "BM25-inspired keyword + pantry match",
      queryTerms: queryTokens,
      pantryTerms: pantryTokens,
      candidateCount: recipeCorpus.length,
      returnedCount: scored.length,
    },
  };
}

export function getRecipeById(id: string) {
  return recipeCorpus.find((recipe) => recipe.id === id) ?? null;
}
