/* Bilingual news content and rendering. Add future stories to the array below. */
(() => {
  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  if (["ko", "en"].includes(requestedLanguage)) {
    try { localStorage.setItem("crecs-language", requestedLanguage); } catch { /* Language switching also works without storage. */ }
  }
  const copy = {
    ko: {
      nav: "소식", kicker: "LATEST FROM CReCS", heading: "최근 소식", all: "전체 소식 보기",
      read: "자세히 보기",
      archiveKicker: "NEWS & UPDATES", archiveTitle: "연구실 소식",
      archiveIntro: "학회 발표, 현장 조사와 연구실의 새로운 이야기를 전합니다.",
      archiveCount: "전체 소식", back: "소식 목록으로", related: "다른 소식", home: "홈으로",
    },
    en: {
      nav: "News", kicker: "LATEST FROM CReCS", heading: "Latest news", all: "View all news",
      read: "Read story",
      archiveKicker: "NEWS & UPDATES", archiveTitle: "News from CReCS",
      archiveIntro: "Conferences, fieldwork, and everyday discoveries from our lab.",
      archiveCount: "All stories", back: "Back to news", related: "More from the lab", home: "Back to home",
    },
  };
  const stories = [
    {
      id: "conference", date: "2026-10-15", image: "assets/news-20261015-joint-workshop.jpg",
      width: 1600, height: 900, category: {ko: "학술교류", en: "ACADEMIC EXCHANGE"},
      ko: {
        title: "한국·일본·대만 연안 기후변화 공동 워크숍 참가",
        summary: "2026년 10월 15–16일 부산 부경대학교에서 열린 「2026 한국·일본·대만 연안 기후변화 공동 워크숍」에 참가하여, 세 나라 연구자들과 관련 연구 동향을 공유하고 학술교류를 진행했습니다.",
        body: [],
        caption: "2026 한국·일본·대만 연안 기후변화 공동 워크숍 참가자 단체사진.",
      },
      en: {
        title: "Participation in the Korea–Japan–Taiwan Joint Workshop",
        homeSummary: "Junbeom Jo participated in the 2026 Korea · Japan · Taiwan Joint Workshop for Coastal Climate Change, held at Pukyong National University in Busan, Korea, on October 15–16, 2026.",
        summary: "Junbeom Jo participated in the 2026 Korea · Japan · Taiwan Joint Workshop for Coastal Climate Change, held at Pukyong National University in Busan, Korea, on October 15–16, 2026.\nResearchers from the three countries shared recent research and strengthened academic exchange.",
        body: [],
        caption: "Participants of the 2026 Korea · Japan · Taiwan Joint Workshop for Coastal Climate Change.",
      },
    },
  ];
  stories.sort((a, b) => b.date.localeCompare(a.date));

  const isHome = document.body.dataset.page === "home";
  document.querySelectorAll(".desktop-nav, .mobile-nav").forEach((nav) => {
    const link = document.createElement("a");
    link.href = "news.html";
    link.dataset.newsI18n = "nav";
    link.textContent = "News";
    if (isHome) link.dataset.section = "news";
    if (document.body.dataset.page === "news") {
      link.className = "is-active";
      link.setAttribute("aria-current", "page");
    }
    const publicationsLink = nav.querySelector('[data-i18n="navPublications"]');
    if (publicationsLink) publicationsLink.after(link);
  });
  const footerNav = document.querySelector('.site-footer nav[aria-label="Footer navigation"]');
  if (footerNav) {
    const link = document.createElement("a");
    link.href = "news.html";
    link.dataset.newsI18n = "nav";
    footerNav.append(link);
  }

  function card(story, lang) {
    const text = story[lang];
    const summary = isHome && text.homeSummary ? text.homeSummary : text.summary;
    return `<article class="news-card"><a class="news-card-link" href="news.html?story=${story.id}">
      <div class="news-card-media"><img src="${story.image}" alt="${text.caption || text.title}" width="${story.width || 1200}" height="${story.height || 800}" loading="lazy"></div>
      <div class="news-card-content"><div class="news-card-meta"><span class="news-category">${story.category[lang]}</span><time datetime="${story.date}">${story.date.replaceAll("-", ".")}</time></div>
      <h3>${text.title}</h3><p>${summary}</p><span class="news-read">${copy[lang].read}<span aria-hidden="true">↗</span></span></div>
    </a></article>`;
  }

  function render() {
    const lang = document.documentElement.lang === "ko" ? "ko" : "en";
    const strings = copy[lang];
    document.querySelectorAll("[data-news-i18n]").forEach((el) => {
      el.textContent = strings[el.dataset.newsI18n] || el.textContent;
    });
    document.querySelectorAll("[data-news-grid]").forEach((grid) => {
      const limit = Number.parseInt(grid.dataset.newsLimit, 10);
      const visibleStories = limit > 0 ? stories.slice(0, limit) : stories;
      grid.dataset.count = String(visibleStories.length);
      grid.innerHTML = visibleStories.map((story) => card(story, lang)).join("");
    });
    document.querySelectorAll("[data-news-count]").forEach((element) => { element.textContent = String(stories.length); });
    if (document.body.dataset.page !== "news") return;
    const storyId = new URLSearchParams(location.search).get("story");
    const story = stories.find((item) => item.id === storyId);
    const archive = document.getElementById("news-archive");
    const detail = document.getElementById("news-story");
    archive.hidden = Boolean(story);
    detail.hidden = !story;
    document.title = `${story ? story[lang].title : strings.archiveTitle} | CReCS Lab`;
    if (!story) return;
    const paragraphs = (Array.isArray(story[lang].body) ? story[lang].body : [story[lang].body]).filter(Boolean);
    const relatedStories = stories.filter((item) => item.id !== story.id).slice(0, 2);
    detail.innerHTML = `<div class="section-inner news-story-inner">
      <a class="news-back-link" href="news.html"><span aria-hidden="true">←</span> ${strings.back}</a>
      <header class="news-story-header"><div class="news-card-meta"><span class="news-category">${story.category[lang]}</span><time datetime="${story.date}">${story.date.replaceAll("-", ".")}</time></div>
      <h1>${story[lang].title}</h1><p class="news-story-lead">${story[lang].summary}</p></header>
      <figure class="news-story-figure"><img src="${story.image}" alt="${story[lang].caption || story[lang].title}" width="${story.width || 1200}" height="${story.height || 800}">${story[lang].caption ? `<figcaption>${story[lang].caption}</figcaption>` : ""}</figure>
      ${paragraphs.length ? `<div class="news-story-body">${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>` : ""}
      ${relatedStories.length ? `<div class="news-more-heading"><h2>${strings.related}</h2></div><div class="news-grid news-grid-related">${relatedStories.map((item) => card(item, lang)).join("")}</div>` : ""}
    </div>`;
  }
  new MutationObserver(render).observe(document.documentElement, {attributes: true, attributeFilter: ["lang"]});
  render();
})();
