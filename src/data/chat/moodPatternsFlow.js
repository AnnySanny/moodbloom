export const moodPatternsFlow = {
  start: {
    en: {
      text: "Have you noticed your mood changing at specific times of the day?",
      options: [
        { key: "morning_intro", label: { en: "Morning", ua: "Вранці" } },
        { key: "evening_intro", label: { en: "Evening", ua: "Ввечері" } },
        { key: "afterWork_intro", label: { en: "After work", ua: "Після роботи" } }
      ]
    },
    ua: {
      text: "Ви помічали зміни настрою у певний час дня?",
      options: [
        { key: "morning_intro", label: { en: "Morning", ua: "Вранці" } },
        { key: "evening_intro", label: { en: "Evening", ua: "Ввечері" } },
        { key: "afterWork_intro", label: { en: "After work", ua: "Після роботи" } }
      ]
    }
  },

  // MORNING

  morning_intro: {
    en: {
      text: "Morning mood often reflects sleep quality and cortisol rhythm.",
      options: [
        { key: "morning_steps", label: { en: "What can I check?", ua: "Що перевірити?" } }
      ]
    },
    ua: {
      text: "Ранковий настрій часто залежить від якості сну та рівня кортизолу.",
      options: [
        { key: "morning_steps", label: { en: "Що перевірити?", ua: "Що перевірити?" } }
      ]
    }
  },

  morning_steps: {
    en: {
      text: "Notice: sleep duration, wake-up consistency, and first thought after waking.",
      options: [
        { key: "end_support", label: { en: "I’ll observe", ua: "Поспостерігаю" } }
      ]
    },
    ua: {
      text: "Зверніть увагу на: тривалість сну, стабільність пробудження та першу думку після пробудження.",
      options: [
        { key: "end_support", label: { en: "Поспостерігаю", ua: "Поспостерігаю" } }
      ]
    }
  },

  // EVENING

  evening_intro: {
    en: {
      text: "Evening mood often shows accumulated stress or mental fatigue.",
      options: [
        { key: "evening_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Вечірній настрій часто відображає накопичений стрес або втому.",
      options: [
        { key: "evening_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  evening_steps: {
    en: {
      text: "Try a 10-minute wind-down ritual before sleep: dim lights, reduce stimulation, slow breathing.",
      options: [
        { key: "end_support", label: { en: "I’ll try", ua: "Спробую" } }
      ]
    },
    ua: {
      text: "Спробуйте 10-хвилинний вечірній ритуал: приглушене світло, менше стимуляції, повільне дихання.",
      options: [
        { key: "end_support", label: { en: "Спробую", ua: "Спробую" } }
      ]
    }
  },



  afterWork_intro: {
    en: {
      text: "Mood after work often depends on boundaries and recovery time.",
      options: [
        { key: "afterWork_steps", label: { en: "What can I adjust?", ua: "Що змінити?" } }
      ]
    },
    ua: {
      text: "Настрій після роботи часто залежить від особистих меж та часу на відновлення.",
      options: [
        { key: "afterWork_steps", label: { en: "Що змінити?", ua: "Що змінити?" } }
      ]
    }
  },

  afterWork_steps: {
    en: {
      text: "Create a short transition ritual after work: walk, shower, or 5 minutes of silence before switching roles.",
      options: [
        { key: "end_support", label: { en: "Makes sense", ua: "Має сенс" } }
      ]
    },
    ua: {
      text: "Створіть короткий перехідний ритуал після роботи: прогулянка, душ або 5 хвилин тиші перед зміною ролі.",
      options: [
        { key: "end_support", label: { en: "Має сенс", ua: "Має сенс" } }
      ]
    }
  },


  end_support: {
    en: {
      text: "Tracking patterns brings clarity. Small awareness leads to meaningful change.",
      options: null
    },
    ua: {
      text: "Відстеження патернів додає ясності. Усвідомленість поступово веде до змін.",
      options: null
    }
  }
};