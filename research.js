/* Research page with language-specific figures preserved from the supplied slides. */
(() => {
  const assets = "assets/research/";
  const themes = [
    {
      id: "compound-flooding", image: "compound-inundation.webp",
      ko: {
        title: "복합침수 모델링", short: "복합침수 모델링",
        summary: "폭풍해일·파랑·강우·하수관 역류가 함께 작용하는 해안도시 침수를 재현하고 예측합니다.",
        lead: "여러 원인이 겹치는 해안도시 침수",
        description: "폭풍해일과 파랑, 집중호우, 하수관 역류는 서로 영향을 주며 해안도시의 침수를 일으킵니다. 이러한 과정을 결합한 수치모형으로 물이 어디로 유입되고, 얼마나 넓고 깊게 퍼지는지 분석합니다.",
        points: ["폭풍해일·파랑·조석과 강우·하수관 흐름의 결합", "월파·범람·역류 등 침수 경로별 영향 비교", "실제 지형을 반영한 침수 범위와 깊이 예측"],
        tags: ["결합모델", "도시침수", "하수관 역류"],
        captions: ["해안도시에서 침수를 일으키는 바닷물 유입, 강우 유출, 하수관 역류의 경로", "간사이공항의 원인별 침수와 복합침수 계산 결과"],
      },
      en: {
        title: "Compound Flood Modeling", short: "Compound Flood Modeling",
        summary: "We model coastal urban flooding driven by interacting storm surges, waves, rainfall, and sewer backflow.",
        lead: "Multiple pathways to coastal urban flooding",
        description: "Storm surges, waves, intense rainfall, and sewer backflow interact to inundate coastal cities. Coupled numerical models help us identify where water enters and predict how far and how deep it spreads.",
        points: ["Coupling surge, waves, and tides with rainfall and sewer flow", "Comparing the effects of overtopping, overflow, and backflow", "Predicting inundation extent and depth over real terrain"],
        tags: ["Coupled models", "Urban flooding", "Sewer backflow"],
        captions: ["Coastal flood pathways: seawater inflow, rainfall runoff, and sewer backflow", "Simulated individual flood mechanisms and compound inundation at Kansai International Airport"],
      },
      papers: [
        {title: "Coastal and pluvial compound flooding of surge, wave, tide, rainfall-runoff, sewer flow, and seawall failure at coastal urban areas", meta: "Journal of Hydrology · 2025", href: "https://doi.org/10.1016/j.jhydrol.2025.133698"},
        {title: "Combined storm surge and wave overtopping inundation based on fully coupled storm surge-wave-tide model", meta: "Coastal Engineering · 2024", href: "https://doi.org/10.1016/j.coastaleng.2023.104448"},
      ],
    },
    {
      id: "storm-surge", image: "surge-probability.webp",
      ko: {
        title: "폭풍해일 확률분석", short: "폭풍해일 확률분석",
        summary: "장기간 수치모의와 통계분석으로 드문 극한 폭풍해일의 규모와 발생확률을 추정합니다.",
        lead: "극한 폭풍해일의 규모 추정",
        description: "장기간의 수치모의 자료를 통계적으로 분석하여 한반도와 주변 해역의 극한 폭풍해일 높이를 추정합니다. 지역별 특성과 재현기간별 해일 규모를 비교하고 연안 방재계획에 필요한 기초자료를 마련합니다.",
        points: ["장기간 수치모의 자료의 극치 통계분석", "재현기간별 폭풍해일 높이와 지역별 특성 비교", "태풍 조건과 해안 지형에 따른 해일 반응 분석"],
        tags: ["극치분석", "재현기간", "연안 방재"],
        captions: ["한반도와 주변 해역의 100년 빈도 수위 분포 예시"],
        noteTitle: "100년 빈도란?", note: "매년 그 높이를 초과할 확률이 약 1%라는 뜻입니다. 100년에 한 번만 발생한다는 의미는 아닙니다.",
      },
      en: {
        title: "Probabilistic Storm Surge Analysis", short: "Storm Surge Analysis",
        summary: "We combine long-term numerical simulations and statistics to estimate the magnitude and probability of extreme storm surges.",
        lead: "Estimating rare, extreme storm surges",
        description: "We use statistical analysis of long-term simulations to estimate extreme surge heights around the Korean Peninsula and neighboring seas. Comparisons across regions and return periods provide a basis for coastal flood planning.",
        points: ["Extreme-value analysis of long-term simulation data", "Regional comparisons of surge heights across return periods", "Surge responses to typhoon conditions and coastal bathymetry"],
        tags: ["Extreme values", "Return periods", "Coastal planning"],
        captions: ["Example 100-year return water-level distribution around the Korean Peninsula and neighboring seas"],
        noteTitle: "What is a 100-year return level?", note: "It has an approximately 1% chance of being exceeded in any given year. It does not mean that an event occurs only once every 100 years.",
      },
      papers: [
        {title: "Statistical prediction of peak surge height from tropical cyclones under idealized coastal bathymetry", meta: "Coastal Engineering Journal · 2026", href: "https://doi.org/10.1080/21664250.2026.2630529"},
        {title: "Numerical study on tide-surge interaction and sequential surge oscillations in Tokyo Bay", meta: "Ocean Engineering · 2026", href: "https://doi.org/10.1016/j.oceaneng.2026.125439"},
      ],
    },
    {
      id: "climate-impacts", image: "climate-tide-flood.webp",
      ko: {
        title: "기후변화에 따른 침수영향", short: "기후변화와 연안 침수",
        summary: "태풍강도·해수면 상승·조석 조건의 변화가 침수 범위와 깊이에 미치는 영향을 분석합니다.",
        lead: "기후변화 요인별 침수영향 비교",
        description: "태풍강도, 해수면 상승, 높은 조위를 단계적으로 반영하여 각 요인이 침수에 미치는 영향을 분석합니다. 여러 조건이 함께 작용할 때 수위와 침수 범위·깊이가 어떻게 달라지는지 비교합니다.",
        points: ["현재 기후와 온난화 조건의 침수 비교", "해수면 상승과 천문조위의 추가 영향 분석", "방재시설 보강과 적응대책 검토를 위한 기초자료 제공"],
        tags: ["태풍 강도", "해수면 상승", "기후적응"],
        captions: ["도쿄만 사례의 조건별 최대 수위와 육지 침수심 비교. +4°C는 이 사례에서 사용한 온난화 시나리오입니다."],
        scenarios: ["현재 조건", "+4°C 미래", "+ 해수면 상승", "+ 천문조위"], rows: ["최대 수위 (m)", "육지 침수심 (m)"], swipe: "좌우로 넘겨 네 가지 조건을 비교해 보세요 →",
      },
      en: {
        title: "Climate Change Impacts on Coastal Flooding", short: "Climate Change Impacts",
        summary: "We assess how changes in typhoon intensity, sea level, and tidal conditions affect flood extent and depth.",
        lead: "Separating the contributions to future flooding",
        description: "We introduce changes in typhoon intensity, sea level, and tidal conditions step by step to examine their individual contributions. Combined scenarios show how these factors affect water levels, inundation extent, and flood depth.",
        points: ["Comparing present-climate and warming scenarios", "Assessing additional sea-level-rise and astronomical-tide effects", "Informing flood-defense upgrades and adaptation planning"],
        tags: ["Typhoon intensity", "Sea-level rise", "Adaptation"],
        captions: ["Maximum water levels and land inundation depths for a Tokyo Bay case study. +4°C denotes the warming scenario used in this example."],
        scenarios: ["Present", "+4°C warming", "+ Sea-level rise", "+ Astronomical tide"], rows: ["Maximum water level (m)", "Land flood depth (m)"], swipe: "Swipe to compare all four scenarios →",
      },
      papers: [
        {title: "Contributions of climate and background mean-water level changes to storm surge inundation and damage under Typhoon Faxai in Tokyo Bay", meta: "Scientific Reports · 2026", href: "publications.html#under-review", underReview: true},
      ],
    },
    {
      id: "coastal-risk", image: "risk-inundation.webp",
      ko: {
        title: "연안재해 위험평가", short: "연안재해 위험평가",
        summary: "태풍과 폭풍해일이 도시침수와 경제적 피해로 이어지는 과정을 평가합니다.",
        lead: "태풍에서 도시의 경제적 피해까지",
        description: "태풍 강도 변화가 폭풍해일과 침수에 미치는 영향을 분석하고, 침수로 인한 건물과 자산의 경제적 피해를 평가합니다.\n특히 수위와 침수 깊이가 임계 수준을 넘을 때 피해가 급격히 커지는 비선형적 관계를 살펴봅니다.",
        points: ["태풍·폭풍해일·침수·경제피해의 연계 분석", "침수 범위와 깊이를 이용한 자산 피해 평가", "피해 확대 과정을 고려한 연안 위험관리 근거 제공"],
        tags: ["연쇄 영향", "경제적 손실", "위험관리"],
        captions: ["태풍강도 변화가 폭풍해일, 도시침수, 경제적 피해로 이어지는 과정"],
        steps: ["태풍강도", "폭풍해일", "도시침수", "경제적 피해"],
        stepDetails: ["기압 저하·풍속 증가", "연안 수위 상승", "범위·깊이 증가", "건물·자산 손상"],
        graphTitle: "피해는 비선형적으로 커질 수 있습니다", graphNote: "개념도 · 특정 계산 결과를 나타내지 않습니다", xAxis: "태풍강도 증가", yAxis: "상대적 영향", legend: ["폭풍해일고", "침수 범위", "경제적 피해"],
      },
      en: {
        title: "Coastal Hazard Risk Assessment", short: "Coastal Risk Assessment",
        summary: "We evaluate how typhoons and storm surges lead to urban inundation and economic losses.",
        lead: "Connecting typhoons to economic losses",
        description: "We examine how changes in typhoon intensity affect storm surges and inundation, then evaluate damage to exposed buildings and assets. We focus on nonlinear amplification, where losses can rise sharply once water levels and flooding exceed critical thresholds.",
        points: ["Linking typhoon intensity, storm surge, flooding, and losses", "Assessing asset damage using inundation extent and depth", "Supporting coastal risk management through analysis of cascading impacts"],
        tags: ["Cascading impacts", "Economic losses", "Risk management"],
        captions: ["The pathway from typhoon intensity through storm surge and urban flooding to economic losses"],
        steps: ["Typhoon intensity", "Storm surge", "Urban flooding", "Economic losses"],
        stepDetails: ["Lower pressure, stronger winds", "Higher coastal water levels", "Greater extent and depth", "Damage to buildings and assets"],
        graphTitle: "Losses can increase nonlinearly", graphNote: "Conceptual illustration · not a simulation result", xAxis: "Increasing typhoon intensity", yAxis: "Relative impact", legend: ["Surge height", "Flood extent", "Economic losses"],
      },
      papers: [
        {title: "Cascading amplification of coastal flooding characteristics from typhoon intensity to economic losses in Tokyo Bay", meta: "Coastal Engineering Journal · 2026", href: "publications.html#under-review", underReview: true},
        {title: "Analysis of Flood Risk in Ulsan Metropolitan City, South Korea, Considering Urban Development and Changes in Weather Factors", meta: "Water · 2025", href: "https://doi.org/10.3390/w17192800"},
      ],
    },
  ];
  const copy = {
    ko: {
      kicker: "연구 분야", title: "연구 분야", intro: "복합침수의 발생 과정부터 극한 폭풍해일의 확률, 기후변화의 영향과 경제적 피해까지 네 가지 주제를 연결해 연구합니다.",
      read: "자세히 보기", all: "연구 분야 자세히 보기", related: "관련 논문", review: "심사 중", explore: "전체 연구성과 보기",
      methodsKicker: "OUR APPROACH", methodsTitle: "연구 방법",
      methods: [
        ["수치모델링", "연안과 도시의 물리 과정을 모형으로 재현하고, 여러 재해 요인의 상호작용을 분석합니다."],
        ["수리실험과 검증", "흐름과 배수 현상을 수리실험으로 살펴보고, 관측·실험 자료와 계산 결과를 비교합니다."],
        ["통계 분석과 위험 평가", "극한현상의 발생 확률과 자산 피해를 분석해 방재계획과 기후적응에 필요한 근거를 마련합니다."],
      ],
    },
    en: {
      kicker: "Our Research", title: "Our research", intro: "We connect four research themes: compound flood processes, extreme surge probabilities, climate change impacts, and economic losses.",
      read: "Explore theme", all: "Explore our research", related: "Related publications", review: "Under review", explore: "View all publications",
      methodsKicker: "OUR APPROACH", methodsTitle: "Methods connecting our research",
      methods: [
        ["Numerical modeling", "We simulate coastal and urban processes to examine interactions among multiple flood drivers."],
        ["Hydraulic experiments & validation", "We study flow and drainage in hydraulic experiments and compare simulations with observations and experimental data."],
        ["Statistics & risk assessment", "We estimate extreme-event probabilities and asset losses to inform flood planning and climate adaptation."],
      ],
    },
  };
  const escape = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const figureSizes = [[2660, 2888], [1380, 1240], [1676, 1400], [2712, 1318]];
  function visual(theme, text, lang) {
    const index = themes.indexOf(theme);
    const file = `${assets}theme-${index + 1}-en.webp?v=6`;
    const [width, height] = figureSizes[index];
    const label = lang === "ko" ? `${text.title} 그림 크게 보기` : `View ${text.title} figure at full size`;
    return `<figure class="research-original-figure"><a href="${file}" target="_blank" rel="noopener" aria-label="${escape(label)}"><img src="${file}" alt="${escape(text.title)}" width="${width}" height="${height}" loading="lazy" decoding="async"></a></figure>`;
  }
  let renderedLanguage;
  function render() {
    const lang = document.documentElement.lang === "ko" ? "ko" : "en";
    if (lang === renderedLanguage) return;
    renderedLanguage = lang;
    const ui = copy[lang];
    document.querySelectorAll("[data-research-i18n]").forEach(el => { el.textContent = ui[el.dataset.researchI18n]; });
    document.querySelectorAll("[data-research-subnav]").forEach(nav => {
      nav.innerHTML = themes.map((theme, i) => `<a href="#${theme.id}"><span>0${i + 1}</span><strong>${escape(theme[lang].short)}</strong></a>`).join("");
    });
    document.querySelectorAll("[data-research-details]").forEach(container => {
      container.innerHTML = themes.map((theme, i) => {
        const text = theme[lang];
        return `<section class="research-theme-section" id="${theme.id}" aria-labelledby="${theme.id}-title"><div class="section-inner">
          <header class="research-theme-heading"><span class="research-theme-number">0${i + 1}</span><h2 id="${theme.id}-title">${escape(text.title)}</h2></header>
          <div class="research-theme-layout"><div class="research-theme-text"><h3>${escape(text.lead)}</h3><p>${escape(text.description)}</p>
          <ul class="research-theme-points">${text.points.map(p => `<li>${escape(p)}</li>`).join("")}</ul>
          <div class="research-theme-tags">${text.tags.map(t => `<span>${escape(t)}</span>`).join("")}</div>
          <div class="research-related"><h3>${ui.related}</h3><div class="research-related-list">${theme.papers.map(p => `<a href="${p.href}"${p.href.startsWith("https:") ? ' target="_blank" rel="noreferrer"' : ""}><small>${escape(p.meta)}${p.underReview ? ` · ${ui.review}` : ""}</small><span>${escape(p.title)}<b aria-hidden="true">↗</b></span></a>`).join("")}</div></div></div>
          <div class="research-theme-visual">${visual(theme, text, lang)}</div></div></div></section>`;
      }).join("");
    });
    document.querySelectorAll("[data-research-methods]").forEach(container => {
      container.innerHTML = ui.methods.map(([title, text], i) => `<article><span>0${i + 1}</span><h3>${escape(title)}</h3><p>${escape(text)}</p></article>`).join("");
    });
  }
  document.addEventListener("crecs:languagechange", render);
  if (!document.documentElement.hasAttribute("data-language-pending")) render();
})();
