import Link from "next/link";

interface BlogHeroProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const themeStyles: Record<string, { gradient: string; icon: string }> = {
  "strategie-roulette": {
    gradient: "from-red-900 via-red-800 to-rose-900",
    icon: "🎯",
  },
  "strategie-blackjack": {
    gradient: "from-emerald-900 via-green-800 to-teal-900",
    icon: "🃏",
  },
  "machines-a-sous": {
    gradient: "from-purple-900 via-violet-800 to-indigo-900",
    icon: "🎰",
  },
  "psychologie-joueur": {
    gradient: "from-amber-900 via-orange-800 to-yellow-900",
    icon: "🧠",
  },
  "mathematiques-casino": {
    gradient: "from-blue-900 via-cyan-800 to-sky-900",
    icon: "📊",
  },
  "guide-debutant": {
    gradient: "from-lime-900 via-green-800 to-emerald-900",
    icon: "🎓",
  },
  "mythes-casino": {
    gradient: "from-slate-900 via-gray-800 to-zinc-900",
    icon: "🔮",
  },
  "casinos-en-ligne": {
    gradient: "from-indigo-900 via-blue-800 to-violet-900",
    icon: "💻",
  },
  "bonus-promotions": {
    gradient: "from-yellow-900 via-amber-800 to-orange-900",
    icon: "🎁",
  },
  comparatifs: {
    gradient: "from-teal-900 via-cyan-800 to-blue-900",
    icon: "⚖️",
  },
};

export function getThemeStyle(theme: string) {
  return themeStyles[theme] || { gradient: "from-gray-900 via-gray-800 to-gray-900", icon: "📝" };
}

export default function BlogHero({ title, description, icon, gradient }: BlogHeroProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} mb-10`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 text-[120px] leading-none select-none">{icon}</div>
        <div className="absolute bottom-2 left-8 text-[80px] leading-none select-none rotate-12 opacity-50">{icon}</div>
      </div>
      <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14">
        <div className="text-5xl sm:text-6xl mb-4">{icon}</div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">{title}</h1>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-60"></div>
    </div>
  );
}

export function BlogCard({
  title,
  description,
  href,
  theme,
}: {
  title: string;
  description: string;
  href: string;
  theme: string;
}) {
  const style = getThemeStyle(theme);
  return (
    <Link href={href} className="group block">
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${style.gradient} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-gold/10`}>
        <div className="absolute top-3 right-3 text-[50px] leading-none select-none opacity-20 group-hover:opacity-30 transition-opacity">{style.icon}</div>
        <div className="relative z-10 p-5 sm:p-6">
          <div className="text-3xl mb-3">{style.icon}</div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-gold-light transition-colors">{title}</h3>
          <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-60 transition-opacity"></div>
      </div>
    </Link>
  );
}

export function ThemeHeader({ title, icon, gradient }: { title: string; icon: string; gradient: string }) {
  return (
    <div className={`flex items-center gap-3 rounded-lg bg-gradient-to-r ${gradient} px-5 py-3 mb-4`}>
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
  );
}
