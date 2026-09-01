'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Factory, Menu, Play, Radio, Settings2, X } from 'lucide-react'

const flow = [
  ['FEEDSTOCK', '4.8 t/h'],
  ['MIXING TANK', '72% level'],
  ['ANAEROBIC DIGESTER', '35.2°C'],
  ['GAS HOLDER', '1.21 bar'],
  ['UPGRADING', '62.4% CH₄'],
  ['CBG OUTPUT', '428 kg/day'],
]

function DataTile({ label, value, unit, cyan = false }: { label: string; value: string; unit: string; cyan?: boolean }) {
  return <div className={`data-tile ${cyan ? 'cyan' : ''}`}><span>{label}</span><strong>{value}<i>{unit}</i></strong></div>
}

function ProductionChart() {
  return <div className="production-chart" aria-label="CBG output over the last 24 hours"><div className="chart-labels"><span>CBG OUTPUT / 24H</span><b>428 <i>kg/day</i></b></div><svg viewBox="0 0 520 108" preserveAspectRatio="none" role="img" aria-label="Production trend rising over 24 hours"><path className="chart-grid" d="M0 24H520M0 54H520M0 84H520"/><path className="chart-fill" d="M0 83 L32 80 L64 84 L96 65 L128 71 L160 53 L192 61 L224 45 L256 49 L288 30 L320 38 L352 26 L384 34 L416 17 L448 25 L480 11 L520 16 V108 H0Z"/><path className="chart-line" d="M0 83 L32 80 L64 84 L96 65 L128 71 L160 53 L192 61 L224 45 L256 49 L288 30 L320 38 L352 26 L384 34 L416 17 L448 25 L480 11 L520 16"/></svg><div className="chart-times"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div></div>
}

function PlantTwin() {
  return <div className="plant-panel"><div className="panel-head"><span><span className="live-dot" /> LIVE PLANT DIGITAL TWIN</span><b>DHENU-001 / <em>ALL SYSTEMS NORMAL</em></b></div><div className="plant-canvas"><div className="scanline" />{flow.map(([label, value], index) => <div className={`process-node p${index}`} key={label}><span className="node-pulse" /><small>{String(index + 1).padStart(2, '0')}</small><strong>{label}</strong><b>{value}</b></div>)}{flow.slice(0, 5).map((_, index) => <div className={`connector c${index}`} key={`c${index}`} />)}<div className="plant-grid" /><div className="plant-coords">28.6139° N<br/>77.2090° E</div></div><div className="data-grid"><DataTile label="TEMPERATURE" value="35.2" unit="°C"/><DataTile label="pH" value="7.10" unit=""/><DataTile label="METHANE" value="62.4" unit="%" cyan/><DataTile label="GAS FLOW" value="42.3" unit="m³/h" cyan/><DataTile label="PRESSURE" value="1.21" unit="bar"/><DataTile label="CBG OUTPUT" value="428" unit="kg/day" cyan/></div><div className="plant-footer"><div><span>PLANT HEALTH</span><strong>91 <i>/ 100</i></strong></div><b className="healthy"><span className="live-dot" /> HEALTHY</b><ProductionChart /></div></div>
}

export default function App() {
  const [menu, setMenu] = useState(false)
  return <main><header className="operator-nav"><a className="brand" href="#top"><span className="brand-mark">+</span>Dhenu<span>Shakti</span></a><nav className={menu ? 'nav-links open' : 'nav-links'}>{['Plant Operations', 'Live Monitoring', 'Optimizer', 'Reports'].map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item} onClick={() => setMenu(false)}>{item}</a>)}<button className="login-button">Operator login <ArrowRight size={14} /></button></nav><button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button></header><section className="operator-hero wrap" id="top"><div className="operator-copy"><span className="eyebrow"><span className="live-dot" /> CBG PLANT INTELLIGENCE</span><h1>Run your plant<br/>with <em>intelligence.</em></h1><p>Monitor plant conditions, understand production trends, optimize feedstock and make data-driven operational decisions from a single control platform.</p><div className="hero-actions"><button className="btn">Open plant dashboard <ArrowRight size={15} /></button><button className="btn btn-outline"><Play size={14} /> See live plant</button></div><div className="status-line"><span><span className="live-dot" /> PLANT ONLINE</span><b>DHENU-001</b><span>LAST SYNC <strong>12:42:31 PM</strong></span></div></div><PlantTwin /></section><section className="info-strip"><div className="wrap strip-inner">{[['FEEDSTOCK','4.8 t/h'],['PRODUCTION','428 kg/day'],['EFFICIENCY','86.2%'],['PLANT HEALTH','91 / 100'],['ALERTS','0 active']].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><ChevronDown size={13} /></div>)}</div></section><section className="operator-note wrap"><div><span className="eyebrow">OPERATOR CONTROL SURFACE / 01</span><h2>Every signal.<br/><em>One decision.</em></h2></div><p>DhenuShakti gives plant operators a real-time view of the biological and mechanical systems that keep CBG production moving.</p><div className="note-card"><Factory size={22}/><span>FACILITY MODE</span><strong>CONTINUOUS<br/>OPERATIONS</strong><Settings2 size={18}/></div></section></main>
}
