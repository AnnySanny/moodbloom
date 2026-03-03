export const improveSleepFlow = {
  start: {
    en: {
      text: "What affects your sleep the most right now?",
      options: [
        { key: "screens_intro", label: { en: "Screens before bed", ua: "Екрани перед сном" } },
        { key: "stress_intro", label: { en: "Stress / racing thoughts", ua: "Стрес / нав’язливі думки" } },
        { key: "schedule_intro", label: { en: "Irregular schedule", ua: "Нерегулярний графік" } }
      ]
    },
    ua: {
      text: "Що найбільше впливає на ваш сон зараз?",
      options: [
        { key: "screens_intro", label: { en: "Screens before bed", ua: "Екрани перед сном" } },
        { key: "stress_intro", label: { en: "Stress / racing thoughts", ua: "Стрес / нав’язливі думки" } },
        { key: "schedule_intro", label: { en: "Irregular schedule", ua: "Нерегулярний графік" } }
      ]
    }
  },

  // SCREENS

  screens_intro: {
    en: {
      text: "Blue light and stimulation from screens delay melatonin release. Do you usually use your phone in bed?",
      options: [
        { key: "screens_yes", label: { en: "Yes", ua: "Так" } },
        { key: "screens_no", label: { en: "Sometimes", ua: "Іноді" } }
      ]
    },
    ua: {
      text: "Синє світло та стимуляція від екранів затримують вироблення мелатоніну. Ви користуєтесь телефоном у ліжку?",
      options: [
        { key: "screens_yes", label: { en: "Yes", ua: "Так" } },
        { key: "screens_no", label: { en: "Sometimes", ua: "Іноді" } }
      ]
    }
  },

  screens_yes: {
    en: {
      text: "Try a 60-minute digital sunset: dim lights, no scrolling, switch to calm activities (reading, stretching, quiet music).",
      options: [
        { key: "screens_plan", label: { en: "Create a simple plan", ua: "Скласти простий план" } }
      ]
    },
    ua: {
      text: "Спробуйте правило «цифрового заходу сонця» за 60 хв до сну: приглушене світло, без скролінгу, спокійні заняття (книга, розтяжка, тиха музика).",
      options: [
        { key: "screens_plan", label: { en: "Скласти простий план", ua: "Скласти простий план" } }
      ]
    }
  },

  screens_no: {
    en: {
      text: "Even 20–30 minutes less screen time can improve sleep depth.",
      options: [
        { key: "end_support", label: { en: "I’ll try reducing it", ua: "Спробую зменшити" } }
      ]
    },
    ua: {
      text: "Навіть зменшення екранного часу на 20–30 хв може покращити глибину сну.",
      options: [
        { key: "end_support", label: { en: "Спробую зменшити", ua: "Спробую зменшити" } }
      ]
    }
  },

  screens_plan: {
    en: {
      text: "Tonight: set an alarm 60 minutes before sleep as a reminder to unplug. Leave the phone outside the bed.",
      options: [
        { key: "end_support", label: { en: "Okay", ua: "Добре" } }
      ]
    },
    ua: {
      text: "Сьогодні: поставте нагадування за 60 хв до сну, щоб відкласти телефон. Не тримайте його в ліжку.",
      options: [
        { key: "end_support", label: { en: "Добре", ua: "Добре" } }
      ]
    }
  },

  // STRESS

  stress_intro: {
    en: {
      text: "Does your mind stay active when your body is tired?",
      options: [
        { key: "stress_yes", label: { en: "Yes, thoughts don’t stop", ua: "Так, думки не зупиняються" } },
        { key: "stress_sometimes", label: { en: "Sometimes", ua: "Іноді" } }
      ]
    },
    ua: {
      text: "Чи залишається розум активним, навіть коли тіло вже втомлене?",
      options: [
        { key: "stress_yes", label: { en: "Yes, thoughts don’t stop", ua: "Так, думки не зупиняються" } },
        { key: "stress_sometimes", label: { en: "Sometimes", ua: "Іноді" } }
      ]
    }
  },

  stress_yes: {
    en: {
      text: "Try a 5-minute brain dump: write everything on your mind without structure. Close the notebook after.",
      options: [
        { key: "stress_breath", label: { en: "Add calming step", ua: "Додати заспокійливий крок" } }
      ]
    },
    ua: {
      text: "Спробуйте 5-хвилинне «вивантаження думок»: запишіть усе, що в голові, без структури. Потім закрийте блокнот.",
      options: [
        { key: "stress_breath", label: { en: "Додати заспокійливий крок", ua: "Додати заспокійливий крок" } }
      ]
    }
  },

  stress_breath: {
    en: {
      text: "Then take 6 slow breaths with longer exhales. Signal safety to your body.",
      options: [
        { key: "end_support", label: { en: "I’ll try tonight", ua: "Спробую сьогодні" } }
      ]
    },
    ua: {
      text: "Після цього зробіть 6 повільних вдихів із довшим видихом. Дайте тілу сигнал безпеки.",
      options: [
        { key: "end_support", label: { en: "Спробую сьогодні", ua: "Спробую сьогодні" } }
      ]
    }
  },

  stress_sometimes: {
    en: {
      text: "Create a wind-down ritual: same 2–3 calming actions every night.",
      options: [
        { key: "end_support", label: { en: "Sounds helpful", ua: "Звучить корисно" } }
      ]
    },
    ua: {
      text: "Створіть ритуал перед сном: 2–3 однакові заспокійливі дії щовечора.",
      options: [
        { key: "end_support", label: { en: "Звучить корисно", ua: "Звучить корисно" } }
      ]
    }
  },

  // SCHEDULE

  schedule_intro: {
    en: {
      text: "Is your bedtime changing by more than 1 hour across the week?",
      options: [
        { key: "schedule_yes", label: { en: "Yes", ua: "Так" } },
        { key: "schedule_no", label: { en: "No", ua: "Ні" } }
      ]
    },
    ua: {
      text: "Чи відрізняється ваш час сну більше ніж на 1 годину протягом тижня?",
      options: [
        { key: "schedule_yes", label: { en: "Yes", ua: "Так" } },
        { key: "schedule_no", label: { en: "No", ua: "Ні" } }
      ]
    }
  },

  schedule_yes: {
    en: {
      text: "Your circadian rhythm prefers consistency. Start by fixing wake-up time first.",
      options: [
        { key: "schedule_plan", label: { en: "Make a simple plan", ua: "Скласти план" } }
      ]
    },
    ua: {
      text: "Ваш циркадний ритм любить стабільність. Почніть із фіксованого часу пробудження.",
      options: [
        { key: "schedule_plan", label: { en: "Скласти план", ua: "Скласти план" } }
      ]
    }
  },

  schedule_plan: {
    en: {
      text: "Choose one realistic wake-up time and stick to it for 7 days, even on weekends.",
      options: [
        { key: "end_support", label: { en: "I’ll try this week", ua: "Спробую цього тижня" } }
      ]
    },
    ua: {
      text: "Оберіть реалістичний час пробудження та дотримуйтесь його 7 днів, навіть у вихідні.",
      options: [
        { key: "end_support", label: { en: "Спробую цього тижня", ua: "Спробую цього тижня" } }
      ]
    }
  },

  schedule_no: {
    en: {
      text: "That’s good. Consistency supports deeper sleep cycles.",
      options: [
        { key: "end_support", label: { en: "Good to know", ua: "Добре знати" } }
      ]
    },
    ua: {
      text: "Це добре. Регулярність підтримує глибші фази сну.",
      options: [
        { key: "end_support", label: { en: "Добре знати", ua: "Добре знати" } }
      ]
    }
  },

   end_support: {
    en: {
      text: "Small consistent changes often improve sleep more than big one-time efforts. Be patient with the process.",
      options: null
    },
    ua: {
      text: "Невеликі регулярні зміни покращують сон ефективніше, ніж разові великі зусилля. Дайте процесу трохи часу.",
      options: null
    }
  }
};