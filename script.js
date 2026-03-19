function v(id) {
  return parseFloat(document.getElementById(id).value) || 0;
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

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const result = calcPelmeniPlant({
    Qsut: v("qsut"),
    t: v("t"),
    rpa: v("rpa"),
    at: v("at"),
    rtm: v("rtm"),
    am: v("am"),
    ay: v("ay"),
    as_: v("as_"),
    asp: v("asp"),
    rk: v("rk"),
  });

  document.getElementById("r-rtl").textContent = result.Rtl.toFixed(4);
  document.getElementById("r-npa").textContent = result.n_pa;
  document.getElementById("r-rtlt").textContent = result.Rtl_t.toFixed(4);
  document.getElementById("r-ntm").textContent = result.n_tm;
  document.getElementById("r-rtlf").textContent = result.Rtl_f.toFixed(4);
  document.getElementById("r-nk").textContent = result.n_k;
  document.getElementById("r-af").textContent = result.af.toFixed(2);

  document.getElementById("results").classList.remove("hidden");
});
