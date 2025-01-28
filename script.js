// AOSの初期化
  AOS.init({
    duration: 1000,
    once: true
});

// ハンバーガーメニューの制御
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
    }
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// モバイルメニューのリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// スクロールアニメーション
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

const scheduleData = {
    day1: [
        { time: "11:00", event: "吹奏楽部" },
        { time: "11:20", event: "オープニング" },
        { time: "11:35", event: "社交ダンス部" },
        { time: "11:55", event: "カラオケ大会 第1部" },
        { time: "13:15", event: "筋肉グランプリ" },
        { time: "14:25", event: "ミュージックサークル" },
        { time: "15:35", event: "Meio Collection 第1部" },
        { time: "16:15", event: "抽選会 第1部" },
        { time: "16:55", event: "Solseamery" },
        { time: "17:30", event: "名桜エイサー" },
        { time: "18:00", event: "ダンスコラボ（名護高 × 名桜 HIPHOP）" },
        { time: "18:40", event: "MIKKO" },
        { time: "18:50", event: "Leonald" },
        { time: "19:30", event: "YOSHIKI EZAKI" },
        { time: "19:50", event: "1日目閉会式" },
        { time: "20:00", event: "1日目終了" }
    ],
    day2: [
        { time: "11:00", event: "オープニング" },
        { time: "11:10", event: "吹奏楽部コラボ（三青中 × 名桜）" },
        { time: "11:50", event: "K-POPサークル" },
        { time: "12:25", event: "借りだせ！やんばるの森" },
        { time: "13:25", event: "カラオケ大会 第2部" },
        { time: "14:25", event: "Meio Collection 第2部" },
        { time: "15:15", event: "Y-1グランプリ結果発表" },
        { time: "15:35", event: "抽選会 第2部" },
        { time: "16:25", event: "ミュージックサークル" },
        { time: "17:05", event: "HIPHOPサークル" },
        { time: "17:30", event: "K-POPサークル" },
        { time: "17:55", event: "名桜エイサー" },
        { time: "18:45", event: "D-51" },
        { time: "19:40", event: "花火" },
        { time: "19:45", event: "フィナーレ・カチャーシー" },
        { time: "20:00", event: "第31回名桜大学祭終了" }
    ]
};

const setupScheduleTabs = () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const scheduleContent = document.querySelector('.schedule-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const day = parseInt(button.dataset.day, 10);
            updateSchedule(day);
        });
    });
};

const updateSchedule = (day) => {
    const events = day === 1 ? scheduleData.day1 : scheduleData.day2;
    const scheduleContent = document.querySelector('.schedule-content');
    scheduleContent.innerHTML = events.map(event => `
        <div class="schedule-item">
            <div class="time">${event.time}</div>
            <div class="event-name">${event.event}</div>
        </div>
    `).join('');
};

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    setupScheduleTabs();
    updateSchedule(1); // 初期表示は1日目
});