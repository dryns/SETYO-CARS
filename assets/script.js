// ==== DATA PRODUK MOBIL ====
const produkMobil = [
  {
    id: 1,
    nama: "Toyota Inova",
    gambar: "assets/inova.jpg",
    harga: 700000000,
    deskripsi: "Toyota Innova adalah MPV keluarga yang dikenal luas di Indonesia karena kabinnya yang lapang, performa mesin yang handal, dan desain yang elegan. Mobil ini cocok untuk keluarga besar yang mengutamakan kenyamanan dan keamanan dalam berkendara. ."
  },
  {
    id: 2,
    nama: "Honda Civic Turbo",
    gambar: "assets/civic.jpg",
    harga: 750000000,
    deskripsi: "Honda Civic Turbo adalah sedan sporty yang dikenal dengan performa mesin bertenaga, desain aerodinamis, dan fitur-fitur canggih. Mesin 1.5L VTEC Turbo menghasilkan tenaga yang responsif dan efisiensi bahan bakar yang baik. Desainnya yang stylish dan sporty, serta fitur-fitur modern di interior, menjadikannya pilihan menarik bagi mereka yang mencari sedan dengan keseimbangan antara performa dan gaya. ."
  },
  {
    id: 3,
    nama: "Toyota Land Cruiser",
    gambar: "assets/land-cruiser.jpg",
    harga: 1000000000,
    deskripsi: "Toyota Land Cruiser adalah SUV tangguh dan mewah yang dirancang untuk performa tinggi di segala medan. Mobil ini dikenal karena keandalan, daya tahan, dan kemampuannya melibas medan off-road. Land Cruiser juga menawarkan kabin yang luas dan nyaman dengan fitur-fitur canggih, menjadikannya pilihan ideal untuk petualangan maupun penggunaan sehari-hari. ."
  },
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
