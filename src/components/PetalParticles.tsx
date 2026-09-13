import React, { useEffect, useRef } from 'react';

interface AmbientPetal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  petalType: 'jasmine' | 'goldPollen' | 'yellowPetal';
}

interface TouchGlow {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

interface TouchRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  strokeColor: string;
  lineWidth: number;
}

interface TouchParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  life: number; // 0 to 1
  decay: number;
  type: 'jasminePetal' | 'goldPollen' | 'flowerMotif' | 'lotusPetal' | 'glowingDust';
  wobbleOffset: number;
  wobbleSpeed: number;
}

interface TamilMotif {
  x: number;
  y: number;
  type: 'kolam' | 'lotus' | 'jasmine' | 'diya';
  progress: number; // 0 to 1
  decay: number;
  scale: number;
  rotation: number;
  rotationSpeed: number;
  isSpecialSurprise?: boolean;
}

export const PetalParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const touchHistory = useRef<{ x: number; y: number; time: number }[]>([]);
  const lastTouchTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking for subtle breeze repulsion
    const mousePos = { x: -100, y: -100 };
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- PARTICLE COLLECTIONS ---
    // 1. Ambient falling petals
    const ambientCount = width < 768 ? 14 : 24;
    const ambientPetals: AmbientPetal[] = [];
    for (let i = 0; i < ambientCount; i++) {
      ambientPetals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 7 + Math.random() * 8,
        speedY: 0.5 + Math.random() * 0.8,
        speedX: -0.25 + Math.random() * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.4,
        opacity: 0.45 + Math.random() * 0.35,
        petalType: i % 4 === 0 ? 'yellowPetal' : i % 6 === 0 ? 'goldPollen' : 'jasmine',
      });
    }

    // 2. Interactive magic collections
    const glows: TouchGlow[] = [];
    const ripples: TouchRipple[] = [];
    const touchParticles: TouchParticle[] = [];
    const motifs: TamilMotif[] = [];

    // --- SPAWN TOUCH MAGIC FUNCTION ---
    const spawnTouchMagic = (x: number, y: number, countMultiplier = 1, isSpecialSurprise = false) => {
      // 1. Soft golden glow at touch point
      glows.push({
        x,
        y,
        radius: isSpecialSurprise ? 24 : 14,
        maxRadius: isSpecialSurprise ? 65 : 42,
        alpha: isSpecialSurprise ? 0.85 : 0.65,
        color: isSpecialSurprise ? '#fef08a' : '#fef9c3',
      });

      // 2. Soft expanding circular ripple(s)
      ripples.push({
        x,
        y,
        radius: 6,
        maxRadius: isSpecialSurprise ? 75 : 48,
        alpha: 0.7,
        strokeColor: isSpecialSurprise ? '#d4af37' : '#e6ca65',
        lineWidth: 1.2,
      });

      if (isSpecialSurprise) {
        // Double secondary golden ripple
        setTimeout(() => {
          ripples.push({
            x,
            y,
            radius: 8,
            maxRadius: 90,
            alpha: 0.55,
            strokeColor: '#fbbf24',
            lineWidth: 1.4,
          });
        }, 120);
      }

      // If user prefers reduced motion, only show subtle glow & ripple without burst
      if (prefersReducedMotion) return;

      // 3. Tiny burst of jasmine petals, golden particles, mini flowers
      const baseCount = Math.floor(10 + Math.random() * 8) * countMultiplier;
      const count = Math.min(baseCount, isSpecialSurprise ? 28 : 20);

      for (let i = 0; i < count; i++) {
        // Randomize launch angle with bias towards floating gently upward
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3;
        const speed = 1.0 + Math.random() * (isSpecialSurprise ? 2.8 : 2.0);
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed - 0.6; // upward bias

        // Distribute types: jasmine petals, gold pollen, tiny flower motifs, glowing dust
        let pType: TouchParticle['type'] = 'jasminePetal';
        const randType = Math.random();
        if (randType < 0.38) {
          pType = 'jasminePetal';
        } else if (randType < 0.62) {
          pType = 'goldPollen';
        } else if (randType < 0.82) {
          pType = 'glowingDust';
        } else if (randType < 0.93) {
          pType = 'flowerMotif';
        } else {
          pType = 'lotusPetal';
        }

        touchParticles.push({
          x: x + (Math.random() - 0.5) * 14,
          y: y + (Math.random() - 0.5) * 14,
          vx,
          vy,
          size: pType === 'goldPollen' || pType === 'glowingDust' 
            ? 2.5 + Math.random() * 3.5 
            : 6 + Math.random() * 7,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 3,
          opacity: 0.95,
          life: 0,
          decay: 0.014 + Math.random() * 0.012, // approx 1.1 - 1.5 seconds at 60fps
          type: pType,
          wobbleOffset: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.05 + Math.random() * 0.05,
        });
      }

      // 4. Reveal a tiny traditional Tamil decorative motif
      if (isSpecialSurprise) {
        // Secret surprise: Auspicious Kolam Mandala & blooming jasmine cluster
        motifs.push({
          x,
          y,
          type: 'kolam',
          progress: 0,
          decay: 0.012, // ~1.4 seconds
          scale: 0.2,
          rotation: 0,
          rotationSpeed: 0.4,
          isSpecialSurprise: true,
        });
        motifs.push({
          x,
          y,
          type: 'jasmine',
          progress: 0,
          decay: 0.013,
          scale: 0.3,
          rotation: Math.PI / 4,
          rotationSpeed: -0.3,
          isSpecialSurprise: true,
        });
      } else if (Math.random() < 0.28) {
        // 28% natural chance on normal tap: reveal one subtle motif
        const motifTypes: TamilMotif['type'][] = ['kolam', 'lotus', 'jasmine', 'diya'];
        const chosenType = motifTypes[Math.floor(Math.random() * motifTypes.length)];
        motifs.push({
          x,
          y,
          type: chosenType,
          progress: 0,
          decay: 0.015, // ~1.1 seconds
          scale: 0.3,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    // --- TOUCH & POINTER EVENT HANDLERS ---
    const handleTouchOrPointer = (e: PointerEvent | TouchEvent) => {
      const now = performance.now();
      // Debounce touches within 40ms to avoid double firing of pointerdown + touchstart
      if (now - lastTouchTime.current < 40) return;
      lastTouchTime.current = now;

      let clientX = 0;
      let clientY = 0;

      if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        return;
      }

      // Record for secret multi-tap detection
      touchHistory.current.push({ x: clientX, y: clientY, time: now });
      // Keep only taps from last 2.4 seconds
      touchHistory.current = touchHistory.current.filter((t) => now - t.time < 2400);

      // Secret Surprise Detection:
      // If 3 or more taps occur naturally within 2.4s, or rare 1-in-12 spontaneous chance
      let isSurprise = false;
      if (touchHistory.current.length >= 3) {
        isSurprise = true;
        touchHistory.current = []; // reset after granting surprise
      } else if (Math.random() < 0.08) {
        isSurprise = true;
      }

      spawnTouchMagic(clientX, clientY, isSurprise ? 1.6 : 1, isSurprise);
    };

    // Listen to window pointer/touch
    window.addEventListener('pointerdown', handleTouchOrPointer, { passive: true });

    // Listen to custom event for button blooms (e.g. from Hero CTA)
    const handleCustomBurst = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && typeof detail.x === 'number' && typeof detail.y === 'number') {
        spawnTouchMagic(detail.x, detail.y, detail.count ? detail.count / 14 : 1.5, true);
      }
    };
    window.addEventListener('wedding:burst-petals', handleCustomBurst);

    // --- MOTIF DRAWING ROUTINES ---
    // 1. Delicate Symmetrical Kolam
    const drawKolamMotif = (
      mX: number,
      mY: number,
      scale: number,
      alpha: number,
      rot: number,
      isSpecial = false
    ) => {
      ctx.save();
      ctx.translate(mX, mY);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;

      const size = isSpecial ? 38 : 24;

      // Outer delicate guide circle
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Sacred Kolam interlocking loops (4 or 8 points)
      const points = isSpecial ? 8 : 4;
      for (let i = 0; i < points; i++) {
        const theta = (i * Math.PI * 2) / points;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);

        // Kolam petal loop
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(
          cos * size * 1.25 - sin * (size * 0.45),
          sin * size * 1.25 + cos * (size * 0.45),
          cos * size,
          sin * size
        );
        ctx.quadraticCurveTo(
          cos * size * 1.25 + sin * (size * 0.45),
          sin * size * 1.25 - cos * (size * 0.45),
          0,
          0
        );
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.1;
        ctx.stroke();

        // Traditional golden dot (Pulli) at each tip
        ctx.beginPath();
        ctx.arc(cos * (size * 1.18), sin * (size * 1.18), isSpecial ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx.fillStyle = '#d4af37';
        ctx.fill();
      }

      // Center golden lotus bindu
      ctx.beginPath();
      ctx.arc(0, 0, isSpecial ? 3.5 : 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      ctx.restore();
    };

    // 2. Sacred Lotus (Thamarai) Motif
    const drawLotusMotif = (mX: number, mY: number, scale: number, alpha: number, rot: number) => {
      ctx.save();
      ctx.translate(mX, mY);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;

      const petalRadius = 18;
      const petalCount = 8;

      for (let i = 0; i < petalCount; i++) {
        const theta = (i * Math.PI * 2) / petalCount;
        ctx.save();
        ctx.rotate(theta);

        // Lotus petal curve
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-6, -petalRadius * 0.6, 0, -petalRadius);
        ctx.quadraticCurveTo(6, -petalRadius * 0.6, 0, 0);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Subtle blush tip
        ctx.beginPath();
        ctx.ellipse(0, -petalRadius * 0.75, 2.5, 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(254, 205, 211, 0.6)';
        ctx.fill();

        ctx.restore();
      }

      // Seed center
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      ctx.restore();
    };

    // 3. Blooming Jasmine (Malli) Motif
    const drawJasmineMotif = (mX: number, mY: number, scale: number, alpha: number, rot: number) => {
      ctx.save();
      ctx.translate(mX, mY);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;

      const petalCount = 5;
      for (let i = 0; i < petalCount; i++) {
        const theta = (i * Math.PI * 2) / petalCount;
        ctx.save();
        ctx.rotate(theta);

        // Jasmine petal
        ctx.beginPath();
        ctx.ellipse(0, -11, 5, 10, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(254, 240, 138, 0.5)';
        ctx.shadowBlur = 4;
        ctx.fill();

        // Pale chartreuse green throat
        ctx.beginPath();
        ctx.ellipse(0, -4, 2.5, 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(209, 250, 229, 0.75)';
        ctx.fill();

        ctx.restore();
      }

      // Golden center
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();

      ctx.restore();
    };

    // 4. Golden Diya Sparkle Motif
    const drawDiyaMotif = (mX: number, mY: number, scale: number, alpha: number) => {
      ctx.save();
      ctx.translate(mX, mY);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;

      // Diya earthen / brass bowl
      ctx.beginPath();
      ctx.moveTo(-12, 0);
      ctx.quadraticCurveTo(0, 9, 12, 0);
      ctx.lineTo(14, -2);
      ctx.quadraticCurveTo(0, 2, -14, -2);
      ctx.closePath();
      ctx.fillStyle = '#d4af37';
      ctx.fill();

      // Flame glow aura
      const flameGrad = ctx.createRadialGradient(0, -8, 1, 0, -8, 16);
      flameGrad.addColorStop(0, 'rgba(254, 240, 138, 0.9)');
      flameGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.5)');
      flameGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = flameGrad;
      ctx.beginPath();
      ctx.arc(0, -8, 16, 0, Math.PI * 2);
      ctx.fill();

      // Flame body
      ctx.beginPath();
      ctx.moveTo(-3.5, -2);
      ctx.quadraticCurveTo(-5, -9, 0, -15);
      ctx.quadraticCurveTo(5, -9, 3.5, -2);
      ctx.closePath();
      ctx.fillStyle = '#fef08a';
      ctx.fill();

      ctx.restore();
    };

    // --- MAIN RENDER LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- 1. RENDER AMBIENT FALLING PETALS ---
      for (let i = 0; i < ambientPetals.length; i++) {
        const p = ambientPetals[i];

        // Soft breeze drift
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.007) * 0.4;
        p.rotation += p.rotationSpeed;

        // Subtle repulsion from mouse/cursor
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const force = (80 - dist) / 80;
          p.x -= (dx / dist) * force * 1.8;
          p.y -= (dy / dist) * force * 1.2;
        }

        // Boundary wrap
        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        // Draw ambient petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.petalType === 'goldPollen') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.shadowColor = '#fbbf24';
          ctx.shadowBlur = 5;
          ctx.fill();
        } else if (p.petalType === 'yellowPetal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.4, p.size * 0.85, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#fbbf24';
          ctx.fill();
        } else {
          // Jasmine Malli Poo petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.85, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
          ctx.shadowBlur = 3;
          ctx.fill();

          ctx.beginPath();
          ctx.ellipse(0, p.size * 0.35, p.size * 0.2, p.size * 0.3, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(209, 250, 229, 0.7)';
          ctx.fill();
        }

        ctx.restore();
      }

      // --- 2. RENDER TOUCH GLOWS ---
      for (let i = glows.length - 1; i >= 0; i--) {
        const g = glows[i];
        g.radius += (g.maxRadius - g.radius) * 0.08;
        g.alpha -= 0.022;

        if (g.alpha <= 0) {
          glows.splice(i, 1);
          continue;
        }

        ctx.save();
        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.radius);
        grad.addColorStop(0, `rgba(254, 240, 138, ${g.alpha * 0.7})`);
        grad.addColorStop(0.45, `rgba(212, 175, 55, ${g.alpha * 0.4})`);
        grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- 3. RENDER EXPANDING RIPPLES ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.075;
        r.alpha -= 0.022;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.strokeColor;
        ctx.globalAlpha = r.alpha;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();
        ctx.restore();
      }

      // --- 4. RENDER MOTIFS (KOLAM, LOTUS, JASMINE, DIYA) ---
      for (let i = motifs.length - 1; i >= 0; i--) {
        const m = motifs[i];
        m.progress += m.decay;
        m.rotation += m.rotationSpeed * 0.02;

        if (m.progress >= 1) {
          motifs.splice(i, 1);
          continue;
        }

        // Curve progress for smooth blooming and fading
        let scale = m.scale;
        let alpha = 0;
        if (m.progress < 0.35) {
          // Bloom in
          const t = m.progress / 0.35;
          scale = 0.3 + 0.7 * Math.sin((t * Math.PI) / 2);
          alpha = 0.9 * t;
        } else {
          // Fade out gently
          const t = (m.progress - 0.35) / 0.65;
          scale = 1.0 + 0.15 * t;
          alpha = 0.9 * (1 - t);
        }

        if (m.type === 'kolam') {
          drawKolamMotif(m.x, m.y, scale, alpha, m.rotation, m.isSpecialSurprise);
        } else if (m.type === 'lotus') {
          drawLotusMotif(m.x, m.y, scale, alpha, m.rotation);
        } else if (m.type === 'jasmine') {
          drawJasmineMotif(m.x, m.y, scale, alpha, m.rotation);
        } else if (m.type === 'diya') {
          drawDiyaMotif(m.x, m.y, scale, alpha);
        }
      }

      // --- 5. RENDER TOUCH BURST PARTICLES (FLOATING UPWARD) ---
      for (let i = touchParticles.length - 1; i >= 0; i--) {
        const tp = touchParticles[i];
        tp.life += tp.decay;

        if (tp.life >= 1) {
          touchParticles.splice(i, 1);
          continue;
        }

        // Float upward with gentle sine wobble & air friction
        tp.vx *= 0.96;
        tp.vy += 0.015; // subtle gravity counter
        tp.x += tp.vx + Math.sin(tp.wobbleOffset + tp.life * 8) * 0.6;
        tp.y += tp.vy;
        tp.rotation += tp.rotationSpeed;

        // Smooth opacity curve: fast fade in, steady float, graceful fade out
        let currentOpacity = tp.opacity;
        if (tp.life < 0.15) {
          currentOpacity = (tp.life / 0.15) * 0.95;
        } else if (tp.life > 0.65) {
          currentOpacity = (1 - (tp.life - 0.65) / 0.35) * 0.95;
        }

        ctx.save();
        ctx.translate(tp.x, tp.y);
        ctx.rotate((tp.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, currentOpacity);

        if (tp.type === 'goldPollen') {
          // Golden shimmer pollen
          ctx.beginPath();
          ctx.arc(0, 0, tp.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.shadowColor = '#fbbf24';
          ctx.shadowBlur = 6;
          ctx.fill();
        } else if (tp.type === 'glowingDust') {
          // Delicate ambient glow mote
          ctx.beginPath();
          ctx.arc(0, 0, tp.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = '#fef08a';
          ctx.shadowColor = '#d4af37';
          ctx.shadowBlur = 4;
          ctx.fill();
        } else if (tp.type === 'flowerMotif') {
          // Mini 5-petal jasmine flower
          for (let pIdx = 0; pIdx < 5; pIdx++) {
            ctx.save();
            ctx.rotate((pIdx * Math.PI * 2) / 5);
            ctx.beginPath();
            ctx.ellipse(0, -tp.size * 0.6, tp.size * 0.28, tp.size * 0.5, 0, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.restore();
          }
          ctx.beginPath();
          ctx.arc(0, 0, tp.size * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.fill();
        } else if (tp.type === 'lotusPetal') {
          // Soft pink blush lotus petal
          ctx.beginPath();
          ctx.ellipse(0, 0, tp.size * 0.4, tp.size * 0.85, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(0, -tp.size * 0.4, tp.size * 0.3, tp.size * 0.4, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(254, 205, 211, 0.7)';
          ctx.fill();
        } else {
          // Jasmine Petal
          ctx.beginPath();
          ctx.ellipse(0, 0, tp.size * 0.42, tp.size * 0.85, 0, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
          ctx.shadowBlur = 4;
          ctx.fill();

          // Greenish-cream base
          ctx.beginPath();
          ctx.ellipse(0, tp.size * 0.35, tp.size * 0.22, tp.size * 0.32, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(209, 250, 229, 0.8)';
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handleTouchOrPointer);
      window.removeEventListener('wedding:burst-petals', handleCustomBurst);
    };
  }, []);

  return (
    <canvas
      id="petal-canvas"
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 h-full w-full select-none"
    />
  );
};
