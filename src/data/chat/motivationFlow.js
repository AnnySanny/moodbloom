export const motivationFlow = {
  start: {
    en: {
      text: "What feels hardest right now?",
      options: [
        { key: "starting_intro", label: { en: "Starting", ua: "Почати" } },
        { key: "continuing_intro", label: { en: "Continuing", ua: "Продовжити" } },
        { key: "finishing_intro", label: { en: "Finishing", ua: "Завершити" } }
      ]
    },
    ua: {
      text: "Що зараз найскладніше?",
      options: [
        { key: "starting_intro", label: { en: "Starting", ua: "Почати" } },
        { key: "continuing_intro", label: { en: "Continuing", ua: "Продовжити" } },
        { key: "finishing_intro", label: { en: "Finishing", ua: "Завершити" } }
      ]
    }
  },

  // STARTING

  starting_intro: {
    en: {
      text: "Starting is often hard because the task feels too big or unclear.",
      options: [
        { key: "starting_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Почати складно, коли завдання здається занадто великим або нечітким.",
      options: [
        { key: "starting_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  starting_steps: {
    en: {
      text: "Set a 5-minute timer and begin with the smallest possible action. Momentum often follows action.",
      options: [
        { key: "end_support", label: { en: "I’ll start small", ua: "Почну з малого" } }
      ]
    },
    ua: {
      text: "Поставте таймер на 5 хвилин і зробіть найменший можливий крок. Рух часто з’являється після дії.",
      options: [
        { key: "end_support", label: { en: "Почну з малого", ua: "Почну з малого" } }
      ]
    }
  },

  // CONTINUING

  continuing_intro: {
    en: {
      text: "Losing momentum usually happens when energy drops or rewards feel distant.",
      options: [
        { key: "continuing_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Втрата імпульсу часто пов’язана зі зниженням енергії або відсутністю швидкого результату.",
      options: [
        { key: "continuing_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  continuing_steps: {
    en: {
      text: "Break the task into smaller milestones and reward each completed step.",
      options: [
        { key: "end_support", label: { en: "I’ll break it down", ua: "Розіб’ю на етапи" } }
      ]
    },
    ua: {
      text: "Розбийте завдання на короткі етапи та відзначайте кожен завершений крок.",
      options: [
        { key: "end_support", label: { en: "Розіб’ю на етапи", ua: "Розіб’ю на етапи" } }
      ]
    }
  },

  // FINISHING

  finishing_intro: {
    en: {
      text: "Finishing can be hard when perfectionism or doubt appears near the end.",
      options: [
        { key: "finishing_steps", label: { en: "What can help?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Завершення часто блокується перфекціонізмом або сумнівами наприкінці.",
      options: [
        { key: "finishing_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  finishing_steps: {
    en: {
      text: "Define a clear 'done' point. Completion creates clarity and frees mental space.",
      options: [
        { key: "end_support", label: { en: "I’ll finish it", ua: "Завершу" } }
      ]
    },
    ua: {
      text: "Визначте чітку точку «готово». Завершення звільняє ментальний простір.",
      options: [
        { key: "end_support", label: { en: "Завершу", ua: "Завершу" } }
      ]
    }
  },

  // FINAL

  end_support: {
    en: {
      text: "Motivation grows through small consistent actions.",
      options: null
    },
    ua: {
      text: "Мотивація зростає через маленькі регулярні дії.",
      options: null
    }
  }
};