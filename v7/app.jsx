/* eslint-disable */
const { useState, useEffect, useMemo } = React;

/* ============================================================
   ICONS — small inline glyphs (line, neutral, no AI slop)
   ============================================================ */
const Ico = {
  Move: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4M8 4l4-2 4 2M8 20l4 2 4-2"/></svg>
  ),
  Joint: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/></svg>
  ),
  Leaf: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 9 7 5 14 4c4-1 6 1 6 5 0 6-4 11-9 11Z"/><path d="M4 21c1-5 4-8 9-9"/></svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10Z"/></svg>
  ),
  Spark: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
  ),
  Drop: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s7 8 7 12a7 7 0 1 1-14 0c0-4 7-12 7-12Z"/></svg>
  ),
  Arrow: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  ),
  Pill: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="9" width="18" height="6" rx="3"/><path d="M12 9v6"/></svg>
  ),
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
  ),
};

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="nav__brand-mark">A</span>
        <span>artro <em style={{fontStyle:'italic', color:'var(--leaf)'}}>vita</em></span>
      </div>
      <div className="nav__links">
        <a href="#benefits">Ползи</a>
        <a href="#ingredients">Състав</a>
        <a href="#dosage">Прием</a>
        <a href="#pharmacies">Аптеки</a>
        <a href="#contact">Контакт</a>
      </div>
      <a href="#buy" className="nav__cta">
        Купи · 24,90 лв <Ico.Arrow/>
      </a>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ showStrip = true }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero__inner">
        <div>
          <div className="hero__kicker">
            <span className="hero__kicker-dot"><Ico.Check/></span>
            Хранителна добавка · 60 капсули
          </div>
          <h1 className="hero__title">
            Стави, които<br/>
            <em>помнят</em> как е<br/>
            било преди.
          </h1>
          <p className="hero__lede">
            Артро Вита подпомага поддържането на нормалното състояние
            на ставите, хрущялите и съединителната тъкан — за подвижност
            и комфорт при движение, ден след ден.
          </p>
          <div className="hero__ctas">
            <a href="#buy" className="btn btn--primary">
              Купи сега <span className="price">24,90 лв</span>
            </a>
            <a href="#ingredients" className="btn btn--ghost">
              Виж състава <Ico.Arrow/>
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <strong>4</strong>
              активни съставки
            </div>
            <div className="hero__meta-item">
              <strong>60</strong>
              капсули · 30 дни
            </div>
            <div className="hero__meta-item">
              <strong>2×</strong>
              дневен прием
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__visual-label">▣ product shot</span>
          <image-slot id="hero-product" shape="rounded" radius="28" placeholder="Снимка на продукта (бурканче / капсули)"></image-slot>
          <div className="hero__visual-tag">
            <span>Произведено в България · ЕС регламент 1169/2011</span>
          </div>
        </div>
      </div>

      {showStrip && <div className="hero__strip">
        <div className="hero__strip-item">
          <span className="ico"><Ico.Joint/></span>
          <div>
            <h4>Глюкозамин 740 mg</h4>
            <p>За хрущяла и съединителната тъкан</p>
          </div>
        </div>
        <div className="hero__strip-item">
          <span className="ico"><Ico.Drop/></span>
          <div>
            <h4>Хондроитин 400 mg</h4>
            <p>Подпомага еластичността</p>
          </div>
        </div>
        <div className="hero__strip-item">
          <span className="ico"><Ico.Spark/></span>
          <div>
            <h4>MSM 200 mg</h4>
            <p>Сяра във форма, която тялото знае</p>
          </div>
        </div>
        <div className="hero__strip-item">
          <span className="ico"><Ico.Leaf/></span>
          <div>
            <h4>Босвелия 100 mg</h4>
            <p>Растителен екстракт, 65% AKBA</p>
          </div>
        </div>
      </div>}
    </section>
  );
}

/* ============================================================
   BENEFITS
   ============================================================ */
function Benefits() {
  const items = [
    { n: '01', t: 'Подвижност', b: 'Подпомага комфортното движение в коляното, рамото и тазобедрената става — там, където скованост напомня за себе си най-често.', ico: <Ico.Move/>, accent: true },
    { n: '02', t: 'Хрущял', b: 'Активните съставки участват в естествената поддръжка на хрущялната тъкан и нейната еластичност при ежедневно натоварване.', ico: <Ico.Joint/> },
    { n: '03', t: 'Тъкан', b: 'За съединителната тъкан около ставите — сухожилия, връзки и капсули, които държат всичко на мястото му.', ico: <Ico.Shield/> },
    { n: '04', t: 'Растителна сила', b: 'Босвелия серата, използвана от векове в традиционните практики, стандартизирана до 65% AKBA.', ico: <Ico.Leaf/> },
  ];
  return (
    <section className="section" id="benefits" data-screen-label="02 Benefits">
      <div className="container">
        <div className="benefits__head">
          <div>
            <span className="eyebrow">Ползи</span>
            <h2 style={{marginTop: 16}}>
              За тяло, което <em>иска</em> да продължи<br/>
              да се движи.
            </h2>
          </div>
          <p>
            Артро Вита е разработена с цел поддържане на нормалното състояние на
            ставите при възрастни — като част от здравословния начин на живот и
            балансирано хранене.
          </p>
        </div>

        <div className="benefits__grid">
          {items.map((it, i) => (
            <div key={i} className={'benefit ' + (it.accent ? 'benefit--accent' : '')}>
              <div className="benefit__num">{it.n} — Полза</div>
              <span className="benefit__ico">{it.ico}</span>
              <h3 className="benefit__title">{it.t}</h3>
              <p className="benefit__body">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INGREDIENTS
   ============================================================ */
function Ingredients() {
  const rows = [
    { n: '01', name: 'Глюкозамин сулфат', latin: 'Glucosamine sulfate', desc: 'Аминозахар, който участва в естественото изграждане на хрущяла и съединителната тъкан.', d1: '370', d2: '740' },
    { n: '02', name: 'Хондроитин сулфат', latin: 'Chondroitin sulfate', desc: 'Полизахарид, който се намира в хрущяла. Подпомага задържането на вода и еластичност.', d1: '200', d2: '400' },
    { n: '03', name: 'MSM', latin: 'Methylsulfonylmethane', desc: 'Органичен източник на сяра. Сярата участва в редица процеси в съединителната тъкан.', d1: '100', d2: '200' },
    { n: '04', name: 'Босвелия серата', latin: 'Boswellia serrata, 65% AKBA', desc: 'Растителен екстракт, използван в традиционната практика. Стандартизиран до 65% AKBA.', d1: '50', d2: '100' },
  ];
  return (
    <section className="section ingredients" id="ingredients" data-screen-label="03 Ingredients">
      <div className="container">
        <div className="ingredients__head">
          <div>
            <span className="eyebrow">Активни съставки</span>
            <h2 style={{marginTop: 16}}>
              Четири съставки.<br/>
              Една <em>задача</em>.
            </h2>
          </div>
          <p className="note">
            Дозите по-долу са изчислени за препоръчителния дневен прием от
            две капсули. ХРС — хранителни референтни стойности съгласно
            регламент 1169/2011.
          </p>
        </div>

        <div className="ing-table">
          {rows.map((r) => (
            <div key={r.n} className="ing-row">
              <div className="ing-row__num">{r.n}</div>
              <div className="ing-row__name">
                {r.name}
                <small>{r.latin}</small>
              </div>
              <div className="ing-row__desc">{r.desc}</div>
              <div className="ing-row__dose">
                <small>1 капсула</small>
                {r.d1} mg
              </div>
              <div className="ing-row__dose">
                <small>Дневна доза</small>
                {r.d2} mg
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DOSAGE
   ============================================================ */
function Dosage() {
  return (
    <section className="section dosage" id="dosage" data-screen-label="04 Dosage">
      <div className="container">
        <div className="dosage__inner">
          <div className="dosage__visual">
            <div className="corner"><Ico.Pill/></div>
            <image-slot id="dosage-product" shape="rounded" radius="28" placeholder="Капсула отблизо или ритуал-настроение"></image-slot>
          </div>
          <div>
            <span className="eyebrow">Как се приема</span>
            <h2 style={{marginTop: 16}}>
              Две капсули.<br/>
              Един <em>навик</em>.
            </h2>
            <p className="dosage__lede">
              Приемай по две капсули дневно с чаша вода. Курсът обикновено е
              30 дни — една опаковка. За по-устойчив ефект може да се повтаря
              периодично.
            </p>

            <div className="steps">
              <div className="step">
                <div className="step__num">1</div>
                <div className="step__body">
                  <h4>Сутрин — с първата вода</h4>
                  <p>1 капсула с пълна чаша вода, преди или с първото хранене.</p>
                </div>
                <div className="step__tag">07:00 — 09:00</div>
              </div>
              <div className="step">
                <div className="step__num">2</div>
                <div className="step__body">
                  <h4>Вечер — преди сън</h4>
                  <p>Втората капсула с лека вечеря или един час преди лягане.</p>
                </div>
                <div className="step__tag">19:00 — 22:00</div>
              </div>
              <div className="step">
                <div className="step__num">3</div>
                <div className="step__body">
                  <h4>30 дни — една опаковка</h4>
                  <p>Един пълен цикъл. След това оцени как се чувстваш.</p>
                </div>
                <div className="step__tag"><Ico.Clock/></div>
              </div>
            </div>

            <div className="callout">
              <span className="callout__ico"><Ico.Shield/></span>
              <div>
                Продуктът не е заместител на разнообразно и балансирано хранене.
                Не превишавай препоръчителната дневна доза. Съхранявай на сухо,
                под 25°C.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BUY
   ============================================================ */
function Buy() {
  const [qty, setQty] = useState(1);
  const price = 24.90;
  const oldPrice = 29.90;
  return (
    <section className="buy" id="buy" data-screen-label="05 Buy">
      <div className="buy__card">
        <div>
          <span className="eyebrow" style={{color:'currentColor', opacity:0.6}}>Поръчай</span>
          <h2 style={{marginTop:16}}>
            Доставка за <em>2 дни</em><br/>
            до твоята врата.
          </h2>
          <p className="buy__lede">
            Една опаковка съдържа 60 капсули — пълен 30-дневен курс.
            Поръчките над 50 лв. са с безплатна доставка.
          </p>
          <div style={{marginTop:32, display:'flex', gap:32, fontSize:13, opacity:0.7}}>
            <div>✓ Безплатна доставка над 50 лв</div>
            <div>✓ Плащане при доставка</div>
            <div>✓ Връщане до 14 дни</div>
          </div>
        </div>

        <div className="buy__pricecard">
          <div className="buy__pricerow">
            <span className="label">Артро Вита · 60 капсули</span>
            <span className="val">
              <span className="strike">{oldPrice.toFixed(2)}</span>
              {(price * qty).toFixed(2)} лв
            </span>
          </div>
          <div className="buy__pricerow" style={{display:'flex', alignItems:'center'}}>
            <span className="label">Количество</span>
            <div style={{display:'flex', alignItems:'center', gap:14, border:'1px solid currentColor', borderRadius:10, padding:'2px 4px', opacity:0.85}}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{padding:'4px 12px', fontSize:18}}>−</button>
              <span style={{fontFamily:'var(--mono)', fontVariantNumeric:'tabular-nums', minWidth:18, textAlign:'center'}}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{padding:'4px 12px', fontSize:18}}>+</button>
            </div>
          </div>
          <div className="buy__shipping">
            <div>Очаквана доставка: 16 — 18 май</div>
            <div>Спестяваш {((oldPrice - price) * qty).toFixed(2)} лв при тази поръчка</div>
          </div>
          <button className="btn btn--primary buy__cta">
            Добави в количка · {(price * qty).toFixed(2)} лв <Ico.Arrow/>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PHARMACIES
   ============================================================ */
function Pharmacies() {
  const [q, setQ] = useState('');
  const items = [
    { brand: 'Аптека Марешки', addr: 'София, бул. Витоша 28', stock: 'В наличност', low: false },
    { brand: 'Аптеки SCS', addr: 'Пловдив, ул. Княз Александър 14', stock: 'В наличност', low: false },
    { brand: 'Subra Pharmacy', addr: 'Варна, бул. Сливница 122', stock: 'Малко количество', low: true },
    { brand: 'Аптека 36.6', addr: 'Бургас, ул. Богориди 7', stock: 'В наличност', low: false },
    { brand: 'Sopharmacy', addr: 'Русе, ул. Александровска 75', stock: 'В наличност', low: false },
    { brand: 'Аптека Феникс', addr: 'Стара Загора, ул. Цар Симеон 102', stock: 'Малко количество', low: true },
  ];
  const filtered = items.filter(i =>
    i.brand.toLowerCase().includes(q.toLowerCase()) ||
    i.addr.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <section className="section pharm" id="pharmacies" data-screen-label="06 Pharmacies">
      <div className="container">
        <div className="pharm__head">
          <div>
            <span className="eyebrow">Къде да купя</span>
            <h2 style={{marginTop:16}}>
              В <em>аптека</em>, до теб.
            </h2>
          </div>
          <div className="pharm__filter">
            <input
              type="text"
              placeholder="Търси по град или верига…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className="pharm__grid">
          {filtered.map((p, i) => (
            <div key={i} className="pharm-card">
              <h3 className="pharm-card__brand">{p.brand}</h3>
              <p className="pharm-card__addr">{p.addr}</p>
              <div className="pharm-card__bottom">
                <span className={'pharm-card__stock ' + (p.low ? 'low' : '')}>{p.stock}</span>
                <span className="pharm-card__arrow"><Ico.Arrow/></span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="pharm-card" style={{gridColumn:'1 / -1', textAlign:'center', minHeight:80, justifyContent:'center'}}>
              <p className="pharm-card__addr">Няма резултати за „{q}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT + FOOTER
   ============================================================ */
function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="07 Contact">
      <div className="contact__inner">
        <div className="contact__lead">
          <span className="eyebrow">Контакт</span>
          <h2 style={{marginTop:16}}>
            Имаш <em>въпрос</em>?<br/>
            Пиши ни.
          </h2>
          <p>
            Ще получиш отговор от наш специалист в рамките на работен ден.
            Без чакане и без автоматични отговори.
          </p>
          <form className="contact__form" onSubmit={e => { e.preventDefault(); alert('Благодарим! Ще се свържем скоро.'); }}>
            <input type="email" placeholder="email@адрес.bg" required/>
            <button type="submit">Изпрати</button>
          </form>
        </div>

        <div className="contact__col">
          <h5>Произведено от</h5>
          <p>
            „ОМЕГА ВИТА" ЕООД<br/>
            гр. Дупница<br/>
            ул. Джерман 2
          </p>
        </div>
        <div className="contact__col">
          <h5>За</h5>
          <p>
            „ПРАЙМ ХЕЛТ СОЛЮШЪН" ООД<br/>
            Враца, ж.к. Дъбника<br/>
            бл. 41, вх. В, ап. 46
          </p>
        </div>
        <div className="contact__col">
          <h5>Връзка</h5>
          <ul>
            <li><a href="tel:+359800000000">+359 800 000 000</a></li>
            <li><a href="mailto:info@artrovita.bg">info@artrovita.bg</a></li>
            <li><a href="#">Често задавани въпроси</a></li>
            <li><a href="#">Политика за поверителност</a></li>
          </ul>
        </div>
      </div>

      <div className="foot">
        <div>© 2026 Артро Вита · Хранителна добавка</div>
        <div className="foot__legal">
          <span>Регламент 1169/2011</span>
          <span>Партиден № T062610863</span>
          <span>Срок: виж маркировката</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TWEAKS
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "apothecary",
  "layout": "editorial",
  "showStrip": true,
  "showPharmacies": true
}/*EDITMODE-END*/;

function ArtroTweaks({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Палитра"/>
      <TweakRadio
        label="Тема"
        value={t.theme}
        onChange={v => setTweak('theme', v)}
        options={[
          { value: 'apothecary', label: 'Аптечна' },
          { value: 'forest', label: 'Гора' },
          { value: 'navy', label: 'Нощ' },
        ]}
      />
      <TweakSection label="Layout посока"/>
      <TweakRadio
        label="Подход"
        value={t.layout}
        onChange={v => setTweak('layout', v)}
        options={[
          { value: 'editorial', label: 'Editorial' },
          { value: 'catalog', label: 'Catalog' },
          { value: 'statement', label: 'Statement' },
        ]}
      />
      <TweakSection label="Секции"/>
      <TweakToggle label="Hero лента съставки" value={t.showStrip} onChange={v => setTweak('showStrip', v)}/>
      <TweakToggle label="Списък аптеки" value={t.showPharmacies} onChange={v => setTweak('showPharmacies', v)}/>
    </TweaksPanel>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
    document.documentElement.setAttribute('data-layout', t.layout);
  }, [t.theme, t.layout]);

  return (
    <>
      <Nav/>
      <Hero showStrip={t.showStrip}/>
      <Benefits/>
      <Ingredients/>
      <Dosage/>
      <Buy/>
      {t.showPharmacies && <Pharmacies/>}
      <Contact/>
      <ArtroTweaks t={t} setTweak={setTweak}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
