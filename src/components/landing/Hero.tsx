'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lblCannulaRef = useRef<HTMLDivElement>(null);
  const lblThreadRef = useRef<HTMLDivElement>(null);
  const lblBarbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const heroEl = containerRef.current;
    const lblCannula = lblCannulaRef.current;
    const lblThread = lblThreadRef.current;
    const lblBarbs = lblBarbsRef.current;

    if (window.innerWidth < 769 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return; // موبایل یا حالت بدون انیمیشن
    }

    /* --- صحنه، دوربین، رندرر --- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    /* --- نورپردازی --- */
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xD4AF37, 0.35);
    fillLight.position.set(-5, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x4A6FA5, 0.7);
    rimLight.position.set(0, 3, -5);
    scene.add(rimLight);

    const movingLight = new THREE.PointLight(0xD4AF37, 0.6, 14);
    movingLight.position.set(2, 0, 3);
    scene.add(movingLight);

    /* --- متریال‌ها --- */
    const matMetal = new THREE.MeshStandardMaterial({ color: 0xBCC8D4, metalness: 0.95, roughness: 0.07 });
    const matDarkMetal = new THREE.MeshStandardMaterial({ color: 0x3D4F63, metalness: 0.9, roughness: 0.12 });
    const matThread = new THREE.MeshStandardMaterial({
      color: 0xDCE4ED, metalness: 0.12, roughness: 0.28,
      transparent: true, opacity: 0.35,
      emissive: 0xD4AF37, emissiveIntensity: 0.03
    });
    const matBarb = new THREE.MeshStandardMaterial({
      color: 0xD4AF37, metalness: 0.82, roughness: 0.13,
      emissive: 0xD4AF37, emissiveIntensity: 0.18
    });

    /* --- کانولا --- */
    const cannulaGrp = new THREE.Group();
    const cBody = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.054, 3.2, 32), matMetal);
    const cTip = new THREE.Mesh(new THREE.ConeGeometry(0.054, 0.32, 32), matMetal);
    cTip.position.y = -1.76;
    const cHub = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.115, 0.48, 32), matDarkMetal);
    cHub.position.y = 1.84;
    const cRing = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.013, 8, 48), matBarb);
    cRing.position.y = 1.84;
    cRing.rotation.x = Math.PI / 2;
    cannulaGrp.add(cBody, cTip, cHub, cRing);

    /* --- نخ و خارها --- */
    const threadGrp = new THREE.Group();
    const tBody = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 3.8, 12), matThread);

    const barbs: { mesh: THREE.Mesh; baseY: number; side: number }[] = [];
    const BARB_COUNT = 10;
    for (let i = 0; i < BARB_COUNT; i++) {
      const b = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.095, 6), matBarb);
      const yp = -1.5 + i * 0.34;
      const side = (i % 2 === 0) ? 1 : -1;
      b.position.set(side * 0.028, yp, 0);
      b.rotation.z = side * (Math.PI / 3.2);
      barbs.push({ mesh: b, baseY: yp, side: side });
      threadGrp.add(b);
    }
    threadGrp.add(tBody);

    /* --- حلقه‌های تزئینی پس‌زمینه --- */
    const bgRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.007, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0xD4AF37, transparent: true, opacity: 0.12 })
    );
    bgRing1.rotation.x = Math.PI / 2;
    bgRing1.position.z = -1.2;

    const bgRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.3, 0.004, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x0A192F, transparent: true, opacity: 0.08 })
    );
    bgRing2.rotation.x = Math.PI / 2;
    bgRing2.position.z = -1.8;

    /* --- ذرات شناور --- */
    const PCOUNT = 90;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(PCOUNT * 3);
    const pVel: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < PCOUNT; i++) {
      pPos[i * 3]     = (Math.random() - 0.5) * 12;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      pVel.push({
        x: (Math.random() - 0.5) * 0.0025,
        y: (Math.random() - 0.5) * 0.0025,
        z: (Math.random() - 0.5) * 0.002
      });
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xD4AF37, size: 0.028, transparent: true, opacity: 0.45, sizeAttenuation: true
    });
    const particles = new THREE.Points(pGeo, pMat);

    scene.add(cannulaGrp, threadGrp, bgRing1, bgRing2, particles);

    let scrollProg = 0, targetScroll = 0;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let time = 0;
    let animationId: number;

    function toScreen(localPos: THREE.Vector3) {
      const v = localPos.clone();
      v.applyMatrix4(scene.matrixWorld);
      v.project(camera);
      return {
        x: (v.x * 0.5 + 0.5) * canvas.clientWidth,
        y: (-v.y * 0.5 + 0.5) * canvas.clientHeight,
        z: v.z
      };
    }

    const handleScroll = () => {
      const h = heroEl.offsetHeight;
      targetScroll = Math.min(1, Math.max(0, window.scrollY / (h * 0.55)));
    };

    const handleMouseMove = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.004;

      scrollProg += (targetScroll - scrollProg) * 0.035;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;

      scene.rotation.y = time * 0.28 + mx * 0.25;
      scene.rotation.x = my * 0.12;

      /* exploded animation */
      cannulaGrp.position.x = scrollProg * 2.4;
      cannulaGrp.position.y = scrollProg * -0.25;
      cannulaGrp.rotation.z = scrollProg * 0.12;
      threadGrp.position.x = scrollProg * -0.6;

      for (let i = 0; i < barbs.length; i++) {
        const b = barbs[i];
        const spread = scrollProg * b.side * 0.45;
        b.mesh.position.z = spread;
        b.mesh.position.x = b.side * 0.028 + spread * 0.4;
        const sc = 1 + scrollProg * 0.9;
        b.mesh.scale.set(sc, sc, sc);
      }

      matThread.opacity = 0.3 + scrollProg * 0.65;
      matThread.emissiveIntensity = 0.03 + scrollProg * 0.18;
      matBarb.emissiveIntensity = 0.18 + scrollProg * 0.3;

      bgRing1.rotation.z = time * 0.08;
      bgRing2.rotation.z = -time * 0.06;

      const pos = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < PCOUNT; i++) {
        pos[i * 3]     += pVel[i].x;
        pos[i * 3 + 1] += pVel[i].y;
        pos[i * 3 + 2] += pVel[i].z;
        if (Math.abs(pos[i * 3])   > 6) pVel[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 4) pVel[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 3) pVel[i].z *= -1;
      }
      pGeo.attributes.position.needsUpdate = true;

      movingLight.position.x = Math.sin(time * 1.8) * 3;
      movingLight.position.y = Math.cos(time * 1.3) * 2;

      scene.updateMatrixWorld(true);

      if (scrollProg > 0.25) {
        const alpha = Math.min(1, (scrollProg - 0.25) / 0.25).toString();

        const cp = toScreen(new THREE.Vector3(cannulaGrp.position.x + 0.35, cannulaGrp.position.y + 0.8, 0));
        if (cp.z < 1 && lblCannula) {
          lblCannula.style.display = 'block';
          lblCannula.style.opacity = alpha;
          lblCannula.style.left = cp.x + 'px';
          lblCannula.style.top  = cp.y + 'px';
        }

        const tp = toScreen(new THREE.Vector3(threadGrp.position.x - 0.35, 0.8, 0));
        if (tp.z < 1 && lblThread) {
          lblThread.style.display = 'block';
          lblThread.style.opacity = alpha;
          lblThread.style.left = tp.x + 'px';
          lblThread.style.top  = tp.y + 'px';
        }

        const bp = toScreen(new THREE.Vector3(threadGrp.position.x, -0.8, 0.5));
        if (bp.z < 1 && lblBarbs) {
          lblBarbs.style.display = 'block';
          lblBarbs.style.opacity = alpha;
          lblBarbs.style.left = bp.x + 'px';
          lblBarbs.style.top  = bp.y + 'px';
        }
      } else {
        if (lblCannula) lblCannula.style.opacity = '0';
        if (lblThread) lblThread.style.opacity  = '0';
        if (lblBarbs) lblBarbs.style.opacity   = '0';
        if (scrollProg < 0.15) {
          if (lblCannula) lblCannula.style.display = 'none';
          if (lblThread) lblThread.style.display  = 'none';
          if (lblBarbs) lblBarbs.style.display   = 'none';
        }
      }

      renderer.render(scene, camera);
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <canvas ref={canvasRef} id="hero-canvas" className="pointer-events-auto" />

      {/* برچسب‌های سه‌بعدی متصل به صحنه */}
      <div ref={lblCannulaRef} id="label-cannula" className="scene-label absolute z-20 hidden opacity-0 transition-opacity duration-500">
        <div className="bg-white/90 backdrop-blur-md border border-champagne/20 rounded-xl px-3.5 py-2 shadow-lg">
          <span className="text-champagne text-xs font-bold block">کانولا</span>
          <span className="text-med text-[10px] leading-4">سوزن هدایتگر تیتانیومی</span>
        </div>
      </div>

      <div ref={lblThreadRef} id="label-thread" className="scene-label absolute z-20 hidden opacity-0 transition-opacity duration-500">
        <div className="bg-white/90 backdrop-blur-md border border-champagne/20 rounded-xl px-3.5 py-2 shadow-lg">
          <span className="text-champagne text-xs font-bold block">نخ PDO</span>
          <span className="text-med text-[10px] leading-4">فیبر پلی‌دی‌اکسانون</span>
        </div>
      </div>

      <div ref={lblBarbsRef} id="label-barbs" className="scene-label absolute z-20 hidden opacity-0 transition-opacity duration-500">
        <div className="bg-white/90 backdrop-blur-md border border-champagne/20 rounded-xl px-3.5 py-2 shadow-lg">
          <span className="text-champagne text-xs font-bold block">خارها (Cog)</span>
          <span className="text-med text-[10px] leading-4">نگهدارنده بافتی</span>
        </div>
      </div>
    </div>
  );
}
