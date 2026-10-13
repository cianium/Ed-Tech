import { PILOT_FEATURES } from "@/lib/security/pilot-policy";

const journey = [
  { index: "01", title: "Choose a learning goal", detail: "English or German · Initial level intake" },
  { index: "02", title: "Learn and practice", detail: "Curated lessons, exercises and feedback" },
  { index: "03", title: "Track real progress", detail: "Activities completed, not XP alone" },
] as const;

export default function HomePage() {
  return (
    <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-7 sm:pt-10 lg:px-10">
      <header className="flex flex-wrap items-center justify-between gap-4" aria-label="Site header">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-700)] text-lg font-semibold text-white" aria-hidden="true">H</div>
          <div>
            <p className="font-semibold tracking-tight">HiTech Learn</p>
            <p className="text-xs text-[var(--ink-600)]">Learning, designed around you.</p>
          </div>
        </div>
        <span className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-medium text-[var(--ink-600)]">M0 · Foundation only</span>
      </header>

      <section className="mt-12 grid gap-9 md:mt-20 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-12" aria-labelledby="hero-title">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.12em] text-[var(--brand-700)] uppercase">ENGLISH + GERMAN · PILOT PLANNING</p>
          <h1 id="hero-title" className="max-w-xl text-4xl leading-[1.13] font-semibold tracking-tight sm:text-5xl">A calmer way to make learning progress.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[var(--ink-600)]">HiTech Learn is being built for independent learners and language academies. The learning experience is not available yet.</p>
          <a className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--brand-700)] px-6 py-3 font-semibold text-white hover:bg-[#105552] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus)]" href="#status">View foundation status <span aria-hidden="true" className="ml-2">↘</span></a>
          <p className="mt-4 text-sm text-[var(--ink-600)]">No sign-up, user tracking, payments or AI calls are active.</p>
        </div>
        <aside aria-label="Proposed learner flow" className="rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-[0_18px_60px_rgba(20,38,59,0.06)] sm:p-7">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-5">
            <div><p className="font-semibold">A day of learning</p><p className="mt-1 text-sm text-[var(--ink-600)]">Concept preview · no user data</p></div>
            <span className="rounded-lg bg-[var(--surface-50)] px-2 py-1 text-xs">Preview</span>
          </div>
          <ol className="mt-6 space-y-5">
            {journey.map((step) => (
              <li className="flex gap-4" key={step.index}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E7F1F0] text-sm font-bold text-[var(--brand-700)]">{step.index}</span>
                <div><h2 className="font-semibold">{step.title}</h2><p className="mt-1 text-sm leading-6 text-[var(--ink-600)]">{step.detail}</p></div>
              </li>
            ))}
          </ol>
          <div className="mt-7 rounded-xl bg-[var(--surface-50)] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-600)]">Language support · RTL ready</p>
            <p lang="de" dir="ltr" className="mt-2 text-sm font-medium">Schritt für Schritt lernen.</p>
            <p lang="fa" dir="rtl" className="mt-2 text-sm font-medium">یادگیری، قدم‌به‌قدم</p>
          </div>
        </aside>
      </section>
      <section id="status" className="mt-14 rounded-2xl border border-[var(--border)] bg-white p-5 sm:mt-20 sm:p-7" aria-labelledby="status-title">
        <div className="flex flex-wrap items-center justify-between gap-3"><h2 id="status-title" className="text-xl font-semibold">Build status</h2><span className="rounded-lg bg-[#FFF5E8] px-3 py-2 text-xs font-semibold text-[#805009]">Not ready for real users</span></div>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-600)]">This foundation page is not an invitation to register. Security, guardian verification, tenant-isolated data and the learning journeys will be developed and tested in later milestones.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-[var(--surface-50)] p-4"><p className="font-semibold">M0 · Foundation</p><p className="mt-2 text-sm text-[var(--ink-600)]">Source structure, architecture decisions and local checks</p></div>
          <div className="rounded-xl bg-[var(--surface-50)] p-4"><p className="font-semibold">M1 · Access safety</p><p className="mt-2 text-sm text-[var(--ink-600)]">Authentication, guardian permissions and tenant RLS</p></div>
          <div className="rounded-xl bg-[var(--surface-50)] p-4"><p className="font-semibold">M2 · Learning</p><p className="mt-2 text-sm text-[var(--ink-600)]">Actual English and German learning workflows</p></div>
        </div>
        <p className="mt-5 text-xs text-[var(--ink-600)]">Pilot restrictions: minors {PILOT_FEATURES.realMinorActivation ? "enabled" : "disabled"}; payments {PILOT_FEATURES.payments ? "enabled" : "disabled"}; AI {PILOT_FEATURES.aiTutor ? "enabled" : "disabled"}.</p>
      </section>
      <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--ink-600)]"><span>© HiTech Learn · Project foundation</span><span>No accounts or data collection in M0</span></footer>
    </main>
  );
}
