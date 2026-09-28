import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  ChefHat,
  ChevronDown,
  Clock3,
  Heart,
  Menu,
  Moon,
  Search,
  Sparkles,
  Star,
  Sun,
  X,
  Zap,
} from "lucide-react";

const suggestedIngredients = ["กระเทียม", "ไข่ไก่", "ใบกะเพรา", "พริก", "ข้าวสวย"];
const initialPantry: string[] = [];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [pantryInput, setPantryInput] = useState("");
  const [pantry, setPantry] = useState(initialPantry);
  const [committedQuery, setCommittedQuery] = useState("");
  const [committedPantry, setCommittedPantry] = useState(initialPantry);
  const [filters, setFilters] = useState<{ sort?: "match" | "fast" | "rating" }>({ sort: "match" });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const searchInput = useMemo(() => ({ query: committedQuery, pantry: committedPantry, filters }), [committedQuery, committedPantry, filters]);
  const { data, isFetching } = trpc.recipes.search.useQuery(searchInput, { staleTime: 30_000 });
  const results = data?.results ?? [];
  const selected = results.find((recipe) => recipe.id === selectedId);

  const runSearch = () => {
    setCommittedQuery(query.trim());
    setCommittedPantry(pantry);
  };

  const addPantry = (value: string) => {
    const clean = value.trim();
    if (!clean || pantry.includes(clean)) return;
    setPantry((current) => [...current, clean]);
    setPantryInput("");
  };

  const toggleSave = (id: string) => {
    setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#171412] text-[#f5eee7]">
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#171412]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 lg:px-8">
          <button className="brand-lockup" onClick={() => { setQuery(""); setCommittedQuery(""); setPantry([]); setCommittedPantry([]); }}>
            <span className="brand-mark"><ChefHat size={18} strokeWidth={2.5} /></span>
            <span>
              <strong>Today Menu</strong>
              <small>วันนี้กินอะไรดี</small>
            </span>
          </button>
          <nav className="hidden items-center gap-8 text-sm text-[#b3aaa3] md:flex">
            <a className="nav-link nav-link-active" href="#discover">ค้นพบเมนู</a>
            <button className="nav-link" onClick={() => window.alert(`คุณบันทึกไว้ ${savedIds.length} เมนู`)}>เมนูที่บันทึก</button>
            <a className="nav-link" href="#how-it-works">วิธีใช้งาน</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[#e28a4d]/25 bg-[#e28a4d]/10 px-3 py-2 text-xs text-[#f2b179] sm:flex">
              <Sparkles size={13} /> ค้นหาแบบเข้าใจคุณ
            </div>
            <button className="theme-toggle" type="button" onClick={() => toggleTheme?.()} aria-label={theme === "dark" ? "เปลี่ยนเป็น Light theme" : "เปลี่ยนเป็น Dark theme"} title={theme === "dark" ? "Light theme" : "Dark theme"}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
            <button className="menu-button md:hidden" aria-label="เปิดเมนู" onClick={() => setShowMobileMenu((open) => !open)}><Menu size={20} /></button>
          </div>
        </div>
        {showMobileMenu && <div className="mobile-menu md:hidden"><a href="#discover" onClick={() => setShowMobileMenu(false)}>ค้นพบเมนู</a><a href="#how-it-works" onClick={() => setShowMobileMenu(false)}>วิธีใช้งาน</a><button onClick={() => window.alert(`คุณบันทึกไว้ ${savedIds.length} เมนู`)}>เมนูที่บันทึก</button></div>}
      </header>

      <main id="discover" className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-8">
        <section className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> วันนี้กินอะไรดี</div>
            <h1>เปลี่ยนวัตถุดิบ<br /><em>ให้เป็นมื้อโปรด</em></h1>
            <p className="hero-subtitle">พิมพ์สิ่งที่คุณมี แล้วให้เราช่วยค้นหาเมนูที่เข้ากับครัวของคุณที่สุด</p>
          </div>
          <div className="hero-stamp"><span>made with</span><strong>care</strong><span>for hungry days</span></div>
        </section>

        <section className="search-panel" aria-label="ค้นหาสูตรอาหาร">
          <div className="search-row">
            <Search className="search-icon" size={23} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => { if (event.key === "Enter") runSearch(); }}
              placeholder="เช่น ไก่, ไข่, เห็ด..."
              aria-label="คำค้นหาเมนูอาหาร"
            />
            {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="ล้างคำค้น"><X size={17} /></button>}
            <Button className="search-submit" onClick={runSearch}><span className="hidden sm:inline">ค้นหาเมนู</span><ArrowRight size={18} /></Button>
          </div>
          <div className="pantry-label"><span>วัตถุดิบ</span><span className="pantry-hint">เลือกได้มากกว่า 1 อย่าง</span></div>
          <div className="pantry-row">
            {pantry.map((ingredient) => <span className="pantry-chip" key={ingredient}>{ingredient}<button onClick={() => setPantry((current) => current.filter((item) => item !== ingredient))} aria-label={`ลบ ${ingredient}`}><X size={14} /></button></span>)}
            <div className="pantry-add"><input value={pantryInput} onChange={(event) => setPantryInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") addPantry(pantryInput); }} placeholder="เพิ่มวัตถุดิบอีก..." /><button onClick={() => addPantry(pantryInput)} aria-label="เพิ่มวัตถุดิบ"><ChevronDown size={17} /></button></div>
          </div>
          <div className="suggestion-row"><span className="suggestion-label">ลองเพิ่ม:</span>{suggestedIngredients.map((ingredient) => <button key={ingredient} className="suggestion" onClick={() => addPantry(ingredient)}>+ {ingredient}</button>)}</div>
        </section>

        <section className="results-heading">
          <div><div className="section-kicker"><span className="live-dot" /> ผลลัพธ์จากครัวของคุณ</div><h2>{isFetching ? "กำลังค้นหาเมนู..." : `${results.length} เมนูที่น่าลอง`}</h2><p>{data?.retrieval.method} · วิเคราะห์จาก {data?.retrieval.candidateCount ?? 0} สูตร</p></div>
          <div className="result-actions"><div className="sort-control"><span>เรียงตาม</span><select value={filters.sort ?? "match"} onChange={(event) => setFilters((current) => ({ ...current, sort: event.target.value as "match" | "fast" | "rating" }))}><option value="match">ตรงกับวัตถุดิบ</option><option value="fast">เร็วที่สุด</option><option value="rating">เรตติ้งสูงสุด</option></select><ChevronDown size={15} /></div><div className="retrieval-note"><Zap size={15} /> <span>จับคู่ให้แล้ว {committedQuery || "ทุกวัตถุดิบ"}</span></div></div>
        </section>

        {results.length > 0 ? <div className="recipe-grid">{results.map((recipe, index) => <article className="recipe-card" key={recipe.id} style={{ "--card-accent": recipe.accent, "--delay": `${Math.min(index, 8) * 35}ms` } as React.CSSProperties}>
          <button className="recipe-image-wrap" onClick={() => setSelectedId(recipe.id)} aria-label={`ดูสูตร ${recipe.title}`}><img src={recipe.image} alt={recipe.title} /><div className="image-overlay" /><span className="match-badge">{recipe.matchPercent}% ตรงใจ</span><span className="time-badge"><Clock3 size={13} /> {recipe.time} นาที</span></button>
          <div className="recipe-content"><div className="card-topline"><span className="recipe-category">{recipe.tags.includes("vegetarian") ? "PLANT-BASED" : "THAI COMFORT"}</span><button className={`save-button ${savedIds.includes(recipe.id) ? "saved" : ""}`} onClick={() => toggleSave(recipe.id)} aria-label={savedIds.includes(recipe.id) ? "ยกเลิกบันทึก" : "บันทึกสูตร"}>{savedIds.includes(recipe.id) ? <Heart size={17} fill="currentColor" /> : <Bookmark size={17} />}</button></div><button className="recipe-title-button" onClick={() => setSelectedId(recipe.id)}><h3>{recipe.title}</h3><span>{recipe.subtitle}</span></button><div className="recipe-meta"><span><Star size={14} fill="currentColor" /> {recipe.rating}</span><span><Clock3 size={14} /> {recipe.time} นาที</span><span>{recipe.difficulty}</span></div><p className="recipe-reason"><span className="reason-check">✓</span>{recipe.reason}</p></div>
        </article>)}</div> : <div className="empty-state"><div className="empty-icon"><Search size={28} /></div><h3>ยังไม่เจอเมนูที่ใช่</h3><p>ลองเปลี่ยนคำค้นหา หรือเพิ่มวัตถุดิบอื่น เช่น “ไข่” หรือ “ผัก”</p><button onClick={() => { setFilters({ sort: "match" }); setQuery(""); setCommittedQuery(""); setPantry([]); setCommittedPantry([]); }}>กลับไปดูเมนูแนะนำ</button></div>}

        <section id="how-it-works" className="ir-explainer"><div className="ir-icon"><Sparkles size={21} /></div><div><span className="section-kicker">เบื้องหลังความอร่อย</span><h2>ค้นหาแบบเข้าใจบริบท ไม่ใช่แค่คำตรง ๆ</h2><p>Today Menu ใช้ระบบจัดอันดับแบบ keyword + pantry matching เพื่อดูทั้งคำค้น วัตถุดิบที่มี และตัวกรอง แล้วเรียงเมนูที่เหมาะกับคุณขึ้นมาก่อน</p></div><div className="ir-stat"><strong>0.08s</strong><span>เวลาค้นหาเฉลี่ย</span></div></section>
      </main>

      {selected && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`รายละเอียด ${selected.title}`} onClick={(event) => { if (event.target === event.currentTarget) setSelectedId(null); }}><div className="recipe-modal"><button className="modal-close" onClick={() => setSelectedId(null)} aria-label="ปิด"><X size={19} /></button><div className="modal-image"><img src={selected.image} alt={selected.title} /></div><div className="modal-body"><span className="recipe-category">{selected.tags.includes("vegetarian") ? "PLANT-BASED" : "THAI COMFORT"}</span><h2>{selected.title}</h2><p className="modal-description">{selected.description}</p><div className="modal-stats"><span><Clock3 size={15} /> {selected.time} นาที</span><span><Star size={15} fill="currentColor" /> {selected.rating}</span><span><ChefHat size={15} /> {selected.servings} ที่</span></div><div className="modal-columns"><div><h3>วัตถุดิบ</h3><ul>{selected.ingredients.map((ingredient) => <li key={ingredient}><span />{ingredient}</li>)}</ul></div><div><h3>วิธีทำ</h3><ol>{selected.steps.map((step) => <li key={step}>{step}</li>)}</ol></div></div><button className="modal-save" onClick={() => toggleSave(selected.id)}>{savedIds.includes(selected.id) ? <Heart size={17} fill="currentColor" /> : <Bookmark size={17} />} {savedIds.includes(selected.id) ? "บันทึกแล้ว" : "บันทึกสูตรนี้"}</button></div></div></div>}

      <footer className="site-footer"><div><span className="brand-mark small"><ChefHat size={15} /></span> <strong>Today Menu</strong></div><span>มื้อที่ดี เริ่มจากสิ่งที่มีอยู่แล้ว</span></footer>
    </div>
  );
}
