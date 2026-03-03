function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getAssistantReply(message, lang = "ua") {
  if (!message) return null;

  const text = message.toLowerCase();

  const suggestions = {
    stress: ["стрес", "stress", "напруга", "тиск"],
    anxiety: ["тривога", "anxiety", "паніка", "panic"],
    sleep: ["сон", "sleep", "не сплю", "безсоння"],
    motivation: ["мотивація", "немає сил", "не хочу", "лінь"],
    exhaustion: ["виснаж", "вигор", "burnout", "втом"],
    productivity: ["продуктив", "не встигаю", "прокраст"],
    overthinking: ["переживаю", "overthink", "накручую", "думки"],
    calm: ["заспокоїти", "calm", "нервую", "трясе"],
    breathing: ["дихання", "breath", "дихати"],
    mood: ["настрій", "mood", "патерн"]
  };

  const topicReplies = {
    ua: {
      stress: [
        "Схоже, зараз є напруга або тиск.",
        "Відчувається, що ситуація викликає стрес."
      ],
      anxiety: [
        "Тривога може сильно виснажувати.",
        "Схоже, присутнє відчуття тривожності."
      ],
      sleep: [
        "Проблеми зі сном впливають на весь стан.",
        "Коли сон порушений, організм не відновлюється повністю."
      ],
      motivation: [
        "Бувають періоди, коли внутрішній ресурс знижується.",
        "Втрата мотивації часто сигналізує про перевантаження."
      ],
      exhaustion: [
        "Схоже на емоційне або фізичне виснаження.",
        "Вигоряння не виникає без причини."
      ],
      productivity: [
        "Коли важко зосередитися — це виснажує.",
        "Прокрастинація часто пов’язана з внутрішнім напруженням."
      ],
      overthinking: [
        "Накручування думок може посилювати напругу.",
        "Постійний внутрішній аналіз іноді виснажує."
      ],
      calm: [
        "Схоже, зараз хочеться більше стабільності.",
        "Організм може реагувати на перевантаження."
      ],
      breathing: [
        "Дихання може допомогти стабілізувати стан.",
        "Короткі дихальні паузи іноді знижують напругу."
      ],
      mood: [
        "Зміни настрою — це сигнал внутрішніх процесів.",
        "Настрій часто відображає накопичені переживання."
      ],
      neutral: [
        "Я вас чую.",
        "Дякую, що поділилися."
      ],
      redirect:
        "Спробуйте обрати відповідну швидку тему вище — так буде простіше розібрати це структуровано.",
      professional:
        "Це лише рекомендації. Якщо стан тривалий або інтенсивний — варто звернутися до фахівця."
    },
    en: {
      stress: [
        "It sounds like there is pressure or stress.",
        "That situation may be causing tension."
      ],
      anxiety: [
        "Anxiety can be very draining.",
        "It seems there’s a sense of anxiousness."
      ],
      sleep: [
        "Sleep issues affect the whole system.",
        "When sleep is disturbed, recovery is harder."
      ],
      motivation: [
        "Sometimes energy and drive naturally drop.",
        "Low motivation can signal overload."
      ],
      exhaustion: [
        "This sounds like exhaustion.",
        "Burnout doesn’t appear without reasons."
      ],
      productivity: [
        "Difficulty focusing can be exhausting.",
        "Procrastination often has deeper causes."
      ],
      overthinking: [
        "Overthinking can intensify tension.",
        "Constant mental loops can be draining."
      ],
      calm: [
        "It seems your system needs stabilization.",
        "The body may be reacting to overload."
      ],
      breathing: [
        "Breathing exercises can sometimes help.",
        "Short breathing pauses may reduce tension."
      ],
      mood: [
        "Mood shifts reflect inner processes.",
        "Mood often mirrors accumulated experiences."
      ],
      neutral: [
        "I hear you.",
        "Thank you for sharing."
      ],
      redirect:
        "You may choose a related quick topic above to explore this more clearly.",
      professional:
        "These are only suggestions. If the state feels intense or persistent, consider reaching out to a professional."
    }
  };

  const langPack = topicReplies[lang] || topicReplies.ua;

  const matchesCategory = (keywords) =>
    keywords.some((word) => text.includes(word));

  let topic = null;

  for (const key in suggestions) {
    if (matchesCategory(suggestions[key])) {
      topic = key;
      break;
    }
  }

  const baseReply = topic
    ? randomItem(langPack[topic])
    : randomItem(langPack.neutral);


  const shouldRedirect = Math.random() > 0.3;

  let finalText = baseReply;

  if (shouldRedirect) {
    finalText += " " + langPack.redirect;
  }

  if (Math.random() > 0.5) {
    finalText += " " + langPack.professional;
  }

  return {
    text: finalText,
    options: null
  };
}