import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ─── Three.js Background Component ───────────────────────────────────────────
function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.02);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i] = 0.06; colors[i + 1] = 0.73; colors[i + 2] = 0.5;
      } else if (colorChoice < 0.66) {
        colors[i] = 0.23; colors[i + 1] = 0.51; colors[i + 2] = 0.96;
      } else {
        colors[i] = 0.55; colors[i + 1] = 0.36; colors[i + 2] = 0.89;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const shapes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x10b981, transparent: true, opacity: 0.3, wireframe: true }),
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3, wireframe: true }),
      new THREE.MeshPhongMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.3, wireframe: true })
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 60;
      mesh.position.y = (Math.random() - 0.5) * 60;
      mesh.position.z = (Math.random() - 0.5) * 30 - 10;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.userData = {
        rotationSpeed: { x: (Math.random() - 0.5) * 0.02, y: (Math.random() - 0.5) * 0.02 },
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2
      };

      shapes.push(mesh);
      scene.add(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 1, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 1, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      shapes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.02;
      });
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
    };
  }, []);

  return <div ref={containerRef} className="three-canvas" />;
}

// ─── Navigation Component ─────────────────────────────────────────────────────
function Navigation({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Features', 'Demo'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">🌾</div>
          <span className="logo-text">Krishi Sakhi</span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button onClick={onGetStarted} className="btn-primary btn-nav">
            Get Started
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onDemoClick, onExploreClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-icon-wrapper">
            <div className="hero-icon">🌾</div>
          </div>

          <h1 className="hero-title">
            Krishi Sakhi
            <span className="hero-subtitle">V2.0</span>
          </h1>

          <p className="hero-description">
            Revolutionizing Indian agriculture with AI-powered precision farming.
            Your digital companion for smarter, sustainable farming.
          </p>

          <div className="hero-buttons">
            <button onClick={onDemoClick} className="btn-primary btn-large">
              🚀 Live Demo
            </button>
            <button onClick={onExploreClick} className="btn-secondary btn-large">
              ✨ Explore Features
            </button>
          </div>

          <div className="stats-grid">
            {[
              { value: '24K+', label: 'Training Images' },
              { value: '17', label: 'Disease Classes' },
              { value: '3', label: 'AI Services' },
              { value: '97%', label: 'Accuracy' }
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: '🗺️',
      iconBg: 'rgba(74, 222, 128, 0.2)',
      iconColor: '#4ade80',
      title: 'Magic Map',
      items: ['Click-to-crop recommendation', 'Real-time soil analysis', 'Random Forest ML']
    },
    {
      icon: '🔬',
      iconBg: 'rgba(251, 146, 60, 0.2)',
      iconColor: '#fb923c',
      title: 'Crop Doctor',
      items: ['Tomato, Potato, Maize', '17 disease detection', 'MobileNetV2 CNN']
    },
    {
      icon: '🤖',
      iconBg: 'rgba(192, 132, 252, 0.2)',
      iconColor: '#c084fc',
      title: 'AI Assistant',
      items: ['24/7 farming guidance', 'Multi-language support', 'GPT-powered insights']
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">✨ Core Features</span>
          <h2 className="section-title">AI-Powered Farming Suite</h2>
          <p className="section-description">
            Three revolutionary tools working together to empower farmers
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon-wrapper" style={{ background: feature.iconBg }}>
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-list">
                {feature.items.map((item, i) => (
                  <li key={i} style={{ color: feature.iconColor }}>
                    <span>✓</span> {item}
                  </li>
                ))}
              </ul>
              <div className="feature-arrow" style={{ background: `linear-gradient(90deg, ${feature.iconColor}20, transparent)` }}>
                <span style={{ color: feature.iconColor }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection({ onGetStarted }) {
  return (
    <section id="demo" className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-decoration cta-decoration-1"></div>
          <div className="cta-decoration cta-decoration-2"></div>

          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Farming?</h2>
            <p className="cta-description">
              Join thousands of farmers using AI to make smarter decisions and increase crop yields.
            </p>
            <button onClick={onGetStarted} className="btn-primary btn-cta">
              🌱 Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🌾</span> Krishi Sakhi
            </div>
            <p className="footer-description">
              Empowering farmers with AI-driven insights for sustainable agriculture.
            </p>
          </div>

          {[
            { title: 'Product', links: ['Features', 'Demo', 'Pricing'] },
            { title: 'Resources', links: ['Documentation', 'API', 'Support'] },
            { title: 'Company', links: ['About', 'Blog', 'Contact'] }
          ].map((column) => (
            <div key={column.title} className="footer-column">
              <h4 className="footer-column-title">{column.title}</h4>
              <ul className="footer-links">
                {column.links.map((link) => (
                  <li key={link}><a href="#" className="footer-link">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Krishi Sakhi. Built for Indian farmers.</p>
          <div className="footer-social">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="footer-social-link">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Landing Page Component ─────────────────────────────────────────────
function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <style>{`
        /* Base Styles */
        .landing-page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          overflow-x: hidden;
        }

        .three-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 24px;
          background: transparent;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #fff;
        }

        .btn-nav {
          padding: 10px 24px;
          font-size: 14px;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-menu-btn span {
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Buttons */
        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          border: none;
          color: #fff;
          padding: 12px 28px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 12px 28px;
          border-radius: 16px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .btn-large {
          padding: 20px 48px;
          font-size: 18px;
        }

        .btn-cta {
          padding: 24px 64px;
          font-size: 18px;
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.4);
        }

        .btn-cta:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 50px rgba(16, 185, 129, 0.5);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 80px;
        }

        .hero-container {
          text-align: center;
        }

        .hero-content {
          animation: fadeInUp 1s ease-out forwards;
        }

        .hero-icon-wrapper {
          width: 128px;
          height: 128px;
          margin: 0 auto 32px;
        }

        .hero-icon {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          box-shadow: 0 0 40px rgba(16, 185, 129, 0.4);
          animation: pulseGlow 2s infinite;
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 900;
          background: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          display: block;
          font-size: clamp(24px, 4vw, 48px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8);
        }

        .hero-description {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          align-items: center;
          margin-bottom: 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 32px;
          margin-top: 80px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 32px;
          text-align: center;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }

        .stat-value {
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Features Section */
        .features-section {
          padding: 128px 24px;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #4ade80;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 24px;
          border-radius: 100px;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 48px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          animation: fadeInUp 0.8s ease-out both;
          opacity: 0;
          transition: transform 0.5s ease;
        }

        .feature-card:hover {
          transform: translateY(-20px) scale(1.02);
        }

        .feature-icon-wrapper {
          width: 96px;
          height: 96px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          font-size: 40px;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin-bottom: 24px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          text-align: center;
        }

        .feature-list li {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .feature-arrow {
          width: 100%;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          font-size: 20px;
        }

        /* CTA Section */
        .cta-section {
          padding: 128px 24px;
          position: relative;
        }

        .cta-card {
          max-width: 900px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-decoration {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-decoration-1 {
          top: -50px;
          right: -50px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
        }

        .cta-decoration-2 {
          bottom: -50px;
          left: -50px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Footer */
        .footer {
          padding: 64px 24px 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.5);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr);
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .footer-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        .footer-column-title {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #4ade80;
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-social {
          display: flex;
          gap: 20px;
        }

        .footer-social-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-social-link:hover {
          color: #4ade80;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #10b981, #3b82f6);
          border-radius: 4px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            flex-direction: column;
            padding: 24px;
            gap: 16px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-large {
            width: 100%;
            max-width: 300px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .cta-card {
            padding: 40px 24px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>

      <ThreeBackground />
      <Navigation onGetStarted={onGetStarted} />
      <HeroSection
        onDemoClick={onGetStarted}
        onExploreClick={() => {
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <FeaturesSection />
      <CTASection onGetStarted={onGetStarted} />
      <Footer />
    </div>
  );
}

export default LandingPage;
