import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polygon, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import LandingPage from './components/LandingPage';
import { authAPI, cropAPI, diseaseAPI, assistantAPI } from './services/api';

// ─── Leaflet icon fix ────────────────────────────────────────────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl:       'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl:     'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// ─── Karnataka boundary ──────────────────────────────────────────────────────
const KA_BOUNDS = { minLat: 11.5, maxLat: 18.5, minLng: 74.0, maxLng: 78.6 };
const KA_CENTER = [15.3173, 75.7139];
const KA_LEAFLET_BOUNDS = [[11.5, 74.0],[18.5, 78.6]];

const KA_OUTLINE = [
  [18.45,74.15],[18.38,74.60],[17.98,74.35],[17.70,74.08],[17.28,74.10],
  [16.95,73.98],[16.50,74.10],[16.00,74.45],[15.65,74.00],[15.20,74.00],
  [14.85,74.23],[14.20,74.35],[13.75,74.65],[13.40,74.82],[13.00,74.85],
  [12.45,75.00],[12.00,75.38],[11.60,75.65],[11.50,76.40],[11.70,77.00],
  [12.00,77.60],[12.60,77.90],[13.20,78.15],[13.70,78.20],[14.20,78.10],
  [14.80,78.00],[15.40,77.90],[16.00,77.50],[16.50,77.30],[17.00,77.45],
  [17.50,77.30],[17.90,77.45],[18.15,77.20],[18.45,76.80],[18.45,76.00],
  [18.40,75.30],[18.45,74.15]
];

function isInsideKarnataka(lat, lng) {
  if (lat < KA_BOUNDS.minLat || lat > KA_BOUNDS.maxLat ||
      lng < KA_BOUNDS.minLng || lng > KA_BOUNDS.maxLng) return false;
  let inside = false;
  const poly = KA_OUTLINE;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][1], yi = poly[i][0];
    const xj = poly[j][1], yj = poly[j][0];
    const intersect = ((yi > lat) !== (yj > lat)) &&
      (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// ─── Global styles injected into <head> ─────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  #root { max-width: 100%; padding: 0; text-align: left; }
  :root {
    --g400:#4ade80; --g500:#22c55e; --g600:#16a34a; --g700:#15803d; --g800:#166534;
    --gold:#d4a843;
    --d0:#080c10; --d1:#0d1117; --d2:#111820; --d3:#172030; --d4:#1e2d3d; --d5:#263547;
    --t1:#eef2ee; --t2:#9eb89e; --t3:#5a7a5a;
    --bdr:rgba(255,255,255,0.06); --bdrg:rgba(74,222,128,0.18);
    --r:14px; --rs:8px;
    --sh:0 24px 64px rgba(0,0,0,0.55);
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideIn { from { opacity:0; transform:translateX(-18px); } to { opacity:1; transform:translateX(0); } }
  @keyframes pulseDot { 0%,100% { opacity:.3; transform:scale(.8); } 50% { opacity:1; transform:scale(1.2); } }
  @keyframes floatUp { 0%,100% { transform:translateY(0) rotate(0deg); opacity:.25; } 50% { transform:translateY(-36px) rotate(180deg); opacity:.55; } }
  .fadeUp { animation: fadeUp .35s ease both; }
  .slideIn { animation: slideIn .4s ease both; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--d5); border-radius: 3px; }
  .leaflet-top, .leaflet-bottom { z-index: 800 !important; }
  input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px var(--d3) inset !important; -webkit-text-fill-color: var(--t1) !important; }
`;

function StyleSheet() {
  useEffect(() => {
    const el = document.createElement('style');
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);
  return null;
}

// ─── Spinner ─────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <span style={{
      display:'inline-block', width:15, height:15,
      border:'2px solid rgba(255,255,255,0.3)', borderTopColor:'#fff',
      borderRadius:'50%', animation:'spin 0.7s linear infinite', marginRight:8, flexShrink:0
    }} />
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function IcoSprout({ size=22, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
      <path d="M14.1 6a7 7 0 0 1 1.4 1.4c.4.6.6 1.3.6 2-.9.1-1.7 0-2.4-.3-.8-.3-1.4-.8-2-1.6-.5-.8-.9-1.9-.9-3.1 1.5.3 2.5.9 3.3 1.6z"/>
    </svg>
  );
}
function IcoMap({ size=22, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
  );
}
function IcoMicro({ size=22, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8"/><path d="M3 21h18"/>
      <path d="M14 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/>
      <path d="M14 7l-3 3"/><path d="M9.5 9.5 7 12l-2-2 2.5-2.5"/><path d="m14 7 2-2-2-2-2 2"/>
    </svg>
  );
}
function IcoBot({ size=22, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/><path d="M12 7v4"/>
    </svg>
  );
}
function IcoSend({ size=18, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}
function IcoUpload({ size=26, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  );
}
function IcoUser({ size=18, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
function IcoLogout({ size=17, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}
function IcoX({ size=17, color='currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

// ─── Reusable Input ───────────────────────────────────────────────────────────
function Input({ type='text', value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type} value={value} onChange={onChange} placeholder={placeholder}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width:'100%', background:'var(--d3)',
        border: focused ? '1px solid var(--g500)' : '1px solid var(--bdr)',
        boxShadow: focused ? '0 0 0 3px rgba(74,222,128,0.08)' : 'none',
        borderRadius:'var(--rs)', padding:'12px 14px 12px 38px',
        fontSize:14, color:'var(--t1)', fontFamily:"'Plus Jakarta Sans',sans-serif",
        outline:'none', transition:'border-color .2s, box-shadow .2s'
      }}
    />
  );
}

// ─── Primary Button ───────────────────────────────────────────────────────────
function PrimaryBtn({ children, onClick, disabled, type='button' }) {
  const [hov, setHov] = useState(false);
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:'flex', alignItems:'center', justifyContent:'center', gap:8,
        width:'100%', padding:'13px 20px', borderRadius:'var(--rs)',
        border:'1px solid rgba(74,222,128,0.2)', cursor: disabled ? 'not-allowed' : 'pointer',
        background: hov && !disabled
          ? 'linear-gradient(135deg,var(--g600),var(--g500))'
          : 'linear-gradient(135deg,var(--g700),var(--g600))',
        boxShadow: hov && !disabled ? '0 4px 20px rgba(22,163,74,0.35)' : 'none',
        transform: hov && !disabled ? 'translateY(-1px)' : 'none',
        color:'#fff', fontSize:15, fontWeight:600,
        fontFamily:"'Plus Jakarta Sans',sans-serif",
        opacity: disabled ? 0.5 : 1, transition:'all .2s'
      }}>
      {children}
    </button>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────────
function ResultCard({ title, data, error }) {
  if (error) {
    return (
      <div className="fadeUp" style={{
        background:'rgba(239,68,68,0.06)', border:'1px solid rgba(239,68,68,0.2)',
        borderRadius:'var(--r)', overflow:'hidden', marginTop:20
      }}>
        <div style={{
          display:'flex', alignItems:'center', gap:10,
          padding:'14px 20px', background:'rgba(239,68,68,0.08)',
          borderBottom:'1px solid rgba(239,68,68,0.15)'
        }}>
          <span style={{fontSize:16}}>⚠️</span>
          <span style={{fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, color:'#f87171'}}>Error</span>
        </div>
        <p style={{padding:'14px 20px', color:'#fca5a5', fontSize:14, lineHeight:1.6}}>
          {data.error || 'Unknown error occurred.'}
        </p>
      </div>
    );
  }
  return (
    <div className="fadeUp" style={{
      background:'var(--d3)', border:'1px solid var(--bdrg)',
      borderRadius:'var(--r)', overflow:'hidden', marginTop:20
    }}>
      <div style={{
        display:'flex', alignItems:'center', gap:10,
        padding:'14px 20px', background:'rgba(74,222,128,0.05)',
        borderBottom:'1px solid rgba(74,222,128,0.1)'
      }}>
        <span style={{color:'var(--g400)', fontSize:16}}>✦</span>
        <span style={{fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, color:'var(--g400)'}}>
          {title}
        </span>
      </div>
      {Object.entries(data).map(([k, v]) => (
        <div key={k} style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          padding:'11px 20px', borderBottom:'1px solid rgba(255,255,255,0.04)', gap:16
        }}>
          <span style={{
            fontSize:13, fontWeight:500, color:'var(--t2)',
            textTransform:'capitalize', whiteSpace:'nowrap'
          }}>
            {k.replace(/_/g, ' ')}
          </span>
          <span style={{
            fontSize:14, fontWeight:700, color:'var(--t1)',
            textAlign:'right', maxWidth:'60%', wordBreak:'break-word',
            fontVariantNumeric:'tabular-nums'
          }}>
            {typeof v === 'object' ? JSON.stringify(v) : String(v)}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Map components ───────────────────────────────────────────────────────────
function MapBoundaryEnforcer() {
  const map = useMap();
  useEffect(() => {
    map.setMaxBounds(KA_LEAFLET_BOUNDS);
    map.on('drag', () => map.panInsideBounds(KA_LEAFLET_BOUNDS, { animate: false }));
  }, [map]);
  return null;
}

function MapClickHandler({ onMapClick }) {
  useMapEvents({ click(e) { onMapClick(e.latlng); } });
  return null;
}

// ─── Panel Header ─────────────────────────────────────────────────────────────
function PanelHeader({ badge, title, desc }) {
  return (
    <div style={{ marginBottom:28 }}>
      <div style={{
        display:'inline-flex', alignItems:'center', gap:6,
        background:'rgba(74,222,128,0.07)', border:'1px solid rgba(74,222,128,0.14)',
        color:'var(--g400)', fontSize:11, fontWeight:700,
        letterSpacing:'.06em', textTransform:'uppercase',
        padding:'5px 13px', borderRadius:100, marginBottom:14
      }}>
        {badge}
      </div>
      <div style={{
        fontFamily:"'Playfair Display',serif",
        fontSize:'clamp(22px,3vw,30px)', fontWeight:600, color:'var(--t1)', lineHeight:1.2
      }}>
        {title}
      </div>
      <p style={{ fontSize:15, fontWeight:300, color:'var(--t2)', marginTop:8, lineHeight:1.65, maxWidth:580 }}>
        {desc}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LOGIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [showReg, setShowReg]   = useState(false);
  const [reg, setReg]           = useState({ username:'', password:'', email:'' });
  const [regMsg, setRegMsg]     = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await authAPI.login({ username, password });
      onLoginSuccess(res.data.user.username);
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); setRegMsg('');
    try {
      const res = await authAPI.register(reg);
      setRegMsg('ok');
      setReg({ username:'', password:'', email:'' });
      setTimeout(() => { setShowReg(false); setRegMsg(''); }, 3000);
    } catch (err) {
      setRegMsg('err:' + (err.response?.data?.error || 'Registration failed.'));
    }
  };

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      padding:24, position:'relative', overflow:'hidden',
      background:'radial-gradient(ellipse at 15% 60%, #0a2218 0%, #080c10 55%), radial-gradient(ellipse at 85% 20%, #0f2a14 0%, transparent 50%)'
    }}>

      {/* Grid texture */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(74,222,128,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(74,222,128,0.025) 1px,transparent 1px)',
        backgroundSize:'52px 52px'
      }} />

      {/* Floating particles */}
      <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
        {Array.from({ length:14 }, (_, i) => (
          <div key={i} style={{
            position:'absolute', bottom:-10,
            left:`${i * 7 + 3}%`,
            width: i % 3 === 0 ? 4 : 6,
            height: i % 3 === 0 ? 4 : 6,
            background: i % 2 === 0 ? 'var(--g500)' : 'var(--gold)',
            borderRadius: i % 4 === 0 ? '2px' : '50%',
            animation:`floatUp ${9 + i * 0.8}s ease-in-out ${i * 0.6}s infinite`
          }} />
        ))}
      </div>

      {/* Register Modal */}
      {showReg && (
        <div
          onClick={(e) => e.target === e.currentTarget && setShowReg(false)}
          style={{
            position:'fixed', inset:0, background:'rgba(0,0,0,0.75)',
            backdropFilter:'blur(6px)', display:'flex', alignItems:'center',
            justifyContent:'center', zIndex:999, padding:20, animation:'fadeUp .2s ease both'
          }}>
          <div style={{
            background:'var(--d2)', border:'1px solid var(--bdr)', borderRadius:'var(--r)',
            boxShadow:'var(--sh)', padding:36, width:'100%', maxWidth:400, position:'relative'
          }}>
            <button
              onClick={() => setShowReg(false)}
              style={{
                position:'absolute', top:14, right:14, background:'var(--d3)',
                border:'1px solid var(--bdr)', borderRadius:8, padding:6,
                color:'var(--t2)', cursor:'pointer', display:'flex', alignItems:'center'
              }}>
              <IcoX />
            </button>
            <div style={{ textAlign:'center', marginBottom:24 }}>
              <IcoSprout size={34} color="var(--g400)" />
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:600, color:'var(--t1)', marginTop:10, marginBottom:4 }}>
                Create Account
              </div>
              <div style={{ fontSize:13, color:'var(--t3)' }}>Join the Krishi Sakhi community</div>
            </div>
            <form onSubmit={handleRegister} style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {['username','email','password'].map(field => (
                <div key={field} style={{ display:'flex', flexDirection:'column', gap:6 }}>
                  <label style={{ fontSize:12, fontWeight:500, color:'var(--t2)' }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div style={{ position:'relative' }}>
                    <input
                      type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                      required={field !== 'email'}
                      value={reg[field]}
                      placeholder={`Enter ${field}`}
                      onChange={(e) => setReg({ ...reg, [field]: e.target.value })}
                      style={{
                        width:'100%', background:'var(--d3)', border:'1px solid var(--bdr)',
                        borderRadius:'var(--rs)', padding:'11px 14px', fontSize:14,
                        color:'var(--t1)', fontFamily:"'Plus Jakarta Sans',sans-serif", outline:'none'
                      }}
                      onFocus={(e) => { e.target.style.borderColor='var(--g500)'; e.target.style.boxShadow='0 0 0 3px rgba(74,222,128,0.08)'; }}
                      onBlur={(e)  => { e.target.style.borderColor='var(--bdr)';  e.target.style.boxShadow='none'; }}
                    />
                  </div>
                </div>
              ))}
              <PrimaryBtn type="submit">Create Account</PrimaryBtn>
            </form>
            {regMsg && (
              <div style={{
                marginTop:14, padding:'10px 14px', borderRadius:'var(--rs)',
                fontSize:13, textAlign:'center',
                background: regMsg === 'ok' ? 'rgba(74,222,128,0.08)' : 'rgba(239,68,68,0.08)',
                border: regMsg === 'ok' ? '1px solid rgba(74,222,128,0.2)' : '1px solid rgba(239,68,68,0.2)',
                color: regMsg === 'ok' ? 'var(--g400)' : '#fca5a5'
              }}>
                {regMsg === 'ok' ? '✓ Account created! You can now sign in.' : regMsg.replace('err:','')}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main login layout */}
      <div style={{
        display:'flex', alignItems:'center', gap:64,
        maxWidth:1040, width:'100%', zIndex:1, animation:'fadeUp .55s ease both',
        flexWrap:'wrap', justifyContent:'center'
      }}>

        {/* Left hero */}
        <div style={{ flex:1, minWidth:280 }}>
          <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:52 }}>
            <div style={{
              width:54, height:54,
              background:'linear-gradient(135deg,var(--g800),var(--g500))',
              borderRadius:15, display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 0 0 1px rgba(74,222,128,0.2), 0 8px 32px rgba(22,163,74,0.3)'
            }}>
              <IcoSprout size={28} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:21, fontWeight:600, color:'var(--t1)', lineHeight:1 }}>
                Krishi Sakhi
              </div>
              <div style={{ fontSize:11, fontWeight:500, color:'var(--g400)', letterSpacing:'.08em', textTransform:'uppercase', marginTop:3 }}>
                AI Farming Intelligence
              </div>
            </div>
          </div>

          <h2 style={{
            fontFamily:"'Playfair Display',serif",
            fontSize:'clamp(34px,5vw,56px)', fontWeight:400,
            color:'var(--t1)', lineHeight:1.15, marginBottom:18
          }}>
            Grow Smarter.<br />
            <em style={{ color:'var(--g400)', fontStyle:'italic' }}>Farm Better.</em>
          </h2>

          <p style={{ fontSize:16, fontWeight:300, color:'var(--t2)', lineHeight:1.75, maxWidth:400, marginBottom:36 }}>
            AI-powered crop recommendations, disease detection and expert advice —
            built exclusively for <strong style={{ color:'var(--t1)', fontWeight:600 }}>Karnataka farmers</strong>.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginBottom:44 }}>
            {['🌾 Smart Crop Maps', '🔬 Disease Diagnosis', '🤖 AI Guidance'].map(f => (
              <span key={f} style={{
                fontSize:13, fontWeight:500, color:'var(--g400)',
                background:'rgba(74,222,128,0.06)', border:'1px solid rgba(74,222,128,0.14)',
                padding:'7px 14px', borderRadius:100
              }}>{f}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:36 }}>
            {[['V2.0','ML Model'],['15+','Crops'],['94%','Accuracy']].map(([v,l]) => (
              <div key={l} style={{ display:'flex', flexDirection:'column', gap:2 }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontSize:30, fontWeight:400, color:'var(--gold)' }}>{v}</span>
                <span style={{ fontSize:12, color:'var(--t3)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right login card */}
        <div style={{
          background:'var(--d2)', border:'1px solid var(--bdr)', borderRadius:24,
          boxShadow:'var(--sh)', padding:40, width:380, flexShrink:0
        }}>
          <div style={{ marginBottom:28 }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:600, color:'var(--t1)', marginBottom:4 }}>
              Welcome Back
            </div>
            <div style={{ fontSize:14, color:'var(--t3)' }}>Sign in to your account</div>
          </div>

          <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {[
              { label:'Username', type:'text',     val:username, set:setUsername },
              { label:'Password', type:'password', val:password, set:setPassword }
            ].map(({ label, type, val, set }) => (
              <div key={label} style={{ display:'flex', flexDirection:'column', gap:6 }}>
                <label style={{ fontSize:12, fontWeight:500, color:'var(--t2)' }}>{label}</label>
                <div style={{ position:'relative' }}>
                  <span style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'var(--t3)', pointerEvents:'none', fontSize:14, display:'flex' }}>
                    {label === 'Password' ? '🔒' : <IcoUser size={15} color="var(--t3)" />}
                  </span>
                  <input
                    type={type} value={val} placeholder={`Enter ${label.toLowerCase()}`}
                    onChange={(e) => set(e.target.value)}
                    style={{
                      width:'100%', background:'var(--d3)', border:'1px solid var(--bdr)',
                      borderRadius:'var(--rs)', padding:'12px 14px 12px 38px', fontSize:14,
                      color:'var(--t1)', fontFamily:"'Plus Jakarta Sans',sans-serif", outline:'none'
                    }}
                    onFocus={(e) => { e.target.style.borderColor='var(--g500)'; e.target.style.boxShadow='0 0 0 3px rgba(74,222,128,0.08)'; }}
                    onBlur={(e)  => { e.target.style.borderColor='var(--bdr)';  e.target.style.boxShadow='none'; }}
                  />
                </div>
              </div>
            ))}

            {error && (
              <div style={{
                display:'flex', alignItems:'center', gap:8,
                background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)',
                borderRadius:'var(--rs)', padding:'10px 14px'
              }}>
                <span style={{ fontSize:14 }}>⚠️</span>
                <span style={{ fontSize:13, color:'#fca5a5' }}>{error}</span>
              </div>
            )}

            <PrimaryBtn type="submit" disabled={loading}>
              {loading ? <><Spinner />Signing in…</> : 'Sign In →'}
            </PrimaryBtn>
          </form>

          <div style={{ display:'flex', alignItems:'center', gap:12, margin:'20px 0' }}>
            <div style={{ flex:1, height:1, background:'var(--bdr)' }} />
            <span style={{ fontSize:12, color:'var(--t3)' }}>or</span>
            <div style={{ flex:1, height:1, background:'var(--bdr)' }} />
          </div>

          <p style={{ fontSize:13, color:'var(--t3)', textAlign:'center' }}>
            New here?{' '}
            <button
              onClick={() => setShowReg(true)}
              style={{
                background:'none', border:'none', color:'var(--g400)', cursor:'pointer',
                fontSize:13, fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif"
              }}>
              Create free account
            </button>
          </p>
          <p style={{ fontSize:12, color:'var(--t3)', textAlign:'center', marginTop:10 }}>
            <a href="#!" style={{ color:'var(--t3)', textDecoration:'none' }}>Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════════
function Dashboard({ username, onLogout }) {
  const [tab, setTab]                   = useState('map');
  const [marker, setMarker]             = useState(null);
  const [mapResult, setMapResult]       = useState(null);
  const [mapLoading, setMapLoading]     = useState(false);
  const [outWarn, setOutWarn]           = useState(false);
  const [leafFile, setLeafFile]         = useState(null);
  const [leafPreview, setLeafPreview]   = useState(null);
  const [leafResult, setLeafResult]     = useState(null);
  const [leafLoading, setLeafLoading]   = useState(false);
  const [chatInput, setChatInput]       = useState('');
  const [chat, setChat]                 = useState([]);
  const [chatLoading, setChatLoading]   = useState(false);
  const chatEndRef = useRef(null);
  const fileRef    = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior:'smooth' });
  }, [chat, chatLoading]);

  // Map click
  const handleMapClick = async (latlng) => {
    const { lat, lng } = latlng;
    setOutWarn(false);
    if (!isInsideKarnataka(lat, lng)) {
      setOutWarn(true);
      setTimeout(() => setOutWarn(false), 3500);
      return;
    }
    setMarker(latlng); setMapLoading(true); setMapResult(null);
    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/recommend-from-location/',
        { latitude: parseFloat(lat.toFixed(6)), longitude: parseFloat(lng.toFixed(6)) },
        { timeout:12000 }
      );
      setMapResult({ data: res.data });
    } catch (err) {
      let msg = 'Failed to get recommendation. ';
      if (err.response) msg += `Server error: ${err.response.status}`;
      else if (err.request) msg += 'Backend is not responding. Make sure python manage.py runserver is running.';
      else msg += err.message;
      setMapResult({ error:true, data:{ error:msg } });
    } finally {
      setMapLoading(false);
    }
  };

  // Leaf doctor
  const handleLeafChange = (e) => {
    const f = e.target.files[0];
    if (f) { setLeafFile(f); setLeafPreview(URL.createObjectURL(f)); setLeafResult(null); }
  };

  const handleLeafSubmit = async () => {
    if (!leafFile) return;
    setLeafLoading(true); setLeafResult(null);
    const fd = new FormData(); fd.append('image', leafFile);
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/predict-disease-v2/', fd,
        { headers:{ 'Content-Type':'multipart/form-data' } });
      setLeafResult({ data: res.data });
    } catch {
      setLeafResult({ error:true, data:{ error:'Diagnosis failed. Is the backend running?' } });
    } finally {
      setLeafLoading(false);
    }
  };

  // Chat
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const next = [...chat, { role:'user', text:chatInput }];
    setChat(next); setChatInput(''); setChatLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/assistant/', { message:chatInput });
      setChat([...next, { role:'bot', text:res.data.response }]);
    } catch {
      setChat([...next, { role:'bot', text:"Sorry, I'm having trouble connecting. Please try again." }]);
    } finally {
      setChatLoading(false);
    }
  };

  const TABS = [
    { id:'map',  label:'Magic Map',    Icon:IcoMap   },
    { id:'doc',  label:'Crop Doctor',  Icon:IcoMicro },
    { id:'chat', label:'AI Assistant', Icon:IcoBot   },
  ];

  // ── Map Panel ──────────────────────────────────────────────────────────────
  function MapPanel() {
    return (
      <div className="fadeUp">
        <PanelHeader
          badge="📍 Karnataka AI"
          title="Magic Map Recommender"
          desc="Click anywhere inside Karnataka to get instant AI-powered crop recommendations. Clicks outside the state are blocked."
        />

        {outWarn && (
          <div className="fadeUp" style={{
            display:'flex', alignItems:'center', gap:10,
            background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.25)',
            borderRadius:'var(--rs)', padding:'12px 16px', marginBottom:16
          }}>
            <span style={{ fontSize:18 }}>⚠️</span>
            <span style={{ fontSize:13, fontWeight:500, color:'#fcd34d' }}>
              That location is outside Karnataka. Please click within the state boundary.
            </span>
          </div>
        )}

        <div style={{
          height:440, borderRadius:'var(--r)', overflow:'hidden',
          border:'1px solid var(--bdrg)', boxShadow:'0 4px 32px rgba(0,0,0,0.45)',
          position:'relative', marginBottom:16
        }}>
          <MapContainer
            center={KA_CENTER} zoom={7} minZoom={6} maxZoom={13}
            maxBounds={KA_LEAFLET_BOUNDS} maxBoundsViscosity={1.0}
            style={{ height:'100%', width:'100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <MapBoundaryEnforcer />
            <MapClickHandler onMapClick={handleMapClick} />
            <Polygon
              positions={KA_OUTLINE}
              pathOptions={{ color:'#4ade80', weight:2, opacity:0.5, fillColor:'#4ade80', fillOpacity:0.04, dashArray:'6,4' }}
            />
            {marker && <Marker position={marker} />}
          </MapContainer>
          <div style={{
            position:'absolute', bottom:16, left:'50%', transform:'translateX(-50%)',
            background:'rgba(8,12,16,0.88)', backdropFilter:'blur(10px)',
            border:'1px solid var(--bdrg)', color:'var(--g400)',
            fontSize:13, fontWeight:600, padding:'8px 18px', borderRadius:100,
            zIndex:900, pointerEvents:'none', whiteSpace:'nowrap'
          }}>
            🗺️ Karnataka — Click to get crop recommendation
          </div>
        </div>

        {mapLoading && (
          <div style={{ display:'flex', alignItems:'center', gap:10, padding:'14px 0' }}>
            <Spinner />
            <span style={{ fontSize:14, fontWeight:500, color:'var(--g400)' }}>
              Analyzing soil &amp; climate data…
            </span>
          </div>
        )}
        {mapResult && <ResultCard title="Crop Recommendation" {...mapResult} />}
      </div>
    );
  }

  // ── Doctor Panel ───────────────────────────────────────────────────────────
  function DoctorPanel() {
    const [uploadHov, setUploadHov] = useState(false);
    return (
      <div className="fadeUp">
        <PanelHeader
          badge="🔬 Disease AI"
          title="Multi-Crop Doctor V2"
          desc="Upload a clear photo of a Tomato, Potato, or Maize leaf. Our deep-learning model diagnoses diseases in seconds."
        />

        <div
          onClick={() => fileRef.current?.click()}
          onMouseEnter={() => setUploadHov(true)}
          onMouseLeave={() => setUploadHov(false)}
          style={{
            background: uploadHov ? 'rgba(74,222,128,0.03)' : 'var(--d3)',
            border: uploadHov ? '2px dashed rgba(74,222,128,0.35)' : '2px dashed var(--d5)',
            borderRadius:'var(--r)', padding:'36px 40px',
            cursor:'pointer', marginBottom:16, transition:'all .2s'
          }}>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleLeafChange} style={{ display:'none' }} />
          {leafPreview ? (
            <div style={{ position:'relative' }}>
              <img src={leafPreview} alt="Leaf preview" style={{ maxHeight:220, borderRadius:12, display:'block', margin:'0 auto' }} />
              <div style={{
                position:'absolute', inset:0, background:'rgba(0,0,0,0.5)',
                display:'flex', alignItems:'center', justifyContent:'center',
                borderRadius:12, opacity: uploadHov ? 1 : 0, transition:'opacity .2s'
              }}>
                <span style={{ fontSize:14, fontWeight:600, color:'#fff' }}>Click to change image</span>
              </div>
            </div>
          ) : (
            <div style={{ textAlign:'center' }}>
              <div style={{
                width:64, height:64, background:'rgba(74,222,128,0.08)', borderRadius:16,
                display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px'
              }}>
                <IcoUpload size={26} color="var(--g400)" />
              </div>
              <div style={{ fontSize:16, fontWeight:600, color:'var(--t1)', marginBottom:6 }}>
                Drop your leaf photo here
              </div>
              <div style={{ fontSize:13, color:'var(--t3)' }}>
                or click to browse · JPG PNG WEBP
              </div>
            </div>
          )}
        </div>

        <PrimaryBtn onClick={handleLeafSubmit} disabled={!leafFile || leafLoading}>
          {leafLoading ? <><Spinner />Diagnosing…</> : '🔍 Diagnose Plant'}
        </PrimaryBtn>

        {leafResult && <ResultCard title="Diagnosis Result" {...leafResult} />}
      </div>
    );
  }

  // ── Chat Panel ─────────────────────────────────────────────────────────────
  function ChatPanel() {
    return (
      <div className="fadeUp" style={{ display:'flex', flexDirection:'column', height:'calc(100vh - 112px)' }}>
        <PanelHeader
          badge="🤖 AI Powered"
          title="Farming AI Assistant"
          desc="Ask anything about Karnataka farming — crops, soil, weather, government schemes, irrigation and more."
        />

        <div style={{ flex:1, overflowY:'auto', background:'var(--d3)', borderRadius:'var(--r)', border:'1px solid var(--bdr)', padding:20, display:'flex', flexDirection:'column', gap:12, marginBottom:12 }}>
          {chat.length === 0 && (
            <div style={{ margin:'auto', textAlign:'center', padding:32 }}>
              <div style={{ fontSize:42, marginBottom:12 }}>🌱</div>
              <p style={{ fontSize:15, color:'var(--t2)', marginBottom:20 }}>Ask your farming AI anything</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center' }}>
                {['Best crops for Mysore district?','Drip irrigation setup tips?','PM Fasal Bima scheme?','Soil testing labs in Bangalore?'].map(s => (
                  <button key={s} onClick={() => setChatInput(s)}
                    style={{
                      fontSize:13, fontWeight:500, color:'var(--t2)',
                      background:'var(--d4)', border:'1px solid var(--bdr)',
                      padding:'8px 14px', borderRadius:100, cursor:'pointer',
                      fontFamily:"'Plus Jakarta Sans',sans-serif", transition:'all .15s'
                    }}
                    onMouseEnter={(e) => { e.target.style.borderColor='var(--bdrg)'; e.target.style.color='var(--g400)'; }}
                    onMouseLeave={(e) => { e.target.style.borderColor='var(--bdr)';  e.target.style.color='var(--t2)';  }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {chat.map((m, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'flex-end', gap:10,
              flexDirection: m.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{
                width:28, height:28, borderRadius:'50%', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
                background: m.role === 'bot'
                  ? 'linear-gradient(135deg,var(--g800),var(--g600))'
                  : 'var(--d5)'
              }}>
                {m.role === 'bot'
                  ? <IcoSprout size={14} color="#fff" />
                  : <IcoUser size={14} color="var(--t2)" />
                }
              </div>
              <div className="fadeUp" style={{
                maxWidth:'72%', padding:'12px 16px', fontSize:14, lineHeight:1.65,
                borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: m.role === 'user'
                  ? 'linear-gradient(135deg,var(--g800),var(--g700))'
                  : 'var(--d4)',
                color: m.role === 'user' ? '#e8f5e8' : 'var(--t1)'
              }}>
                {m.text}
              </div>
            </div>
          ))}

          {chatLoading && (
            <div style={{ display:'flex', alignItems:'flex-end', gap:10 }}>
              <div style={{
                width:28, height:28, borderRadius:'50%',
                background:'linear-gradient(135deg,var(--g800),var(--g600))',
                display:'flex', alignItems:'center', justifyContent:'center'
              }}>
                <IcoSprout size={14} color="#fff" />
              </div>
              <div style={{ padding:'14px 18px', background:'var(--d4)', borderRadius:'16px 16px 16px 4px', display:'flex', gap:5, alignItems:'center' }}>
                {[0, 0.2, 0.4].map(d => (
                  <span key={d} style={{
                    width:7, height:7, background:'var(--t3)', borderRadius:'50%',
                    animation:`pulseDot 1.2s ease-in-out ${d}s infinite`,
                    display:'inline-block'
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleChatSubmit} style={{
          display:'flex', gap:10, background:'var(--d3)',
          border:'1px solid var(--bdr)', borderRadius:14, padding:8
        }}>
          <input
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask about farming, crops, schemes, soil…"
            style={{
              flex:1, background:'transparent', border:'none', outline:'none',
              padding:'10px 12px', fontSize:14, color:'var(--t1)',
              fontFamily:"'Plus Jakarta Sans',sans-serif"
            }}
          />
          <button type="submit" disabled={chatLoading}
            style={{
              background:'linear-gradient(135deg,var(--g700),var(--g600))',
              border:'none', color:'#fff', width:42, height:42, borderRadius:10,
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor: chatLoading ? 'not-allowed' : 'pointer',
              opacity: chatLoading ? 0.5 : 1, flexShrink:0, transition:'all .15s'
            }}>
            <IcoSend />
          </button>
        </form>
      </div>
    );
  }

  // ── Sidebar nav button ─────────────────────────────────────────────────────
  function NavBtn({ id, label, Icon }) {
    const active = tab === id;
    const [hov, setHov] = useState(false);
    return (
      <button
        onClick={() => setTab(id)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display:'flex', alignItems:'center', gap:12,
          padding:'11px 14px', borderRadius:'var(--rs)', width:'100%', textAlign:'left',
          border: active ? '1px solid rgba(74,222,128,0.2)' : '1px solid transparent',
          background: active ? 'rgba(74,222,128,0.09)' : hov ? 'var(--d3)' : 'transparent',
          color: active ? 'var(--g400)' : hov ? 'var(--t2)' : 'var(--t3)',
          fontSize:14, fontWeight: active ? 600 : 500,
          fontFamily:"'Plus Jakarta Sans',sans-serif", cursor:'pointer', transition:'all .15s'
        }}>
        <Icon size={19} color={active ? 'var(--g400)' : 'currentColor'} />
        <span>{label}</span>
        {active && <span style={{ marginLeft:'auto', width:6, height:6, borderRadius:'50%', background:'var(--g400)' }} />}
      </button>
    );
  }

  return (
    <div style={{ display:'flex', height:'100vh', overflow:'hidden', background:'var(--d1)' }}>

      {/* ── Sidebar ── */}
      <aside className="slideIn" style={{
        width:232, minWidth:232, background:'var(--d2)',
        borderRight:'1px solid var(--bdr)', display:'flex',
        flexDirection:'column', justifyContent:'space-between', padding:'22px 14px'
      }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:12, padding:'0 8px', marginBottom:44 }}>
            <div style={{
              width:38, height:38,
              background:'linear-gradient(135deg,var(--g800),var(--g500))',
              borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 16px rgba(22,163,74,0.25)'
            }}>
              <IcoSprout size={20} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:600, color:'var(--t1)' }}>
                Krishi Sakhi
              </div>
              <div style={{ fontSize:10, fontWeight:600, color:'var(--g400)', letterSpacing:'.07em', textTransform:'uppercase' }}>
                V2.0
              </div>
            </div>
          </div>

          <div style={{ fontSize:10, fontWeight:700, color:'var(--t3)', letterSpacing:'.1em', textTransform:'uppercase', padding:'0 14px', marginBottom:10 }}>
            Navigation
          </div>

          <nav style={{ display:'flex', flexDirection:'column', gap:3 }}>
            {TABS.map(t => <NavBtn key={t.id} {...t} />)}
          </nav>

          {/* Karnataka badge */}
          <div style={{
            margin:'32px 8px 0', padding:14,
            background:'rgba(74,222,128,0.05)', border:'1px solid rgba(74,222,128,0.12)',
            borderRadius:'var(--rs)', display:'flex', flexDirection:'column', gap:6
          }}>
            <div style={{ fontSize:11, fontWeight:700, color:'var(--g400)', letterSpacing:'.06em', textTransform:'uppercase' }}>
              📍 Region
            </div>
            <div style={{ fontSize:13, fontWeight:600, color:'var(--t1)' }}>Karnataka, India</div>
            <div style={{ fontSize:12, color:'var(--t3)' }}>Map restricted to state boundary</div>
          </div>
        </div>

        {/* User row */}
        <div style={{
          display:'flex', alignItems:'center', gap:10,
          padding:'12px 8px', borderTop:'1px solid var(--bdr)', marginTop:16
        }}>
          <div style={{
            width:34, height:34, background:'var(--d4)', borderRadius:'50%',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--t2)', flexShrink:0
          }}>
            <IcoUser size={16} color="var(--t2)" />
          </div>
          <div style={{ flex:1, minWidth:0, overflow:'hidden' }}>
            <div style={{ fontSize:13, fontWeight:600, color:'var(--t1)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
              {username}
            </div>
            <div style={{ fontSize:11, color:'var(--g400)' }}>Farmer Pro</div>
          </div>
          <button
            onClick={onLogout}
            title="Logout"
            style={{
              background:'transparent', border:'none', color:'var(--t3)',
              cursor:'pointer', padding:6, borderRadius:8,
              display:'flex', alignItems:'center', transition:'all .15s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color='#f87171'; e.currentTarget.style.background='rgba(248,113,113,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color='var(--t3)'; e.currentTarget.style.background='transparent'; }}>
            <IcoLogout />
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' }}>

        {/* Mobile header */}
        <header style={{
          display:'none', padding:'14px 18px 0',
          flexDirection:'column', gap:10,
          borderBottom:'1px solid var(--bdr)', background:'var(--d2)'
        }} id="ks-mob-header">
          <div style={{ display:'flex', alignItems:'center', gap:8, fontFamily:"'Playfair Display',serif", fontSize:18, color:'var(--t1)' }}>
            <IcoSprout size={18} color="var(--g400)" /> Krishi Sakhi
          </div>
          <div style={{ display:'flex', gap:4 }}>
            {TABS.map(({ id, label, Icon }) => (
              <button key={id} onClick={() => setTab(id)}
                style={{
                  display:'flex', alignItems:'center', gap:5,
                  padding:'7px 12px', borderRadius:8, border:'none',
                  background: tab === id ? 'rgba(74,222,128,0.1)' : 'transparent',
                  color: tab === id ? 'var(--g400)' : 'var(--t3)',
                  fontSize:12, fontWeight: tab === id ? 600 : 400,
                  fontFamily:"'Plus Jakarta Sans',sans-serif", cursor:'pointer'
                }}>
                <Icon size={14} color="currentColor" />{label}
              </button>
            ))}
          </div>
        </header>

        <div style={{ flex:1, overflowY:'auto', padding:32 }}>
          <div style={{ maxWidth:800 }}>
            {tab === 'map'  && <MapPanel />}
            {tab === 'doc'  && <DoctorPanel />}
            {tab === 'chat' && <ChatPanel />}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          aside { display: none !important; }
          #ks-mob-header { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'login', 'dashboard'
  const [user, setUser] = useState(null);

  const handleGetStarted = () => {
    if (user) {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('login');
    }
  };

  const handleLoginSuccess = (username) => {
    setUser(username);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  if (currentPage === 'login') {
    return (
      <>
        <StyleSheet />
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <>
      <StyleSheet />
      <Dashboard username={user} onLogout={handleLogout} />
    </>
  );
}

export default App;
