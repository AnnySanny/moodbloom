export const todayStressFlow = {
  start: {
    en: {
      text: "What caused today's stress most?",
      options: [
        { key: "work_intro", label: { en: "Work", ua: "Робота" } },
        { key: "people_intro", label: { en: "People", ua: "Люди" } },
        { key: "overload_intro", label: { en: "Too much to do", ua: "Занадто багато справ" } }
      ]
    },
    ua: {
      text: "Що сьогодні найбільше викликало стрес?",
      options: [
        { key: "work_intro", label: { en: "Work", ua: "Робота" } },
        { key: "people_intro", label: { en: "People", ua: "Люди" } },
        { key: "overload_intro", label: { en: "Too much to do", ua: "Занадто багато справ" } }
      ]
    }
  },

  // WORK

  work_intro: {
    en: {
      text: "Work stress often comes from pressure, deadlines, or unclear expectations.",
      options: [
        { key: "work_steps", label: { en: "What can I do now?", ua: "Що зробити зараз?" } }
      ]
    },
    ua: {
      text: "Робочий стрес часто пов’язаний із тиском, дедлайнами або нечіткими очікуваннями.",
      options: [
        { key: "work_steps", label: { en: "Що зробити зараз?", ua: "Що зробити зараз?" } }
      ]
    }
  },

  work_steps: {
    en: {
      text: "Choose 1–2 priority tasks only. Define what 'done' means for today, not perfectly.",
      options: [
        { key: "end_support", label: { en: "I’ll narrow it down", ua: "Звужу фокус" } }
      ]
    },
    ua: {
      text: "Визначте лише 1–2 пріоритетні задачі. Сформулюйте, що означає «достатньо зроблено» на сьогодні.",
      options: [
        { key: "end_support", label: { en: "Звужу фокус", ua: "Звужу фокус" } }
      ]
    }
  },

  // PEOPLE

  people_intro: {
    en: {
      text: "Stress from people often relates to expectations, conflict, or emotional overload.",
      options: [
        { key: "people_steps", label: { en: "How to regulate it?", ua: "Як це врегулювати?" } }
      ]
    },
    ua: {
      text: "Стрес від людей часто пов’язаний з очікуваннями, конфліктами або емоційним перевантаженням.",
      options: [
        { key: "people_steps", label: { en: "Як це врегулювати?", ua: "Як це врегулювати?" } }
      ]
    }
  },

  people_steps: {
    en: {
      text: "Pause before reacting. Ask yourself: what is in my control here?",
      options: [
        { key: "end_support", label: { en: "I’ll pause first", ua: "Спочатку зупинюсь" } }
      ]
    },
    ua: {
      text: "Зробіть паузу перед реакцією. Запитайте себе: що тут у межах мого контролю?",
      options: [
        { key: "end_support", label: { en: "Спочатку зупинюсь", ua: "Спочатку зупинюсь" } }
      ]
    }
  },

  // OVERLOAD

  overload_intro: {
    en: {
      text: "When everything feels urgent, the nervous system stays activated.",
      options: [
        { key: "overload_steps", label: { en: "What helps?", ua: "Що допоможе?" } }
      ]
    },
    ua: {
      text: "Коли все здається терміновим, нервова система залишається у стані напруги.",
      options: [
        { key: "overload_steps", label: { en: "Що допоможе?", ua: "Що допоможе?" } }
      ]
    }
  },

  overload_steps: {
    en: {
      text: "Write down all tasks. Circle only what truly must be done today. Leave the rest for later.",
      options: [
        { key: "end_support", label: { en: "I’ll simplify it", ua: "Спростю список" } }
      ]
    },
    ua: {
      text: "Запишіть усі справи. Обведіть лише те, що справді потрібно зробити сьогодні. Решту перенесіть.",
      options: [
        { key: "end_support", label: { en: "Спростю список", ua: "Спростю список" } }
      ]
    }
  },

  // FINAL

  end_support: {
    en: {
      text: "Stress decreases when clarity increases. Small structure reduces pressure.",
      options: null
    },
    ua: {
      text: "Стрес зменшується, коли з’являється ясність. Невелика структура знижує напругу.",
      options: null
    }
  }
};