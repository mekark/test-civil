"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  className?: string;
};

/**
 * Dropdown whose option list opens inside the field (absolutely positioned under it),
 * so it can never spill past the screen edge like a native <select> popup can.
 * A visually hidden native <select> keeps form submission and `required` validation working.
 */
export default function FormSelect({
  id,
  name,
  placeholder,
  options,
  required,
  className = "",
}: Props) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  function choose(o: string) {
    setValue(o);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActive(Math.max(options.indexOf(value), 0));
        return;
      }
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((a) => (a + step + options.length) % options.length);
    }
    if ((e.key === "Enter" || e.key === " ") && open && active >= 0) {
      e.preventDefault();
      choose(options[active]);
    }
  }

  return (
    <div ref={root} className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0"
      >
        <option value="" />
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <button
        type="button"
        id={id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((o) => !o);
          setActive(Math.max(options.indexOf(value), 0));
        }}
        onKeyDown={onKeyDown}
        className={`${className} flex items-center justify-between gap-2 text-left ${
          value ? "text-[#111]" : "text-[#757575]"
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute top-full right-0 left-0 z-50 mt-1 max-h-56 overflow-y-auto rounded-lg border border-[#e2e2e2] bg-white py-1 text-xs text-[#111] shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        >
          {options.map((o, i) => (
            <li
              key={o}
              role="option"
              aria-selected={o === value}
              onPointerDown={(e) => e.preventDefault()}
              onClick={() => choose(o)}
              onMouseEnter={() => setActive(i)}
              className={`cursor-pointer px-4 py-2.5 ${
                o === value ? "font-semibold" : ""
              } ${i === active ? "bg-[#f0f0f0]" : ""}`}
            >
              {o}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
