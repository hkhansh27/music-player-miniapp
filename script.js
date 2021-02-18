const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PlAYER_STORAGE_KEY = "MUSIC_PLAYER";
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Vỡ",
      singer: "Đức Phúc",
      path: "./audio/Vo-Sieu-Sao-Sieu-Ngo-OST-Duc-Phuc.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/3/d3af5475826bb5d68edbdcf735953f58_1516948965.jpg",
    },
    {
      name: "Cô Gái Ngày Hôm Qua",
      singer: "Miu Lê",
      path: "./audio/Co-Gai-Ngay-Hom-Qua-Co-Gai-Den-Tu-Hom-Qua-OST-Miu-Le.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/3/d393dbcf1b9783afb01e6d3ecf6b70b4_1500279366.jpg",
    },
    {
      name: "Yêu Đi Đừng Sợ",
      singer: "OnlyC",
      path: "./audio/Yeu-Di-Dung-So-Yeu-Di-Dung-So-OST-OnlyC.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1503053668.jpg",
    },
    {
      name: "Where Do We Go",
      singer: "Thanh Bùi",
      path: "./audio/Where-Do-We-Go-Thanh-Bui-Tata-Young.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/c/4/c48ec1cd23466969ccbad840c35312b0_1341809926.jpg",
    },
    {
      name: "Mẹ Yêu Ơi ",
      singer: "Gia Khiêm",
      path: "./audio/Me-Yeu-Oi-Gia-Khiem.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/5/c5ff18b0aca5e6022e14fe86c9c7a089_1505793041.jpg",
    },
    {
      name: "Gia Đình Nhỏ, Hạnh Phúc To",
      singer: "Nhật Tinh Anh, Khánh Ngọc, Bé Triệu Vy",
      path:
        "./audio/Gia-Dinh-Nho-Hanh-Phuc-To-Nhat-Tinh-Anh-Khanh-Ngoc-Be-Trieu-Vy.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/5/15fb9440cfa7e94cb0d1f8c248dde713_1315291996.jpg",
    },
    {
      name: "Vỡ",
      singer: "Đức Phúc",
      path: "./audio/Vo-Sieu-Sao-Sieu-Ngo-OST-Duc-Phuc.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/3/d3af5475826bb5d68edbdcf735953f58_1516948965.jpg",
    },
    {
      name: "Cô Gái Ngày Hôm Qua",
      singer: "Miu Lê",
      path: "./audio/Co-Gai-Ngay-Hom-Qua-Co-Gai-Den-Tu-Hom-Qua-OST-Miu-Le.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/3/d393dbcf1b9783afb01e6d3ecf6b70b4_1500279366.jpg",
    },
    {
      name: "Yêu Đi Đừng Sợ",
      singer: "OnlyC",
      path: "./audio/Yeu-Di-Dung-So-Yeu-Di-Dung-So-OST-OnlyC.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1503053668.jpg",
    },
    {
      name: "Where Do We Go",
      singer: "Thanh Bùi",
      path: "./audio/Where-Do-We-Go-Thanh-Bui-Tata-Young.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/c/4/c48ec1cd23466969ccbad840c35312b0_1341809926.jpg",
    },
    {
      name: "Mẹ Yêu Ơi ",
      singer: "Gia Khiêm",
      path: "./audio/Me-Yeu-Oi-Gia-Khiem.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/5/c5ff18b0aca5e6022e14fe86c9c7a089_1505793041.jpg",
    },
    {
      name: "Gia Đình Nhỏ, Hạnh Phúc To",
      singer: "Nhật Tinh Anh, Khánh Ngọc, Bé Triệu Vy",
      path:
        "./audio/Gia-Dinh-Nho-Hanh-Phuc-To-Nhat-Tinh-Anh-Khanh-Ngoc-Be-Trieu-Vy.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/5/15fb9440cfa7e94cb0d1f8c248dde713_1315291996.jpg",
    },
  ],
  setConfig(key, value) {
    this.config[key] = value;
    localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render() {
    const htmls = this.songs.map(
      (song, index) =>
        `<div class="song ${
          index === this.currentIndex ? "active" : ""
        }" data-index = ${index}>
  <div class="thumb" style="background-image: url('${song.image}')"></div>
    <div class="body">
      <h3 class="title">${song.name}</h3>
      <p class="author">${song.singer}</p>
    </div>
  <div class="option">
  <i class="fas fa-ellipsis-h"></i>
  </div>
</div>`
    );
    playlist.innerHTML = htmls.join("");
  },
  defineProperties() {
    Object.defineProperty(this, "currentSong", {
      get() {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents() {
    //zoom out and dim when scrollTop
    const _this = this;
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      // console.log(window.scrollY); same
      // console.log(document.documentElement.scrollTop); same
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const newCdWidth = cdWidth - scrollTop >= 0 ? cdWidth - scrollTop : 0;
      cd.style.width = newCdWidth + "px";
      cd.style.opacity = newCdWidth / cdWidth;
    };
    //CD rotate
    const cdThumbAnimate = cdThumb.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    cdThumbAnimate.pause();
    //when click on play/pause button
    playBtn.onclick = function () {
      _this.isPlaying ? audio.pause() : audio.play();
    };
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    //progress range
    audio.ontimeupdate = function () {
      if (audio.duration) {
        let audioPercent = Math.floor(
          (audio.currentTime * 100) / audio.duration
        );
        progress.value = audioPercent;
      }
    };
    //seeking song
    progress.onchange = function (e) {
      const seekTime = (audio.duration * e.target.value) / 100;
      audio.currentTime = seekTime;
    };
    //when click next/prev button
    nextBtn.onclick = function () {
      _this.isRandom ? _this.randomSong() : _this.nextSong();
      audio.play();
      _this.render(); // 👎
      _this.scrollToActiveSong();
    };
    prevBtn.onclick = function () {
      _this.isRandom ? _this.randomSong() : _this.prevSong();
      audio.play();
      _this.render(); // 👎
      _this.scrollToActiveSong();
    };
    //when click random/repeat button
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      // _this.isRandom
      //   ? randomBtn.classList.add("active")
      //   : randomBtn.classList.remove("active");
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    //handle next song when ended one
    audio.onended = function () {
      _this.isRepeat ? _this.repeatSong() : nextBtn.click();
    };
    //when click to song in playlist
    playlist.onclick = function (e) {
      const closestSong = e.target.closest(".song:not(.active)");
      const closestOption = e.target.closest(".option");
      if (closestSong || closestOption) {
        if (closestSong) {
          // console.log(closestSong.getAttribute("data-index"));
          // console.log(typeof closestSong.getAttribute("data-index"));
          // console.log(typeof closestSong.dataset.index);
          _this.currentIndex = Number(closestSong.dataset.index); // same
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }
        if (closestOption) {
        }
      }
    };
  },
  loadCurrentSong() {
    heading.textContent = this.currentSong.name;
    cdThumb.style.background = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
  },
  loadConfig() {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
    // Object.assign(this, this.config);
  },
  nextSong() {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  repeatSong() {
    audio.play();
  },
  scrollToActiveSong() {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "end", //vertical
      });
    }, 500);
  },
  start() {
    this.loadConfig();
    this.defineProperties();
    this.handleEvents();
    this.loadCurrentSong();
    this.render();
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  },
};
app.start();
