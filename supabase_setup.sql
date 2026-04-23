-- Run this in the Supabase SQL Editor to set up the schema and seed data.

-- ── Tables ────────────────────────────────────────────────────────────────────

CREATE TABLE news_articles (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       text UNIQUE NOT NULL,
  title      text NOT NULL,
  excerpt    text,
  body       text[],
  category   text,
  date       date NOT NULL,
  date_label text,
  image      text,
  author     text,
  featured   boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE pengumuman (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       text UNIQUE NOT NULL,
  title      text NOT NULL,
  summary    text,
  body       text[],
  date       date NOT NULL,
  date_label text,
  urgency    text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE achievements (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rank       text,
  title      text NOT NULL,
  category   text,
  level      text,
  year       text,
  student    text,
  image      text,
  created_at timestamptz DEFAULT now()
);

-- ── RLS ───────────────────────────────────────────────────────────────────────

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pengumuman    ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements  ENABLE ROW LEVEL SECURITY;

-- Public can read
CREATE POLICY "public read news"         ON news_articles FOR SELECT USING (true);
CREATE POLICY "public read pengumuman"   ON pengumuman    FOR SELECT USING (true);
CREATE POLICY "public read achievements" ON achievements  FOR SELECT USING (true);

-- Only authenticated users can write
CREATE POLICY "auth write news"         ON news_articles FOR ALL    USING (auth.role() = 'authenticated');
CREATE POLICY "auth write pengumuman"   ON pengumuman    FOR ALL    USING (auth.role() = 'authenticated');
CREATE POLICY "auth write achievements" ON achievements  FOR ALL    USING (auth.role() = 'authenticated');

-- ── Seed Data ─────────────────────────────────────────────────────────────────

INSERT INTO news_articles (slug, title, excerpt, body, category, date, date_label, image, author, featured) VALUES
(
  'ppdb-2026-2027-resmi-dibuka',
  'PPDB 2026/2027 Resmi Dibuka — Yuk, Daftar Sekarang!',
  'Pendaftaran peserta didik baru untuk tahun ajaran 2026/2027 sudah dibuka mulai 10 Mei 2026. Jangan sampai ketinggalan.',
  ARRAY[
    'SMP Negeri 1 Sumber Jaya resmi membuka Penerimaan Peserta Didik Baru (PPDB) tahun ajaran 2026/2027 mulai tanggal 10 Mei 2026. Pendaftaran dapat dilakukan secara luring di sekolah atau melalui kanal daring yang akan diumumkan lebih lanjut.',
    'Calon siswa wajib melengkapi berkas seperti fotokopi ijazah/SKL SD-MI, akta kelahiran, kartu keluarga, pas foto 3x4, fotokopi KTP orang tua, dan surat keterangan domisili bila diperlukan.',
    'Seleksi akan dilaksanakan pada 25 Mei 2026 dengan tes akademik dasar dan wawancara bersama orang tua. Pengumuman hasil seleksi dijadwalkan pada 1 Juni 2026, sedangkan daftar ulang dimulai 10 Juni 2026.',
    'Panitia PPDB siap membantu orang tua yang butuh informasi lebih lanjut. Silakan hubungi nomor sekolah di (0723) 465335 pada jam kerja Senin–Sabtu, 07.00–13.30 WIB.'
  ],
  'Pengumuman', '2026-04-12', '12 April 2026',
  'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'Panitia PPDB', true
),
(
  'hari-kartini-tari-budaya-lampung',
  'Peringatan Hari Kartini: Siswa Tampil Budaya Lampung',
  'Siswa-siswi menampilkan tari tradisional & pakaian adat dalam peringatan Hari Kartini.',
  ARRAY[
    'Memperingati Hari Kartini pada 21 April 2026, SMP Negeri 1 Sumber Jaya menggelar pentas seni budaya yang diikuti oleh siswa dari kelas VII, VIII, dan IX.',
    'Berbagai tarian tradisional Lampung seperti Tari Sigeh Penguten dan Tari Melinting ditampilkan dengan apik di halaman sekolah. Siswa-siswi juga mengenakan pakaian adat Lampung yang berwarna-warni.',
    'Acara ini bertujuan memupuk kecintaan pada budaya lokal sekaligus menghormati perjuangan R.A. Kartini sebagai pahlawan emansipasi perempuan Indonesia.'
  ],
  'Kegiatan', '2026-04-05', '5 April 2026',
  'https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'Tim Humas Sekolah', false
),
(
  'workshop-kurikulum-merdeka-orang-tua',
  'Workshop Kurikulum Merdeka untuk Orang Tua',
  'Orang tua diajak memahami filosofi pembelajaran berbasis proyek bersama tim guru.',
  ARRAY[
    'Pada Sabtu, 28 Maret 2026, SMPN 1 Sumber Jaya mengadakan workshop khusus untuk orang tua siswa bertema "Memahami Kurikulum Merdeka Bersama Anak".',
    'Workshop ini dibawakan langsung oleh tim guru dan pakar pendidikan lokal. Materi mencakup filosofi pembelajaran berbasis proyek, Profil Pelajar Pancasila, dan cara mendukung anak belajar di rumah.',
    'Sebanyak 180 orang tua hadir dalam workshop ini dan memberikan respon positif. Sekolah berencana mengadakan sesi lanjutan setiap semester.'
  ],
  'Akademik', '2026-03-28', '28 Maret 2026',
  'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'Wakil Kurikulum', false
),
(
  'libur-ramadhan-jadwal-pesantren-kilat',
  'Libur Awal Ramadhan & Jadwal Pesantren Kilat',
  'Pengumuman jadwal libur & kegiatan pesantren kilat untuk seluruh siswa selama Ramadhan.',
  ARRAY[
    'Menyambut bulan suci Ramadhan 1447 H, sekolah mengumumkan jadwal libur awal Ramadhan dan rangkaian kegiatan pesantren kilat yang akan diikuti seluruh siswa.',
    'Pesantren kilat berlangsung selama 3 hari dengan materi meliputi tadarus Al-Qur''an, ceramah keagamaan, buka puasa bersama, dan kegiatan sosial berbagi takjil kepada warga sekitar.'
  ],
  'Info Sekolah', '2026-03-18', '18 Maret 2026',
  'https://images.pexels.com/photos/8926648/pexels-photo-8926648.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'Wakil Kesiswaan', false
),
(
  'juara-lomba-tari-tingkat-kabupaten',
  'Tim Tari Sekolah Raih Juara 1 Tingkat Kabupaten',
  'Kelompok tari SMPN 1 Sumber Jaya memenangkan Juara 1 Lomba Tari Kreasi Tradisional tingkat Kabupaten Lampung Barat.',
  ARRAY[
    'Tim tari SMPN 1 Sumber Jaya, yang terdiri dari 8 siswa kelas VIII, berhasil meraih Juara 1 dalam Lomba Tari Kreasi Tradisional tingkat Kabupaten Lampung Barat, 15 Februari 2026.',
    'Koreografi yang diangkat bertema "Keagungan Gunung Pesagi", memadukan gerak tari Lampung tradisional dengan iringan musik modern.',
    'Ini adalah kali kedua berturut-turut sekolah memenangkan lomba ini, menunjukkan konsistensi program seni budaya lokal yang dikembangkan sekolah.'
  ],
  'Kegiatan', '2026-02-20', '20 Februari 2026',
  'https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'Pembina Ekstrakurikuler Seni', false
);

INSERT INTO pengumuman (slug, title, summary, body, date, date_label, urgency) VALUES
(
  'jadwal-ujian-akhir-semester-genap',
  'Jadwal Ujian Akhir Semester Genap 2025/2026',
  'Jadwal lengkap UAS semester genap untuk kelas VII, VIII, dan IX. Dimulai 5 Juni 2026.',
  ARRAY[
    'Ujian Akhir Semester (UAS) Genap tahun ajaran 2025/2026 akan dilaksanakan mulai tanggal 5 Juni 2026 sampai dengan 12 Juni 2026.',
    'Jadwal lengkap per mata pelajaran dan per tingkatan dapat dilihat di papan pengumuman sekolah atau diunduh melalui kanal resmi sekolah. Orang tua diharapkan membantu anak mempersiapkan diri.',
    'Siswa diwajibkan hadir 15 menit sebelum ujian dimulai, membawa alat tulis lengkap, dan mengenakan seragam OSIS.'
  ],
  '2026-05-20', '20 Mei 2026', 'Penting'
),
(
  'pembayaran-spp-mei-2026',
  'Batas Akhir Pembayaran SPP Mei 2026',
  'Pembayaran SPP bulan Mei 2026 paling lambat tanggal 25 Mei 2026.',
  ARRAY[
    'Diberitahukan kepada seluruh wali siswa bahwa pembayaran SPP bulan Mei 2026 paling lambat dilakukan pada tanggal 25 Mei 2026.',
    'Pembayaran dapat dilakukan melalui bendahara sekolah pada jam kerja atau melalui transfer ke rekening sekolah. Bukti pembayaran mohon disimpan dengan baik.'
  ],
  '2026-05-10', '10 Mei 2026', 'Umum'
),
(
  'rapat-komite-orang-tua-triwulan-ii',
  'Undangan Rapat Komite Orang Tua Triwulan II',
  'Rapat komite membahas program sekolah triwulan II. Sabtu, 18 Mei 2026 pukul 09.00 WIB.',
  ARRAY[
    'Seluruh orang tua/wali siswa diundang hadir dalam Rapat Komite Orang Tua Triwulan II yang akan diselenggarakan pada:',
    'Hari / Tanggal: Sabtu, 18 Mei 2026' || E'\n' || 'Waktu: 09.00 WIB – selesai' || E'\n' || 'Tempat: Aula SMPN 1 Sumber Jaya',
    'Agenda utama: evaluasi program triwulan I, persiapan UAS, dan rencana penerimaan peserta didik baru 2026/2027.'
  ],
  '2026-05-05', '5 Mei 2026', 'Umum'
),
(
  'libur-hari-raya-idul-fitri-1447h',
  'Libur Hari Raya Idul Fitri 1447 H',
  'Sekolah libur pada tanggal 18–28 April 2026 dalam rangka Hari Raya Idul Fitri 1447 H.',
  ARRAY[
    'Dalam rangka Hari Raya Idul Fitri 1447 Hijriah, kegiatan belajar mengajar diliburkan pada tanggal 18 April 2026 sampai dengan 28 April 2026.',
    'Kegiatan belajar mengajar akan kembali normal pada hari Senin, 29 April 2026. Kami mengucapkan Selamat Hari Raya Idul Fitri, mohon maaf lahir dan batin.'
  ],
  '2026-04-10', '10 April 2026', 'Segera'
);

INSERT INTO achievements (rank, title, category, level, year, student, image) VALUES
('Juara 1', 'Lomba Tari Kreasi Tradisional',    'Seni Budaya', 'Kabupaten', '2025', 'Tim Tari Kelas VIII',       'https://images.pexels.com/photos/8617542/pexels-photo-8617542.jpeg?auto=compress&cs=tinysrgb&w=900'),
('Juara 2', 'Olimpiade Sains Nasional — Matematika', 'Akademik', 'Kabupaten', '2025', 'Rizki Alfarizi (IX-A)', NULL),
('Juara 1', 'Turnamen Bola Voli Antar-SMP',     'Olahraga',   'Kecamatan', '2025', 'Tim Voli Putra',            NULL),
('Harapan 1','Festival Pelajar Pancasila',       'Karakter',   'Provinsi',  '2024', 'Kelompok P5 Kelas VIII',    NULL),
('Juara 3', 'Lomba Cerdas Cermat Bahasa Inggris','Akademik',  'Kabupaten', '2024', 'Trio English Club',         NULL),
('Juara 2', 'Lomba Pidato Bahasa Lampung',       'Bahasa',     'Kabupaten', '2024', 'Siti Anisa (IX-B)',         NULL),
('Juara 1', 'Lomba Kebersihan Sekolah',          'Lingkungan', 'Kecamatan', '2024', 'Seluruh Warga Sekolah',     NULL),
('Harapan 2','Lomba Pramuka Penggalang',         'Karakter',   'Kabupaten', '2024', 'Regu Pramuka Putra-Putri',  NULL);
