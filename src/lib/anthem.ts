export type SongId = "en" | "vi";
export type ViewMode = "karaoke" | "sheet";

export type LyricWord = {
  text: string;
  startMs: number;
  endMs: number;
};

export type LyricLine = {
  id: string;
  sectionId: string;
  role?: "title" | "whisper" | "normal";
  cue?: string;
  startMs: number;
  endMs: number;
  words: LyricWord[];
};

export type Section = {
  id: string;
  labelVi: string;
  labelEn: string;
  startMs: number;
};

export type Note = {
  id: string;
  pitch: number;
  startMs: number;
  durationMs: number;
};

export type CompiledSong = {
  id: SongId;
  title: string;
  subtitle: string;
  langLabel: string;
  audioSrc: string;
  durationMs: number;
  vocalStartMs: number;
  lines: LyricLine[];
  sections: Section[];
  notes: Note[];
};

type RawLine = string | { text: string; role?: LyricLine["role"]; cue?: string };

type RawSection = {
  id: string;
  labelVi: string;
  labelEn: string;
  /** Absolute start of this section in the recording (ms) */
  startMs: number;
  lines: RawLine[];
};

/**
 * English – We Create Tomorrow
 * Recording 325.85s · vocal from ~0:02
 * Anchors estimated from structure + partial transcript (vocal at 0:02).
 */
const EN_RAW: RawSection[] = [
  {
    id: "intro",
    labelVi: "Dạo đầu",
    labelEn: "Intro",
    startMs: 2000,
    lines: [
      "By the Mekong, where nine rivers meet",
      "A place where dreams begin",
      "A thousand questions, a thousand roads",
      "A new generation steps in",
      { text: "Cần Thơ", role: "title" },
      { text: "School of Economics", role: "title" },
      "We begin here",
    ],
  },
  {
    id: "verse1",
    labelVi: "Khổ 1",
    labelEn: "Verse 1",
    startMs: 38000,
    lines: [
      "Under the morning light of the lecture hall",
      "We learn to see beyond what we can see",
      "Numbers become stories",
      "Ideas become possibilities",
      "And every question opens another door",
      "From books to the world outside",
      "From knowledge into action",
      "We learn not only how to understand",
      "But how to create a better tomorrow",
    ],
  },
  {
    id: "pre1",
    labelVi: "Chuyển khúc",
    labelEn: "Pre-Chorus",
    startMs: 82000,
    lines: [
      "We learn – We question – We discover",
      "We turn knowledge into something more",
      "One idea, one brave step",
      "One generation ready to explore",
    ],
  },
  {
    id: "chorus1",
    labelVi: "Điệp khúc",
    labelEn: "Chorus",
    startMs: 102000,
    lines: [
      { text: "School of Economics!", role: "title" },
      { text: "We create tomorrow!", role: "title" },
      "From the heart of Cần Thơ",
      "To a world of endless possibilities",
      { text: "School of Economics!", role: "title" },
      { text: "We rise together!", role: "title" },
      "With knowledge in our hands",
      "And a vision in our hearts",
      "We research, we innovate",
      "We connect, we lead",
      "From the Mekong to the world",
      { text: "This is where we begin!", role: "title" },
    ],
  },
  {
    id: "post1",
    labelVi: "Hậu điệp khúc",
    labelEn: "Post-Chorus",
    startMs: 148000,
    lines: [
      "Oh-oh-oh! We rise together!",
      "Oh-oh-oh! We go further!",
      "Learn! Create! Connect! Lead!",
    ],
  },
  {
    id: "verse2",
    labelVi: "Khổ 2",
    labelEn: "Verse 2",
    startMs: 165000,
    lines: [
      "Some will discover answers in research",
      "Some will build businesses from a dream",
      "Some will teach the next generation",
      "Some will turn new ideas into reality",
      "From classrooms to international stages",
      "From local enterprises to global markets",
      "Every journey carries something with it",
      "The courage to begin, the wisdom to grow",
      "And the will to make a difference",
    ],
  },
  {
    id: "pre2",
    labelVi: "Chuyển khúc 2",
    labelEn: "Pre-Chorus 2",
    startMs: 205000,
    lines: [
      "We don't learn only for today",
      "We learn for what tomorrow needs",
      "We question, we create",
      "We challenge, we lead",
      "And every step we take can open a new way",
    ],
  },
  {
    id: "chorus2",
    labelVi: "Điệp khúc 2",
    labelEn: "Chorus 2",
    startMs: 225000,
    lines: [
      { text: "School of Economics!", role: "title" },
      { text: "We create tomorrow!", role: "title" },
      "From the heart of Cần Thơ",
      "To a world of endless possibilities",
      { text: "We rise together!", role: "title" },
      "Different dreams, one shared vision",
      "Different journeys, one community",
      "We research, we innovate",
      "We connect, we lead",
      "From the Mekong to the world",
    ],
  },
  {
    id: "bridge",
    labelVi: "Cầu nối",
    labelEn: "Bridge",
    startMs: 262000,
    lines: [
      "One question can change a perspective",
      "One idea can change a business",
      "One discovery can change a community",
      "One generation can change tomorrow",
      "We are not waiting for the future to arrive",
      "We are building it",
      { text: "On avance.", role: "whisper", cue: "French whisper" },
    ],
  },
  {
    id: "build",
    labelVi: "Cao trào",
    labelEn: "Build",
    startMs: 285000,
    lines: [
      "Quality! – We rise!",
      "Connection! – We rise!",
      "Innovation! – We rise!",
      "Knowledge! – We rise!",
      "Cần Thơ – We rise!",
      "School of Economics! – We rise!",
      "The world! – We rise!",
    ],
  },
  {
    id: "final",
    labelVi: "Kết",
    labelEn: "Finale",
    startMs: 298000,
    lines: [
      { text: "School of Economics!", role: "title" },
      { text: "We create tomorrow!", role: "title" },
      "From the heart of Cần Thơ",
      "We carry dreams beyond the river",
      { text: "We rise together!", role: "title" },
      "From every classroom, every research room",
      "From every dream that dares to begin",
      "We create, we innovate, we connect, we lead",
      "And the world is waiting for what we will become",
      "Quality – Knowledge – Innovation – Community!",
      "From Cần Thơ to the world!",
      { text: "We create tomorrow!", role: "title" },
    ],
  },
  {
    id: "outro",
    labelVi: "Outro",
    labelEn: "Outro",
    startMs: 318000,
    lines: [
      "By the Mekong, where nine rivers meet",
      "A school, a community, a thousand possibilities",
      { text: "Cần Thơ – School of Economics", role: "title" },
      "We begin here. We go further.",
    ],
  },
];

/**
 * Vietnamese – Chúng ta cùng đi
 * Recording 322.13s · instrumental intro until ~0:49
 * Anchors from audio transcript timestamps.
 */
const VI_RAW: RawSection[] = [
  {
    id: "intro",
    labelVi: "Dạo đầu",
    labelEn: "Intro",
    startMs: 49000, // transcript 0:49
    lines: [
      "Từ bên dòng Cửu Long",
      "Một mái trường hôm nay",
      "Nơi những ước mơ bắt đầu",
      "Và những chân trời mở ra",
      { text: "Trường Kinh tế", role: "title" },
      "Chất lượng – Thân thiện",
      "Cùng nhau đi tới ngày mai",
    ],
  },
  {
    id: "verse1",
    labelVi: "Khổ 1",
    labelEn: "Verse 1",
    startMs: 72000, // transcript ~1:12
    lines: [
      "Nơi giảng đường đón những mùa tuổi trẻ",
      "Nơi từng câu hỏi đánh thức những ước mơ",
      "Từ những con số, những dòng nghiên cứu",
      "Ta học cách nhìn thế giới rộng hơn",
      "Có những bài học bước ra từ thực tiễn",
      "Có những ý tưởng bắt đầu từ hôm nay",
      "Có những người trẻ mang theo khát vọng",
      "Tự viết con đường bằng chính đôi tay",
    ],
  },
  {
    id: "pre1",
    labelVi: "Chuyển khúc",
    labelEn: "Pre-Chorus",
    startMs: 108000,
    lines: [
      "Học để hiểu",
      "Học để sáng tạo",
      "Học để cùng nhau đổi thay",
      "Từ tri thức đến những giá trị",
      "Từ hôm nay đến tương lai",
    ],
  },
  {
    id: "chorus1",
    labelVi: "Điệp khúc",
    labelEn: "Chorus",
    startMs: 122000,
    lines: [
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những ước mơ gặp nhau!",
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những khát vọng vươn cao!",
      "Cùng nghiên cứu, cùng sáng tạo",
      "Cùng dựng xây những giá trị mới",
      "Từ Cần Thơ mang tri thức đi xa",
      "Mang Việt Nam đến gần thế giới!",
      { text: "Trường Kinh tế – Chúng ta cùng đi!", role: "title" },
    ],
  },
  {
    id: "post1",
    labelVi: "Hậu điệp khúc",
    labelEn: "Post-Chorus",
    startMs: 148000,
    lines: [
      "Oh-oh-oh! Cùng đi!",
      "Oh-oh-oh! Cùng vươn tới!",
      "Quality! Connection! Innovation!",
    ],
  },
  {
    id: "verse2",
    labelVi: "Khổ 2",
    labelEn: "Verse 2",
    startMs: 153000, // transcript 2:33
    lines: [
      "Nơi những công trình mở thêm câu hỏi",
      "Nơi hội thảo nối những tiếng nói gần xa",
      "Nơi những người thầy trao đi tri thức",
      "Và người học viết tiếp những ước mơ",
      "Có những chuyến đi mở thêm thế giới",
      "Có những người bạn đến từ năm châu",
      "Từ lớp học đến những miền đất mới",
      "Một mái trường nối những nhịp cầu",
    ],
  },
  {
    id: "pre2",
    labelVi: "Chuyển khúc 2",
    labelEn: "Pre-Chorus 2",
    startMs: 188000,
    lines: [
      "Không chỉ học trong sách",
      "Không chỉ đứng trong trường",
      "Ta học từ cuộc sống để tạo nên tương lai",
      "Nghiên cứu – Kết nối – Đổi mới – Phụng sự",
    ],
  },
  {
    id: "bridge",
    labelVi: "Cầu nối",
    labelEn: "Bridge",
    startMs: 195000, // transcript 3:15 English line in mix
    lines: [
      "Một ý tưởng có thể mở một cánh cửa",
      "Một nghiên cứu có thể thay đổi một góc nhìn",
      "Một người thầy có thể truyền một niềm tin",
      "Một sinh viên có thể viết một tương lai",
      { text: "We learn. We create. We connect. We lead.", role: "whisper" },
    ],
  },
  {
    id: "build",
    labelVi: "Cao trào",
    labelEn: "Build",
    startMs: 220000,
    lines: [
      "Trường! – Kinh tế!",
      "Chất lượng! – Thân thiện!",
      "Tri thức! – Đổi mới!",
      "Cần Thơ! – Ra thế giới!",
    ],
  },
  {
    id: "chorus2",
    labelVi: "Điệp khúc 2",
    labelEn: "Chorus 2",
    startMs: 235000,
    lines: [
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những ước mơ gặp nhau!",
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những khát vọng vươn cao!",
      "Cùng nghiên cứu, cùng sáng tạo",
      "Cùng dựng xây những giá trị mới",
      "Từ Cần Thơ mang tri thức đi xa",
      "Mang Việt Nam đến gần thế giới!",
      { text: "Chúng ta cùng đi!", role: "title" },
    ],
  },
  {
    id: "final",
    labelVi: "Kết",
    labelEn: "Finale",
    startMs: 268000,
    lines: [
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những ước mơ gặp nhau!",
      { text: "Trường Kinh tế!", role: "title" },
      "Nơi những thế hệ vươn cao!",
      "Từ giảng đường ra doanh nghiệp",
      "Từ nghiên cứu đến cuộc sống",
      "Cùng một niềm tin, cùng một khát vọng",
      "Cùng tạo nên những giá trị mới!",
      "Chất lượng – Thân thiện!",
      "Cùng Cần Thơ đi tới!",
      "Từ hôm nay đến ngày mai",
      "Từ Cửu Long ra thế giới!",
    ],
  },
  {
    id: "hook",
    labelVi: "Hook cuối",
    labelEn: "Final Hook",
    startMs: 298000,
    lines: [
      { text: "Trường Kinh tế – Chúng ta cùng đi!", role: "title" },
      { text: "Trường Kinh tế – Chúng ta cùng vươn tới!", role: "title" },
    ],
  },
  {
    id: "outro",
    labelVi: "Outro",
    labelEn: "Outro",
    startMs: 308000,
    lines: [
      "Một mái trường, một niềm tin",
      "Một thế hệ, một hành trình",
      { text: "Trường Kinh tế – Đại học Cần Thơ", role: "title" },
      "Cùng học, cùng làm, cùng sáng tạo",
      "Cùng viết những ngày mai.",
    ],
  },
];

function splitWords(line: string): string[] {
  return line.trim().split(/\s+/).filter(Boolean);
}

function lineText(item: RawLine): string {
  return typeof item === "string" ? item : item.text;
}

/**
 * Compile with per-section anchors.
 * Lines are distributed inside [section.startMs, nextSection.startMs)
 * weighted by character length (title lines slightly shorter).
 */
function compile(
  raw: RawSection[],
  vocalEndMs: number,
): { lines: LyricLine[]; sections: Section[]; notes: Note[] } {
  const lines: LyricLine[] = [];
  const sections: Section[] = [];
  const notes: Note[] = [];
  let lineIdx = 0;

  for (let si = 0; si < raw.length; si++) {
    const sec = raw[si];
    const secStart = sec.startMs;
    const secEnd = si + 1 < raw.length ? raw[si + 1].startMs : vocalEndMs;
    const span = Math.max(1000, secEnd - secStart);

    const weights = sec.lines.map((item) => {
      const t = lineText(item);
      const role = typeof item === "string" ? undefined : item.role;
      return Math.max(1, role === "title" ? t.length * 0.8 : t.length);
    });
    const totalW = weights.reduce((a, b) => a + b, 0) || 1;

    let cursor = secStart;
    sections.push({
      id: sec.id,
      labelVi: sec.labelVi,
      labelEn: sec.labelEn,
      startMs: secStart,
    });

    for (let li = 0; li < sec.lines.length; li++) {
      const item = sec.lines[li];
      const text = lineText(item);
      const role = typeof item === "string" ? undefined : item.role;
      const cue = typeof item === "string" ? undefined : item.cue;
      const lineDur = Math.max(1200, (weights[li] / totalW) * span);
      // clamp so we don't overflow section (last line absorbs remainder)
      const remaining = secEnd - cursor;
      const actualDur =
        li === sec.lines.length - 1
          ? Math.max(800, remaining)
          : Math.min(lineDur, Math.max(800, remaining - (sec.lines.length - li - 1) * 800));

      const wordsRaw = splitWords(text);
      const wordDur = actualDur / Math.max(1, wordsRaw.length);
      const words: LyricWord[] = wordsRaw.map((w, i) => ({
        text: w,
        startMs: cursor + i * wordDur,
        endMs: cursor + (i + 1) * wordDur,
      }));

      lines.push({
        id: `L${lineIdx}`,
        sectionId: sec.id,
        role,
        cue,
        startMs: cursor,
        endMs: cursor + actualDur,
        words,
      });

      const motif = [4, 6, 7, 9, 7, 6, 4, 2];
      words.forEach((w, i) => {
        notes.push({
          id: `N${lineIdx}-${i}`,
          pitch: motif[i % motif.length],
          startMs: w.startMs,
          durationMs: Math.max(180, w.endMs - w.startMs - 30),
        });
      });

      cursor += actualDur;
      lineIdx += 1;
    }
  }

  return { lines, sections, notes };
}

function makeSong(
  meta: {
    id: SongId;
    title: string;
    subtitle: string;
    langLabel: string;
    audioSrc: string;
    durationMs: number;
  },
  raw: RawSection[],
  vocalEndMs: number,
): CompiledSong {
  const { lines, sections, notes } = compile(raw, vocalEndMs);
  return {
    ...meta,
    vocalStartMs: raw[0]?.startMs ?? 0,
    lines,
    sections,
    notes,
  };
}

export const SONGS: Record<SongId, CompiledSong> = {
  en: makeSong(
    {
      id: "en",
      title: "We Create Tomorrow",
      subtitle: "School of Economics · Cần Thơ University",
      langLabel: "English",
      audioSrc: "audio/anthem-en.mp3",
      durationMs: 325850,
    },
    EN_RAW,
    324000,
  ),
  vi: makeSong(
    {
      id: "vi",
      title: "Chúng ta cùng đi",
      subtitle: "Trường Kinh tế · Cần Thơ University",
      langLabel: "Tiếng Việt",
      audioSrc: "audio/anthem-vi.mp3",
      durationMs: 322130,
    },
    VI_RAW,
    320000,
  ),
};

export const SONG_LIST = Object.values(SONGS);

export function findLineIndex(lines: LyricLine[], ms: number): number {
  if (!lines.length) return 0;
  if (ms < lines[0].startMs) return 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (ms >= lines[i].startMs) return i;
  }
  return 0;
}

export function findWordIndex(line: LyricLine, ms: number): number {
  if (!line.words.length) return 0;
  for (let i = line.words.length - 1; i >= 0; i--) {
    if (ms >= line.words[i].startMs) return i;
  }
  return 0;
}
