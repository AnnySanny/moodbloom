export const emotionalExhaustionFlow = {
  start: {
    en: {
      text: "Do you feel tired even after rest?",
      options: [
        { key: "yes_check", label: { en: "Yes", ua: "Так" } },
        { key: "no_check", label: { en: "No", ua: "Ні" } }
      ]
    },
    ua: {
      text: "Ви відчуваєте втому навіть після відпочинку?",
      options: [
        { key: "yes_check", label: { en: "Yes", ua: "Так" } },
        { key: "no_check", label: { en: "No", ua: "Ні" } }
      ]
    }
  },


  yes_check: {
    en: {
      text: "Does it also feel harder to concentrate or enjoy things lately?",
      options: [
        { key: "burnout_support", label: { en: "Yes, exactly", ua: "Так, саме так" } },
        { key: "partial_support", label: { en: "Not always", ua: "Не завжди" } }
      ]
    },
    ua: {
      text: "Чи стало складніше концентруватися або отримувати задоволення від речей?",
      options: [
        { key: "burnout_support", label: { en: "Yes, exactly", ua: "Так, саме так" } },
        { key: "partial_support", label: { en: "Not always", ua: "Не завжди" } }
      ]
    }
  },

  burnout_support: {
    en: {
      text: "This may signal emotional burnout. It’s not weakness — it’s overload.",
      options: [
        { key: "burnout_steps", label: { en: "What can I do?", ua: "Що можна зробити?" } }
      ]
    },
    ua: {
      text: "Це може бути ознакою емоційного вигорання. Це не слабкість — це перевантаження.",
      options: [
        { key: "burnout_steps", label: { en: "What can I do?", ua: "Що можна зробити?" } }
      ]
    }
  },

  burnout_steps: {
    en: {
      text: "Try one small reset today: reduce one task, take a 10-minute pause, or say no to one extra demand.",
      options: [
        { key: "burnout_reflect", label: { en: "I’ll try", ua: "Спробую" } }
      ]
    },
    ua: {
      text: "Спробуйте сьогодні один маленький крок: зменшіть одне завдання, зробіть 10-хвилинну паузу або відмовтесь від зайвого навантаження.",
      options: [
        { key: "burnout_reflect", label: { en: "I’ll try", ua: "Спробую" } }
      ]
    }
  },

  burnout_reflect: {
    en: {
      text: "Recovery begins with small boundaries. Even tiny changes matter.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } }
      ]
    },
    ua: {
      text: "Відновлення починається з маленьких меж. Навіть невеликі зміни мають значення.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } }
      ]
    }
  },

  partial_support: {
    en: {
      text: "It may be accumulated stress. Not all exhaustion is burnout.",
      options: [
        { key: "stress_steps", label: { en: "What helps?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Можливо, це накопичений стрес. Не кожна втома — це вигорання.",
      options: [
        { key: "stress_steps", label: { en: "What helps?", ua: "Що допоможе?" } }
      ]
    }
  },

  stress_steps: {
    en: {
      text: "Track your energy for 3 days. Notice when it drops and what drains it.",
      options: [
        { key: "end_support", label: { en: "Okay", ua: "Добре" } }
      ]
    },
    ua: {
      text: "Спробуйте 3 дні відстежувати рівень енергії. Зверніть увагу, коли вона падає і що виснажує.",
      options: [
        { key: "end_support", label: { en: "Добре", ua: "Добре" } }
      ]
    }
  },


  no_check: {
    en: {
      text: "Is your tiredness linked to a specific situation?",
      options: [
        { key: "situational", label: { en: "Yes", ua: "Так" } },
        { key: "unsure", label: { en: "Not sure", ua: "Не впевнений(а)" } }
      ]
    },
    ua: {
      text: "Чи пов’язана втома з конкретною ситуацією?",
      options: [
        { key: "situational", label: { en: "Yes", ua: "Так" } },
        { key: "unsure", label: { en: "Not sure", ua: "Не впевнений(а)" } }
      ]
    }
  },

  situational: {
    en: {
      text: "Situational fatigue often passes after resolution. Rest and clarity help.",
      options: [
        { key: "end_support", label: { en: "Thank you", ua: "Дякую" } }
      ]
    },
    ua: {
      text: "Ситуативна втома часто минає після вирішення ситуації. Допомагає відпочинок і ясність.",
      options: [
        { key: "end_support", label: { en: "Дякую", ua: "Дякую" } }
      ]
    }
  },

  unsure: {
    en: {
      text: "You might try noting your sleep, workload, and mood for a few days.",
      options: [
        { key: "end_support", label: { en: "I will observe", ua: "Поспостерігаю" } }
      ]
    },
    ua: {
      text: "Спробуйте кілька днів відстежувати сон, навантаження та настрій.",
      options: [
        { key: "end_support", label: { en: "Поспостерігаю", ua: "Поспостерігаю" } }
      ]
    }
  },

  end_support: {
    en: {
      text: "Even small awareness is a step toward recovery. Take care of your energy.",
      options: null
    },
    ua: {
      text: "Навіть невелика усвідомленість — це крок до відновлення. Бережіть свою енергію.",
      options: null
    }
  }
};