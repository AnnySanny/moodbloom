export const breathingExerciseFlow = {
  start: {
    en: {
      text: "Choose a breathing technique:",
      options: [
        { key: "box_intro", label: { en: "Box breathing", ua: "Квадратне дихання" } },
        { key: "slow_intro", label: { en: "Slow exhale", ua: "Повільний видих" } },
        { key: "four_seven_eight_intro", label: { en: "4-7-8 technique", ua: "Техніка 4-7-8" } }
      ]
    },
    ua: {
      text: "Оберіть техніку дихання:",
      options: [
        { key: "box_intro", label: { en: "Box breathing", ua: "Квадратне дихання" } },
        { key: "slow_intro", label: { en: "Slow exhale", ua: "Повільний видих" } },
        { key: "four_seven_eight_intro", label: { en: "4-7-8 technique", ua: "Техніка 4-7-8" } }
      ]
    }
  },

  // BOX BREATHING
  box_intro: {
    en: {
      text: "Box breathing helps regulate the nervous system. Ready to try 5 cycles?",
      options: [
        { key: "box_steps", label: { en: "Start", ua: "Почати" } },
        { key: "start", label: { en: "Choose another", ua: "Обрати іншу" } }
      ]
    },
    ua: {
      text: "Квадратне дихання допомагає врівноважити нервову систему. Готові спробувати 5 циклів?",
      options: [
        { key: "box_steps", label: { en: "Start", ua: "Почати" } },
        { key: "start", label: { en: "Choose another", ua: "Обрати іншу" } }
      ]
    }
  },

  box_steps: {
    en: {
      text: "Inhale 4 — hold 4 — exhale 4 — hold 4. Repeat slowly 5 times.",
      options: [
        { key: "box_reflect", label: { en: "Done", ua: "Готово" } }
      ]
    },
    ua: {
      text: "Вдих 4 — пауза 4 — видих 4 — пауза 4. Повторіть повільно 5 разів.",
      options: [
        { key: "box_reflect", label: { en: "Done", ua: "Готово" } }
      ]
    }
  },

  box_reflect: {
    en: {
      text: "Notice any small shift in your body. Even subtle calm matters.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } },
        { key: "start", label: { en: "Try another", ua: "Спробувати іншу" } }
      ]
    },
    ua: {
      text: "Зверніть увагу, чи з’явилися навіть невеликі зміни у відчуттях. Навіть легке заспокоєння має значення.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } },
        { key: "start", label: { en: "Спробувати іншу", ua: "Спробувати іншу" } }
      ]
    }
  },

  // SLOW EXHALE
  slow_intro: {
    en: {
      text: "Longer exhales activate relaxation. Would you like to try it for 1 minute?",
      options: [
        { key: "slow_steps", label: { en: "Start", ua: "Почати" } },
        { key: "start", label: { en: "Choose another", ua: "Обрати іншу" } }
      ]
    },
    ua: {
      text: "Подовжений видих активує розслаблення. Спробуємо 1 хвилину?",
      options: [
        { key: "slow_steps", label: { en: "Start", ua: "Почати" } },
        { key: "start", label: { en: "Обрати іншу", ua: "Обрати іншу" } }
      ]
    }
  },

  slow_steps: {
    en: {
      text: "Inhale 4 — exhale slowly for 6–8 seconds. Continue calmly.",
      options: [
        { key: "slow_reflect", label: { en: "Done", ua: "Готово" } }
      ]
    },
    ua: {
      text: "Вдих 4 — повільний видих 6–8 секунд. Продовжуйте спокійно.",
      options: [
        { key: "slow_reflect", label: { en: "Готово", ua: "Готово" } }
      ]
    }
  },

  slow_reflect: {
    en: {
      text: "Slowing the exhale tells your body it is safe.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } },
        { key: "start", label: { en: "Try another", ua: "Спробувати іншу" } }
      ]
    },
    ua: {
      text: "Повільний видих сигналізує тілу, що все безпечно.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } },
        { key: "start", label: { en: "Спробувати іншу", ua: "Спробувати іншу" } }
      ]
    }
  },

  // 4-7-8 TECHNIQUE
  four_seven_eight_intro: {
    en: {
      text: "4-7-8 breathing helps with strong anxiety. Ready to begin?",
      options: [
        { key: "four_seven_eight_steps", label: { en: "Start", ua: "Почати" } },
        { key: "start", label: { en: "Choose another", ua: "Обрати іншу" } }
      ]
    },
    ua: {
      text: "Дихання 4-7-8 допомагає при сильній тривозі. Готові почати?",
      options: [
        { key: "four_seven_eight_steps", label: { en: "Почати", ua: "Почати" } },
        { key: "start", label: { en: "Обрати іншу", ua: "Обрати іншу" } }
      ]
    }
  },

  four_seven_eight_steps: {
    en: {
      text: "Inhale 4 — hold 7 — exhale 8. Repeat 4 times slowly.",
      options: [
        { key: "four_reflect", label: { en: "Done", ua: "Готово" } }
      ]
    },
    ua: {
      text: "Вдих 4 — пауза 7 — видих 8. Повторіть 4 рази повільно.",
      options: [
        { key: "four_reflect", label: { en: "Готово", ua: "Готово" } }
      ]
    }
  },

  four_reflect: {
    en: {
      text: "Strong exhale helps release tension.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } },
        { key: "start", label: { en: "Try another", ua: "Спробувати іншу" } }
      ]
    },
    ua: {
      text: "Глибокий видих допомагає зняти напругу.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } },
        { key: "start", label: { en: "Спробувати іншу", ua: "Спробувати іншу" } }
      ]
    }
  },

  end_support: {
    en: {
      text: "If you'd like, we can continue or try another technique. You can also type a message anytime.",
      options: null
    },
    ua: {
      text: "Якщо хочете, можемо продовжити або спробувати іншу техніку. Також можете написати повідомлення у будь-який момент.",
      options: null
    }
  }
};