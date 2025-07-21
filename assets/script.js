// ==== DATA PRODUK MOBIL ====
const produkMobil = [
  {
    id: 1,
    nama: "Toyota Inova Reborn",
    gambar: "assets/inova.jpg",
    harga: 700000000,
    deskripsi: "Toyota Kijang Innova adalah pilihan MPV yang populer di Indonesia, dikenal karena kabinnya yang luas dan nyaman, cocok untuk keluarga besar. Mobil ini menawarkan berbagai pilihan mesin bensin dan diesel, serta transmisi manual dan otomatis, memberikan fleksibilitas bagi konsumen. Innova juga dilengkapi dengan fitur keselamatan modern dan desain eksterior yang premium, menjadikannya pilihan menarik di pasar MPV. "
  },
  {
    id: 2,
    nama: "Honda Civic Turbo",
    gambar: "assets/civic.jpg",
    harga: 750000000,
    deskripsi: "Honda Civic Turbo adalah sedan sporty yang memadukan performa tinggi dengan desain modern dan fitur-fitur canggih. Mesin 1.5L VTEC Turbo memberikan tenaga responsif, sementara eksteriornya yang aerodinamis dan interior yang mewah menawarkan pengalaman berkendara yang menyenangkan. Fitur-fitur keselamatan dan hiburan terkini juga melengkapi mobil ini, menjadikannya pilihan menarik bagi mereka yang mencari sedan modern dan berkelas. "
  },
  {
    id: 3,
    nama: "Toyota Kijang Kapsul",
    gambar: "assets/kijang-kapsul.jpg",
    harga: 80000000,
    deskripsi: "Toyota Kijang Kapsul adalah pilihan mobil keluarga yang populer di Indonesia, dikenal karena kabinnya yang luas, mesin yang andal, dan kemampuannya untuk menaklukkan berbagai medan jalan. Model ini menawarkan perpaduan antara kenyamanan, daya tahan, dan fungsionalitas, menjadikannya favorit di kalangan keluarga Indonesia. "
  },
  {
    id: 4,
    nama: "Mazda 3",
    gambar: "assets/mazda3.jpg",
    harga: 650000000,
    deskripsi: "Mazda3 adalah pilihan menarik di segmen mobil kompak dengan desain yang elegan dan performa yang dinamis. Tersedia dalam dua pilihan model, yaitu hatchback dan sedan, Mazda3 menawarkan pengalaman berkendara yang menyenangkan. Desainnya yang khas, yang disebut Single Motion, menonjolkan siluet yang dramatis dan ekspresif, terutama pada model hatchback yang terinspirasi dari konsep Mazda Kai. Selain tampilan yang menarik, Mazda3 juga menawarkan fitur-fitur canggih seperti mesin Skyactiv-G 2.0 liter, transmisi otomatis 6-percepatan, dan sistem G-Vectoring Control Plus (GVC Plus) yang meningkatkan pengendalian dan stabilitas. "
  },
  {
    id: 5,
    nama: "Toyota Fortuner",
    gambar: "assets/fortuner.jpg",
    harga: 780000000,
    deskripsi: "Toyota Fortuner adalah SUV tangguh yang menawarkan perpaduan desain gagah, interior luas, performa andal, dan fitur keselamatan canggih. Cocok untuk keluarga yang mencari kendaraan tangguh untuk berbagai kondisi jalan, baik perkotaan maupun medan berat. "
  },
  {
    id: 6,
    nama: "Toyota Land Cruiser",
    gambar: "assets/land-cruiser.jpg",
    harga: 1000000000,
    deskripsi: "Toyota Land Cruiser adalah SUV tangguh dan mewah yang dirancang untuk petualangan di segala medan. Mobil ini dikenal karena performa off-road yang unggul, interior yang luas dan nyaman, serta fitur keselamatan yang canggih. "
  },
  {
    id: 7,
    nama: "Toyota Avanza",
    gambar: "assets/avanza.jpg",
    harga: 100000000,
    deskripsi: "Toyota Avanza adalah mobil keluarga (LMPV) yang populer di Indonesia, sering disebut sebagai mobil sejuta umat karena kepraktisan, harga terjangkau, dan ketersediaan suku cadang yang mudah. Untuk keperluan pemasaran, Avanza bisa dideskripsikan sebagai kendaraan yang ideal untuk keluarga Indonesia, menawarkan ruang yang luas, efisiensi bahan bakar, dan biaya perawatan yang terjangkau. "
  },
  {
    id: 8,
    nama: "Toyota Rush",
    gambar: "assets/rush.jpg",
    harga: 150000000,
    deskripsi: "Toyota Rush adalah SUV keluarga yang tangguh dengan desain sporty dan modern. Mobil ini menawarkan kabin yang luas dengan 7 kursi penumpang, cocok untuk keluarga atau perjalanan bersama teman-teman. Rush juga dikenal dengan performa mesin yang bertenaga dan irit bahan bakar, serta fitur keselamatan yang lengkap. "
  },
  {
    id: 9,
    nama: "Toyota Yaris",
    gambar: "assets/toyota-yaris.jpg",
    harga: 50000000,
    deskripsi: "Toyota Yaris adalah pilihan hatchback yang sporty dan stylish, cocok untuk anak muda dan mereka yang berjiwa muda. Desainnya yang modern, fitur-fitur canggih, dan performa yang lincah membuatnya menjadi hatchback yang menarik. "
  }
];

// ==== TAMPILKAN PRODUK DI HALAMAN PRODUK ====
const containerProduk = document.getElementById("product-list");
if (containerProduk) {
  tampilkanProduk(produkMobil);
}

function tampilkanProduk(data) {
  containerProduk.innerHTML = "";
  data.forEach((mobil) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${mobil.gambar}" class="card-img-top" alt="${mobil.nama}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${mobil.nama}</h5>
          <p class="card-text text-danger fw-bold">Rp${mobil.harga.toLocaleString()}</p>
          <a href="detail.html?id=${mobil.id}" class="btn btn-outline-primary mt-auto">Lihat Detail</a>
        </div>
      </div>
    `;
    containerProduk.appendChild(col);
  });
}

// ==== PENCARIAN PRODUK ====
const formCari = document.getElementById("search-form");
const inputCari = document.getElementById("search-input");
const tombolClear = document.getElementById("clear-search");

if (formCari) {
  formCari.addEventListener("submit", function (e) {
    e.preventDefault();
    const keyword = inputCari.value.toLowerCase();
    const hasil = produkMobil.filter((mobil) =>
      mobil.nama.toLowerCase().includes(keyword)
    );
    tampilkanProduk(hasil);
  });

  if (tombolClear) {
    tombolClear.addEventListener("click", function () {
      inputCari.value = "";
      tampilkanProduk(produkMobil);
    });
  }
}

// ==== HALAMAN DETAIL MOBIL ====
const detailId = new URLSearchParams(window.location.search).get("id");
if (detailId) {
  const detailMobil = produkMobil.find((m) => m.id == detailId);
  if (detailMobil) {
    const elGambar = document.getElementById("detail-gambar");
    const elNama = document.getElementById("detail-nama");
    const elHarga = document.getElementById("detail-harga");
    const elDeskripsi = document.getElementById("detail-deskripsi");
    const btnTambah = document.getElementById("tambah-ke-keranjang");

    if (elGambar) elGambar.src = detailMobil.gambar;
    if (elNama) elNama.textContent = detailMobil.nama;
    if (elHarga) elHarga.textContent = `Rp${detailMobil.harga.toLocaleString()}`;
    if (elDeskripsi) elDeskripsi.textContent = detailMobil.deskripsi;

    if (btnTambah) {
      btnTambah.addEventListener("click", () => {
        tambahKeKeranjang(detailMobil);
        alert("Mobil berhasil ditambahkan ke keranjang!");
      });
    }
  }
}

// ==== TAMBAH KE KERANJANG ====
function tambahKeKeranjang(mobil) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const index = keranjang.findIndex((item) => item.id === mobil.id);

  if (index !== -1) {
    keranjang[index].jumlah += 1;
  } else {
    keranjang.push({ ...mobil, jumlah: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  updateNotifikasiKeranjang();
}

// ==== UBAH JUMLAH ITEM DI KERANJANG ====
function ubahJumlah(id, delta) {
  let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const index = keranjang.findIndex((item) => item.id === id);

  if (index !== -1) {
    keranjang[index].jumlah += delta;
    if (keranjang[index].jumlah <= 0) {
      keranjang.splice(index, 1);
    }
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  updateNotifikasiKeranjang();
  updateKeranjang();
}

// ==== TAMPILKAN ISI KERANJANG ====
function updateKeranjang() {
  const keranjangList = document.getElementById("keranjang-list");
  const totalHarga = document.getElementById("total-harga");
  if (!keranjangList || !totalHarga) return;

  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  keranjangList.innerHTML = "";

  if (keranjang.length === 0) {
    keranjangList.innerHTML = `<p class="text-center">Keranjang kamu masih kosong.</p>`;
    totalHarga.textContent = "Rp0";
    return;
  }

  keranjang.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-4">
            <img src="${item.gambar}" class="img-fluid rounded-start" alt="${item.nama}">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">${item.nama}</h5>
              <p class="card-text text-danger">Rp${item.harga.toLocaleString()}</p>
              <div class="d-flex align-items-center">
                <button class="btn btn-sm btn-outline-secondary me-2" onclick="ubahJumlah(${item.id}, -1)">–</button>
                <span>${item.jumlah}</span>
                <button class="btn btn-sm btn-outline-secondary ms-2" onclick="ubahJumlah(${item.id}, 1)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    keranjangList.appendChild(col);
  });

  const total = keranjang.reduce((acc, item) => acc + item.harga * item.jumlah, 0);
  totalHarga.textContent = `Rp${total.toLocaleString()}`;
}

// ==== TOMBOL BAYAR ====
const btnBayar = document.getElementById("btn-bayar");
if (btnBayar) {
  updateKeranjang();
  btnBayar.addEventListener("click", () => {
    alert("Terima kasih! Pembayaran berhasil diproses.");
    localStorage.removeItem("keranjang");
    updateKeranjang();
    updateNotifikasiKeranjang();
  });
}

// ==== NOTIFIKASI JUMLAH KERANJANG ====
function updateNotifikasiKeranjang() {
  const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  const jumlah = keranjang.reduce((acc, item) => acc + item.jumlah, 0);

  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = jumlah;
    badge.style.display = jumlah > 0 ? "inline-block" : "none";
  }
}

// ==== INISIALISASI ====
updateNotifikasiKeranjang();
