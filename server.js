// server.js (di folder portfolio-api)
const express = require('express');
const cors = require('cors');
const app = express();

// PORT akan diset oleh hosting Vercel, fallback ke 3000 untuk lokal
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors()); // Mengizinkan akses dari domain luar (portofolio Anda)
app.use(express.json());

// ===============================================
// DATA API (FAVIAN RIFQIZIWANI)
// ===============================================

// Data profil
let profileData = {
    name: "Favian Rifqiziwani",
    title: "Desainer Grafis & Web Developer",
    university: "Universitas Negeri Jakarta",
    major: "Pendidikan Teknik Informtika dan Komputer",
    about: {
        intro: "Seorang Desainer Grafis dan Web Developer yang berfokus pada tampilan modern, fungsional, dan mudah digunakan.",
        description: "Saya memiliki pengalaman dalam desain UI/UX, ilustrasi, serta branding visual untuk berbagai proyek kreatif. Saya selalu bersemangat untuk mengubah ide menjadi solusi visual dan digital yang efektif."
    },
    // Ganti "profile.jpg" dengan URL publik gambar profil Anda di Vercel/GitHub
    image: "https://favian-portfolio-web.vercel.app/profile.jpg", 
    cta: "AYO KENALAN!"
};

// Data skills (Menggunakan data dari index.html Anda)
let skillsData = {
    hardSkills: [
        "Desain Logo",
        "Poster",
        "UI/UX"
    ],
    // Contoh soft skills:
    softSkills: [
        "Kreativitas & Inovasi",
        "Atensi terhadap Detail",
        "Komunikasi Visual"
    ]
};

// Data proyek (Menggunakan data dari index.html Anda)
let projectsData = [
    {
        id: 1,
        title: "Desain Poster",
        description: "Desain Poster untuk mengenang korban demo 28 Agustus 2025.",
        imageUrl: "https://favian-portfolio-web.vercel.app/images/projek1.png", // Ganti dengan URL publik gambar Anda
        technologies: ["Poster", "Instagram", "Canva"]
    },
    {
        id: 2,
        title: "Desain Logo Naga Gendut",
        description: "Desain logo untuk cafe boardgame Naga Gendut.",
        imageUrl: "https://favian-portfolio-web.vercel.app/images/projek2.png", // Ganti dengan URL publik gambar Anda
        technologies: ["Logo", "Illustrator", "Photoshop"]
    },
    {
        id: 3,
        title: "Desain UI/UX Aplikasi Belajar",
        description: "Desain UI untuk aplikasi belajar Studymate.",
        imageUrl: "https://favian-portfolio-web.vercel.app/images/projek3.png", // Ganti dengan URL publik gambar Anda
        technologies: ["Logo", "UI/UX", "Figma"]
    }
];

// Data kontak
let contactData = {
    email: "favrifqiziwani@gmail.com",
};

// ===============================================
// ROUTES (Endpoints)
// ===============================================

// Endpoint Profil
app.get('/api/profile', (req, res) => {
    res.json({ success: true, data: profileData });
});

// Endpoint Skills
app.get('/api/skills', (req, res) => {
    res.json({ success: true, data: skillsData });
});

// Endpoint Proyek (Ini adalah endpoint utama Anda)
app.get('/api/projects', (req, res) => {
    res.json({ success: true, data: projectsData });
});

// Endpoint Kontak
app.get('/api/contact', (req, res) => {
    res.json({ success: true, data: contactData });
});

// Eksport aplikasi Express untuk digunakan Vercel (penting!)
module.exports = app;
