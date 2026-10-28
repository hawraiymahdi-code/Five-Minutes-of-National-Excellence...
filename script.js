document.documentElement.setAttribute('dir', 'rtl');
document.documentElement.setAttribute('lang', 'ar');

/* ===== Question bank: 15 questions from the Grade 12 National Examination, Mathematical Skills 2026.
   Fields: n = number in the exam, topic, pre/bullets/tables/post = question body, options, answer = index of the right option, explain = model answer.
   Text inside double braces is shown left-to-right so numbers and BD amounts stay in order. ===== */
var QUESTIONS = [
  { n: 1, topic: 'الميزانية والتسوق',
    pre: ['ذهب جاسم مع ابنه مصطفى إلى متجر الألعاب ليشتري له بعض الألعاب، فقام مصطفى بوضع ألعاب عدة في عربة التسوق.', 'الجدول أدناه يبين سعر كل لعبة وضعها مصطفى في عربة التسوق:'],
    tables: [{ head: ['اللعبة', 'السعر (BD)'], rows: [['مسدس مائي', '3.000'], ['مسدس كهربائي', '4.000'], ['شاحنات', '7.000'], ['سيارة كهربائية', '12.000'], ['هاتف', '5.500'], ['مكعبات بناء', '10.000'], ['حذاء تزلج', '8.500'], ['كتب تلوين', '6.500']] }],
    post: ['اشترط جاسم على ابنه أن يشتري له ألعابًا لا يتعدى مجموع سعرها {{BD 25}}.'],
    ask: 'أيٌّ من المجموعات الآتية لن يشتريها جاسم لابنه مصطفى؟',
    options: ['مسدس مائي – سيارة كهربائية – مكعبات بناء', 'سيارة كهربائية – حذاء تزلج – كتب تلوين', 'مسدس مائي – شاحنات – هاتف – حذاء تزلج', 'مسدس كهربائي – هاتف – حذاء تزلج – كتب تلوين'],
    answer: 1,
    explain: 'نجمع أسعار كل مجموعة ونقارنها بالحد المسموح {{BD 25}}. المجموعة B مجموعها {{12 + 8.5 + 6.5 = BD 27}} وهو أكبر من 25، فلا يمكن شراؤها. أما A فمجموعها {{BD 25}}، وC مجموعها {{BD 24}}، وD مجموعها {{BD 24.5}}، وكلها مسموحة.' },

  { n: 2, topic: 'قراءة الجداول',
    pre: ['في العام {{2017}}، استحدثت شركة مركبات طرازين جديدين من السيارات.'],
    tables: [
      { cap: 'عدد السيارات المباعة في كل ربع في المنطقة 1:', head: ['', 'الربع 1', 'الربع 2', 'الربع 3', 'الربع 4'], rows: [['الطراز 1', '90', '80', '110', '122'], ['الطراز 2', '108', '115', '100', '94']] },
      { cap: 'عدد السيارات المباعة في كل ربع في المنطقة 2:', head: ['', 'الربع 1', 'الربع 2', 'الربع 3', 'الربع 4'], rows: [['الطراز 1', '95', '100', '123', '105'], ['الطراز 2', '120', '70', '77', '99']] }
    ],
    post: [],
    ask: 'في أيّ ربع من العام 2017، كان مجموع ما باعته الشركة من الطرازين الجديدين في المنطقتين أكبر مقدار؟',
    options: ['الربع 1', 'الربع 2', 'الربع 3', 'الربع 4'],
    answer: 3,
    explain: 'نجمع مبيعات الطرازين في المنطقتين لكل ربع: الربع 1 = {{90 + 108 + 95 + 120 = 413}}، الربع 2 = {{80 + 115 + 100 + 70 = 365}}، الربع 3 = {{110 + 100 + 123 + 77 = 410}}، الربع 4 = {{122 + 94 + 105 + 99 = 420}}. إذًا أكبر مقدار بيع كان في الربع 4.' },

  { n: 4, topic: 'النسبة المئوية والخصم',
    pre: ['يقدم مطعم للشاورما خصمًا بمقدار {{10%}} على جميع أصناف الدجاج المتوفرة لديه. والجدول أدناه يبين أنواع الشاورما المتوفرة لديه مع أسعارها حسب كل حجم:'],
    tables: [{ head: ['النوع', 'الصغير', 'المتوسط', 'الكبير'], rows: [['صحن شاورما دجاج', '1.000', '1.500', '2.000'], ['صحن شاورما لحم', '1.500', '2.100', '2.600'], ['صحن شاورما تكة دجاج', '1.200', '1.800', '2.300'], ['صحن شاورما تكة لحم', '1.800', '2.400', '3.000']] }],
    post: ['اشترت ليلى صحن شاورما دجاج من الحجم الصغير، وصحني شاورما تكة لحم من الحجم المتوسط وصحن شاورما تكة دجاج من الحجم المتوسط.'],
    ask: 'ما المبلغ الذي دفعته ليلى للمطعم نظير ما اشترته؟',
    options: ['BD 5.080', 'BD 6.840', 'BD 7.320', 'BD 7.600'],
    answer: 2,
    explain: 'الخصم يشمل الدجاج فقط، أما التكة باللحم فلا خصم عليها. المبلغ = {{1.000 × 0.9 + 2.400 × 2 + 1.8 × 0.9 = BD 7.320}}.' },

  { n: 5, topic: 'النمو السنوي',
    pre: ['تحقق شركة الازدهار نموًا سنويًا في أرباحها، والجدول أدناه يبين إيرادات الشركة ونسبة النمو في كل عام:'],
    tables: [{ head: ['العام', 'القيمة الكلية للإيرادات (بالمليون دينار)', 'نسبة النمو السنوي'], rows: [['2018', '500', '10%'], ['2019', '550', '10%'], ['2020', '605', '10%']] }],
    post: [],
    ask: 'ما القيمة الكلية لإيرادات الشركة المتوقعة للعام 2022، إذا استمرت نسبة النمو السنوي بالمعدل نفسه؟',
    options: ['66.56', '127.05', '665.50', '732.05'],
    answer: 3,
    explain: 'نمو {{10%}} سنويًا يعني الضرب في {{1.1}} كل عام. إيرادات 2021 = {{605 × 1.1 = 665.5}}، ثم إيرادات 2022 = {{665.5 × 1.1 = 732.05}}.' },

  { n: 6, topic: 'الشفرات والأنماط',
    pre: ['صمم حسن شفرة رقمية بسيطة لكتابة الكلمات المكتوبة باللغة الإنجليزية المكونة من حروف باستعمال الأرقام، وذلك باستبدال كل حرف بعدد مكون من رقمين تبعًا لترتيب كل حرف، فمثلًا حرف {{A = 01, B = 02, ……, Y = 25, Z = 26}} وهكذا.'],
    tables: [], post: [],
    ask: 'ما الشفرة الرقمية الصحيحة لكلمة (BAHRAIN)؟',
    options: ['02010818010914', '218181914', '2010818010914', '02010814010918'],
    answer: 0,
    explain: 'نكتب رقم كل حرف من رقمين: {{B = 02, A = 01, H = 08, R = 18, A = 01, I = 09, N = 14}}. فتكون الشفرة {{BAHRAIN = 02010818010914}}.' },

  { n: 7, topic: 'ضريبة القيمة المضافة',
    pre: ['أراد فيصل شراء تلفاز و4 مكيفات، فذهب لأحد متاجر الإلكترونيات. سعر المنتجات متضمنًا ضريبة القيمة المضافة بنسبة {{10%}} هو {{BD 143}} للتلفاز الواحد، و{{BD 275}} للمكيف الواحد.', 'يقدم المحل عرضًا، حيث لا يتم احتساب ضريبة القيمة المضافة على المكيفات فقط عند شراء 3 مكيفات أو أكثر.'],
    tables: [], post: [],
    ask: 'ما المبلغ الإجمالي الذي دفعه فيصل نظير ما اشتراه للمتجر؟',
    options: ['BD 1130', 'BD 1143', 'BD 1230', 'BD 1243'],
    answer: 1,
    explain: 'اشترى فيصل 4 مكيفات، فتُعفى من الضريبة، ويصبح سعر المكيف الواحد {{275 ÷ 1.1 = BD 250}}. المبلغ الإجمالي = {{143 + 4 × 250 = BD 1143}}.' },

  { n: 9, topic: 'العروض والخصومات',
    pre: ['أراد أحد الأندية الرياضية شراء 5 بدلات لأعضائه الذين أكملوا 10 سنوات في عضوية النادي، وقد حصل على نوعين من البدلات في محلين مختلفين، ولكل نوع عرضه الخاص به كما في الجدول أدناه:'],
    tables: [{ head: ['', 'البدلة 1', 'البدلة 2'], rows: [['السعر (BD)', '20', '25'], ['العرض', 'خصم 10 دنانير لكل 50 دينارًا', 'خصم 25 دينارًا لكل 60 دينارًا']] }],
    post: ['اشترى النادي بدلات لأعضائه الخمسة من النوعين.'],
    ask: 'ما أقل سعر دفعه النادي لشراء هذه البدلات الخمس؟',
    options: ['BD 75', 'BD 80', 'BD 90', 'BD 100'],
    answer: 2,
    explain: 'الشراء يكون من النوعين معًا، فنجرّب الحالات الممكنة. عند شراء بدلتين من النوع الأول (بدون خصم لأن المبلغ 40 أقل من 50) تكلفتهما {{BD 40}}، وثلاث بدلات من النوع الثاني ثمنها {{75}} ويُخصم {{25}} فتصبح {{BD 50}}. المجموع {{40 + 50 = BD 90}}، وهو أقل سعر ممكن.' },

  { n: 10, topic: 'المنطق',
    pre: ['لدى إبراهيم أربعة أولاد؛ أنور، أسامة، معين، وعلاء، أعمارهم {{28, 50, 55, 47}} دون ترتيب، كتب إبراهيم ملاحظات عدة عن أعمار أولاده، وهي:'],
    bullets: ['أنور أصغر عمرًا من أسامة.', 'أسامة أصغر عمرًا من معين.', 'معين ليس أكبرهم عمرًا.'],
    tables: [], post: [],
    ask: 'ما عمر علاء؟',
    options: ['28', '47', '50', '55'],
    answer: 3,
    explain: 'من الملاحظات: أنور أصغر من أسامة، وأسامة أصغر من معين، ومعين ليس الأكبر، إذًا الأكبر هو علاء. فيكون: أنور {{28}}، أسامة {{47}}، معين {{50}}، وعلاء {{55}}.' },

  { n: 11, topic: 'الحلول الممكنة',
    pre: ['تبيع إحدى المحمصات نوعين من أنواع القهوة فقط في أكياس، النوع الأول بسعر {{BD 6}} للكيس الواحد، والنوع الثاني بسعر {{BD 4}} للكيس الواحد.', 'إذا كان إيراد المحمصة في أحد الأيام هو {{BD 46}} من بيع كيسين على الأقل من كل نوع.'],
    tables: [], post: [],
    ask: 'ما أكبر عدد من الأكياس التي باعتها المحمصة من النوعين؟',
    options: ['8', '9', '10', '11'],
    answer: 2,
    explain: 'بالبحث المنهجي نجد أن الإيراد {{BD 46}} يتحقق ببيع 11 كيسًا (1 + 10) أو 10 أكياس (3 + 7) أو 9 أكياس (5 + 4) أو 8 أكياس (7 + 1). لكن 11 كيسًا لا يحقق شرط كيسين على الأقل من كل نوع، فأكبر عدد ممكن هو 10 أكياس: {{3 × 6 + 7 × 4 = 46}}.' },

  { n: 13, topic: 'التكلفة الأقل',
    pre: ['تخطط عائلة للذهاب إلى سوق المباركية في دولة الكويت بشكل مباشر، فوجدوا أنهم بحاجة إلى قطع مسافة {{450 km}} كحد أدنى أو {{500 km}} كحد أقصى.', 'سوف تستعمل العائلة سيارتها الخاصة التي تستهلك من {{12 liters}} إلى {{15 liters}} من الوقود لكل {{100 km}}، وسعر {{1 liter}} من الوقود يتراوح بين {{BD 0.150}} و{{BD 0.200}}.'],
    tables: [], post: [],
    ask: 'ما أقل تكلفة ستدفعها العائلة نظير استهلاك الوقود لذهابها لسوق المباركية؟',
    options: ['BD 8.100', 'BD 10.125', 'BD 11.220', 'BD 15.000'],
    answer: 0,
    explain: 'لأقل تكلفة نختار أقل مسافة {{450 km}}، وأقل استهلاك {{12 liters}} لكل {{100 km}}، وأقل سعر {{BD 0.150}} للتر. التكلفة = {{450 × 12 ÷ 100 × 0.15 = BD 8.100}}.' },

  { n: 14, topic: 'العد والاحتمالات',
    pre: ['طلب محمد من صديقه إنشاء رقم سري له مكون من 4 أرقام مختلفة، بحيث يكون مجموع الرقمين الأول والثاني مع بعضهما يساوي 6، وحاصل ضرب الرقمين الثالث والرابع في بعضهما 6 أيضًا.'],
    tables: [], post: [],
    ask: 'ما عدد الأرقام السرية التي وفرها صديق محمد له ليختار منها؟',
    options: ['3', '6', '12', '28'],
    answer: 2,
    explain: 'الرقمان الأول والثاني مجموعهما 6: {{(0,6)}} أو {{(1,5)}} أو {{(2,4)}}. والرقمان الثالث والرابع حاصل ضربهما 6: {{(1,6)}} أو {{(2,3)}}. نستبعد التكرار بين الأرقام فتبقى 3 توليفات: {{(0,6)+(2,3)}} و{{(1,5)+(2,3)}} و{{(2,4)+(1,6)}}. لكل توليفة 4 ترتيبات، فالمجموع {{3 × 4 = 12}} رقمًا سريًا.' },

  { n: 15, topic: 'التناسب وسرعة العمل',
    pre: ['يريد موسى صناعة 12 كرسيًا من الخشب خلال 6 ساعات عمل في ورشة نجارة تابعة له، ويعلم موسى أنه يحتاج إلى 3 عمال لصناعة كرسيين خلال 3 ساعات، كما أن لديه بالورشة ما لا يقل عن 20 عاملًا مدربين للعمل بالسرعة نفسها.'],
    tables: [], post: [],
    ask: 'ما عدد العمال الذين يحتاجهم موسى لصناعة 12 كرسيًا من الخشب خلال 6 ساعات؟',
    options: ['6', '9', '12', '18'],
    answer: 1,
    explain: '3 عمال يصنعون كرسيين في 3 ساعات، فيصنعون 4 كراسٍ في 6 ساعات. وللحصول على 12 كرسيًا في 6 ساعات (ثلاثة أضعاف 4) نحتاج إلى {{3 × 3 = 9}} عمال.' },

  { n: 18, topic: 'المعادلات في الحياة',
    pre: ['يعمل حامد على إعداد نوعين من الوجبات، حيث يستغرق إعداد النوع الأول من الوجبات نصف ساعة ويبيعه بسعر {{BD 6}}، والنوع الثاني يستغرق في إعداده ربع ساعة ويبيعه بسعر {{BD 4}}.', 'في أحد الأيام، عمل حامد لمدة خمس ساعات متواصلة لإعداد وجبات من النوعين، وباعها جميعًا بسعر {{BD 66}}.'],
    tables: [], post: [],
    ask: 'ما عدد الوجبات التي باعها حامد من النوع الأول؟',
    options: ['1', '6', '7', '13'],
    answer: 2,
    explain: 'إذا كان عدد وجبات النوع الأول x والثاني y فإن الزمن {{0.5x + 0.25y = 5}} أي {{2x + y = 20}}، والمبيعات {{6x + 4y = 66}}. بالحل نجد {{x = 7}} و{{y = 6}}. التحقق: {{7 × 6 + 6 × 4 = 66}}.' },

  { n: 20, topic: 'الجبر والتفكير',
    pre: ['لدى حسن مجموعة من الكرات الملونة بثلاثة ألوان مختلفة (أصفر، أحمر، أزرق)، وكلها في كيس واحد. يعلم حسن أن 8 كرات ليست صفراء، و12 كرة ليست حمراء، و10 كرات ليست زرقاء.'],
    tables: [], post: [],
    ask: 'ما عدد الكرات الزرقاء لدى حسن؟',
    options: ['5', '10', '15', '20'],
    answer: 0,
    explain: 'نفرض أن S عدد كل الكرات: {{S = Y + 8}} و{{S = R + 12}} و{{S = B + 10}}. بجمع المعادلات الثلاث {{3S = (Y + R + B) + 30 = S + 30}} فيكون {{S = 15}}. إذًا عدد الكرات الزرقاء {{B = 15 − 10 = 5}}.' },

  { n: 23, topic: 'الحالات الممكنة',
    pre: ['الجد فيصل يفرح كثيرًا بزيارة أحفاده لمنزله، وقد زاره في عيد الأضحى السابق جميع أحفاده وعددهم 21 حفيدًا، منهم 10 أحفاد لم يتجاوزوا الـ 5 سنوات، و3 أحفاد أعمارهم 8 سنوات، و5 أحفاد أعمارهم تتجاوز الـ 20 سنة، والبقية تتجاوز الـ 10 سنوات ولم تتجاوز الـ 20 سنة. في كل عيد الجد فيصل يعطي بعض أحفاده الذين يزورونه على وجبة الغداء مبلغًا من المال بشكل عشوائي، حسب النظام الآتي:'],
    bullets: ['الحفيد الذي لم يتجاوز 5 سنوات، يعطيه مبلغ {{BD 1}} أو {{BD 2}}.', 'الحفيد الذي تجاوز 5 سنوات ولم يتجاوز 10 سنوات، يعطيه مبلغ {{BD 3}} أو {{BD 5}}.', 'الحفيد الذي تجاوز 10 سنوات ولم يتجاوز 20 سنة، يعطيه مبلغ {{BD 10}} أو {{BD 20}}.', 'الحفيد الذي تجاوز 20 سنة، يكتفي فقط بالسلام عليه.'],
    tables: [], post: [],
    ask: 'ما أقل مبلغ يجب أن يكون لدى الجد فيصل؛ لضمان أن يعطي أحفاده المبالغ التي يخصصها لهم كل عيد في جميع الحالات الممكنة؟',
    options: ['BD 35', 'BD 49', 'BD 72', 'BD 95'],
    answer: 3,
    explain: 'لضمان إعطاء كل حفيد المبلغ المخصص، يجب توفير الحد الأعلى لكل فئة: 10 أحفاد صغار × 2، و3 أحفاد (8 سنوات) × 5، و3 أحفاد (بين 10 و20 سنة) × 20، والخمسة الذين تجاوزوا 20 سنة لا يأخذون شيئًا. المجموع {{10 × 2 + 3 × 5 + 3 × 20 + 5 × 0 = BD 95}}.' }
];

var PHRASES = {
  first: [
    'ما شاء الله! إجابة صحيحة من أول محاولة.',
    'أحسنت! عقل رياضي متميز.',
    'ممتاز! هكذا يفكر المتفوقون.',
    'رائع! أضأت دائرة جديدة في طريق التميز.',
    'بطل! واصل بنفس الثقة.'
  ],
  second: [
    'إصرارك أوصلك إلى الإجابة، وهذه صفة المتميزين.',
    'أحسنت! المحاولة الثانية تدل على عزيمتك.',
    'جميل! تعلمت من الخطأ وصححت المسار.'
  ],
  missed: [
    'لا بأس، الخطأ خطوة نحو الإتقان. اقرأ الحل وستنجح في المرة القادمة.',
    'شكرًا لمحاولتك. كل متميز مرّ بمحاولات كثيرة، فاستمر!',
    'راجع الحل النموذجي جيدًا، فالفهم هو أول الطريق إلى التميز.'
  ]
};
var POINTS = { first: 10, second: 5 };
var TOTAL_SECONDS = 300;
var STORE_KEY = 'five-minutes-excellence-board';
var MUTE_KEY = 'five-minutes-excellence-muted';
var RM = false;
try { RM = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); } catch (e) {}

/* ===== helpers ===== */
var $ = function (s) { return document.querySelector(s); };
var AR = '٠١٢٣٤٥٦٧٨٩';
function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
function rich(s) { return String(s).replace(/\{\{(.+?)\}\}/g, '<bdi class="ltr">$1</bdi>'); }
function levelFor(p) {
  var r = p / (QUESTIONS.length * POINTS.first);
  if (r >= 0.9) return 'قائد التميز';
  if (r >= 0.7) return 'متميز';
  if (r >= 0.4) return 'مثابر';
  return 'بادئ التميز';
}
function closingFor(p) {
  var r = p / (QUESTIONS.length * POINTS.first);
  if (r >= 0.9) return 'نتيجة ممتازة! أنت قدوة لزملائك في التميز.';
  if (r >= 0.7) return 'أداء مميز، أنت قريب جدًا من القمة.';
  if (r >= 0.4) return 'بداية قوية، وكل مشاركة جديدة ترفع مستواك.';
  return 'أهم شيء أنك بدأت. جرّب مرة أخرى وسترى الفرق.';
}

var mem = [];
function loadBoard() {
  try { var v = JSON.parse(localStorage.getItem(STORE_KEY) || '[]'); if (Array.isArray(v)) { mem = v; } } catch (e) {}
  return mem;
}
function saveBoard(list) {
  mem = list;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch (e) {}
}

var state = { user: null, char: 'girl', cur: -1, points: 0, res: {}, seconds: TOTAL_SECONDS, timer: null, timerStarted: false, expired: false, order: { first: [], second: [], missed: [] }, recordId: null };

function shuffled(n) {
  var a = []; for (var i = 0; i < n; i++) a.push(i);
  for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; }
  return a;
}
function pickPhrase(kind) {
  if (!state.order[kind].length) state.order[kind] = shuffled(PHRASES[kind].length);
  return PHRASES[kind][state.order[kind].pop()];
}

function show(id) {
  ['screen-reg', 'screen-q', 'screen-result'].forEach(function (s) {
    var el = $('#' + s);
    var on = s === id;
    el.hidden = !on;
    el.style.display = on ? '' : 'none';
  });
  $('#bar').hidden = id === 'screen-reg';
  window.scrollTo(0, 0);
}

/* ===== sound: calm music and effects, generated with the Web Audio API (no files needed) ===== */
var audio = { ctx: null, master: null, musicBus: null, sfxBus: null, timer: null, nextBar: 0, bar: 0, playing: false, muted: false };
try { audio.muted = localStorage.getItem(MUTE_KEY) === '1'; } catch (e) {}

function initAudio() {
  if (audio.ctx) return audio.ctx;
  var AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  var c;
  try { c = new AC(); } catch (e) { return null; }
  audio.ctx = c;
  audio.master = c.createGain(); audio.master.gain.value = audio.muted ? 0 : 1; audio.master.connect(c.destination);
  audio.sfxBus = c.createGain(); audio.sfxBus.gain.value = 0.9; audio.sfxBus.connect(audio.master);
  audio.musicBus = c.createGain(); audio.musicBus.gain.value = 0.55;
  var len = Math.floor(c.sampleRate * 2.6), buf = c.createBuffer(2, len, c.sampleRate);
  for (var ch = 0; ch < 2; ch++) {
    var d = buf.getChannelData(ch);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
  }
  var conv = c.createConvolver(); conv.buffer = buf;
  var wet = c.createGain(); wet.gain.value = 0.55;
  var dry = c.createGain(); dry.gain.value = 0.7;
  audio.musicBus.connect(dry); dry.connect(audio.master);
  audio.musicBus.connect(conv); conv.connect(wet); wet.connect(audio.master);
  return c;
}
function tone(freq, t, dur, type, peak, dest, att, rel) {
  var c = audio.ctx;
  var o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + att);
  g.gain.setValueAtTime(peak, t + Math.max(att, dur - rel));
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest);
  o.start(t); o.stop(t + dur + 0.05);
}
var CHORDS = [[130.81, 196.00, 246.94, 329.63], [110.00, 164.81, 196.00, 261.63], [87.31, 130.81, 164.81, 220.00], [98.00, 146.83, 164.81, 246.94]];
var SCALE = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
var BAR = 8;
function scheduleBar(t) {
  var ch = CHORDS[audio.bar % CHORDS.length];
  ch.forEach(function (f, i) { tone(f, t + i * 0.15, BAR + 1.5, 'sine', 0.035, audio.musicBus, 2.2, 2.5); });
  tone(ch[0] * 2, t, BAR, 'triangle', 0.012, audio.musicBus, 3, 3);
  var n = 3 + Math.floor(Math.random() * 2);
  for (var k = 0; k < n; k++) {
    var when = t + 1 + k * (BAR - 1.5) / n + Math.random() * 0.6;
    tone(SCALE[Math.floor(Math.random() * SCALE.length)], when, 2.4, 'sine', 0.03, audio.musicBus, 0.04, 2.2);
  }
  audio.bar++;
}
function musicTick() {
  var c = audio.ctx;
  if (!c || !audio.playing) return;
  while (audio.nextBar < c.currentTime + 2.5) { scheduleBar(audio.nextBar); audio.nextBar += BAR; }
}
function startMusic() {
  var c = initAudio();
  if (!c) return;
  if (c.state === 'suspended' && c.resume) { try { c.resume(); } catch (e) {} }
  if (audio.playing) return;
  audio.playing = true;
  audio.nextBar = c.currentTime + 0.2;
  musicTick();
  audio.timer = setInterval(musicTick, 500);
}
function sfxCorrect() {
  var c = initAudio(); if (!c || audio.muted) return;
  var t = c.currentTime + 0.02, notes = [659.25, 783.99, 1046.50, 1318.51];
  notes.forEach(function (f, i) {
    tone(f, t + i * 0.09, 0.7, 'triangle', 0.16, audio.sfxBus, 0.01, 0.5);
    tone(f * 2, t + i * 0.09, 0.5, 'sine', 0.05, audio.sfxBus, 0.01, 0.4);
  });
  for (var k = 0; k < 6; k++) tone(1800 + Math.random() * 1600, t + 0.3 + k * 0.07, 0.25, 'sine', 0.035, audio.sfxBus, 0.005, 0.2);
}
function sfxWrong() {
  var c = initAudio(); if (!c || audio.muted) return;
  var t = c.currentTime + 0.02;
  tone(330, t, 0.28, 'sine', 0.12, audio.sfxBus, 0.01, 0.22);
  tone(262, t + 0.16, 0.4, 'sine', 0.12, audio.sfxBus, 0.01, 0.3);
}
function sfxFinish() {
  var c = initAudio(); if (!c || audio.muted) return;
  var t = c.currentTime + 0.05;
  [523.25, 659.25, 783.99, 1046.50].forEach(function (f, i) { tone(f, t + i * 0.12, 1.6, 'triangle', 0.12, audio.sfxBus, 0.02, 1.2); });
}
function speak(text) {
  try {
    if (audio.muted || !window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-SA'; u.rate = 0.95; u.volume = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) {}
}
function setMuted(m) {
  audio.muted = m;
  try { localStorage.setItem(MUTE_KEY, m ? '1' : '0'); } catch (e) {}
  if (audio.master) audio.master.gain.setTargetAtTime(m ? 0 : 1, audio.ctx.currentTime, 0.08);
  if (m) { try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {} }
  var b = $('#btn-sound');
  b.setAttribute('aria-pressed', m ? 'true' : 'false');
  b.setAttribute('aria-label', m ? 'تشغيل الصوت والموسيقى' : 'كتم الصوت والموسيقى');
}
$('#btn-sound').addEventListener('click', function () {
  var c = initAudio();
  if (c && c.state === 'suspended' && c.resume) { try { c.resume(); } catch (e) {} }
  if (!audio.playing) startMusic();
  setMuted(!audio.muted);
});
document.addEventListener('visibilitychange', function () {
  var c = audio.ctx; if (!c) return;
  try { if (document.hidden) { c.suspend(); } else if (audio.playing) { c.resume(); } } catch (e) {}
});
setMuted(audio.muted);

/* ===== celebration: star burst, confetti in Bahrain red, white and gold ===== */
function starPoints(spikes, outer, inner) {
  var pts = [];
  for (var i = 0; i < spikes * 2; i++) {
    var r = i % 2 === 0 ? outer : inner, a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push((Math.cos(a) * r).toFixed(1) + ',' + (Math.sin(a) * r).toFixed(1));
  }
  return pts.join(' ');
}
(function buildBurst() {
  var rays = '';
  for (var i = 0; i < 24; i++) {
    var a = (Math.PI * 2 * i) / 24, r1 = 78, r2 = i % 2 ? 100 : 114;
    rays += '<line x1="' + (Math.cos(a) * r1).toFixed(1) + '" y1="' + (Math.sin(a) * r1).toFixed(1) + '" x2="' + (Math.cos(a) * r2).toFixed(1) + '" y2="' + (Math.sin(a) * r2).toFixed(1) + '" stroke="#F5D77A" stroke-width="5" stroke-linecap="round"/>';
  }
  $('#burst-art').innerHTML =
    rays +
    '<polygon points="' + starPoints(8, 72, 48) + '" fill="#E3A82A" stroke="#FFFFFF" stroke-width="5" stroke-linejoin="round"/>' +
    '<circle r="36" fill="#17724A" stroke="#FFFFFF" stroke-width="4"/>' +
    '<path d="M-17 1 L-5 13 L18 -12" fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>';
})();
var burstTimer = null;
function showBurst() {
  var b = $('#burst');
  b.classList.remove('show'); void b.offsetWidth;
  b.hidden = false; b.classList.add('show');
  clearTimeout(burstTimer);
  burstTimer = setTimeout(function () { b.hidden = true; b.classList.remove('show'); }, RM ? 1400 : 1950);
}
function confetti() {
  if (RM) return;
  var cv = $('#confetti'), ctx = cv.getContext('2d');
  if (!ctx) return;
  var dpr = Math.min(window.devicePixelRatio || 1, 2), W = window.innerWidth, H = window.innerHeight;
  cv.width = Math.floor(W * dpr); cv.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  var colors = ['#C8102E', '#FFFFFF', '#E3A82A', '#4FC3BE', '#F5D77A'], ps = [];
  for (var i = 0; i < 120; i++) {
    var a = Math.random() * Math.PI * 2, sp = 4 + Math.random() * 9;
    ps.push({ x: W / 2, y: H * 0.42, vx: Math.cos(a) * sp * (0.6 + Math.random()), vy: Math.sin(a) * sp - 4,
      w: 6 + Math.random() * 6, h: 8 + Math.random() * 8, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
      c: colors[i % colors.length], star: Math.random() < 0.25 });
  }
  var start = performance.now();
  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    var alive = false;
    ps.forEach(function (p) {
      p.vy += 0.28; p.vx *= 0.992; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      if (p.y > H + 30) return;
      alive = true;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 0.8;
      if (p.star) {
        ctx.beginPath();
        for (var k = 0; k < 10; k++) { var rr = k % 2 ? 4 : 9, aa = (Math.PI * k) / 5 - Math.PI / 2; ctx.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    });
    if (alive && now - start < 3400) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
  }
  requestAnimationFrame(frame);
}

/* ===== timer ===== */
function fmt(s) { return ar(Math.floor(s / 60)) + ':' + ar(String(s % 60).padStart(2, '0')); }
function startTimer() {
  stopTimer();
  state.seconds = TOTAL_SECONDS; state.expired = false; state.timerStarted = true;
  var chip = $('#time-chip'); chip.classList.remove('done'); chip.textContent = fmt(state.seconds);
  state.timer = setInterval(function () {
    state.seconds -= 1;
    if (state.seconds <= 0) {
      state.seconds = 0; stopTimer(); state.expired = true;
      chip.textContent = 'انتهى الوقت'; chip.classList.add('done');
      $('#time-banner').hidden = false;
    } else {
      chip.textContent = fmt(state.seconds);
    }
  }, 1000);
}
function stopTimer() { if (state.timer) { clearInterval(state.timer); state.timer = null; } }

/* ===== registration ===== */
$('#reg-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = $('#f-name').value.trim(), grade = $('#f-grade').value.trim(), school = $('#f-school').value.trim();
  var picked = document.querySelector('input[name="char"]:checked');
  var err = $('#reg-err');
  if (!picked) { err.textContent = 'اختر شخصيتك أولًا.'; return; }
  if (name.length < 2) { err.textContent = 'اكتب اسمك لنبدأ.'; $('#f-name').focus(); return; }
  if (!grade) { err.textContent = 'اكتب صفك الدراسي.'; $('#f-grade').focus(); return; }
  if (!school) { err.textContent = 'اكتب اسم مدرستك.'; $('#f-school').focus(); return; }
  err.textContent = '';
  state.user = { name: name, grade: grade, school: school };
  state.char = picked.value;
  state.cur = -1; state.points = 0; state.res = {}; state.timerStarted = false; state.recordId = null;
  stopTimer();
  $('#time-chip').textContent = fmt(TOTAL_SECONDS); $('#time-chip').classList.remove('done');
  $('#time-banner').hidden = true;
  updatePoints(false);
  $('#greet-use').setAttribute('href', '#av-' + state.char);
  $('#coach-use').setAttribute('href', '#av-' + state.char);
  $('#greet-title').textContent = 'أهلًا ' + name.split(/\s+/)[0] + '!';
  $('#q-card').hidden = true;
  buildMap();
  show('screen-q');
  startMusic();
});

/* ===== circle map ===== */
var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function buildMap() {
  var map = $('#map'); map.textContent = '';
  QUESTIONS.forEach(function (q, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'circle'; b.setAttribute('data-i', i);
    b.addEventListener('click', function () { openQ(i); });
    map.appendChild(b);
  });
  refreshMap();
}
function refreshMap(justLit) {
  var btns = document.querySelectorAll('#map .circle');
  btns.forEach(function (b, i) {
    var r = state.res[i], cls = 'circle';
    var label = 'السؤال ' + ar(i + 1);
    var inner = '<span>' + ar(i + 1) + '</span>';
    if (r && r.done) {
      if (r.status === 'correct') { cls += ' ok'; label += '، أجبت بشكل صحيح'; inner += CHECK; }
      else { cls += ' miss'; label += '، راجع الحل'; }
    }
    if (i === state.cur) cls += ' now';
    if (justLit === i) cls += ' lit';
    b.className = cls; b.setAttribute('aria-label', label); b.innerHTML = inner;
  });
}
function doneCount() { var n = 0; for (var k in state.res) { if (state.res[k].done) n++; } return n; }
function litCount() { var n = 0; for (var k in state.res) { if (state.res[k].status === 'correct') n++; } return n; }

/* ===== question panel ===== */
function updatePoints(pulse) {
  $('#pts').textContent = ar(state.points);
  if (pulse) { var c = $('#pts-chip'); c.classList.remove('pulse'); void c.offsetWidth; c.classList.add('pulse'); }
}
function tableHtml(t) {
  var h = '';
  if (t.cap) h += '<div class="tcap">' + rich(t.cap) + '</div>';
  h += '<div class="tscroll"><table class="qtable"><thead><tr>';
  t.head.forEach(function (c) { h += '<th>' + rich(c) + '</th>'; });
  h += '</tr></thead><tbody>';
  t.rows.forEach(function (r) {
    h += '<tr>';
    r.forEach(function (c, ci) { h += (ci > 0 && /^[0-9.,%\s]+$/.test(c)) ? '<td><bdi class="ltr">' + c + '</bdi></td>' : '<td>' + rich(c) + '</td>'; });
    h += '</tr>';
  });
  return h + '</tbody></table></div>';
}
function openQ(i) {
  var q = QUESTIONS[i];
  if (!state.timerStarted) startTimer();
  state.cur = i;
  var rec = state.res[i];
  $('#q-card').hidden = false;
  $('#q-count').textContent = 'السؤال ' + ar(q.n) + ' من الامتحان الوطني';
  $('#q-cat').textContent = q.topic;
  var body = '';
  (q.pre || []).forEach(function (p) { body += '<p>' + rich(p) + '</p>'; });
  if (q.bullets) { body += '<ul>'; q.bullets.forEach(function (b) { body += '<li>' + rich(b) + '</li>'; }); body += '</ul>'; }
  (q.tables || []).forEach(function (t) { body += tableHtml(t); });
  (q.post || []).forEach(function (p) { body += '<p>' + rich(p) + '</p>'; });
  body += '<p class="ask">' + rich(q.ask) + '</p>';
  $('#q-body').innerHTML = body;
  var opts = $('#opts'); opts.textContent = '';
  var letters = ['A', 'B', 'C', 'D'];
  q.options.forEach(function (o, oi) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'opt'; b.setAttribute('data-o', oi);
    b.innerHTML = '<b>' + letters[oi] + '</b><span class="t">' + rich(o) + '</span>';
    b.addEventListener('click', function () { choose(oi); });
    opts.appendChild(b);
  });
  $('#try-msg').textContent = '';
  $('#after').hidden = true;
  if (rec) {
    rec.wrong.forEach(function (oi) { markOpt(oi, 'wrong'); });
    if (rec.done) { markOpt(q.answer, 'right'); lockOpts(); showAfter(rec, false); }
  }
  refreshMap();
  var card = $('#q-card');
  try { card.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' }); } catch (e) { card.scrollIntoView(); }
}
function markOpt(oi, cls) {
  var b = document.querySelector('#opts .opt[data-o="' + oi + '"]');
  if (!b) return;
  b.classList.remove('wrong', 'right'); void b.offsetWidth; b.classList.add(cls); b.disabled = true;
  if (cls === 'right') b.setAttribute('aria-label', 'الإجابة الصحيحة');
}
function lockOpts() { document.querySelectorAll('#opts .opt').forEach(function (b) { b.disabled = true; }); }
function showAfter(rec, animate) {
  $('#fb-phrase').textContent = rec.phrase;
  $('#fb-earn').textContent = rec.points > 0
    ? 'حصلت على ' + ar(rec.points) + (rec.points === 1 ? ' نقطة' : ' نقاط') + '. رصيدك الآن ' + ar(state.points) + ' نقطة.'
    : 'لم تحصل على نقاط هذه المرة، وفرصتك قادمة في الدوائر الأخرى.';
  $('#model-text').innerHTML = rich(QUESTIONS[state.cur].explain);
  var last = doneCount() >= QUESTIONS.length;
  $('#btn-next').textContent = last ? 'عرض النتيجة' : 'الدائرة التالية';
  $('#after').hidden = false;
  var av = $('#coach-av'); av.classList.remove('jump');
  if (animate && rec.status === 'correct') { void av.getBoundingClientRect(); av.classList.add('jump'); }
}
function choose(oi) {
  var q = QUESTIONS[state.cur];
  var rec = state.res[state.cur] || (state.res[state.cur] = { tries: 0, wrong: [], done: false });
  if (rec.done) return;
  rec.tries += 1;
  if (oi === q.answer) {
    rec.done = true; rec.status = 'correct';
    rec.points = rec.tries === 1 ? POINTS.first : POINTS.second;
    rec.phrase = pickPhrase(rec.tries === 1 ? 'first' : 'second');
    state.points += rec.points;
    markOpt(oi, 'right'); lockOpts();
    $('#try-msg').textContent = '';
    updatePoints(true);
    refreshMap(state.cur);
    showAfter(rec, true);
    sfxCorrect(); showBurst(); confetti();
    setTimeout(function () { speak('إجابة صحيحة'); }, 450);
    scrollAfter();
  } else {
    rec.wrong.push(oi);
    markOpt(oi, 'wrong');
    if (rec.tries >= 2) {
      rec.done = true; rec.status = 'missed'; rec.points = 0; rec.phrase = pickPhrase('missed');
      markOpt(q.answer, 'right'); lockOpts();
      $('#try-msg').textContent = '';
      refreshMap();
      showAfter(rec, false);
      sfxWrong();
      scrollAfter();
    } else {
      $('#try-msg').textContent = 'ليست الإجابة الصحيحة. فكّر مرة أخرى، فلديك محاولة ثانية بنصف النقاط.';
      sfxWrong();
    }
  }
}
function scrollAfter() {
  var a = $('#after');
  setTimeout(function () { try { a.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'nearest' }); } catch (e) {} }, 250);
}
function nextCircle() {
  if (doneCount() >= QUESTIONS.length) { finish(); return; }
  for (var step = 1; step <= QUESTIONS.length; step++) {
    var i = (state.cur + step) % QUESTIONS.length;
    if (!(state.res[i] && state.res[i].done)) { openQ(i); return; }
  }
  finish();
}
$('#btn-next').addEventListener('click', nextCircle);
$('#btn-finish-now').addEventListener('click', finish);
$('#btn-finish-early').addEventListener('click', finish);

/* ===== result ===== */
function finish() {
  stopTimer();
  var list = loadBoard().slice();
  if (!state.recordId) {
    state.recordId = Date.now() + '-' + Math.floor(Math.random() * 1000);
    list.push({ id: state.recordId, name: state.user.name, grade: state.user.grade, school: state.user.school, points: state.points, t: Date.now() });
    saveBoard(list);
  }
  var max = QUESTIONS.length * POINTS.first;
  var card = $('#result-card'); card.textContent = '';
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  card.appendChild(el('div', 'of', 'نتيجتك'));
  card.appendChild(el('div', 'num', ar(state.points)));
  card.appendChild(el('div', 'of', 'من ' + ar(max) + ' نقطة'));
  card.appendChild(el('div', 'level', levelFor(state.points)));
  var who = el('div', 'who', state.user.name);
  who.appendChild(el('small', null, state.user.grade + ' - ' + state.user.school));
  card.appendChild(who);
  card.appendChild(el('p', 'closing', 'أضأت ' + ar(litCount()) + ' من ' + ar(QUESTIONS.length) + ' دائرة. ' + closingFor(state.points)));
  var mini = el('div', 'mini');
  QUESTIONS.forEach(function (q, i) {
    var r = state.res[i], d = document.createElement('i');
    if (r && r.status === 'correct') d.className = 'ok'; else if (r && r.status === 'missed') d.className = 'miss';
    mini.appendChild(d);
  });
  card.appendChild(mini);
  renderBoard();
  show('screen-result');
  sfxFinish();
  if (litCount() > 0) confetti();
}
function renderBoard() {
  var list = loadBoard().slice().sort(function (a, b) { return b.points - a.points || a.t - b.t; }).slice(0, 10);
  var body = $('#board-body'); body.textContent = '';
  list.forEach(function (r, idx) {
    var tr = document.createElement('tr');
    if (r.id === state.recordId) tr.className = 'me';
    [ar(idx + 1), r.name, r.grade, r.school, ar(r.points)].forEach(function (v, c) {
      var td = document.createElement('td');
      if (c === 0) td.className = 'rank';
      if (c === 4) td.className = 'pts';
      td.textContent = v; tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}
$('#btn-new').addEventListener('click', function () {
  ['#f-name', '#f-grade', '#f-school'].forEach(function (s) { $(s).value = ''; });
  var picked = document.querySelector('input[name="char"]:checked'); if (picked) picked.checked = false;
  $('#clear-confirm').hidden = true;
  $('#time-chip').textContent = fmt(TOTAL_SECONDS); $('#time-chip').classList.remove('done');
  show('screen-reg');
  $('#f-name').focus();
});
$('#btn-clear').addEventListener('click', function () { $('#clear-confirm').hidden = false; });
$('#btn-clear-no').addEventListener('click', function () { $('#clear-confirm').hidden = true; });
$('#btn-clear-yes').addEventListener('click', function () {
  saveBoard([]); state.recordId = null; renderBoard(); $('#clear-confirm').hidden = true;
});

show('screen-reg');
