const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function calcPelmeniPlant({ Qsut, t, rpa, at, rtm, am, ay, as_, asp, rk }) {
  const Rtl = Qsut / (2 * t);
  const n_pa = Math.ceil(Rtl / rpa);
  const Rtl_t = (Rtl * at) / 100;
  const n_tm = Math.ceil(Rtl_t / rtm);
  const af = am + ay + as_ + asp;
  const Rtl_f = (Rtl * af) / 100;
  const n_k = Math.ceil(Rtl_f / rk);
  return { Rtl, n_pa, Rtl_t, n_tm, af, Rtl_f, n_k };
}

async function main() {
  console.log("\n=== Расчёт оборудования пельменного цеха ===\n");

  const inputs = [
    ["Суточная выработка Qсут (т)", "Qsut"],
    ["Продолжительность смены t (ч)", "t"],
    ["Производительность пельменного автомата рпа (т/ч)", "rpa"],
    ["Доля теста ат (%)", "at"],
    ["Производительность тестомеса ртм (т/ч)", "rtm"],
    ["Доля мяса ам (%)", "am"],
    ["Доля яиц ая (%)", "ay"],
    ["Доля соли ас (%)", "as_"],
    ["Доля специй асп (%)", "asp"],
    ["Производительность куттера рк (т/ч)", "rk"],
  ];

  const params = {};
  for (const [label, key] of inputs) {
    const raw = await ask(`  ${label}: `);
    params[key] = parseFloat(raw);
  }

  const r = calcPelmeniPlant(params);

  console.log("\n--- Промежуточные значения ---");
  console.log(`  Ртл   = ${r.Rtl.toFixed(4)} т/ч`);
  console.log(`  Ртл_т = ${r.Rtl_t.toFixed(4)} т/ч`);
  console.log(`  аф    = ${r.af.toFixed(2)} %`);
  console.log(`  Ртл_ф = ${r.Rtl_f.toFixed(4)} т/ч`);

  console.log("\n--- Результат ---");
  console.log(`  I.   Пельменных автоматов:    ${r.n_pa} шт.`);
  console.log(`  II.  Тестомесильных машин:    ${r.n_tm} шт.`);
  console.log(`  III. Куттеров:                ${r.n_k} шт.`);
  console.log("");

  rl.close();
}

main();
